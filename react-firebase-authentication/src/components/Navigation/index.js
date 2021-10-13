import React from 'react';
import * as ROUTES from '../../constants/routes';
// link is like anchor tag in html
import {Link} from 'react-router-dom';

const Navigation =()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign in</Link>
                </li>

                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>

                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>

                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>

                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>


            </ul>
        </div>
    )
}

export default Navigation;