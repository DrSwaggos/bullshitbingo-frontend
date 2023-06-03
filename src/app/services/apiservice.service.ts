import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produce } from 'immer';
import { environment } from 'src/environments/environment';
import { Phrase, PhraseDTO } from '../model/phrase';
import { ssot, state } from '../model/ssot';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    readonly urlPrefix;
    constructor(private http: HttpClient) {
        this.urlPrefix = `${environment.protocol}://${window.location.host.split(":")[0]}:${environment.apiPort}/api/`;
    }


    getPhrasesByCount(count: number) {
        this.http.get<PhraseDTO[]>(`${this.urlPrefix}phrases/game/${count}`).subscribe(phrases => {
            let nextState = produce(state.getValue(), (draft: ssot) => {
                draft.phrases = phrases.map(p => ({ id: p.id, phrase: p.phrase, checked: false }));
            });
            state.next(nextState);
        });
    }
}
