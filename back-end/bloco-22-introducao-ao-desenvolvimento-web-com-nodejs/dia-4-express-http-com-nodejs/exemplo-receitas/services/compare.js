// LINK - https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort

const compare = (a, b) => {
  if (a.name < b.name) {
    return -1;

  } else if (a.name > b.name) {
    return 1;

  }
  return 0;
}

module.exports = compare;