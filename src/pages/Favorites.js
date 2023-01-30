import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>즐겨찾기가 없어요.</p>
      ) : (
        <MeetupList items={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default Favorites;
