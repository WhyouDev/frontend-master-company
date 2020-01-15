import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script.service';
// import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private dynamicScriptloader : DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts()
  }
  public loadScripts(){
  // You can load multiple scripts by just providing the key as argument into load method of the service
  this.dynamicScriptloader.load('Bootstrap','Common').then(data => {
  }).catch(error => console.log(error));
  }

}
