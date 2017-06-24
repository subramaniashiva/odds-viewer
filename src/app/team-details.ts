export class TeamDetails {
  id: number;
  name: string;
  exchanges: Array<Object>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
