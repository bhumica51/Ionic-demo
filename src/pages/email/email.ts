import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the EmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  base64Image:any;
  imageurl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer,private imagePicker: ImagePicker,public camera:Camera) {

  }
  accessGallery(){
    let options = {
     maximumImagesCount: 8,
     width: 500,
     height: 500,
     quality: 75
   }

   this.imagePicker.getPictures(options).then(
     file_uris => console.log('uh oh',file_uris) ,
     err => console.log('uh oh')
   );
   console.log('uh oh',this.imageurl);
   console.log('uh oh',this.imageurl);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }
sendmail()
{
  this.emailComposer.isAvailable().then((available: boolean) =>{
if(available) {
 //Now we know we can send
}
});

let email = {
to: '',
cc: '',
bcc: ['', ''],
attachments: [
  this.imageurl,
],
subject: 'Cordova Icons',
body: 'How are you? Nice greetings from Leipzig',
isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
}
}
