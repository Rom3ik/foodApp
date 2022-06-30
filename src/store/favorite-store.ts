import {action, computed, makeObservable, observable} from 'mobx';

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
      return element.idMeal === id;
    });
  }

  addToFavorite(food: any) {
    const isFound = this.favoriteList.some(element => {
      return element.idMeal === food.idMeal;
    });
    if (!isFound) {
      this.favoriteList = [...this.favoriteList, {...food}];
    } else {
      this.deleteFromFavorite(food.idMeal);
    }
  }

  deleteFromFavorite(id: number) {
    this.favoriteList = this.favoriteList.filter(food => food.idMeal !== id);
  }
}

export const favoriteStore = new FavoriteStore();
