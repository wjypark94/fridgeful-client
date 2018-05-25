import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../componentStyles/Footer.css';
import FridgeIcon from '../images/fridge-icon.png';

export default function Footer(){
    return(
        <footer>
            <div className="footer-title">
            <img src={FridgeIcon} alt="icon"/>
            <h4 className="title-app">Fridgeful</h4>
            </div>

            <div className="contacts-info">
                <ul className="">
                    <li className="">
                        <a href="https://github.com/wjypark94" target="blank" name="github">
                            <FontAwesome name="github"/>
                            
                        </a>
                    </li>
                    <li className="contacts-info">
                        <a href="https://www.linkedin.com/in/wjypark/" target="blank" name="linkedin"></a>
                            <FontAwesome name="linkedin"/>
                          
                    </li>
                    <li>
                        <a href="mailto:wjypark94@gmail.com" target="blank" name="email-info"></a>
                            <FontAwesome name="envelope"/>
                    </li>
                </ul>
            </div>
            <p className="copyright">
                <FontAwesome name="copyright"/>
                <span>2018</span> William Park
            </p>
        </footer>
    )
}