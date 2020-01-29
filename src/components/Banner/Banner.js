import React, { PureComponent } from "react";
import './Banner.css';

export class Banner extends PureComponent {
    render() {
        return (
            <section className="hero-section" id="hero">
                <div className="container text-center">
                    <div className="row">
                        <div className="hero-box col-lg-5 col-md-7 col-12">
                            <h1 className="headline script">
                                <span className="names display-block">Aman &amp; Dimple</span><br />
                                <span className="statement display-block animated bounceIn delayp4">
                                    <span className="swirl-left"></span><span className="statement-text">are getting hitched</span><span className="swirl-right"></span>
                                </span>
                            </h1>
                            <div className="date">
                                <span className="date-text">Feb 21, 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curve-holder"></div>
            </section>
        );
    }
}
