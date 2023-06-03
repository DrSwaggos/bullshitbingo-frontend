import { Component } from '@angular/core';
import { GameLogicServiceService } from 'src/app/game-logic-service.service';
import { Phrase } from 'src/app/model/phrase';
import { state } from 'src/app/model/ssot';
import { APIService } from 'src/app/services/apiservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bullshitbingo-frontend';
    phrases: Phrase[] = [];
    bingo: boolean = false;
    styles = {
        'grid-template-columns': `repeat(3, 1fr)`,
    };


    constructor(private phrasesService: APIService, private logicService: GameLogicServiceService) { }


    ngOnInit() {
        this.phrasesService.getPhrasesByCount(16);
        state.subscribe(state => {
            this.phrases = state.phrases;
            this.styles = {
                'grid-template-columns': `repeat(${Math.sqrt(this.phrases.length)}, 1fr)`,
            };
            if (this.logicService.hasWon(this.phrases)) {
                this.bingo = true;
                //alert("BINGO");
            }
        });
    }
}
