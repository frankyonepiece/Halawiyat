import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContentPage } from '../../pages/content/content'
import { FileProvider } from '../../providers/file/file';


@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})

export class List2Page {

  search;

  Title:String;
  
  public items:any;
  position:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams , private File:FileProvider) {
    this.getInfo(); 
  }

  

  getInfo(){
    this.position = this.navParams.get("pass");
    
    this.File.getData()
    .subscribe(data => {

      var count = Object.keys(data.list[this.position].array).length;
      
      let tems=new Array();
      this.Title = data.list[this.position].title;

      for(let i=0;i<count;i++)
      {
    
        tems.push(data.list[this.position].array[i]);
  
      }
      this.items=tems;
      console.log(this.items);
    });
  }


  nextPage( index ){
    this.navCtrl.push(ContentPage,{position_1:this.position , position_2:index });
  }
  

}

