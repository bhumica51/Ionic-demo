import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PushnotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  hideline:boolean = true;
  hidepie:boolean = true;
  hidebar:boolean = true;

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';


  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions:any = {
  responsive: true
};
public lineChartColors:Array<any> = [
  { // grey
    backgroundColor: 'rgba(226,93,138,0.2)',
    borderColor: 'rgba(226,93,138,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(49, 181, 210,0.2)',
    borderColor: 'rgba(49, 181, 210,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';




//barchart
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];



public randomize():void {
  // Only Change 3 values
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
}

//piechart

// events


  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }
  ngIfCtrl(event){
    console.log("event.srcElement.name ",event.srcElement.id )

    if(event.srcElement.id == "line")
    {
      this.hideline = false;
      this.hidebar = true;
      this.hidepie = true;


    }
    else if(event.srcElement.id == "bar")
    {
      this.hidebar = false;
      this.hideline = true;
      this.hidepie = true;

    }
    else if (event.srcElement.id == "pie"){
      this.hidebar = true;
      this.hideline = true;
      this.hidepie = false;


    }


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PushnotificationPage');
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
