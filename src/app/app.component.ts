// Angular imports
import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title:string;
  constructor(private router:Router, private route:ActivatedRoute) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.title = route.firstChild.snapshot.data.title;
      }
    });
  }
}