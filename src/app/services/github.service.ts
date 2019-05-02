import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { IGitHubUser } from "../interfaces/gitHubUser";
import { IGitHubUser2 } from "../interfaces/gitHubUser2";

@Injectable({
    providedIn: "root"
})
export class GitHubService {

    private userURL: string = 'https://api.github.com/users/';

    constructor(private http: HttpClient) {
    }

    getUserProperties(username: string): Observable<IGitHubUser> {
        return this.http.get<IGitHubUser>(this.userURL + username);
    }

    getFollowers(urlFollowers: string): Observable<IGitHubUser2[]> {
        return this.http.get<IGitHubUser2[]>(urlFollowers);
    }

    getFollowing(urlFollowing: string): Observable<IGitHubUser2[]> {
        return this.http.get<IGitHubUser2[]>(urlFollowing);
    }

    handlerError(err: HttpErrorResponse) {
        if (err.status === 404) {
            window.alert(`Usuario no encontrado\nMensaje de error: ${err.message}`);
        }
        return throwError(err.message)
    }

}