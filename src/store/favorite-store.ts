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

  addToFavorite(food: any) {
    const isFound = this.favoriteList.some(element => {
      return food.id === element.id;
    });
    if (!isFound) {
      this.favoriteList = [...this.favoriteList, {...food}];
    }
  }

  deleteFromFavorite(id: number) {
    this.favoriteList = this.favoriteList.filter(food => food.id !== id);
  }
}

export const favoriteStore = new FavoriteStore();
