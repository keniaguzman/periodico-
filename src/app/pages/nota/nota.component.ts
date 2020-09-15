import { Component, OnInit } from '@angular/core';
import {NoticiaService} from '../../services/noticia.service'


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  notas=[];
  constructor(private nota: NoticiaService) { }

  ngOnInit(): void {
    this.nota.obtenerNota("nota")
              .subscribe((notaRecibidas:any)=> {
                this.notas=notaRecibidas.NotaCovid
              })
  }

}


