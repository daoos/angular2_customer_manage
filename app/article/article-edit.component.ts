import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

@Component({
    selector: 'article',
    templateUrl: '/app/article/article-edit.html'
})

export class ArticleEditComponent implements OnInit {

    constructor(private router:Router) {
    }

    ngOnInit() {

    }
}
