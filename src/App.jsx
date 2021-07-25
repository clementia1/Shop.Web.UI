import React, { useEffect } from 'react';
import {useHistory, useLocation, Switch, Route} from 'react-router-dom';
import {AuthProvider} from 'oidc-react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {orange, purple, green} from '@material-ui/core/colors';
import {CssBaseline} from '@material-ui/core';
import Topbar from './containers/Topbar.jsx';
import IndexPage from "./pages/IndexPage.jsx";
import ProductPage from './pages/ProductPage.jsx';
import { CLIENT_ID, AUTHORITY, REDIRECT_URI } from './config.js';
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
            default: '#fafafa', // #f3f4f9
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
            authority={AUTHORITY}
            clientId={CLIENT_ID}
            redirectUri={REDIRECT_URI}
            response_type='code'
            scope='openid profile website.com'
            autoSignIn={false}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.app}>
                    <Topbar/>
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
