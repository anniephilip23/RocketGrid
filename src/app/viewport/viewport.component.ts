import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {
  haeding ="List View"
  condition = true
  constructor() { }
  
  ngOnInit(): void {
  }
  change(){
    return this.condition = false;
  }

}
