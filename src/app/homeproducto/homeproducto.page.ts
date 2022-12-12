import { Component, OnInit } from '@angular/core';
import { ProductoDto } from '../dtos/producto.dto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-homeproducto',
  templateUrl: './homeproducto.page.html',
  styleUrls: ['./homeproducto.page.scss'],
})
export class HomeproductoPage implements OnInit {

  Producto: ProductoDto[] = [];
  productoService: any;

  constructor( 
    private producto:ProductoService) { }

  ngOnInit() {
    this.finall();

  }

  productos: any[] = [];
  finall(){
    this.producto.findAll().subscribe((res:any)=>{
      this.Producto = res;
      console.log(res);
    })
  }

}
