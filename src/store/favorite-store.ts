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
  isActive = false;
  constructor() {
    makeObservable(this, {
      favoriteList: observable,
      addToFavorite: action,
      deleteFromFavorite: action,
      activeStatus: computed,
    });
  }

  favoriteList: any[] = [];

  get activeStatus() {
    return this.isActive;
  }

  addToFavorite(food: any) {
    this.isActive = !this.isActive;
    const isFound = this.favoriteList.some(element => {
      return food.id === element.id;
    });
    if (!isFound) {
      if (!this.isActive) {
        this.favoriteList = [...this.favoriteList, {...food}];
      } else {
        this.favoriteList.filter(item => {
          if (item.id === food.id) {
          }
        });
      }
    }
  }

  deleteFromFavorite(id: number) {
    this.favoriteList = this.favoriteList.filter(food => food.id !== id);
  }
}

export const favoriteStore = new FavoriteStore();
