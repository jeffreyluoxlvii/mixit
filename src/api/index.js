import axios from 'axios';

const ingredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const drinkFetchUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

export const fetchIngredients = async () => {
    try {
        const { data: { drinks }} = await axios.get(ingredientsUrl);

        return drinks.map((ingredient) => ({ title: ingredient.strIngredient1 }));
    } catch (error) {
        console.log(error);
    }
}

export const fetchDrinks = async () => {
    try {
        const { data : {drinks} } = await axios.get(drinkFetchUrl);
        return drinks;
    } catch (error) {
        console.log(error);
    }
}