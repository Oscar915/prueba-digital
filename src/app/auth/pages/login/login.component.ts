import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrarService } from '../../services/entrar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Fromulario de inicio de sesión
  loginForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private loginService: EntrarService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  //Método para iniciar sesión
  entrar(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe(data => {
        if(data){
          this.router.navigateByUrl('inicio')
        }else{
          alert('Usuario o contraseña incorrecto')
        }
      })
    }else{
      alert('Llene todos los campos')
    }
  }

}
