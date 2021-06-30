import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import apple from '../../assets/apple.png';
import playStore from '../../assets/play store.png'


export default function Footer() {
    return (
        <div>
        <div className='footer'>
            <div className='colum'>
                <Link><h3>POPULAR CATEGORIES</h3></Link>
                <Link to="">Cars</Link>
                <Link to="">Flats for rent</Link>
                <Link to="">Mobile Phones</Link>
                <Link to="">Jobs</Link>
            </div>
            <div className='colum'>
                <Link><h3>TRENDING SEARCHES</h3></Link>
                <Link to="">Bikes</Link>
                <Link to="">Watches</Link>
                <Link to="">Books</Link>
                <Link to="">Dogs</Link>
            </div>
            <div className='colum'>
                <Link><h3>ABOUT US</h3></Link>
                <Link to="">About EMPG</Link>
                <Link to="">OLX Blog</Link>
                <Link to="">Contact US</Link>
                <Link to="">OLX for BUsinesses</Link>
            </div>
            <div className='colum'>
                <Link><h3>OLX</h3></Link>
                <Link to="">Help</Link>
                <Link to="">Sitemap</Link>
                <Link to="">Legal information</Link>
            </div>
            <div className='colum'>
                <Link><h3>FOLLOW US</h3></Link>
               <div className='social_link'><a target="_blank" href='https://www.facebook.com/olxpakistan'><img src={fb} alt="fb" /></a></div>
               <div className='social_link'><a target="_blank" href='https://www.instagram.com/olx.pakistan/'><img src={insta} alt="insta" /></a></div>
               <div className='social_link'><a target="_blank" href='https://twitter.com/OLX_Pakistan'><img src={twitter} alt="twitter" /></a></div>
               
                 <div className='download'><a target="_blank" href='https://apps.apple.com/pk/app/olx-pakistan/id1551315538'><img src={apple} alt="apple" /></a></div>
                 <div className='download'><a target="_blank" href='https://play.google.com/store/apps/details?id=com.olx.pk'><img src={playStore} alt="play store" /></a></div>
               
            </div>
            
           
        </div>
        
        <div className='footerbar'><h3>Free Classifieds in Pakistan . @2006-2021 OLX</h3></div>
        </div>

    )
}
