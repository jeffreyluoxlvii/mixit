import axios from 'axios';

const urlIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export const fetchIngredient = async () => {
    try {
        const { data } = await axios.get(urlIngredient);

        const ingredients = {
            drinksIng: data.drinks
        }

        return ingredients;
    } catch (error) {
        console.log(error);
    }
}