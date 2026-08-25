import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../post';

@Service()
export class PostsService {

    protected readonly http = inject(HttpClient);

    private readonly url = 'https://jsonplaceholder.typicode.com/posts';

    cadastrarPost(post: Post) {
        return this.http.post(this.url, post);
    }

    atualizarPost(id: number, post: Post) {
        return this.http.put(`${this.url}/${id}`, post);
    }

}