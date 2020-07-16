import { Component, OnInit } from '@angular/core';
import { CepService } from '../CepService.service';
import { MessageService } from '../MessageService.service';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Cep } from './../Cep';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})

export class SearchCepComponent implements OnInit {

  searchForm: FormGroup;

  CepResults = [];

  constructor(
    private cepService: CepService,
    private msgService: MessageService,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchkind: new FormControl(),
      filter: new FormControl()
     });
  }

  // tslint:disable-next-line: typedef
  onSubmit() {

    let endpoint = '';

    //const kind = this.searchForm.controls['"searchkind'].value;
    //const filter =  this.searchForm.controls['"filter'].value;

    const kind = this.searchForm.get('searchkind');
    const filter = this.searchForm.get('filter');

    if (kind.value === 'cep') {
      endpoint = 'https://api-cep-node.herokuapp.com/api/v1/cep/' + filter.value;
    } else
    if (kind.value === 'bairro') {
      endpoint = 'https://api-cep-node.herokuapp.com/api/v1/bairro/' + filter.value;
    } else
    if (kind.value === 'cidade') {
      endpoint = 'https://api-cep-node.herokuapp.com/api/v1/cidade/' + filter.value;
    } else
    if (kind.value === 'localidade') {
      endpoint = 'https://api-cep-node.herokuapp.com/api/v1/localidade/' + filter.value;
    }

    if (kind.value && endpoint && filter)
    {
      this.http.get<any>(endpoint).subscribe(
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
