import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user';
import { Build } from './build';
import { Pipeline, PipelinePager } from './pipeline';
import { RepoServer } from './repo-server';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:10010/api';

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
    const url = this.getUrl('login');
    return this.http.post<{token: string}>(url, user)
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getBuilds(): Observable<Build[]> {
    const url = this.getUrl('builds');
    return this.http.get<Build[]>(url)
      .pipe(
        tap(builds => console.log('fetched builds')),
        catchError(this.handleError('getBuilds', []))
      );
  }

  getPipelines(page: number, pageSize: number): Observable<PipelinePager> {
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

  addPipeline(pipeline: Pipeline): Observable<Pipeline> {
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


  getRepoServers(): Observable<RepoServer[]> {
    const url = this.getUrl(`repo_servers`);
    return this.http.get<RepoServer[]>(url)
      .pipe(
        tap(repoServer => console.log('fetched repo servers')),
        catchError(this.handleError('getRepoServers', []))
      );
  }

  getRepoServerById(id: number): Observable<RepoServer> {
    const url = this.getUrl(`repo_servers/${id}`);
    return this.http.get<RepoServer>(url).pipe(
      tap(_ => console.log(`fetched repo server id=${id}`)),
      catchError(this.handleError<RepoServer>(`getRepoServerById id=${id}`))
    );
  }

  addRepoServer(repoServer: RepoServer): Observable<RepoServer> {
    const url = this.getUrl(`repo_servers`);
    return this.http.post<RepoServer>(url, repoServer, httpOptions).pipe(
      tap((c: Pipeline) => console.log(`added repo server w/ id=${c.id}`)),
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
