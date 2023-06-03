import { Injectable } from '@angular/core';
import { Phrase } from './model/phrase';

@Injectable({
    providedIn: 'root'
})
export class GameLogicServiceService {

    constructor() { }

    hasWon(field: Phrase[]): boolean {
        let colCount = Math.sqrt(field.length);
        var won: boolean = false;

        for (var i = 0; i < colCount; i++) {
            var currWon: boolean = true;
            for (var j = 0; j < colCount; j++) {
                currWon &&= field[i * colCount + j].checked;

            }
            won ||= currWon;
            currWon = true;
            for (var j = 0; j < colCount; j++) {
                currWon &&= field[j * colCount + i].checked;
            }
            won ||= currWon;
        }
        return won;
    }
}
