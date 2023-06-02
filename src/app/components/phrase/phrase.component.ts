import { Component, Input } from '@angular/core';
import { Phrase } from 'src/app/model/phrase';

@Component({
    selector: 'app-phrase',
    templateUrl: './phrase.component.html',
    styleUrls: ['./phrase.component.scss']
})
export class PhraseComponent {
    used = false;
    onClick() {
        this.used = true;
        console.log("hello");
    }

    @Input() phrase!: Phrase;

}
