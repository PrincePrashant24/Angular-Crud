import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
 userObj : any= {
   id:'',
  name: '',
  email:'',
  pasword:'',
  confirmPasword:''
} ;
  id:any;
  constructor(private commonService:CommonService,private route: ActivatedRoute) {}
    
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetch(this.id);
  }
  fetch(id:any){
    this.commonService.singleUser(id).subscribe((response)=>{
      this.userObj=response;
      console.log(response);
          })
  }
  update(){

      this.commonService.updateUser(this.userObj).subscribe(()=>{
      alert("Record updated successfully");
          })
  }
 
  
}
