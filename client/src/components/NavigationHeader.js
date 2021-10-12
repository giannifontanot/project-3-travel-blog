import React from 'react';
import './assets/css/style2.css';
import './assets/css/purecssframework.css';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavigationHeader({pageToDraw, handlePageChange}) {
    return (
        <>
            <header>
                <nav className="nav-container-top">
                    <table className="nav-table vred">
                        <tr>
                            <td className={pageToDraw === 'CreateReview' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('CreateReview')}><div className="cell-menu">Create Review</div>
                                </a>
                            </td>
                            <td className={pageToDraw === 'Dashboard' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('Dashboard')}><div className="cell-menu">Dashboard</div>
                                </a>
                            </td>
                        </tr>
                    </table>
                </nav>
            </header>
        </>
    );
}

export default NavigationHeader;
