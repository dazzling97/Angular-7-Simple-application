import { Component, OnInit } from '@angular/core';
import {DataService} from '../../app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users:object;
  Demo :object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=> {
      this.users=data
      console.log(this.users);
    })

    this.data.getDemo().subscribe(data=>{
      this.Demo=data
      console.log(this.Demo);
    })
  }



}
