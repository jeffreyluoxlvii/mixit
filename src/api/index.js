import axios from 'axios';

const ingredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const ingredientLookupUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const fetchIngredients = async () => {
    try {
        const { data: { drinks }} = await axios.get(ingredientsUrl);

        return drinks.map((ingredient) => ({ title: ingredient.strIngredient1 }));
    } catch (error) {
        console.log(error);
    }
}

// This takes the union of the ingredient lookup
export const fetchDrinks = async (ingredients) => {
    let drinksArray = [];
    for(let i = 0; i < ingredients.length; i++) {
        try {
            let { data : {drinks} } = await axios.get(`${ingredientLookupUrl}${ingredients[i].title}`);
            drinksArray = [...new Set([...drinksArray, ...drinks])];
        } catch (error) {
            console.log(error);
        }
    }
    return drinksArray;
}