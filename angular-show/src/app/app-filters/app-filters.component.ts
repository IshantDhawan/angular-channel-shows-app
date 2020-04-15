import { Component, OnInit } from '@angular/core';
import { mainScreenService } from 'src/services/main-screen.service';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.css']
})
export class AppFiltersComponent implements OnInit {
  channelData ;
  baseObj = {};
  checkedObj = {};
  constructor(private mainservice : mainScreenService) { }

  ngOnInit(): void {
    this.mainservice.channelDataSubject.subscribe(data => {
      this.channelData = data;
      let filterArr = ['species', 'gender','origin'];
      filterArr.forEach(key => {
        this.getFilterObj(key);
        this.checkedObj[key] = [];
      });
      console.log(this.checkedObj);
    })  
  }
  
  getFilterObj(key){
  this.baseObj[key] = this.getValues(key);
  return this.baseObj;
  }

  getValues(key){
    let baseArr = [];
    this.channelData.forEach(obj => {  
      if(key == 'origin'){  baseArr.push(obj[key].name)}  
      else baseArr.push(obj[key])
    });
    return [...new Set(baseArr)]
  }


  onChangeSelected(e){
    let value = e.target.value;
    let key = e.target.dataset.sectionvalue;
    let checked = e.target.checked;

    if(checked){
      this.checkedObj[key].push(value);
    }
    else{
      if(this.checkedObj[key].indexOf(value) != -1){
        let getIndex = this.checkedObj[key].indexOf(value);
        this.checkedObj[key].splice(getIndex,1);
      }
    }
    console.log(this.checkedObj);

    this.mainservice.filtersSubject.next(this.checkedObj);    
  }
  
}
