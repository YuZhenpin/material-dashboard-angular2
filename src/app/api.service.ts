import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Build } from './build';
import { Pipeline } from './pipeline';
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

  getBuilds(): Observable<Build[]> {
    return this.http.get<Build[]>(`${apiUrl}/builds`)
      .pipe(
        tap(builds => console.log('fetched builds')),
        catchError(this.handleError('getBuilds', []))
      );
  }

  getPipelines(): Observable<Pipeline[]> {
    return this.http.get<Pipeline[]>(`${apiUrl}/builds`)
      .pipe(
        tap(pipelines => console.log('fetched pipelines')),
        catchError(this.handleError('getPipelines', []))
      );
  }

  getPipelineById(id: string): Observable<Pipeline> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Pipeline>(url).pipe(
      tap(_ => console.log(`fetched pipeline id=${id}`)),
      catchError(this.handleError<Pipeline>(`getPipelineById id=${id}`))
    );
  }

  addPipeline(pipeline: Pipeline): Observable<Pipeline> {
    return this.http.post<Pipeline>(apiUrl, pipeline, httpOptions).pipe(
      tap((c: Pipeline) => console.log(`added pipeline w/ id=${c.id}`)),
      catchError(this.handleError<Pipeline>('addPipeline'))
    );
  }

  updatePipeline(id: string, pipeline: Pipeline): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, pipeline, httpOptions).pipe(
      tap(_ => console.log(`updated pipeline id=${id}`)),
      catchError(this.handleError<any>('updatePipeline'))
    );
  }

  deletePipeline(id: string): Observable<Pipeline> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Pipeline>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted pipeline id=${id}`)),
      catchError(this.handleError<Pipeline>('deletePipeline'))
    );
  }


  getRepoServers(): Observable<RepoServer[]> {
    return this.http.get<RepoServer[]>(`${apiUrl}/builds`)
      .pipe(
        tap(repoServer => console.log('fetched repo servers')),
        catchError(this.handleError('getRepoServers', []))
      );
  }

  getRepoServerById(id: string): Observable<RepoServer> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<RepoServer>(url).pipe(
      tap(_ => console.log(`fetched repo server id=${id}`)),
      catchError(this.handleError<RepoServer>(`getRepoServerById id=${id}`))
    );
  }

  addRepoServer(repoServer: RepoServer): Observable<RepoServer> {
    return this.http.post<RepoServer>(apiUrl, repoServer, httpOptions).pipe(
      tap((c: Pipeline) => console.log(`added repo server w/ id=${c.id}`)),
      catchError(this.handleError<RepoServer>('addRepoServer'))
    );
  }

  updateRepoServer(id: string, repoServer: RepoServer): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, repoServer, httpOptions).pipe(
      tap(_ => console.log(`updated repo server id=${id}`)),
      catchError(this.handleError<any>('updateRepoServer'))
    );
  }

  deleteRepoServer(id: string): Observable<RepoServer> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<RepoServer>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted repo server id=${id}`)),
      catchError(this.handleError<RepoServer>('deleteRepoServer'))
    );
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
