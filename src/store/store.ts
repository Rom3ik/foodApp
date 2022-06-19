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
      totalOrderSum: computed,
    });
  }

  addFood(food: IFood) {
    const isFound = this.foodList.some(element => {
      return food.id === element.id;
    });
    if (!isFound) {
      this.foodList = [...this.foodList, {...food}];
    } else {
      this.foodList.map(item => {
        item.count += food.count;
      });
    }
  }

  deleteFood(id: number) {
    this.foodList = this.foodList.filter(food => food.id !== id);
  }

  get count() {
    return this.foodList.length;
  }

  get totalOrderSum() {
    let totalSum;
    this.foodList.forEach(element => {
      totalSum = element.price * element.count;
    });
    return totalSum;
  }
}

export const foodStore = new Store();
