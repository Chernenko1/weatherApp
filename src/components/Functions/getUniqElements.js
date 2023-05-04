export const useGetUniqElements = () => {
  const makeUniq = arr => {
    arr = arr.map(d => d.data);
    const uniqueCities = {};

    arr.forEach(item => {
      if (!uniqueCities[item.city]) {
        uniqueCities[item.city] = {...item};
      } else if (item.settlement === uniqueCities[item.city].settlement) {
        uniqueCities[item.city].region += `, ${item.region}`;
      }
    });
    const result = Object.values(uniqueCities);

    return result;
  };
  return {makeUniq};
};
