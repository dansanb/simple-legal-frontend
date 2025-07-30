import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CaseEntityStatusRoleDto} from './models/caseEntityStatusRoleDto';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private readonly API_BASE_URL: string;
  private readonly BASE_URL_STATUS_ROLES: string;

  constructor(private http: HttpClient) {

    // constant URL paths for API calls.
    // Note the use of URL(relativeUrl, baseUrl).
    //  - baseUrl has different results depending on if it ends with a / or not.
    //    Examples:
    //      new URL('foo', 'http://example.com/bar').href => http://example.com/foo
    //      new URL('foo', 'http://example.com/bar/').href => http://example.com/bar/foo
    //
    // For our case, we want the second example.
    //
    this.API_BASE_URL = "http://localhost:5143/api/";
    this.BASE_URL_STATUS_ROLES = new URL(`case-status-roles/`, this.API_BASE_URL).href;
  }


  getStatusCodesPaged(params?: any): Observable<CaseEntityStatusRoleDto[]> {
    const url = new URL('paged', this.BASE_URL_STATUS_ROLES).href;
    return this.http.post<CaseEntityStatusRoleDto[]>(url, params);
  }
}
