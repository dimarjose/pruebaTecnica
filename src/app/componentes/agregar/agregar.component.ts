import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/service/interface/usuario';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public nombre: String = '';
  public correo: String = '';
  public contrasena: String = '';

  usuarioNuevo: Usuario={
    id:'',
    nombre:'',
    correo:'',
    contrasena:''
  };

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.usuarioNuevo;
  }

  agregarUsuario(){
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
