import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/services/libro';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-formularioingreso',
  templateUrl: './formularioingreso.component.html',
  styleUrls: ['./formularioingreso.component.css']
})
export class FormularioingresoComponent implements OnInit {



  titulo : string = 'Ingresar Nuevo Libro:'
  libro : Libro = new Libro();
  submitted : boolean = false;

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    autor: new FormControl(''),
    detalle : new FormControl(''),
    imglibro: new FormControl(''),
    categoria: new FormControl(''),
    precio: new FormControl('')
  });


  constructor(private libroService: LibroService, private router: Router, 
  private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.getLibro();
    this.form = this.formBuilder.group(
      {
        nombre: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ]
        ],
        autor: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ],
        ],
        detalle: ['',
        [
          Validators.required, Validators.minLength(2), Validators.maxLength(50)
        ]
        ],
        imglibro: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(16777215)
          ],
        ],
        categoria: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ],
        ],
        precio: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ],
        ],
      
      }
    );    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

   //este método es el que llama al método createEmpleado solo si el formulario está validado
  onSubmit(): void {
    this.submitted = true;

    
    if(this.form.invalid) {
      return;
    }
    this.createLibro();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public createLibro(): void {
    this.libroService.createLibro(this.libro).subscribe(
      libro => {
        this.router.navigate(['/crud'])
        swal('Libro nuevo',`El libro ${libro.nombre} ${libro.autor} ha sido registrado correctamente!!!.`,'success');
      }
    )
  }

  public getLibro(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.libroService.getLibro(id).subscribe(
          (libro) => this.libro = libro
        )
      }
    })
  }

  public updateLibro(): void {
    this.libroService.updateLibro(this.libro).subscribe(
      libro => {
        this.router.navigate(['/crud'])
        swal('Libro actualizado',`Libro ${libro.libro.nombre} modificado con éxito!!!`, 'success');
      }
    )
  }

  onFileChanged (e: any):String{
    this.libro.imglibro = e[0].base64;
    console.log(e[0].base64); 
    return e; 
  }
  

}
