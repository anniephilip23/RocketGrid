import { Component, OnInit, Input } from '@angular/core';
import { TabledataService } from "../tabledata.service"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  clickCountMake = 0;
  clickCountYear = 0;
  clickCountName = 0;
  public rowvalues = [];
  public rowvalues2 = [];
  public rowhead = [];

  constructor(private tablearray: TabledataService) {

  }

  ngOnInit(): void {
    // fetching json data from service
    this.tablearray.getdata()
      .subscribe(data => this.rowvalues = data)
    this.tablearray.getdata()
      .subscribe(data => this.rowvalues2 = data)

    this.tablearray.gethaed()
      .subscribe(datahead => this.rowhead = datahead)

  }

  // method to perform sorting
  onClickMe(x) {
    let array1 = [];
    let array = [];
    let newJson = [];
    // sorting enbled only fpr make
    if (x == "make") {
      this.clickCountMake += 1;
      this.rowvalues.forEach(element => {
        array1.push(element.make)
      });
      array1.forEach(element => {
        var ind = array.includes(element)
        if (ind == false) {
          array.push(element)
        }
      });
      console.log(array)
      if (this.clickCountMake % 2 == 0) {
        array.reverse()
        array.forEach(arr => {
          this.rowvalues.forEach(value => {
            if (value.make == arr) {
              newJson.push(value)
            }
          });
        });
      }
      else {
        array.sort()
        array.forEach(arr => {
          this.rowvalues.forEach(value => {
            if (value.make == arr) {
              newJson.push(value)
            }
          });
        });
      }
      if (this.clickCountMake % 3 == 0) {
        return this.rowvalues = this.rowvalues2;
      }
      return this.rowvalues = newJson;
    }

  }

}