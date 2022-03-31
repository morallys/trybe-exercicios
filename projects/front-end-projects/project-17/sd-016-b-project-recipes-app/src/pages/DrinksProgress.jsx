import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { fetchDrinks } from '../services/fetchAPI';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/recipeProgress.css';
import Context from '../context/Context';

import {
  shareLink,
  favoriteButton,
  handleCheckBox,
  setItemStorage,
  getItemStorage,
  handleDoneRecipes,
} from '../services/usefulFunctions';

export default function DrinksProgress() {
  const { pathname } = useLocation();
  const { push } = useHistory();

  let drinksIngredients = [];
  let ingredientsMeasure = [];

  const {
    dataDrinksDetails,
    setDataDrinksDetails,
  } = useContext(Context);

  const [favorite, setFavorite] = useState(false);
  const [disable, setDisable] = useState(true);
  const [checked, setChecked] = useState([]);

  const {
    strDrinkThumb,
    idDrink,
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic,
  } = dataDrinksDetails;

  const favoriteRecipes = {
    id: idDrink,
    type: 'drink',
    nationality: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
  };

  const ID = pathname.split('/')[2];

  useEffect(() => {
    async function fetchDrinkstate() {
      const details = await fetchDrinks(`lookup.php?i=${ID}`);
      setDataDrinksDetails(details[0]);
    }
    fetchDrinkstate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const inProgressRecipes = getItemStorage('inProgressRecipes');

    if (!inProgressRecipes) {
      setItemStorage('inProgressRecipes', {
        cocktails: {},
        meals: {},
      });
    }
  }, []);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocalStorage.cocktails[idDrink]) {
      setChecked(getLocalStorage.cocktails[idDrink]);
    }
  }, [idDrink]);

  if (dataDrinksDetails) {
    drinksIngredients = Object.entries(dataDrinksDetails).filter(
      (ingredient) => ingredient[0].includes('strIngredient')
        && ingredient[1] !== null
        && ingredient[1] !== '',
    );

    ingredientsMeasure = Object.entries(dataDrinksDetails).filter(
      (measure) => measure[0].includes('strMeasure')
        && measure[1] !== null
        && measure[1] !== '',
    );
  }

  function setDate() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  const doneRecipes = {
    id: idDrink,
    type: 'drink',
    nationality: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
    doneDate: setDate(),
    tags: [],
  };

  function handleClick() {
    const getDoneRecipes = getItemStorage('doneRecipes');
    if (!getDoneRecipes) {
      setItemStorage('doneRecipes', []);
    }
    handleDoneRecipes(doneRecipes);
    push('/done-recipes');
  }

  return (
    <div>
      {dataDrinksDetails && (
        <div>
          <div className="div-thumbnail">
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid="recipe-photo"
              className="thumbnail"
            />
          </div>
          <div className="group-title">
            <h1 data-testid="recipe-title">{strDrink}</h1>
            <div
              role="presentation"
              onClick={ () => favoriteButton(
                idDrink,
                favorite,
                setFavorite,
                favoriteRecipes,
              ) }
            >
              <img
                className="favoriteIcon"
                type="image/svg+xml"
                alt="Favorite"
                data-testid="favorite-btn"
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
              />
            </div>
            <div
              role="presentation"
              onClick={ () => shareLink(idDrink, setDisable) }
            >
              <img
                className="shareIcon"
                type="image/svg+xml"
                alt="Share Icon"
                data-testid="share-btn"
                src={ shareIcon }
                hidden={ !disable }
              />
            </div>
            <span hidden={ disable }>
              {/* <img src={ linkCopied } alt="Link copied!" /> */}
              Link copied!
            </span>
          </div>

          <p data-testid="recipe-category">{strCategory}</p>

          <p data-testid="instructions">{strInstructions}</p>

          <h2>Ingredients</h2>
          <ul>
            {drinksIngredients.length > 0
              && drinksIngredients.map((ingredient, index) => {
                const isChecked = checked.includes(index);
                return (
                  <div key={ index }>
                    <label
                      htmlFor={ `${index}-ingredient-step` }
                      data-testid={ `${index}-ingredient-step` }
                    >
                      <input
                        type="checkbox"
                        id={ `${index}-ingredient-step` }
                        className="strikethrough"
                        onChange={ () => handleCheckBox([
                          idDrink,
                          index,
                          checked,
                          setChecked,
                          'cocktails',
                        ]) }
                        defaultChecked={ isChecked }
                      />
                      <span>
                        {ingredient[1]}
                        {ingredientsMeasure[index]
                          && ` - ${ingredientsMeasure[index][1]}`}
                      </span>
                    </label>
                  </div>
                );
              })}
          </ul>

          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ drinksIngredients.length !== checked.length }
            onClick={ () => handleClick() }
          >
            Finish Recipe
          </button>
        </div>
      )}
    </div>
  );
}
