import { Dispatch } from "redux";
import axios from "axios";
import { FavoritesAction, FavoritesActionTypes } from "../components/types";
let favoritesArr: any[] = [];


export const fetchFavorites = (id: number) => {
   return async (dispatch: Dispatch<FavoritesAction>) => {
      try {
         dispatch({ type: FavoritesActionTypes.FETCH_FAVORITES })
         const response = await axios.get(`https://api.hh.ru/vacancies/${id}`)
         let check: Boolean = false
         favoritesArr.map((item, index) => {

            if (item.id === id) {
               check = true
               favoritesArr.splice(index, 1)
            }
         })
         if (!check) {
            favoritesArr.push(response.data)
         }


         dispatch({ type: FavoritesActionTypes.FETCH_FAVORITES_SUCCESS, payload: favoritesArr })
      } catch (e) {
         dispatch({
            type: FavoritesActionTypes.FETCH_FAVORITES_ERROR,
            payload: 'Произошла ошибка при загрузке вакансии'
         })
      }
   }
}