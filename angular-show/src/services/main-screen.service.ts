import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { channelData } from 'src/app/mockdata';
import { Subject, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class mainScreenService{

    constructor(private httpClient : HttpClient){}

    getAppData(){
        return channelData
    }

    channelDataSubject = new Subject();

    filtersSubject = new Subject();

    sayHello(): Observable<any>{
       return this.httpClient.get<any>('https://rickandmortyapi.com/api/character/');
    }

}