"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./../dashboard/dashboard.component.ts');
var user_login_component_1 = require('./user-login.component.ts');
var user_register_component_1 = require('./../user/user-register.component.ts');
var article_edit_component_1 = require('./../article/article-edit.component.ts');
var player_view_component_1 = require('./../player/player-view.component.ts');
var player_list_component_1 = require('./../player/player-list.component.ts');
var team_edit_component_1 = require('./../team/team-edit.component.ts');
var team_list_component_1 = require('./../team/team-list.component.ts');
var season_list_component_1 = require('./../season/season-list.component.ts');
var season_edit_component_1 = require('./../season/season-edit.component.ts');
//路由配置
exports.routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'login',
        component: user_login_component_1.UserLoginComponent
    },
    {
        path: 'user-register',
        component: user_register_component_1.UserRegisterComponent
    },
    {
        path: 'player-list',
        component: player_list_component_1.PlayerListComponent
    },
    {
        path: 'player-view/:id',
        component: player_view_component_1.PlayerViewComponent
    },
    {
        path: 'team-edit',
        component: team_edit_component_1.TeamEditComponent
    },
    {
        path: 'team-edit/:id',
        component: team_edit_component_1.TeamEditComponent
    },
    {
        path: 'team-list',
        component: team_list_component_1.TeamListComponent
    },
    {
        path: 'season-edit/:id',
        component: season_edit_component_1.SeasonEditComponent
    },
    {
        path: 'season-list',
        component: season_list_component_1.SeasonListComponent
    },
    {
        path: 'article-edit',
        component: article_edit_component_1.ArticleEditComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map