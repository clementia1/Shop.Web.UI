import React, { useEffect } from 'react';
import {useHistory, useLocation, Switch, Route} from 'react-router-dom';
import {AuthProvider} from 'oidc-react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {orange, purple, green} from '@material-ui/core/colors';
import IndexPage from "./pages/IndexPage.jsx";
import ProductPage from './pages/ProductPage.jsx';
import './scss/app.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: green[400]
        },
        secondary: {
            main: green[800]
        },
        background: {
            default: '#f3f4f9'
        }
    },
    typography: {
        fontFamily: [
            'Montserrat',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        fontWeightRegular: 500
    }
});

const useStyles = makeStyles((theme) => ({
    app: {
        background: theme.palette.background.default
    }
}));

function App() {    
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    return (
        <AuthProvider
            onSignIn={() => {
                history.replace(location.pathname);
            }}
            authority={process.env.AUTHORITY}
            clientId={process.env.CLIENT_ID}
            redirectUri={process.env.REDIRECT_URI}
            response_type='code'
            scope='openid profile website.com'
            autoSignIn={false}>
            <ThemeProvider theme={theme}>
                <div className={classes.app}>
                    <Switch>
                        <Route exact path="/">
                            <IndexPage/>
                        </Route>
                        <Route exact path="/:slug">
                            <ProductPage/>
                        </Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
