import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  menuHam(_el){
    if(_el.currentTarget.parentElement.childNodes[0].childNodes[1].style.display === "block")    {
      _el.currentTarget.parentElement.childNodes[0].childNodes[1].removeAttribute("style");
    }
    else{
      _el.currentTarget.parentElement.childNodes[0].childNodes[1].style.display = "block";
    }
  }
 }
