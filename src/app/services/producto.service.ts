import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductoDto } from '../dtos/producto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<ProductoDto[]>(`${environment.apiUrl}/Producto`);
  }
  register(producto: ProductoDto){
    return this.http.post(`${environment.apiUrl}/Producto`, producto );
  }

  finByName(Producto: string) {
    return this.http.get<ProductoDto[]>(`${environment.apiUrl}/producto/Producto/${Producto}`);
  }
}
