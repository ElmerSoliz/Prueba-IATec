import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserClass } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  users : User[] = []; 
  userData: User = {id: 0,username: '', email: '', password: '', createdAt: new Date()};
  registeruser = false;
  
  constructor(private userService : UserService) {
  }

  ngOnInit(){
    this.GetAll();
  }

  GetAll(){
    this.userService.getAllUsers().subscribe(
      (data:User[]) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users: ', error)
      }
    )
  }

  registerUser(){
    this.userService.createUser(this.userData)
      .subscribe(
        data => {
          console.log('User created successfully:');
          this.registeruser = false;
          this.GetAll();
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
  }

  editUser(){

  }
  
  deleteUser(id: number) {
    console.log(id);
    
    this.userService.deleteUser(id).subscribe(
      () => {
        alert("Usuario eliminado");
        this.GetAll();
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
        alert("Error al eliminar el usuario");
      }
    );
  }

}
