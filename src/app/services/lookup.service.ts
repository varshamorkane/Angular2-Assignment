import {Injectable} from '@angular/core';  
import{Http} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class LookupService {

constructor(public httpsvc:Http) { } 

getcountryList(){
   return [
        {value:"IN", name:"India"},
        {value:"US", name:"United States"}
    ];

}
    getcountryListfromApi():Observable<any>{
        return this.httpsvc.get("./app/api/countryList.json")
        .map((response)=>response.json())
        .catch((error)=>Observable.throw(error))
        
    }



}
