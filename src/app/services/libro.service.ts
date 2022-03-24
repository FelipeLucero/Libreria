import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Libro } from './libro';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private urlEndPoint: string = "http://localhost:8088/api/libros";

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }
  
  //obtener todo el listado de empleados y su respectivo mensaje entregado por el backend

  getLibros(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/libros`]);
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  createLibro(libro: Libro): Observable<any> {
    return this.http.post(this.urlEndPoint, libro, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.libro as Libro),
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  updateLibro(libro: Libro) : Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${libro.id}`, libro, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  deleteLibro(id: number) : Observable<Libro> {
    return this.http.delete<Libro>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }
  
}
