import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Student } from './models/index';
import { generateRandomID} from '../../../../helpers/utils';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  standalone: false,
  
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  
  studentForm : FormGroup;//nombre de mi formulario y declaracion de formGroup
///PROPIEDADES DE LA TABLA
  displayedColumns: string[] = ['id', 'name','age','email','phone','nationality', 'city', 'actions'];
  studentsList : Student[] = [{
    id:generateRandomID(4),
    name:"Juan",
    lastName:"Denis",
    age:27,
    phone:1122334400,
    email:"juandenis@gmail.com",
    nationality:"Argentina",
    city:"Quilmes" 
  },
  {
    id:generateRandomID(4),
    name:"Dalila",
    lastName:"Folci",
    age:27,
    phone:1154874587,
    email:"dalilala@outlook.com",
    nationality:"Argentina",
    city:"Quilmes" 
  },
  {
    id:generateRandomID(4),
    name:"Sara",
    lastName:"Martin",
    age:75,
    phone:1521557484,
    email:"saraluisa@mail.com",
    nationality:"Cordoba",
    city:"Mina Clavero" 
  }];

  IdStudentEdit?:string | null = null

  constructor(private fb: FormBuilder, private matDialog : MatDialog){
    this.studentForm = this.fb.group({
      name:[null,Validators.required],
      lastName : [null, Validators.required],
      age:[null,Validators.required],
      email:[null,Validators.required],
      phone:[null,Validators.required],
      nationality:[null,Validators.required],
      city:[null,Validators.required],
    });
  }
  onSubmit(){
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched();
    }else{
      if(!!this.IdStudentEdit){

      this.studentsList = this.studentsList.map((student) => 
      student.id === this.IdStudentEdit ?
         ({...student, ...this.studentForm.value})
         :student)
         this.IdStudentEdit = null;

      }else{
        this.studentsList = [
          ...this.studentsList,
          {
            id: generateRandomID(4),
          ...this.studentForm.value,
          }
        ]
      }
      this.studentForm.reset();
    }
  }
  onDelete( id:string ) { 
    if(confirm("Estas seguro de eliminar estudiante?")){
       this.studentsList = this.studentsList.filter((el)=> el.id != id)
    }
   }
   onEdit(student:Student):void {
    this.IdStudentEdit = student.id;
    this.studentForm.patchValue({
      name:student.name,
      lastName:student.lastName,
      age:student.age,
      email:student.email,
      phone:student.phone,
      nationality:student.nationality,
      city:student.city
    })
   }
}