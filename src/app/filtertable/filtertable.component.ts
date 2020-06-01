import { Component, OnInit } from '@angular/core';
import { TabledataService } from "../tabledata.service"
@Component({
  selector: 'app-filtertable',
  templateUrl: './filtertable.component.html',
  styleUrls: ['./filtertable.component.css']
})
export class FiltertableComponent implements OnInit {
  makedata = ["Honda", "Toyota", "Nissan"]
  Yeardata = [2008, 2010, 2012]
  constructor(private tablearray: TabledataService) {
  }
  public finalyear = []
  public rowvalues1 = [];
  public rowhead1 = [];
  public rowvalues2 = [];
  newcheckedarray = []
  clickCountMake

  public finalmake = this.newcheckedarray;

  ngOnInit(): void {
    // fetching json data from service
    this.tablearray.getdata()
      .subscribe(data => this.rowvalues1 = data)
    this.tablearray.getdata()
      .subscribe(data => this.rowvalues2 = data)
    this.tablearray.gethaed()
      .subscribe(datahead => this.rowhead1 = datahead)

  }

  // event called when check box is selected for make data
  onCheckboxChange(e) {
    if (e.target.checked) {
      // filter function on check box selcted
      this.rowvalues2.forEach(element => {
        if (element.make == e.target.value) {
          this.newcheckedarray.push(element)
        }
        if (element.Year == e.target.value) {
          this.newcheckedarray.push(element)
        }
      });
      console.log(this.newcheckedarray)
    }
    // condition when checkbox is unchecked
    if (e.target.checked == false) {
      let newdata = this.newcheckedarray;
      var dum = this.makedata.includes(e.target.value)
      // checking event value belongs to which key
      if (dum == true) {
        var mar = newdata.filter(function (num) {
          return num.make != e.target.value
        });
        this.newcheckedarray = mar
      }
      if (dum == false) {
        var mar2 = newdata.filter(function (num) {
          return num.Year != e.target.value
        });
        this.newcheckedarray = mar2
      }

    }
    var arraynew = this.newcheckedarray
    console.log(arraynew)
    this.rowvalues1 = arraynew
  }


// method to perform sorting
onClickMe(x) {
  let array1 = [];
  let array = [];
  let newJson = [];
  // sorting enbled only fpr make
  if (x == "make") {
    this.clickCountMake += 1;
    this.rowvalues1.forEach(element => {
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
        this.rowvalues1.forEach(value => {
          if (value.make == arr) {
            newJson.push(value)
          }
        });
      });
    }
    else {
      array.sort()
      array.forEach(arr => {
        this.rowvalues1.forEach(value => {
          if (value.make == arr) {
            newJson.push(value)
          }
        });
      });
    }
    if (this.clickCountMake % 3 == 0) {
      return this.rowvalues1 = this.rowvalues2;
    }
    return this.rowvalues1 = newJson;
  }

}
}
