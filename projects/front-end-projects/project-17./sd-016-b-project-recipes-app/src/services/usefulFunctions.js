export function shareLink(id, setDisable, type) {
  navigator.clipboard.writeText(`http://localhost:3000/${type}/${id}`);
  const TIME = 3000;

  setDisable(false);

  setInterval(() => {
    setDisable(true);
  }, TIME);
}

export function favoriteButton(
  id,
  favorite,
  setFavorite,
  favoriteRecipes,
) {
  const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  let testItems = '';

  if (getLocalStorage) {
    testItems = getLocalStorage.some((item) => item.id === id);
  }

  if (!getLocalStorage) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteRecipes]));
    setFavorite(!favorite);
  } else if (getLocalStorage && !testItems) {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...getLocalStorage, favoriteRecipes]),
    );
    setFavorite(!favorite);
  } else if (testItems) {
    const removeItemStorage = getLocalStorage.filter((item) => item.id !== id);

    localStorage.setItem('favoriteRecipes', JSON.stringify(removeItemStorage));

    setFavorite(!favorite);
  }
}

export const setItemStorage = (key, value) => localStorage
  .setItem(key, JSON.stringify(value));
export const getItemStorage = (key) => JSON.parse(localStorage
  .getItem(key));

export function handleButtonDisplay(
  [arrIngredients, setBtnEnable, setButtonText, id, type],
) {
  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (getInProgressRecipes && getInProgressRecipes[type][id]) {
    const quantityIngredients = arrIngredients.length;
    const quantityInProgress = getInProgressRecipes[type][id].length;

    if (quantityIngredients >= quantityInProgress) {
      setButtonText('Continue Recipe');
    }
  }
  if (getDoneRecipes && getDoneRecipes.some((rec) => rec.id === id)) {
    setBtnEnable(false);
  }
}

export function handleCheckBox([
  id,
  index,
  checked,
  setChecked,
  type,
]) {
  const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (getInProgressRecipes && !checked.includes(index)) {
    setChecked(checked.concat(index));

    Object.assign(getInProgressRecipes[type], { [id]: checked.concat(index) });
    localStorage.setItem('inProgressRecipes', JSON.stringify(getInProgressRecipes));
  } else if (checked.includes(index)) {
    // NOTE - Caso o checkbox tenha sido desmarcado, realiza o filtro para remover a marcação setando o novo array sem o index selecionado no localStorage

    const removeChecked = checked.filter((item) => item !== index);
    setChecked(removeChecked);

    Object.assign(getInProgressRecipes[type], { [id]: removeChecked });
    localStorage.setItem('inProgressRecipes', JSON.stringify(getInProgressRecipes));
  }

  if ((getInProgressRecipes[type] && getInProgressRecipes[type][id]).length === 0) {
    delete getInProgressRecipes[type][id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(getInProgressRecipes));
  }
}

export function handleDoneRecipes(doneRecipes) {
  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (getDoneRecipes.length === 0) {
    localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
  } else if (getDoneRecipes.length > 0) {
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([...getDoneRecipes, doneRecipes]),
    );
  }
}
