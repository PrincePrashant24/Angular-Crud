import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-allrecords',
  templateUrl: './allrecords.component.html',
  styleUrls: ['./allrecords.component.css']
})
export class AllrecordsComponent implements OnInit {
  allUser: any;

  constructor( private commonService:CommonService) {this.allUser ="" }

  ngOnInit(): void {
    this.getLatestUsers();
  }

  getLatestUsers(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response;
    
    })
  }
  deleteUser(user:any){
    this.commonService.deleteUser(user).subscribe(()=>{
this.getLatestUsers();
    })
  }
 
}
