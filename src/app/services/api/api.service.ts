import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Coffe', price: 700, category: 'INDIA', img: 'assets/imgs/aloe.jpg' },
    { id: 2, name: 'Coffe white', price: 500, category: 'INDIA', img: 'assets/imgs/2.png' },
    { id: 3, name: 'Coffe black', price: 700, category: 'Brazil', img: 'assets/imgs/3.jpg' },
  ];

  constructor() { }

  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
