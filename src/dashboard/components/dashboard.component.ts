import {Component, OnInit} from '@angular/core';
import {Router}           from '@angular/router';

import {User}        from './../../user/models/user';
import {UserService} from './../../user/services/user.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'templates/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {

    users:User[] = [];

    constructor(private router:Router,
                private userService:UserService) {
    }

    ngOnInit() {

    }
}
