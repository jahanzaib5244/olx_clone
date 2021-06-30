import React from 'react';
import './navbar.css';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchField from "react-search-field";
import { Link } from 'react-router-dom';
import { useDispatch     } from "react-redux";
import { doLogout } from '../../store/action/Authaction'


const ctahandler = (e) => {
    console.log(e);
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  

export default function Navbar() {

    const classes = useStyles();
    const dispatch = useDispatch()

    const doUserLogout = ( ) => {
        dispatch(doLogout())

    }

    return (
        <div className='navbar' >
            <nav className="navbar">
                <div>
                    <div className='logodiv'> <img className='logo' src="https://www.realxerp.com/images/api_integration/OLX.png" alt="logo" /> </div>
                    <div className='search1'>
                        <SearchField
                            placeholder="Search City..."
                            onChange={e => ctahandler(e)}
                            classNames="search_item"
                        />
                    </div>
                    <div className='search2'>
                        <SearchField
                            placeholder="Search Item..."
                            onChange={ctahandler()}
                            classNames="search_item2"
                        />

                    </div>


                </div>

                <div className="d">
                    <button className="d-btn">Categary</button>
                    <div className="d-content">
                        <div className="row">
                            <div className="column">
                                <Link><h3>MOBILES</h3></Link>
                                <Link to="">Tablets</Link>
                                <Link to="">Accessories</Link>
                                <Link to="">Mobile Phones</Link>
                                <hr />
                                <Link><h3>Vehicles</h3></Link>
                                <Link to="">Cars</Link>
                                <Link to="">Cars on installments</Link>
                                <Link to="">Cars Acessories</Link>
                                <Link to="">Spare parts</Link>
                                <Link to="">Buses</Link>
                                <Link to="">Riksha</Link>
                                <Link to="">Boats</Link>
                            </div>
                            <div className="column">
                                <Link><h3>Electronics_Home Appliences</h3></Link>
                                <Link to="">TV-Video-Audio</Link>
                                <Link to="">Games_entertainment</Link>
                                <Link to="">Other Home Appliences </Link>
                                <Link to="">AC - Cooler</Link>
                                <Link to="">Fridges</Link>
                                <Link to="">Washing Machienes</Link>
                                <hr />
                                <Link><h3>Bikes</h3></Link>
                                <Link to="">Motorcycles</Link>
                                <Link to="">Spare parts</Link>
                                <Link to="">Bicycles</Link>
                                <Link to="">Atv</Link>
                                <Link to="">Scooters</Link>

                            </div>
                            <div className="column">
                                <Link> <h3>Jobs</h3> </Link>
                                <Link to="">Online</Link>
                                <Link to="">Marketing</Link>
                                <Link to="">Education</Link>
                                <Link to="">Custmoer Services</Link>
                                <Link to="">IT</Link>


                                <Link to="">Medical</Link>
                                <Link to="">Part-Time</Link>
                                <Link to="">Other Jobs</Link>
                            </div>
                            <div className="column">
                                <Link><h3>Fashion-Beauty</h3></Link>
                                <Link to="">Clothes</Link>
                                <Link to="">Footwear</Link>
                                <Link to="">Jewellery</Link>
                                <Link to="">Make up</Link>
                                <Link to="">Skin-Hair</Link>
                                <Link to="">Watches</Link>
                                <Link to="">Wedding</Link>
                                <hr />
                                <Link><h3>Books,Sports</h3></Link>
                                <Link to="">Books</Link>
                                <Link to="">Sport</Link>
                                <Link to="">Gym</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <Link to="">Mobile Phones</Link>
                <Link to="">Cars</Link>
                <Link to="">MOtorcycles</Link>
                <Link to="">Houses</Link>
                <Link to="">Tables</Link>
                <Link to="">Land</Link>
                <div> <Link id='login' to="/login">Log In</Link>
                 
                <IconButton color="primary" aria-label="Log out" onClick={doUserLogout} component="span">
                 <ExitToAppIcon />
                   </IconButton>
                   </div>
            </nav>

        </div>
    );
}
