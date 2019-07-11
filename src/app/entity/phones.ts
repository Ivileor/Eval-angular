export class Phones {

  id: number;
  number: string;
  type: string;
  person: string;


  constructor(num: string, typeNum: string) {
    this.id = null;
    this.number = num;
    this.type = typeNum;
    this.person = null;
  }
}
