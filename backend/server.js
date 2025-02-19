const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta para obtener todos los cursos
app.get('/courses', (req, res) => {
  fs.readFile('courses.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error leyendo el archivo');
    }
    res.json(JSON.parse(data));
  });
});

// Ruta para agregar un curso
app.post('/courses', (req, res) => {
  const newCourse = req.body;
  fs.readFile('courses.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error leyendo el archivo');
    }
    const courses = JSON.parse(data);
    courses.push(newCourse);
    fs.writeFile('courses.json', JSON.stringify(courses, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error escribiendo en el archivo');
      }
      res.status(201).json(newCourse);
    });
  });
});

// Ruta para eliminar un curso
app.delete('/courses/:id', (req, res) => {
  const courseId = req.params.id;
  fs.readFile('courses.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error leyendo el archivo');
    }
    let courses = JSON.parse(data);
    courses = courses.filter(course => course.id !== parseInt(courseId));
    fs.writeFile('courses.json', JSON.stringify(courses, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error escribiendo en el archivo');
      }
      res.status(200).send({ id: courseId });
    });
  });
});

// Ruta para actualizar un curso
app.put('/courses/:id', (req, res) => {
  const updatedCourse = req.body;
  const courseId = req.params.id;
  fs.readFile('courses.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error leyendo el archivo');
    }
    let courses = JSON.parse(data);
    const index = courses.findIndex(course => course.id === parseInt(courseId));
    if (index !== -1) {
      courses[index] = updatedCourse;
      fs.writeFile('courses.json', JSON.stringify(courses, null, 2), (err) => {
        if (err) {
          return res.status(500).send('Error escribiendo en el archivo');
        }
        res.status(200).json(updatedCourse);
      });
    } else {
      res.status(404).send('Curso no encontrado');
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
