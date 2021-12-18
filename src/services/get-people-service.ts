import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "src/app/models/person";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    private url = "https://api.json-generator.com/templates/Xp8zvwDP14dJ/data";
    private apiKey = "v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z";

    constructor(private http:HttpClient) {
    }

    getPeople(): Observable<Person[]>{
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);

        return this.http.get<Person[]>(this.url, {headers: headers});
    }
}