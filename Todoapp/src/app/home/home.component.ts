import { Component, OnInit } from '@angular/core';
import { TodoappService } from '../todoapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(private todoservice:TodoappService) {}

  items:any;
  todoData: any = {};

  ngOnInit() {
    this.todoservice.getTodoList().subscribe((data=>{
      this.items=data;
      // this.applyFilter();
    }))
  }

  deletetodoList(id: string) {
    this.todoservice.getDataById(id).subscribe(
      (response) => {
        this.todoData = response;
        if (confirm('Are you sure you want to delete this TodoList?')) { 
          this.todoservice.deletetodoList(this.todoData._id).subscribe(
            () => {
              console.log('TodoList deleted successfully.');
              window.location.reload();
            },
            (error) => {
              console.error('Error deleting TodoList:', error);
            }
          );
        }  
      }
    );  
  }

  updateStatus(item: any) {
    if (item.status === 'Completed') {
      item.status = 'Ongoing';
    } else {
      item.status = 'Completed';
    }
  }
}
