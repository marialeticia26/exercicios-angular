import { Component, inject } from '@angular/core';
import { Post } from './post';
import { PostsService } from './services/posts';

@Component({
  selector: 'app-formulario-api',
  imports: [],
  templateUrl: './formulario-api.html',
  styleUrl: './formulario-api.css'
})
export class FormularioApi {

  protected readonly postsService = inject(PostsService);

  enviarFormulario(event: SubmitEvent) {
    event.preventDefault();

    const formulario = event.target as HTMLFormElement;

    const dadosFormulario = new FormData(formulario);

    const post: Post = {
      userId: Number(dadosFormulario.get('userId')),
      title: String(dadosFormulario.get('title')),
      body: String(dadosFormulario.get('body'))
    };

    this.postsService.cadastrarPost(post).subscribe(resposta => {
      console.log(resposta);
    });
  }

}