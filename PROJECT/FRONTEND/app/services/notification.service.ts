import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  notification(icon:any, title:any, toast:boolean, position:any, timer=1500):void{
    let obj = {
      "icon": icon,
      "title": title,
      "showConfirmButton": false,
      "timer": timer,
      "toast":toast,
      "position":position
    }
    Swal.fire(obj);
  }
}
