import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

//arrow function
//asynchronous function
export const fetchData = async () => {
    try  {
        const { data : { drinks }} = await axios.get(url);
        const modifiedData = {
            drinks,
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}