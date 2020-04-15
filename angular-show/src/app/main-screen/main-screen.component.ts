import { Component, OnInit } from '@angular/core';
import { mainScreenService } from 'src/services/main-screen.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  channelList = [];
  searchForm : FormGroup;
  findName : string;
  sortId : string;
  filteredObj ;
  filterListArr; 
  updatedParam = new Date();

  constructor(private mainService: mainScreenService) { }

  ngOnInit(): void {
    this.mainService.sayHello().subscribe(data => {
      this.channelList = data.results;
      console.log(this.channelList);

      this.mainService.channelDataSubject.next(this.channelList);
    });

    this.searchForm = new FormGroup({
      'searchName' : new FormControl('',[
        Validators.required
      ])
    })

    this.searchForm.get('searchName').valueChanges.subscribe(val => {
      if(!val){
        this.findName = val;
        console.log(this.findName);
      }
    });

   

    this.filterListArr = [];
    this.mainService.filtersSubject.subscribe(filterData => {
      this.filterListArr = [];
      this.filteredObj = filterData;
      for(let item in this.filteredObj){
        this.filterListArr.push(...this.filteredObj[item]);

      }
      this.updatedParam = new Date();
      console.log(this.filteredObj);
    })

   
  }

  onSubmit(){
    this.findName = this.searchForm.get('searchName').value;
  }

  onSortOrder(e){
    console.log(e);
    this.sortId = e.target.value;
  }
}
