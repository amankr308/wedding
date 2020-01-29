import React, { PureComponent } from "react";
import './Wedding.css';
import { MapModal } from "./containers/MapModal/MapModal";

export class Wedding extends PureComponent {
    state = {
        ceremonyMap: false,
        receptionMap: false
    }

    componentDidMount() {
        const countDownDate = new Date("Feb 21, 2020 20:00:00").getTime();
        const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("days")) {
            document.getElementById("days").innerText = days;
        }

        if (document.getElementById("hours")) {
            document.getElementById("hours").innerText = hours;
        }

        if (document.getElementById("minutes")) {
            document.getElementById("minutes").innerText = minutes;
        }

        if (document.getElementById("seconds")) {
            document.getElementById("seconds").innerText = seconds;
        }

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-box").innerHTML = "EXPIRED";
        }
        }, 1000);
    }

    handleCeremonyMapShow = () => {
        this.setState({ ceremonyMap: true });
    }

    handleReceptionMapShow = () => {
        this.setState({ receptionMap: true });
    }

    handleModalClose = () => {
        this.setState({
            ceremonyMap: false,
            receptionMap: false
        });
    }

    render() {
        const { 
            ceremonyMap, 
            receptionMap
        } = this.state;
        return (
            <section id="wedding" className="wedding-section section">
                {ceremonyMap &&
                <section className="map-modal ceremony-map">
                    <MapModal event="ceremony" handleModalClose={this.handleModalClose} />
                </section>}
                {receptionMap &&
                <section className="map-modal reception-map">
                    <MapModal event="reception" handleModalClose={this.handleModalClose} />
                </section>}
                <div className="container text-center">
                    <h3 className="title script">
                        <span className="title-deco-left"></span>
                        <span className="title-text animated fadeInUp delayp2">The Wedding</span>
                        <span className="title-deco-right"></span>
                    </h3>
                    <div id="countdown-box" className="countdown-box"> 
                        <span className="days">
                            <span className="number" id="days">{0}</span>
                            <span className="unit script">Days</span>
                        </span>
                        <span className="hours">
                            <span className="number" id="hours">{0}</span>
                            <span className="unit script">Hrs</span>
                        </span>
                        <span className="minutes">
                            <span className="number" id="minutes">{0}</span>
                            <span className="unit script">Mins</span>
                        </span>
                        <span className="secs">
                            <span className="number" id="seconds">{0}</span>
                            <span className="unit script">Secs</span>
                        </span>
                    </div>
                    <div className="row cols-wrapper">
                        <div className="ceremony-col col-12 col-md-6">
                            <div className="col-inner">
                                <h4 className="subtitle">Ceremony</h4>
                                <ul className="meta-list list-unstyled text-left center-block">
                                    <li><span className="material-icons love-icon">event</span>Friday - Feb 21st, 2020</li>
                                    <li><span className="material-icons love-icon">access_time</span>8:00 pm</li>
                                    <li><span className="material-icons love-icon">person_pin</span>Highway Resort, N.H. 24, Service Lane, Gajraula 
                                        <br /><br />
                                        <span className="direction-info display-block list-link" onClick={this.handleCeremonyMapShow}>How to get there</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="reception-col col-12 col-md-6">
                            <div className="col-inner">
                                <h4 className="subtitle">Reception</h4>
                                <ul className="meta-list list-unstyled text-left center-block">
                                    <li><span className="material-icons love-icon">event</span>Monday - Feb 24th, 2020</li>
                                    <li><span className="material-icons love-icon">access_time</span>7:00 pm</li>
                                    <li><span className="material-icons love-icon">person_pin</span>Marriage Hall, Railway Premises, Patna
                                        <br /><br />
                                        <span className="direction-info display-block list-link" onClick={this.handleReceptionMapShow}>How to get there</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
