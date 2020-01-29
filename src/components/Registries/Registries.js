import React, { PureComponent } from "react";
import couple from '../../assets/images/_RPR9475-01-min.jpg';

export class Registries extends PureComponent {
    render() {
        return (
            <section id="gift" className="gift-section section">
                <div className="container text-center">
                    <h3 className="title script">
                        <span className="title-deco-left"></span>
                        <span className="title-text animated fadeInUp delayp2">
                        <span className="d-none d-lg-inline">Gift</span> Registries</span>
                        <span className="title-deco-right"></span>
                    </h3>
                    <div className="message-container">
                        <div className="message-inner mx-auto">
                            <div className="intro">
                                The most important gift to us is to have you
                                share our day. However if you do wish to buy us a gift 
                                you can check out the registry lists <span className="registry-link" onClick={() => window.open('#/registry-list', '_self')}>here</span>. <br />
                                They will really help us in setting up our new world.
                            </div>
                            <div className="thank-you script">Thank you so much! :)</div>
                            <img src={couple} className="thank-you-image" alt="_couple" />
                            <div className="signature script">Dimple &amp; Aman</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
