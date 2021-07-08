import { Component } from "@angular/core";

@Component({
  selector:'app-grocery',
  templateUrl:'./app.grocery.html',
  styleUrls:['../assets/css/bootstrap.min.css']
})

export class GroceryComponent {
  task = {
    name: '',
    id: 0
  }
  
  tasks: any[]= []


  onClick() {
    console.log("this.task.id::"+this.task.id)
   if(this.task.id == 0) {
     console.log("if")
     this.tasks.push({id:(new Date()).getTime(), name: this.task.name, strike: false })
   }
//clearing input 
   this.task = {
    name: '',
    id: 0
    
};
      console.log("this.task"+this.task)
      console.log(this.tasks)

  }

  onEdit(item: any) {
    console.log("On Edit ;; item"+item.name + item.id);
    console.log("On Edit ;; This.task"+this.task.id);
    this.task = item
  }

  onDelete(item: any){
    for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
            this.tasks.splice(i,1);
            break;
        }
    }
}

onStrike(item: any){
  for(var i = 0;i < this.tasks.length; i++){
    if(item.id == this.tasks[i].id){
      if(this.tasks[i].strike){
        this.tasks[i].strike = false;
      }
      else{
        this.tasks[i].strike = true;
      }
      break;
    }
  }
}

 

}

