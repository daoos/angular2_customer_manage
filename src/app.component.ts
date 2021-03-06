import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { UserService }        from './user/services/user.service';

import { ASideComponent }     from './aside/components/aside.component';
import { HeaderNavComponent } from './header-nav.component';

@Component({
    selector: 'app',
    templateUrl: 'templates/page.html',
    directives: [
      ROUTER_DIRECTIVES,
      ASideComponent,
      HeaderNavComponent
    ],
    providers: [
        UserService,
    ]
})
export class AppComponent {
    title = 'SF Winterbach';
}
