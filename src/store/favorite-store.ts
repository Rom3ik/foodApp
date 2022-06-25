import {action, computed, makeObservable, observable} from 'mobx';

export interface IFood {
  id: number;
  name: string;
  image: string;
  count: number;
  price: number | string;
  description: string;
}

class FavoriteStore {
  constructor() {
    makeObservable(this, {
      favoriteList: observable,
      addToFavorite: action,
      deleteFromFavorite: action,
    });
  }

  favoriteList: any[] = [];

  activeStatus(id: number) {
    return this.favoriteList.some(element => {
      return element.id === id;
    });
  }

  addToFavorite(food: any) {
    const isFound = this.favoriteList.some(element => {
      return element.id === food.id;
    });
    if (!isFound) {
      this.favoriteList = [...this.favoriteList, {...food}];
    } else {
      this.deleteFromFavorite(food.id);
    }
  }

  deleteFromFavorite(id: number) {
    this.favoriteList = this.favoriteList.filter(food => food.id !== id);
  }
}

export const favoriteStore = new FavoriteStore();
