/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0; 
  for (let i = 0; i < preferences.length; i++)
  {
    const first = preferences[i];
    const second = preferences[first-1];
    const third = preferences[second-1];

    if (first !== second && (third -1) == i)
      counter++;
  };
  return counter/3;
};
