import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  lista:any=[];


  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      resp=>{
        this.lista=resp;
        console.log(resp);
      },
      error=>{console.log(error)}
    )
  }

  eliminar(id:string){
    this.usuarioService.deleteUsuario(id).subscribe(
      resp=>{
        this.ngOnInit()
      },
      error=>{
        console.log(error);
      }
    )
  }

}
