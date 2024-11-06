import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('');

    const navigate = useNavigate();
    const { getTotalCartAmount, gettotalitem, token, setToken } = useContext(StoreContext);

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const val = gettotalitem();

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="icon_l" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href="#food-display" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href="#app-download" onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                <a href="#footer" onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="icon_s" />
                {token ? <div className="navbar-search-icon">
                    <Link to="/cart"><img className='basket' src={assets.basket_icon} alt="Icon_b" style={{ width: '50px', height: '50px' }} /></Link>
                    {token && <div className="dot">{getTotalCartAmount() === 0 ? "" : val}</div>}
                </div> : <div></div>}
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <Link to="/myorders"><li><img src={assets.bag_icon} alt="" /><p>Order</p></li></Link>
                            <hr />
                            <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
