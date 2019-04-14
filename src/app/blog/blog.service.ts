import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly URL_BASE = `${environment.apiURL}/blog`;
  constructor(private http: HttpClient) {}

  /**
   * @description Get all blog posts from the database.
   * @returns APIResponse containing all posts.
   */
  getAll(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
  /**
   * @description Get a specific number of posts from the database.
   * @param N the number of posts to be retrieved.
   * @returns APIResponse containing the number of posts requested.
   */
  getNPosts(N: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}?limit=${N}`);
  }
  getPostByID(ID: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}/${ID}`);
  }
  getPostBySlug(slug: string): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}/${slug}`);
  }
  getPostsByStatus(status: boolean): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}/${status}`);
  }
  createNewPost(post): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.URL_BASE}`, post);
  }
  updateExistingPost(id: number, data: any): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.URL_BASE}/${id}`, data);
  }
  deletePost(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.URL_BASE}/${id}`);
  }
  postBlogImage(img: FormData): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${environment.apiURL}/blog/image`, img);
  }
}
