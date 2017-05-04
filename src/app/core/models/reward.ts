import { Base } from './base';

export class Reward {
  id: number;
  title: string;
  description: string;
  delivery_date: Date;
  quantity: number;
  amount: number;
  project_id: number;

  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.delivery_date = new Date();
    this.quantity = null;
    this.amount = null;
    this.project_id = null;
  }

}
