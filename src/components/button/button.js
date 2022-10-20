/* 
*
* Button - button.js
* @author - Jamal
* @date - 19 octobar 2022
*/

import './style.css';

function Button(props) {
    return (
        <div class="btn-container">
            <button class="primary-btn">{props.label}</button>
        </div>
    )
}
export default Button;

