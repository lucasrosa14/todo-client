import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor() { }

  async formatResponse(response: Response): Promise<any> {
    if (response) {
      return JSON.parse(await response.text());
    } else {
      return "";
    }
  }

  private async request(url: string, method: string, headers?: HttpHeader, body?: string): Promise<HttpResponse> {
    const header: HeadersInit = {
      "Content-Type": (headers) ? headers.contentType : "",
    };
  
    const response = await fetch(url, {
      method: method,
      headers: header,
      body
    })

    const httpResponse: HttpResponse = {
      body: await this.formatResponse(response)
    };

    return httpResponse;
  }

  public async get(url: string, headers?: HttpHeader): Promise<HttpResponse> {
    return await this.request(url, Constants.HTTP_GET_METHOD, headers);
  }

  public async post(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse> {
    return await this.request(url, Constants.HTTP_POST_METHOD, headers, body);
  }
  
  public async put(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse> {
    return await this.request(url, Constants.HTTP_PUT_METHOD, headers, body);
  }

  public async delete(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse> {
    return await this.request(url, Constants.HTTP_DELETE_METHOD, headers, body);
  }
}

export interface HttpHelper {
  get(url: string, headers?: HttpHeader): Promise<HttpResponse>;
  post(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse>;
  put(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse>;
  delete(url: string, headers?: HttpHeader, body?: string): Promise<HttpResponse>;
}

export interface HttpHeader {
  contentType: string,
  AcessControlAllowOrigin: any
}

export interface HttpResponse {
  body: any
}

export class Constants {
  static readonly ENVIRONMENT = 'ENV';
  static readonly PRODUCTION_ENV = 'production';
  
  static readonly HTTP_POST_METHOD = 'POST';
  static readonly HTTP_GET_METHOD = 'GET';
  static readonly HTTP_DELETE_METHOD = 'DELETE';
  static readonly HTTP_PUT_METHOD = 'PUT';
}