import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user';
import { Build } from './build';
import { Group } from './group';
import { Pipeline, PipelinePager } from './pipeline';
import { GitlabServer, RepoServer, RepoServerPager } from './repo-server';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:10010/api';

const gitlabServer: GitlabServer = {
  id: 1,
  name: 'gitlab',
  url: 'http://gitlab.com'
}

const build: Build = {
  id: 1,
  queue_id: 'uuid',
  status: 1,
  elapse: 100,
  user: { username: 'pin' },
  pipeline: {id: 1, name: 'pipeline1'}
}

const group: Group = {
  id: 1,
  name: 'group'
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(user: User): Observable<boolean> {
    return new Observable((o) => {
      setTimeout(() => {
        localStorage.setItem('access_token', "A token :)");
        o.next(true);
      }, 1000)
    })
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getGroup(): Observable<Group> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(group);
      }, 500)
    })
  }

  listGitlabServers(): Observable<GitlabServer[]> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next([gitlabServer, gitlabServer, gitlabServer]);
      }, 500)
    })
  }

  listBuilds(): Observable<Build[]> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next([build, build, build]);
      }, 500)
    })
  }

  listPipelines(page: number, pageSize: number): Observable<PipelinePager> {
    const url = this.getUrl('pipelines');
    return this.http.get<PipelinePager>(url).pipe(
      tap(_ => console.log(`fetched pipelines`)),
      catchError(this.handleError<PipelinePager>(`getPipelines`))
    );
  }

  getPipelineById(id: number): Observable<Pipeline> {
    const url = this.getUrl(`pipelines/${id}`);
    return this.http.get<Pipeline>(url).pipe(
      tap(_ => console.log(`fetched pipeline id=${id}`)),
      catchError(this.handleError<Pipeline>(`getPipelineById id=${id}`))
    );
  }

  createPipeline(pipeline: Pipeline): Observable<Pipeline> {
    const url = this.getUrl(`pipelines`);
    return this.http.post<Pipeline>(url, pipeline, httpOptions).pipe(
      tap((c: Pipeline) => console.log(`added pipeline w/ id=${c.id}`)),
      catchError(this.handleError<Pipeline>('addPipeline'))
    );
  }

  updatePipeline(id: number, pipeline: Pipeline): Observable<any> {
    const url = this.getUrl(`pipelines/${id}`);
    return this.http.put(url, pipeline, httpOptions).pipe(
      tap(_ => console.log(`updated pipeline id=${id}`)),
      catchError(this.handleError<any>('updatePipeline'))
    );
  }

  deletePipeline(id: number): Observable<Pipeline> {
    const url = this.getUrl(`pipelines/${id}`);
    return this.http.delete<Pipeline>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted pipeline id=${id}`)),
      catchError(this.handleError<Pipeline>('deletePipeline'))
    );
  }

  listRepoServers(page: number, pageSize: number): Observable<RepoServerPager> {
    const url = this.getUrl(`repo_servers`);
    return this.http.get<RepoServerPager>(url)
      .pipe(
        tap(repoServer => console.log('fetched repo servers')),
        catchError(this.handleError<RepoServerPager>('getRepoServers'))
      );
  }

  getRepoServerById(id: number): Observable<RepoServer> {
    const url = this.getUrl(`repo_servers/${id}`);
    return this.http.get<RepoServer>(url).pipe(
      tap(_ => console.log(`fetched repo server id=${id}`)),
      catchError(this.handleError<RepoServer>(`getRepoServerById id=${id}`))
    );
  }

  createRepoServer(repoServer: RepoServer): Observable<RepoServer> {
    const url = this.getUrl(`repo_servers`);
    return this.http.post<RepoServer>(url, repoServer, httpOptions).pipe(
      tap((c: RepoServer) => console.log(`added repo server w/ id=${c.name}`)),
      catchError(this.handleError<RepoServer>('addRepoServer'))
    );
  }

  updateRepoServer(id: number, repoServer: RepoServer): Observable<any> {
    const url = this.getUrl(`repo_servers/${id}`);
    return this.http.put(url, repoServer, httpOptions).pipe(
      tap(_ => console.log(`updated repo server id=${id}`)),
      catchError(this.handleError<any>('updateRepoServer'))
    );
  }

  deleteRepoServer(id: number): Observable<RepoServer> {
    const url = this.getUrl(`repo_servers/${id}`);
    return this.http.delete<RepoServer>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted repo server id=${id}`)),
      catchError(this.handleError<RepoServer>('deleteRepoServer'))
    );
  }

  private getUrl(path: string) {
    return `${apiUrl}/${path}`;
  }

  /*
  getCasesById(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cases>(url).pipe(
      tap(_ => console.log(`fetched cases id=${id}`)),
      catchError(this.handleError<Cases>(`getCasesById id=${id}`))
    );
  }

  addCases(cases: Cases): Observable<Cases> {
    return this.http.post<Cases>(apiUrl, cases, httpOptions).pipe(
      tap((c: Cases) => console.log(`added product w/ id=${c._id}`)),
      catchError(this.handleError<Cases>('addCases'))
    );
  }

  updateCases(id: string, cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }

  deleteCases(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cases id=${id}`)),
      catchError(this.handleError<Cases>('deleteCases'))
    );
  }

  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url).pipe(
      tap(_ => console.log(`fetched statistic status=${status}`)),
      catchError(this.handleError<Statistic>(`getStatistic status=${status}`))
    );
  }
  */
}
