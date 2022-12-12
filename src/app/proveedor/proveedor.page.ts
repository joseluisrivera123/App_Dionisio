import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProveedorDto } from '../dtos/proveedor.dto';
import { ProveedorService } from '../services/proveedor.service';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  proveedorForm: FormGroup = new FormGroup<any>({});
  searchControl: FormControl = new FormControl<any>('');
  proveedores: ProveedorDto[] = [];

  constructor(private fb: FormBuilder,
              private proveedorService: ProveedorService,
              private toastController: ToastController,
              private router:Router){}
               

  ngOnInit() {
    this.initProveedor();
    this.searchProveedor();
  }

  initProveedor(){
    this.proveedorForm = this.fb.group({
      id: [null],
      Ruc:[null],
      razonsocial:[null],
      Correo:[null],
      Direccion:[null],
      celular:[null],
      rol:[null]
    });
  }

  register(){
    const proveedor: ProveedorDto = this.proveedorForm.value;
    proveedor.id = '6';
    proveedor.rol =  '140402';
    
    console.log('Proveedor:', proveedor)
    this.proveedorService.register(proveedor).subscribe(res => {
      console.log('Respuesta:', res);
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    })
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
  searchProveedor() {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(1000),
      switchMap(search =>{
        if(search) {
          return this.proveedorService.finByName(search);
        }
        return this.proveedorService.findAll();
      })
    ).subscribe(res => {
      this.proveedores = res;
      console.log('Respuesta: ', res);
    })
  }
}
