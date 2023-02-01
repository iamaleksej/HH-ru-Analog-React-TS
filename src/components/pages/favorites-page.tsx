import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import SearchBar from '../search-bar';
import VacanciesBar from '../vacancies-bar';

const FavoritesPage: React.FC = () => {
   const { favorites, loading, error } = useTypedSelector(state => state.favoritesData);
   console.log(favorites);

   return (
      <>
         <SearchBar />
         <VacanciesBar
            vacancies={favorites}
            loading={loading}
            error={error}
         />
      </>
   )
}

export default FavoritesPage;
