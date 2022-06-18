import {action, computed, makeObservable, observable} from 'mobx';

export interface IFood {
  id: number;
  name: string;
  image: string;
  count: number;
  price: number | string;
}

class Store {
  foodList: any[] = [];

  constructor() {
    makeObservable(this, {
      foodList: observable,
      addFood: action,
      deleteFood: action,
      count: computed,
    });
  }

  addFood(food: IFood) {
    this.foodList = [...this.foodList, {...food}];
    console.log(this.foodList);
  }

  deleteFood(id: number) {
    this.foodList = this.foodList.filter(food => food.id !== id);
  }

  get count() {
    return this.foodList.length;
  }
}

export const foodStore = new Store();
