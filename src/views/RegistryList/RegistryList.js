import React from 'react';
import Axios from 'axios';
import './RegistryList.style.css';
import { RegistryItem } from '../../components/RegistryItem/RegistryItem';
import couple from '../../assets/images/_RPR9475-01-min.jpg';

export class RegistryList extends React.PureComponent {
    state = {
        loadingRegistries: true,
        registryItems: []
    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        Axios.get('https://shielded-ridge-50444.herokuapp.com/api/wedding/registries').then((response) => {
            if (response && response.data && response.data.length > 0) {
                this.setState({
                    loadingRegistries: false,
                    registryItems: response.data
                });
            } else {
                this.setState({
                    loadingRegistries: false
                });
            }
        });
    }

    render() {
        const {
            loadingRegistries,
            registryItems
        } = this.state;
        return (
            <section className="registry-list-screen">
                <section id="comments" className="comments-section section">
                    <div className="container text-center">
                        <div className="comments-container mx-auto">
                            <h2 className="title">Please note that the following items are just the things which we'd need in our new home.</h2>
                            <h2 className="title">You're not at all bound to get us any of these items. Gifts of any kind are welcome.</h2>
                        </div>
                    </div>
                </section>
                <div className="note-cards container">
                    <div className="row cols-wrapper">
                        <div className="ceremony-col col-12 col-md-6">
                            <div className="col-inner">
                                <h4 className="subtitle">Note</h4>
                                <ul className="meta-list list-unstyled text-left center-block">
                                    <li>Address is provided here in case you want any of the following items delivered at our place.</li>
                                    <li>We're not availabe at this address from 14th Feb to 3rd March 2020</li>
                                    <li>Again, gifts of any kind are welcome.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="reception-col col-12 col-md-6">
                            <div className="col-inner">
                                <h4 className="subtitle">Address</h4>
                                <ul className="meta-list list-unstyled text-left center-block">
                                    <li>808, Tower 202</li>
                                    <li>Amanora Victory Towers</li>
                                    <li>Manjri Rd, Off Rd. Nr, Amanora Park Town</li>
                                    <li>Mundhwa, Pune MH 411036</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="registry-cards-list container">
                    {loadingRegistries ? (
                        <p className="loading-label">Fetching wishlist...</p>
                    ) : (
                        registryItems.length === 0 ? (
                            <p className="loading-label">no items found</p>
                        ) : (
                            registryItems.map(item => (
                                // <p>{item.name}</p>
                                <RegistryItem
                                    key={item._id}
                                    registry={item} />
                            ))
                        )
                    )}
                </div>
                <section id="gift" className="gift-section section">
                    <div className="container text-center">
                        <div className="message-container">
                            <div className="message-inner mx-auto">
                                <div className="thank-you script">Thank you so much! :)</div>
                                <img src={couple} className="thank-you-image" alt="_couple" />
                                <div className="signature script">Dimple &amp; Aman</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
