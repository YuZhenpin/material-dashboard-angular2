import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { ListOwnedBuildsComponent } from '../../build/list-owned-builds/list-owned-builds.component';
import { ListGroupBuildsComponent } from '../../build/list-group-builds/list-group-builds.component';

import { ListOwnedPipelinesComponent } from '../../pipeline/list-owned-pipelines/list-owned-pipelines.component';
import { ListGroupPipelinesComponent } from '../../pipeline/list-group-pipelines/list-group-pipelines.component';
import { NewPipelineComponent } from '../../pipeline/new-pipeline/new-pipeline.component';
import { EditPipelineComponent } from '../../pipeline/edit-pipeline/edit-pipeline.component';

import { ListOwnedRepoServersComponent} from '../../repo-server/list-owned-repo-servers/list-owned-repo-servers.component';
import { ListGroupRepoServersComponent} from '../../repo-server/list-group-repo-servers/list-group-repo-servers.component';
import { NewRepoServerComponent } from '../../repo-server/new-repo-server/new-repo-server.component';
import { EditRepoServerComponent } from '../../repo-server/edit-repo-server/edit-repo-server.component';

import { AuthGuard } from '../../auth-guard';
import { LoginComponent } from '../../login/login.component';
import { HelpComponent } from '../../help/help.component';
import { FaqComponent } from '../../faq/faq.component';
import { AboutUsComponent } from '../../about-us/about-us.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',                 component: LoginComponent },
    { path: 'builds/owned',          component: ListOwnedBuildsComponent,      canActivate: [AuthGuard] },
    { path: 'builds/group',          component: ListGroupBuildsComponent,      canActivate: [AuthGuard] },
    { path: 'pipelines/owned',       component: ListOwnedPipelinesComponent,   canActivate: [AuthGuard] },
    { path: 'pipelines/group',       component: ListGroupPipelinesComponent,   canActivate: [AuthGuard] },
    { path: 'pipelines/new',         component: NewPipelineComponent,          canActivate: [AuthGuard] },
    { path: 'pipelines/:id/edit',    component: EditPipelineComponent,         canActivate: [AuthGuard] },
    { path: 'repo-servers/owned',    component: ListOwnedRepoServersComponent, canActivate: [AuthGuard] },
    { path: 'repo-servers/group',    component: ListGroupRepoServersComponent, canActivate: [AuthGuard] },
    { path: 'repo-servers/new',      component: NewRepoServerComponent ,       canActivate: [AuthGuard] },
    { path: 'repo-servers/:id/edit', component: EditRepoServerComponent,       canActivate: [AuthGuard] },
    { path: 'dashboard',             component: DashboardComponent,            canActivate: [AuthGuard] },
    { path: 'user-profile',          component: UserProfileComponent,          canActivate: [AuthGuard] },
    { path: 'help',                  component: HelpComponent },
    { path: 'faq',                   component: FaqComponent },
    { path: 'about-us',              component: AboutUsComponent },
    { path: 'table-list',            component: TableListComponent },
    { path: 'typography',            component: TypographyComponent },
    { path: 'icons',                 component: IconsComponent },
    { path: 'maps',                  component: MapsComponent },
    { path: 'notifications',         component: NotificationsComponent },
    { path: 'upgrade',               component: UpgradeComponent },
];
