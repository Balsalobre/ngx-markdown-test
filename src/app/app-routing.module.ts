import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenderComponent } from './components/render/render.component';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';


const routes: Routes = [
  { path: '', component: RenderComponent },
  { path: 'test-pipes', component: TestPipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RenderComponent, TestPipesComponent];
