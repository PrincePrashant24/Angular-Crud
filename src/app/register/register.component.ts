import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObj = {
    name: '',
    email:'',
    pasword:'',
    confirmPasword:''
  }
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }
  

  addUser(formObj:any){
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((response)=>{
      alert("Data inserted Successfully");
      
    })
    
  }


}
