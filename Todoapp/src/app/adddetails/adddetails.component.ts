import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoappService } from '../todoapp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent {

  constructor(private todoservice:TodoappService, private router:Router) {}
  todoDetails={
    description:'',
    status:''
    }

  addtodoList(){
  
    this.todoservice.addTodoList(this.todoDetails).subscribe(res=>{
     
    alert('Todo List added successfully');
    this.router.navigate(['/']);
  })
}
}
