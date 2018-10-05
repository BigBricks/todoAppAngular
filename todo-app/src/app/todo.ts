export class Todo {
  _id: number;
  title: string;
  complete: boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
