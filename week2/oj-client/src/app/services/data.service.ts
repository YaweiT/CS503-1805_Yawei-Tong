import { Injectable } from '@angular/core';
import {Problem} from '../components/models/problem.model';
import {PROBLEMS} from '../mock-problems';


@Injectable({
  providedIn: 'root'
})
export class DataService {
	problems : Problem[] = PROBLEMS;


  constructor() { }

  //get all the problems
  getProblems():Problem[]{
  	return this.problems;
  }

  //get specified problem by ID
  getProblem(id: number):Problem{
  	return this.problems.find((problem) => problem.id === id)
  }

  addProblem(problem:Problem){
    problem.id=this.problems.length +1;
    this.problems.push(problem);
  }


}
