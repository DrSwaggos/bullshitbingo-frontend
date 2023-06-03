import { Component, Input } from '@angular/core';
import { produce } from 'immer';
import { Phrase } from 'src/app/model/phrase';
import { ssot, state } from 'src/app/model/ssot';
import { map } from 'rxjs';
@Component({
    selector: 'app-phrase',
    templateUrl: './phrase.component.html',
    styleUrls: ['./phrase.component.scss']
})
export class PhraseComponent {
    styles = {
        'background-color': 'black',
    };
    @Input() phrase!: Phrase;
    onClick() {
        let nextState = produce(state.getValue(), (draft: ssot) => {
            var thisPhrase = draft.phrases.find(p => p.id === this.phrase.id);
            if (!thisPhrase) {
                console.error("phrase not found");
                return;
            }
            thisPhrase.checked = true;
        });
        state.next(nextState);
    }


    ngOnInit() {
        state.pipe(map((state) => state.phrases.find(p => p.id === this.phrase.id))).subscribe(state => {
            if (!state) {
                console.error("phrase not found");
                return;
            }
            this.styles = {
                'background-color': state?.checked ? 'green' : 'red',
            };
            this.phrase = state;
        });

    }

}
