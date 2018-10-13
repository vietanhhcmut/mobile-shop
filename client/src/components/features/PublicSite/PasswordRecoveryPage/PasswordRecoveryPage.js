import React, { Component } from 'react';
import './PasswordRecoveryPage.css';
import { Link } from "react-router-dom";

class PasswordRecoveryPage extends Component {
    
    render() {
        return(
            <div className="forgot-page">
                <h2>Forgot your password?</h2>
                <div className="forgot-page__content">
                    <p>Please enter the email address you used to register. You will receive a temporary link to reset your password.</p>
                    <label htmlFor="email">Email address</label>
                    <input type="email" 
                            className="forgot-page__inputemail" 
                            name="email" 
                    />
                    <div className="forgot-page__btn-submit">
                        <button type="submit">Send reset link</button>
                    </div>
                    <div className="clear"></div>
                </div>
                <Link to="/login" className="link-back"><i class="fas fa-chevron-left"></i>Back to login</Link>
            </div>
        );
    }
}

export default PasswordRecoveryPage;