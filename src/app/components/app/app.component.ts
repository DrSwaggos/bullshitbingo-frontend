import { Component, HostBinding } from '@angular/core';
import { Phrase } from 'src/app/model/phrase';
import { APIService } from 'src/app/services/apiservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bullshitbingo-frontend';
    phrases: Phrase[] = [];
    @HostBinding('style.--col-count') colCount = 3;
    constructor(private phrasesService: APIService) { }


    ngOnInit() {
        this.phrasesService.getPhrasesByCount(16).subscribe(res => { this.phrases = res; this.colCount = Math.sqrt(res.length) });
    }

    giveSpecialStringOdaSo(): string {
        return `repeat(${this.colCount}, 1fr)`;
    }
}
