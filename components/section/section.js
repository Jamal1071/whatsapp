/* 
*
* Section - section.js
* @author - Jamal
* @date - 12 octobar 2022
*/

import './style.css';
import Img from '../../assets/android.png';
import Img1 from '../../assets/iphone.png';
import Img2 from '../../assets/laptop.png';
import Img3 from '../../assets/microsoft.png';
import Title from '../title/title';
import Button from '../button/button';

function Section() {
    return (
        <section>
            <div class="grid-2">
                <article class="content-container">
                    <Title label="Phone" />
                    <div class="grid">
                        <div>
                            <img src={Img} alt='Android' width="190" />
                            <Button label="Android" />
                        </div>
                        <div>
                            <img src={Img1} alt='Iphone' width="166" />
                            <Button label="Iphone" />
                        </div>
                    </div>
                    <h3>Visit <a href="https://www.whatsapp.com/download/">whatsapp.com/dl</a> on your mobile<br />phone to install.</h3>
                    <p class="p-clr">By installing WhatsApp, you agree to our<a href="https://www.whatsapp.com/legal/"> https://www.whatsapp.com/legal/</a></p>
                </article>
                <article class="sub-container">
                    <Title label="Mac or Windows PC" />
                    <img src={Img2} alt='laptop' width="400" />
                    <p class="p-clr">Windows 10 and higher. WhatsApp must be installed on your phone.</p>
                    <span><a href="https://faq.whatsapp.com/545358030455627">Learn more about desktop experiences on WhatsApp</a></span>
                    <p class="click-btn">By clicking the Download button, you agree to our <a href="https://www.whatsapp.com/legal/">Terms & Privacy Policy.</a></p>
                    <img src={Img3} alt='microsoft' width="160" />
                </article>
            </div>
        </section>
    )
}
export default Section;