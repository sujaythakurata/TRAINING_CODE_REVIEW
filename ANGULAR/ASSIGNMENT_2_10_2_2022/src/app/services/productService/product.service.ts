import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from "../../classes/Product";
import { CurdServiceService } from '../curd_service/curd-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:Product[] = new Array();
  editPId!:number;
  editPDesc!:string;
  editPName!:string;
  editPCost!:number;

  constructor(private curd:CurdServiceService) { }

  addProduct( pId:any, pName:any, pDesc:any, pCost:any){
    if(this.validateInput(pId.value, pName.value, pDesc.value, pCost.value)){
      let data = {pName:pName.value, pId:pId.value, pDesc:pDesc.value, pCost:pCost.value, edit:false};
      this.curd.add(`${environment.product}`, data)
      .subscribe({
        next:(data)=>{
          pName.value = '';
          pId.value = '';
          pDesc.value = '';
          pCost.value = '';
          this.emptyValidate();
          this.getProducts();
          alert("New User Added Successfully");
        },
        error:(err)=>{
          alert(err.message);
        }

      });
      // this.productList.push({pName:pName.value, pId:pId.value, pDesc:pDesc.value, pCost:pCost.value, edit:false});
      // pName.value = '';
      // pId.value = '';
      // pDesc.value = '';
      // pCost.value = '';
      // this.emptyValidate();
      // this.dupProductList = this.productList;
      // alert("New User Added Successfully");
    }
  }
  removeProduct(id:number):void{
    // let obj = this.productList.splice(id, 1);
    // alert(`Name: ${obj[0].pName} Is Removed`);
    this.curd.delete(`${environment.product}/${id+1}`)
    .subscribe({
      next:(data)=>{
        alert(`Name: ${data.pName} Is Removed`);
      },
      error:(err)=>{
        alert(err.message);
      },
      complete:()=>{
        this.getProducts();
      }
    });
  }
  nameClass:string = "";
  idClass:string = "";
  descClass:string = "";
  costClass:string = "";

  validateInput(id:string, name:string, desc:string, cost:string):boolean{
    console.log(id, name, desc, cost);
    let flag = true;
    if(parseInt(id)<0){
      this.idClass = "is-invalid";
      flag = false;
    }
    else
      this.idClass = "is-valid";
    if(desc.length<10){
      this.descClass = "is-invalid";
      flag = false;
    }
    else
      this.descClass = "is-valid";
    if(parseInt(cost)<10){
      flag = false;
      this.costClass = "is-invalid";
    }
    else
      this.costClass = "is-valid";

    return flag;
  }
  emptyValidate():void{
    this.nameClass = '';
    this.idClass = '';
    this.costClass = '';
    this.descClass = '';
  }

  confirmProductEdit(index:number):void{
    this.productList[index].edit = false;
    this.curd.update(`${environment.product}/${index+1}`, this.productList[index])
    .subscribe({
      next:(data)=>{
        alert('Product Updated SuccessFully');
      },
      error:(err)=>{
        alert(err.message);
      }
    });
    // this.productList.filter((data,i)=>{
    //   if(index == i)
    //   data.edit = false;
    // })
  }

  cancelProductEdit(index:number){
    this.productList[index].pId = this.editPId;
    this.productList[index].pName = this.editPName;
    this.productList[index].pDesc = this.editPDesc;
    this.productList[index].pCost = this.editPCost;
    this.productList[index].edit = false;
  }

  editProduct(index:number):void{
    this.editPId = this.productList[index].pId;
    this.editPName = this.productList[index].pName;
    this.editPDesc = this.productList[index].pDesc;
    this.editPCost = this.productList[index].pCost;
    this.productList[index].edit = true;
  }


  filterData( pId:any, pName:any, pDesc:any, pCost:any){
    let query = `${environment.product}?`
    if(pId.value != '')
      query += `&pId=${pId.value}`;
    if(pName.value != '')
      query += `&pName=${pName.value}`;
    if(pDesc.value != '')
      query += `&pDesc=${pDesc.value}`;
    if(pCost.value != '')
      query += `&pCost=${pCost.value}`;
    this.curd.fetch(query)
    .subscribe({
      next:(data)=>{
        this.productList = data;
        pName.value = '';
        pId.value = '';
        pDesc.value = '';
        pCost.value = '';
      },
      error:(err)=>{
        alert(err.message);
      }
    }) 
    // this.dupProductList = new Array();
    //    this.productList.filter((data)=>{
    //     if(data.pId == pId.value || data.pName.toLowerCase() == pName.value.toLowerCase() || data.pDesc.toLowerCase() == pDesc.value.toLowerCase()
    //     || data.pCost == pCost.value)
    //       this.dupProductList.push(data);
    //   });
      // pName.value = '';
      // pId.value = '';
      // pDesc.value = '';
      // pCost.value = '';
  
  }

  getProducts(){
    this.curd.fetch(`${environment.product}`)
    .subscribe({
      next:(data)=>{
        this.productList = data;
      },
      error:(err)=>{
        alert(err.message);
      }
    })   
  }



}
