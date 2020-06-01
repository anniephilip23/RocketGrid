import { Component } from '@angular/core';
import { TabledataService } from './tabledata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectRocketGrid';
  tablevalue =[];
  
  constructor(private tabledata: TabledataService){
    // this.tablevalue = tabledata.getTableData();
  }
}
