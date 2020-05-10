import axios from 'axios';

const ingredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const drinkFetchUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ingredientLookupUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const fetchIngredients = async () => {
    try {
        const { data: { drinks }} = await axios.get(ingredientsUrl);

        return drinks.map((ingredient) => ({ title: ingredient.strIngredient1 }));
    } catch (error) {
        console.log(error);
    }
}

export const fetchDrinksTest = async () => {
    const ingredient = "Vodka"
    try {
        const { data : {drinks} } = await axios.get(`${drinkFetchUrl}${ingredient}`);
        return drinks;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDrinksArrayTest = async () => {
    let drinksArray = [];
    for(let i = 0; i < ingredientArray.length; i++) {
        try {
            let { data : {drinks} } = await axios.get(`${ingredientLookupUrl}${ingredientArray[i]}`);
            drinksArray = [...new Set([...drinksArray, ...drinks])];
        } catch (error) {
            console.log(error);
        }
    }
    return drinksArray;
}

// This takes the union of the ingredient lookup
export const fetchDrinks = async (ingredients) => {
    let drinksArray = [];
    for(let i = 0; i < ingredients.length; i++) {
        try {
            let { data : {drinks} } = await axios.get(`${ingredientLookupUrl}${ingredients[i]}`);
            drinksArray = [...new Set([...drinksArray, ...drinks])];
        } catch (error) {
            console.log(error);
        }
    }
    return drinksArray;
}

const ingredientArray = ["Vodka", "Tea", "Lime"];