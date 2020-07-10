export class Cep {
  id: number;
  cep: string;
  cidadeUf: string;
  bairro: string;
  localidade: string;

constructor(cep) {
        this.id = cep.id;
        this.cep = cep.cep;
        this.cidadeUf = cep.cidadeUf;
        this.bairro = cep.bairro;
        this.localidade = cep.localidade;
  }
}
