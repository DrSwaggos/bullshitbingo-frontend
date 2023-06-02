import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Phrase } from '../model/phrase';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    readonly urlPrefix;
    constructor(private http: HttpClient) {
        this.urlPrefix = `${environment.protocol}://${window.location.host.split(":")[0]}:${environment.apiPort}/api/`;
    }


    getPhrasesByCount(count: number): Observable<Phrase[]> {
        return this.http.get<Phrase[]>(`http://localhost:8080/api/phrases/game/${count}`);
    }
}
