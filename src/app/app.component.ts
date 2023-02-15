import { Component,OnInit  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RESTAPIServiceService } from './restapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {


  repos:any;
  constructor(private service:RESTAPIServiceService,
    private title: Title) {
      title.setTitle('MoveApp');
    }

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
