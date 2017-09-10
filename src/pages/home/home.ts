import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  private barcodeText:String;
  private barcodeFormat:String;
  private platform:Platform;	
  private navController:NavController;
  dados: any;

  constructor(public navCtrl: NavController, 
    private barcode: BarcodeScanner, 
    private productsProvider: ProductsProvider, 
    platform: Platform) {
    // this.products = this.productsProvider.getProducts();
    this.platform = platform;
    this.navController = navCtrl;
  }  

  ionViewDidLoad() {
    this.products = this.productsProvider.getProducts();
  }

  // addProduct(){
  //   let obj = {id: '12121', nome: 'produto01', preco: 1.50}
  //   this.products.push(obj);
  // }

  doScan(){
    console.log('scannig product barcode');
      this.platform.ready().then(() => {
          this.barcode.scan().then((result) => {
            if (!result.cancelled) {
              this.barcodeText = result.text;
              this.barcodeFormat = result.format;
              this.scanningDone({'text':result.text,'format':result.format});
      }
          }, (error) => {
            console.log('error when scanning product barcode');
          });
      });  		
}
scanningDone(data){
    //this.dados = data;
    //this.navController.push(ScannedPage, {data: data});
    let obj = {id: '12121', nome: 'produto01', preco: 1.50}
    this.products.push(obj);
}

}
