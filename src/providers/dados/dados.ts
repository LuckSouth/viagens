import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DadosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DadosProvider Provider');
  }

  private baseURI: string = "http://earhbstfdjygt.tk/";
  public hideForm: boolean = false;

  createEntry(name: string, description: string): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "create", "name": name, "description": description},
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        this.hideForm = true;
      },
      (error: any) => {
        console.log("erro no createEntry")
      });
  }





  despesa(motorista: string, despesa: string, data: string, valor: string): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "despesa","despesa":despesa, "motorista": motorista, "data": data, "valor": valor},
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
      });
  }


}
