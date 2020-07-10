import { Component, OnInit } from '@angular/core';
import { CepService } from '../CepService.service';
import { MessageService } from '../MessageService.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})
export class SearchCepComponent implements OnInit {
  CepResults = [];

  constructor(
    private cepService: CepService,
    private msgService: MessageService,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  onSubmit(cep) {
    if (cep.value)
    {
      this.http.get<any>('https://api-cep-node.herokuapp.com/api/v1/cep/' + cep.value).subscribe(
        data =>
        {
          this.CepResults = [];
          this.CepResults = data;
        },
        error => this.msgService.add(error.message)
      );
    } else { this.CepResults = []; }
  }
}
