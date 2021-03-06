import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

// you can import the whole folder to access the index.js file
//we are import components to be rendered
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = ()=>{
    return (
        <Router>
            {/* navigation create navigation with anchor [Link to] */}
            <Navigation/>
            <hr/>

            {/* when we click anchor tag, what to render when path is what */}
            <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route exact path={ROUTES.ADMIN} component={AdminPage}/>

        </Router>
    )
}

export default App;