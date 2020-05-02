import React from 'react';

import { Cards } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>The next biggest dating app.</h1>
            </div>
        )
    }
}

export default App;