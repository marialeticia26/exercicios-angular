import { Component, inject } from '@angular/core';
import { PostsService } from '../formulario-api/services/posts';

@Component({
  selector: 'app-formulario-delete',
  imports: [],
  templateUrl: './formulario-delete.html',
  styleUrl: './formulario-delete.css'
})
export class FormularioDelete {

  protected readonly postsService = inject(PostsService);

  deletarPost(event: SubmitEvent) {
    event.preventDefault();

    const formulario = event.target as HTMLFormElement;

    const dadosFormulario = new FormData(formulario);

    const id = Number(dadosFormulario.get('id'));

    this.postsService.deletarPost(id).subscribe(resposta => {
      console.log(resposta);
    });
  }

}