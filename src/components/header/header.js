/* 
*
* Header - header.js
* @author - Jamal
* @date - 19 octobar 2022
*/

import './style.css';
import Img from '../../assets/whatsapp-logo.svg';

function Header() {
    return (
        <header>
            <div class="row">
                <div class="cell-1">
                    <div class="title"><img class="logo" src={Img} alt="logo" /></div>
                </div>
                <div class="cell-3">
                    <ul class="menu-list">
                        <li><a href="#">WHATSAPP WEB</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">DOWNLOAD</a></li>
                        <li><a href="#">PRIVACY</a></li>
                        <li><a href="#">HELP CENTER</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;
