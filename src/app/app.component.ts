import { Component, OnInit } from '@angular/core';
import { PowerbiService } from './powerbi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'resolvers';

  constructor(private service: PowerbiService){}
  
  ngOnInit(){
    let obj = {
      "grant_type" : "password",
      "username" : "DCW678@motorolasolutions.com",
      "password" : "N@resh.R@ddy#1607#77777",
      "resource" : "https://analysis.windows.net/powerbi/api",
      "client_secret" : "_DQybyIWHI~YxTx326Z-Y~D.c8WT5-235i",
      "client_id" : "0b205881-1a59-4544-99a3-b3f0fb3e04a6" 
    };
    this.service.getAccessToken(obj).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
