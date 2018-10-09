import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'problems',
		pathMatch: 'full'
		//redi: '',

	},
	{
		//see alll problems
		path: 'problems',
		component: ProblemListComponent
	},
	{
		//only see specified component
		path:'problems/:id',
		component: ProblemDetailComponent
	},
	{
		path: '**',
		redirectTo: 'problems'
	}
];

export const routing = RouterModule.forRoot(routes);
