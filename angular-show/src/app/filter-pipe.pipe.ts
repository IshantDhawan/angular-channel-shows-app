import { Pipe, PipeTransform } from '@angular/core';
import { Key } from 'protractor';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterObj: any, updated: Date): any {  
    let newArr = [];

    function getFiltered(key){
      newArr = [];
      for(let val of filterObj[key]){
        if(filterObj[key].length){
          
        value.forEach((element)=>{
          if((key == 'origin' && element[key].name == val) || (element[key] == val)){  
            newArr.push(element);
          }
        });
        }
        }
      value = newArr; 
    }

    for(let key in filterObj){
      let len = filterObj[key].length;
      if(len) {
        getFiltered(key)
      }
    }
    return value;
  }
}
