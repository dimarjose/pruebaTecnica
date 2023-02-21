import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';
import { Usuario } from '../../service/interface/usuario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  id:string="";
  usuarioActualizar: Usuario={
    id:'',
    nombre:'',
    correo:'',
    contrasena:''
  }

  constructor(
    private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.insertarValores();
  }

  insertarValores(){
    this.usuarioService.getUnUsuario(this.id).subscribe(
      resp=>{
        this.usuarioActualizar = resp;
      },
      error=>{console.log(error)}
    )
  }

  saveEditar(){
    // console.log("id: "+ this.id);
    // console.log(this.usuarioActualizar);
    this.usuarioService.editUsuario(this.id, this.usuarioActualizar).subscribe(
      resp=>{
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
