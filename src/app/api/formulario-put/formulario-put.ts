import { Component, inject } from '@angular/core';
import { Post } from '../formulario-api/post';
import { PostsService } from '../formulario-api/services/posts';

@Component({
  selector: 'app-formulario-put',
  imports: [],
  templateUrl: './formulario-put.html',
  styleUrl: './formulario-put.css'
})
export class FormularioPut {

  protected readonly postsService = inject(PostsService);

  atualizarPost(event: SubmitEvent) {
    event.preventDefault();

    const formulario = event.target as HTMLFormElement;

    const dadosFormulario = new FormData(formulario);

    const id = Number(dadosFormulario.get('id'));

    const post: Post = {
      userId: Number(dadosFormulario.get('userId')),
      title: String(dadosFormulario.get('title')),
      body: String(dadosFormulario.get('body'))
    };

    this.postsService.atualizarPost(id, post).subscribe(resposta => {
      console.log(resposta);
    });

  }

}