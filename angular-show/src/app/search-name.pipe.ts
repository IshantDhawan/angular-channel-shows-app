import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, name : string): any{
    if(!name){
      return value;
    }
    return value.filter((e)=> e.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
    // console.dir(filteredArray);
    // console.dir(value);
    //  value;
  }
}
