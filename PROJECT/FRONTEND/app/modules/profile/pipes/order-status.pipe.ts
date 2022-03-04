import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]):string{
    switch(value){
      case '0':
        return "Order Placed";
      case '1':
        return "Order shipped";
      case '2':
        return "Order Delivered"
      default:
        return ''
    }
  }

}
