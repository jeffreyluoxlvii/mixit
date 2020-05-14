import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

//imports from components
import { Main, Landing, Result } from './pages';
//import styles
import styles from './App.module.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#2B2D42',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#EAF2EF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: [
            'Ubuntu',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
      },
});

class App extends React.Component {
    state = {
        selectedIngredients: [],
    }

    onTagsChange = (event, values) => {
        this.setState({
          selectedIngredients: values
        }, () => {
          console.log(this.state.selectedIngredients);
        });
    }

    render() {
        return (
            <main>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/" component={Landing} exact />
                        <Route path="/main" render={(props) => <Main {...props} tagChange={this.onTagsChange} />} />
                        <Route path="/result" component={Result} />
                    </Switch>
                </ThemeProvider>
            </main>
        )
    }
}

export default App;