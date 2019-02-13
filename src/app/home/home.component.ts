import { Component, OnInit } from '@angular/core';
import {DataService} from '../../app/data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1style: boolean = false;
  colorCh : boolean =false;
   sise : boolean=true;
   users: Object;

  constructor(private data:DataService) { }

  ngOnInit() {

    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );

  }

  


  btnClick(){
   this.colorCh =true;
  this.sise=false;
  }
  


}
