import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {
  editBtn:boolean = false;
  userData:any;

  userProfile = new FormGroup({
    full_name:new FormControl(),
    mobile:new FormControl(),
    dob:new FormControl(),
    address:new FormControl(),
  })


  constructor(private user:UserService, private notify:NotificationService) { }

  ngOnInit(): void {
    this.getUser();
  }

  edit():void{
    this.editBtn = true;
  }

  getUser(){
    this.user.getUser().subscribe((data)=>{
      console.log(data);
      this.userData = data;
      this.userProfile.controls['full_name'].setValue(data.full_name);
      this.userProfile.controls['dob'].setValue(data.dob);
      this.userProfile.controls['mobile'].setValue(data.mobile);
      this.userProfile.controls['address'].setValue(data.address);
    })
  }

  update(){
    let data = this.userProfile.value;
    this.user.updateUser(data)
    .subscribe((data)=>{
      this.notify.notification('success', data.msg, true, 'top-end');
      this.editBtn = false;
      this.getUser();
    });
  }

  cancel(){
    this.editBtn = false;
  }

}
