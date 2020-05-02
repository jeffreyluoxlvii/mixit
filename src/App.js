import React from 'react';

//imports from components
import { NavSideBar } from './components';
//import styles
import styles from './App.module.css';

//Cocktail data
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data : {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData });
    }
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <NavSideBar />
                {/*<h1>Drink-Match.</h1>
                <Cards data ={data}/>*/}
            </div>
        )
    }
}

export default App;