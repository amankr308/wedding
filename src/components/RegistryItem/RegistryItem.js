import Axios from 'axios';
import React, { PureComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ac from '../../assets/images/registry/ac.png';
import coffeeMaker from '../../assets/images/registry/coffee-maker.png';
import coffeeTable from '../../assets/images/registry/coffee-table.png';
import gasStove from '../../assets/images/registry/gas-stove.png';
import lamp from '../../assets/images/registry/lamp.png';
import mattress from '../../assets/images/registry/mattress.png';
import tvUnit from '../../assets/images/registry/tv-unit.png';
import washingMachine from '../../assets/images/registry/washing-machine.png';
import amazon from '../../assets/images/registry/amazon-gift-card.png';
import flipkart from '../../assets/images/registry/flipkart-gift-card.png';
import './RegistryItem.css';

export class RegistryItem extends PureComponent {
    state ={
        status: this.props.registry.status,
        orderId: this.props.registry.orderId,
        buySuccess: false
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.registry.status !== nextProps.registry.status || this.props.registry.orderId !== nextProps.registry.orderId) {
            this.setState({
                status: nextProps.registry.status,
                orderId: nextProps.registry.orderId
            });
        }
    }

    getImage = (registryId) => {
        switch (registryId) {
            default:
                break;
            case 1:
                return mattress;
            case 2:
                return washingMachine;
            case 3:
                return gasStove;
            case 4:
                return ac;
            case 5:
                return coffeeMaker;
            case 6:
                return coffeeTable;
            case 7:
                return tvUnit;
            case 8:
                return lamp; 
            case 9:
                return amazon; 
            case 10:
                return flipkart; 
        }
    }

    formSubmit = async(e, registry) => {
        e.preventDefault();
        const { _id } = registry;
        const { status, orderId } = this.state;
        const payload = {
            _id,
            status,
            orderId
        };
        Axios.put('https://shielded-ridge-50444.herokuapp.com/api/wedding/registries', payload).then((response) => {
            if (response.status === 200) {
                this.setState({
                    buySuccess: true
                });
            } else {
                this.setState({
                    buySuccess: false
                });
            }
        });
    }

    render() {
        const { registry } = this.props;
        const { status, orderId, buySuccess } = this.state;
        return (
            <section className="registry-item row cols-wrapper">
                <div className="col-12 col-md-4">
                    <img src={this.getImage(registry._id)} alt={registry.name} />
                </div>
                <div className="col-12 col-md-8">
                    <p className="item-name">{registry.name}</p>
                    <p className="item-details">{ ReactHtmlParser(registry.details) }</p>
                    <p className="item-url">Buy it from <a href={registry.url} rel="noopener noreferrer" target="_blank">here</a></p>
                    {!buySuccess && (registry.status ? (
                        <form name={`registry-change-form-${registry._id}`} onSubmit={e => this.formSubmit(e, registry)}>
                            <label className="check-container">Gift this
                                <input type="checkbox" checked={!status} onChange={() => this.setState({ status: !this.state.status })} />
                                <span className="checkmark" />
                            </label>
                            {!status && 
                                <React.Fragment>
                                    <label htmlFor="order-id">Order ID:</label>
                                    <input 
                                        required
                                        className="form-control" 
                                        id="order-id"
                                        type="text" 
                                        value={orderId} 
                                        placeholder="Just to let others know that they missed this chance!"
                                        onChange={e => this.setState({ orderId: e.target.value })} />
                                    <input type="submit" className="btn " value="Save" />
                                </React.Fragment>
                            }
                        </form>
                    ) : (
                        <p className="bought-label">Somebody already gifted this to us. Thank you somebody!</p>
                    ))}
                    {buySuccess && <p className="bought-label">A very big Thank you for this!</p>}
                </div>
            </section>
        );
    }
}
