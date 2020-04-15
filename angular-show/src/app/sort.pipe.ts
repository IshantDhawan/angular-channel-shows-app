import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, order: string): any {
    //return value;
    if(order === 'asc'){
      return value.sort((a,b)=> a.id - b.id )
    }else{
      return value.sort((a,b)=> b.id - a.id )
    }
  }

}
