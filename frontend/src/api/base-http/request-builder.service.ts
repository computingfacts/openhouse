import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HeaderProviderService } from "./header-provider.service";
import { Observable } from "rxjs";

@Injectable()
export class RequestBuilderService {

  private readonly baseUrl = "http://www.computingfacts.com/services/api";

  constructor(
    private readonly http: Http,
    private readonly headerProvider: HeaderProviderService
  ) { }

  public createGetRequest(url: string): Observable<Response> {
    const headers = this.headerProvider.getRequestHeaders();
    return this.http.get(this.baseUrl + url, { headers });
  }

  public createPostRequest(url: string, body: any): Observable<Response> {
    const headers = this.headerProvider.getRequestHeaders();
    return this.http.post(this.baseUrl + url, body, { headers });
  }

  public createPatchRequest(url: string, body: any): Observable<Response> {
    const headers = this.headerProvider.getRequestHeaders();
    return this.http.patch(this.baseUrl + url, body, { headers });
  }

  public createDeleteRequest(url: string): Observable<Response> {
    const headers = this.headerProvider.getRequestHeaders();
    return this.http.delete(this.baseUrl + url, { headers });
  }

}
