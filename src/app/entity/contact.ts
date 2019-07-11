
export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  birthAt: Date;
  note: string;
  phones: Array<string>;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = null;
    this.birthAt = null;
    this.note = null;
    this.phones = new Array<string>();
  }
}
