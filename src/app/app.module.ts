import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListBuildsComponent } from './build/list-builds/list-builds.component';
import { ListRepoServersComponent } from './repo-server/list-repo-servers/list-repo-servers.component';
import { ListPipelinesComponent } from './pipeline/list-pipelines/list-pipelines.component';
import { NewPipelineComponent } from './pipeline/new-pipeline/new-pipeline.component';
import { EditPipelineComponent } from './pipeline/edit-pipeline/edit-pipeline.component';
import { ShowPipelineComponent } from './pipeline/show-pipeline/show-pipeline.component';
import { NewRepoServerComponent } from './repo-server/new-repo-server/new-repo-server.component';
import { EditRepoServerComponent } from './repo-server/edit-repo-server/edit-repo-server.component';
import { ShowRepoServerComponent } from './repo-server/show-repo-server/show-repo-server.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListBuildsComponent,
    ListRepoServersComponent,
    ListPipelinesComponent,
    NewPipelineComponent,
    EditPipelineComponent,
    ShowPipelineComponent,
    NewRepoServerComponent,
    EditRepoServerComponent,
    ShowRepoServerComponent,

  ],
  providers: [UpgradeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
