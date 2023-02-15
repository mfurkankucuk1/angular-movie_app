import { Component,OnInit  } from '@angular/core';
import { RESTAPIServiceService } from './restapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {


  repos:any
  title = 'MovieApp';
  constructor(private service:RESTAPIServiceService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(){
    this.service.getProducts()
    .subscribe(
      (response) => {                           //next() callback
    
        this.repos = response; 
        console.log(response)
      })
  }
  
}
