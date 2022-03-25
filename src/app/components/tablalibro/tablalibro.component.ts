import { Component, OnInit, Input } from '@angular/core';
import { Libro } from 'src/app/services/libro';
import { LibroService } from 'src/app/services/libro.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tablalibro',
  templateUrl: './tablalibro.component.html',
  styleUrls: ['./tablalibro.component.css']
})
export class TablalibroComponent implements OnInit {

  @Input() libros: Libro[] = [];
  @Input() mensaje: string = '';

  optionSort: { property : string | null, order : string } = {property : null, order : 'asc'}

  
  titulo: string = 'Listado Libros';

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.getLibros().subscribe(
      (data) => {
        this.libros = data.libros;
        this.mensaje = data.mensaje;
        console.log(this.libros);
        console.log(this.mensaje);
      }
    );
  }

  ordenarListaLibros(property : string) : void{
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }


  public eliminar(libro: Libro) : void {
    swal({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el libro  ${libro.nombre} del autor ${libro.autor}?`,
      type: 'warning',
      showCancelButton : true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar!!!',
      confirmButtonClass: 'btn btn-success ms-2',
      cancelButtonClass: 'btn btn-danger ms-2',
      buttonsStyling: false,
      reverseButtons: true
    }).
    then((result) => {
      if(result.value) {
        this.libroService.deleteLibro(libro.id).subscribe(
          response => {
            this.libros = this.libros.filter(emp => emp != libro)            
            swal('Libro eliminado', `El libro ${libro.nombre} ha sido eliminado con éxito!`, 'success')
          }
        )
      }
    })
  }

}
