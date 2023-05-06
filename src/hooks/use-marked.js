import {useSelector} from 'react-redux';

export const useMarked = qname => {
  const data = useSelector(state => state.favourite.favourites);
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === qname) {
      return true;
    }
  }
  return false;
};
