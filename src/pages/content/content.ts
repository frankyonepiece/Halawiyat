import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FileProvider } from '../../providers/file/file';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

 
    getP1:any;
    getP2:any;
  

  public items:any;
  BG:any;
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , private File:FileProvider) {
    this.leadDataFromList2();
    this.getInfo();
    console.log(this.getP1+" "+this.getP2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

  leadDataFromList2(){
   
      this.getP1 = this.navParams.get("position_1");
      this.getP2 = this.navParams.get("position_2");
   
  }


  getInfo(){
    
    
    this.File.getData()
    .subscribe(data => {

      var count = Object.keys(data.list[this.getP1].array[this.getP2].content.makadir).length;
      
      let tems=new Array();
      this.BG = "url(\'"+data.list[this.getP1].array[this.getP2].content.imgMkadir+"\')";
      console.log(data.list[this.getP1].array[this.getP2].content);

      this.title = data.list[this.getP1].array[this.getP2].title;
      
      for(let i=0;i<count;i++)
      {
    
        tems.push(data.list[this.getP1].array[this.getP2].content.makadir[i]);
  
      }
      this.items=tems;
      
    });
  }

}
