import React, { PureComponent } from "react";
import { Banner } from "../../components/Banner/Banner";
import './Main.css';
import { Wedding } from "../../components/Wedding/Wedding";
import { Registries } from "../../components/Registries/Registries";
// import { Gallery } from "../../components/Gallery/Gallery";

export class Main extends PureComponent {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <section className="main-screen">
                <Banner />
                <Wedding />
                {/* <Gallery /> */}
                <Registries />
                <section id="comments" className="comments-section section">
                    <div className="container text-center">
                        <div className="comments-container mx-auto">
                            <h3 className="title">Please do come and bless this new phase of our lives...</h3>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
