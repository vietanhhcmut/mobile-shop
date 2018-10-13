import React, { Component } from 'react';
import "./AboutUs.css"

class AboutUs extends Component {
    render() {
        return (
            <div className="about">
                <h2>Giới thiệu về LaD Mobile</h2>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus molestiae. At eum cupiditate tenetur dignissimos fugit perferendis cum delectus illum? Animi officiis ex cumque. Ad numquam doloremque iusto impedit.</span>
                <div className="about__header"></div>
                <div className="about__feature">
                    <ul>
                        <li>
                            <i className="fas fa-users"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora iure repudiandae saepe reprehenderit, ipsa minus, at ad explicabo consequatur quia inventore pariatur soluta! Aut atque cumque iure repellendus rerum.</p>
                        </li>
                        <li>
                            <i className="far fa-gem"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga mollitia eum cumque minima, repellat ut aperiam autem animi, natus facere dolor omnis ea dicta consectetur! Expedita consectetur voluptatum ea!</p>
                        </li>
                        <li>
                            <i className="fas fa-dollar-sign"></i>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur deleniti minus obcaecati architecto sequi atque delectus dolores, laudantium quaerat, nihil eos nam. Rem omnis illo, nihil reiciendis culpa recusandae!</p>
                        </li>
                        <div className="clear">

                        </div>
                    </ul>
                </div>
                <div className="about__address">
                    <iframe
                        title="address map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.631681852365!2d106.803194966739!3d10.87559079692341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5568c997f%3A0xdeac05f17a166e0c!2sHo+Chi+Minh+City+University+of+Technology!5e0!3m2!1svi!2s!4v1539147709862" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default AboutUs;