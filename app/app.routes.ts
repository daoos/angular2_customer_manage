import {provideRouter, RouterConfig}  from '@angular/router';

import {DashboardComponent}     from './dashboard/components/dashboard.component';
import {UserLoginComponent}     from './login/components/user-login.component';
import {UserEditComponent}      from './user/components/user-edit.component';
import {UserRegisterComponent}  from './user/components/user-register.component';
import {ArticleEditComponent}   from './article/components/article-edit.component';
import {PlayerViewComponent}    from './player/components/player-view.component';
import {PlayerListComponent}    from './player/components/player-list.component';
import {TeamEditComponent}      from './team/components/team-edit.component';
import {TeamListComponent}      from './team/components/team-list.component';
import {SeasonListComponent}    from './season/components/season-list.component';
import {SeasonEditComponent}    from './season/components/season-edit.component';
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