import { Component, OnInit } from '@angular/core';
import {NoticiaService} from '../../services/noticia.service'

@Component({
  selector: 'app-internacional',
  templateUrl: './internacional.component.html',
  styleUrls: ['./internacional.component.css']
})
export class InternacionalComponent implements OnInit {
  noticias=[];
  noticias2=[];
  constructor(private noticia : NoticiaService) { }

  ngOnInit(): void {
    this.noticia.obtenerNoticia("internacional")
                  .subscribe((noticiasRecibidas:any)=> {
                    this.noticias=noticiasRecibidas.PrimerasNoticias
                    this.noticias2=noticiasRecibidas.SegundasNoticias
                  })

  }

}


