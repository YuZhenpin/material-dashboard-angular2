import { Injectable } from '@angular/core';
import { Observable, of, throwError, pipe } from 'rxjs';
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
  type: 'gitlab',
  name: 'gitlab',
  url: 'http://gitlab.com'
}

const repoServer: RepoServer = {
  id: 1,
  type: 'gitlab',
  name: 'gitlab',
  url: 'http://gitlab.com',
  token: 'token'
}

const pipeline: Pipeline = {
  id: 1, 
  name: 'pipeline1',
  repo_server: repoServer
}


const build: Build = {
  id: 1,
  queue_id: 'uuid',
  status: 1,
  elapse: 100,
  user: { username: 'pin' },
  pipeline: pipeline
}

const user: User = {
  username: 'yzp',
}


const group: Group = {
  id: 'uuid',
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
    return new Observable((o) => {
      setTimeout(() => {
        o.next({total: 2, pipelines: [pipeline, pipeline]});
      }, 500)
    })
  }

  getPipelineById(id: number): Observable<Pipeline> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(pipeline);
      }, 500)
    })
  }

  createPipeline(pipeline: Pipeline): Observable<Pipeline> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(pipeline);
      }, 500)
    })
  }

  updatePipeline(id: number, pipeline: Pipeline): Observable<any> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(pipeline);
      }, 500)
    })
  }

  deletePipeline(id: number): Observable<Pipeline> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(pipeline);
      }, 500)
    })
  }

  listRepoServers(page: number, pageSize: number): Observable<RepoServerPager> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next({total: 2, repo_servers: [repoServer]});
      }, 500)
    })
  }

  getRepoServerById(id: number): Observable<RepoServer> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(repoServer);
      }, 500)
    })
  }

  createRepoServer(repoServer: RepoServer): Observable<RepoServer> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(repoServer);
      }, 500)
    })
  }

  updateRepoServer(id: number, repoServer: RepoServer): Observable<any> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(repoServer);
      }, 500)
    })
  }

  deleteRepoServer(id: number): Observable<RepoServer> {
    return new Observable((o) => {
      setTimeout(() => {
        o.next(repoServer);
      }, 500)
    })
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
