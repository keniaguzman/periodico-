import { Component, OnInit } from '@angular/core';
import {NoticiaService} from '../../services/noticia.service'


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  nota:any={
    titulo:"",
    encabezado:"",
    contenido:"",
  };
  constructor(private notaServicio: NoticiaService) { }

  ngOnInit(): void {
    this.notaServicio.obtenerNota("nota")
              .subscribe((notaRecibida:any)=> {
                console.log(notaRecibida);
                this.nota=notaRecibida
              })
  }

}


