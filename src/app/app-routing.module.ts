import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from '@app/components/editor/editor.component';

const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/editor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
