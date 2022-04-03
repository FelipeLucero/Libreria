import { Component, OnInit,Input,ElementRef,Renderer2,ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Libro } from 'src/app/services/libro';
import { LibroService } from 'src/app/services/libro.service';
import swal from 'sweetalert2';
import * as printJS from 'print-js'



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
 
  @ViewChild('asTitle') title: ElementRef ;
  @ViewChild('idDivCarrito') divCarrito: ElementRef;

  @Input() libros: Libro[] = [];

  pageSize = 3;

  desde:number = 0;
  hasta:number = 3;

  items:Libro[] = [];

  cambiarpagina(e:PageEvent){
    console.log(e)
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  constructor(private  libroService: LibroService, private renderer2: Renderer2) { }
 
  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.getLibros().subscribe(
      (data) => {
        this.libros = data.libros;
        console.log(this.libros);
      }
    );
  }

  adicionarCarrito(libro:Libro): void {
    swal({
      title: 'Estas seguro',
      text: `¿Seguro que deseas Agregar el libro ${libro.nombre} del autor ${libro.autor}?`,
      type: 'warning',
      showCancelButton : true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      cancelButtonClass: 'btn btn-danger ms-2',
      confirmButtonClass: 'btn btn-success ms-2',
      buttonsStyling: false,
      reverseButtons: false
    }).
    then((result) => {
      if(result.value) {
        this.items.push(libro);
        console.log(libro);
        swal('Libro Agregado', `El libro ${libro.nombre} ha sido agrega al carrito de compras!`, 'success')
      }
    })
  }

  limpiarCarrito(){
    this.items=[];
    const asTitle = this.title.nativeElement;
    console.log(asTitle);
    console.log(asTitle.style.color);
    if (asTitle.style.color ==='red') {
      this.renderer2.setStyle(asTitle,'color','blue');  
    } else {
      this.renderer2.setStyle(asTitle,'color','red');
    }
     
    return this.items;
  }

  listarCarrito(){
    return this.items;
  }

  //Aparte de imprimir, permite en seleccionar destino (guardar como pdf en computador)
  imprimir(){
    printJS({printable: this.items, type: 'json', properties: ['nombre', 'autor', 'precio']});
  }

  showCart(){
    const divCarrito = this.divCarrito.nativeElement;
    if (divCarrito.style.display==='none') {
      this.renderer2.setStyle(divCarrito,'display','block');
      
    } else {
      this.renderer2.setStyle(divCarrito,'display','none');
    }
 
  }

}
