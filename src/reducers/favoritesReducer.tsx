import { FavoritesAction, FavoritesActionTypes, FavoritesState } from "../components/types"

const initialState: FavoritesState = {
   favorites: [],
   loading: false,
   error: null
}

export const favoritesReducer = (state = initialState, action: FavoritesAction): FavoritesState => {
   // console.log(state.Favorites)

   switch (action.type) {
      case FavoritesActionTypes.FETCH_FAVORITES:
         return {
            favorites: [],
            loading: true,
            error: null
         }
      case FavoritesActionTypes.FETCH_FAVORITES_SUCCESS:
         return {
            favorites: action.payload,
            loading: false,
            error: null
         }
      case FavoritesActionTypes.FETCH_FAVORITES_ERROR:
         return {
            favorites: [],
            loading: false,
            error: action.payload
         }
      default:
         return state;
   }

}
