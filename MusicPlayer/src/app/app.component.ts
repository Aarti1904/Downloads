import { HtmlParser } from '@angular/compiler';
import { Component, ɵɵstylePropInterpolateV } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MusicPlayer';
  
  employee={id:"1", name:"ABC"}

  myarray=["hello","hii"];
  


printdata(){
  return "Data visible using function!!!";
}
}
