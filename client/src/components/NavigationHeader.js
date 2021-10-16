import React from 'react';
import './assets/css/style2.css';
import './assets/css/purecssframework.css';
import {Link} from 'react-router-dom';
import {NavLink, useLocation} from 'react-router-dom';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavigationHeader() {

    const location = useLocation();
    const {pathname} = location;
    const  splitLocation  = pathname.split('/');
     console.log("---> splitLocation :" + (splitLocation[1]) );


    return (
        <>
            <header className="header-blue">
                <nav className="nav-container-top">
                    <table className="nav-table ">
                        <tr className="menu-row">
                            <td>
                                <NavLink activeClassName="nav-table-cell-active" className="nav-table-cell" to="/logout">
                                    Logout
                                </NavLink>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <NavLink activeClassName="nav-table-cell-active" className="nav-table-cell"  to="/createReview">
                                    Create Review
                                </NavLink>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <NavLink activeClassName="nav-table-cell-active" className={splitLocation[1]===""?"nav-table-cell-active":"nav-table-cell"}  to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </td>
                            <td>
                                <NavLink activeClassName="nav-table-cell-active" className="nav-table-cell"  to="/about">
                                    About
                                </NavLink>
                            </td>
                        </tr>
                    </table>
                </nav>
            </header>
        </>
    );
}

// <td className={activePage === 'CreateReview' ? 'nav-table-cell-active' : 'nav-table-cell'}>
export default NavigationHeader;
