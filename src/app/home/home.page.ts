import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  message : string = '';

  constructor(private toastCtrl: ToastController) {}

  onCalculate(){

    if(this.height === 0 || this.weight ===0 ){
      this.message = `Não é possível calcular o IMC com alguns dos valores sendo igual a 0`;
      this.showIMC(this.message);
    }else{
      let classificacao : string = '';
      let imc : number = this.weight/(this.height*this.height);

      
      if(imc <= 18.5){
          classificacao = 'Abaixo do Peso / Magreza';
      }else if (imc <= 24.9){
          classificacao = 'Peso Ideal/ Normal';
      }else if (imc <= 29.9){
          classificacao = 'Levemente Acima do Peso / Sobrepeso';
      }else if (imc <= 39.9){
          classificacao = 'Obesidade ';
      }else if (imc >= 40.0){
          classificacao = 'Obesidade Grave (Mórbida)';
      }
      this.message = `Seu IMC é de ${imc.toFixed(2)} e é classificado como ${classificacao}`;
      this.showIMC(this.message);
    }
  }

  async showIMC(message : string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}
