import axios from 'axios';

const ingredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const ingredientLookupUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const drinkLookupUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchIngredients = async () => {
    try {
        const { data: { drinks }} = await axios.get(ingredientsUrl);

        return drinks.map((ingredient) => ({ title: ingredient.strIngredient1 }));
    } catch (error) {
        console.log(error);
    }
}

// This takes the union of the ingredient lookup
export const fetchDrinksUnion = async (ingredients) => {
    let drinksArray = [];
    for(let i = 0; i < ingredients.length; i++) {
        try {
            let { data : {drinks} } = await axios.get(`${ingredientLookupUrl}${ingredients[i].title}`);
            console.log("DRINK");
            console.log(drinks);
            drinksArray = [...new Set([...drinksArray, ...drinks])];
            console.log(drinksArray);
        } catch (error) {
            console.log(error);
        }
    }
    return drinksArray;
}

// Do we care about intersection? 
export const fetchDrinksIntersection = async (ingredients) => {
    let drinksArray = [];
    for(let i = 0; i < ingredients.length; i++) {
        try {
            let { data : {drinks} } = await axios.get(`${ingredientLookupUrl}${ingredients[i].title}`);
            if(i == 0) {
                drinksArray = [...new Set([...drinksArray, ...drinks])];
            }
            else {
                console.log("filtering");
                drinksArray.forEach(function(drink) {
                    console.log(`DRINK: ${drink}`);
                    console.log(drinks.includes(drink));
                });
                drinksArray = drinksArray.filter(drink => drinks.includes(drink)); 
            }
        } catch (error) {
            console.log(error);
        }
    }
    return drinksArray;
}

// This returns the data about a specific drink
export const fetchDrinkData = async (drink) => {
    try {
        const { data : {drinks} } = await axios.get(`${drinkLookupUrl}${drink}`);
        return drinks;
    } catch (error) {
        console.log(error);
    }
}