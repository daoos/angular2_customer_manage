import {provideRouter, RouterConfig}  from '@angular/router';

import {DashboardComponent}     from './dashboard/dashboard.component';
import {UserLoginComponent}     from './login/user-login.component';
import {UserEditComponent}      from './user/user-edit.component';
import {UserRegisterComponent}  from './user/user-register.component';
import {ArticleEditComponent}   from './article/article-edit.component';
import {PlayerViewComponent}    from './player/player-view.component';
import {PlayerListComponent}    from './player/player-list.component';
import {TeamEditComponent}      from './team/team-edit.component';
import {TeamListComponent}      from './team/team-list.component';
import {SeasonListComponent}    from './season/season-list.component';
import {SeasonEditComponent}    from './season/season-edit.component';
//路由配置
export const routes:RouterConfig = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'user-register',
        component: UserRegisterComponent
    },
    {
        path: 'player-list',
        component: PlayerListComponent
    },
    {
        path: 'player-view/:id',
        component: PlayerViewComponent
    },
    {
        path: 'team-edit',
        component: TeamEditComponent
    },
    {
        path: 'team-edit/:id',
        component: TeamEditComponent
    },
    {
        path: 'team-list',
        component: TeamListComponent
    },
    {
        path: 'season-edit/:id',
        component: SeasonEditComponent
    },
    {
        path: 'season-list',
        component: SeasonListComponent
    },
    {
        path: 'article-edit',
        component: ArticleEditComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];