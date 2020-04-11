import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { ListBuildsComponent } from '../../build/list-builds/list-builds.component';

import { ListPipelinesComponent } from '../../pipeline/list-pipelines/list-pipelines.component';
import { NewPipelineComponent } from '../../pipeline/new-pipeline/new-pipeline.component';
import { EditPipelineComponent } from '../../pipeline/edit-pipeline/edit-pipeline.component';

import { ListRepoServersComponent} from '../../repo-server/list-repo-servers/list-repo-servers.component';
import { NewRepoServerComponent } from '../../repo-server/new-repo-server/new-repo-server.component';
import { EditRepoServerComponent } from '../../repo-server/edit-repo-server/edit-repo-server.component';

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
    { path: 'builds',                   component: ListBuildsComponent },
    { path: 'pipelines',                component: ListPipelinesComponent },
    { path: 'pipelines/new',            component: NewPipelineComponent },
    { path: 'pipelines/:id/edit',       component: EditPipelineComponent },
    { path: 'repo-servers',             component: ListRepoServersComponent },
    { path: 'repo-servers/new',         component: NewRepoServerComponent },
    { path: 'repo-servers/:id/edit',    component: EditRepoServerComponent },
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'user-profile',             component: UserProfileComponent },
    { path: 'table-list',               component: TableListComponent },
    { path: 'typography',               component: TypographyComponent },
    { path: 'icons',                    component: IconsComponent },
    { path: 'maps',                     component: MapsComponent },
    { path: 'notifications',            component: NotificationsComponent },
    { path: 'upgrade',                  component: UpgradeComponent },
];
