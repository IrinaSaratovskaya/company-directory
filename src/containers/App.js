import React, { Component } from 'react';

import CompaniesCards from '../components/CompaniesCards';
import CompaniesList from '../components/CompaniesList';
import SearchBox from '../components/SearchBox';

import { companies } from '../companies';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            companies: companies,
            searchfield: '',
            category: '',
            view: 'list'
        }
    }

    inputChangeHandler = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    buttonClickHandler = (cat) => {
        this.setState({ category: cat });
    }

    viewButtonClickHandler = (view) => {
        this.setState({ view: view });
    }

    render() {
        const { companies, searchfield } = this.state;

        console.log('App state', this.state);


        const filteredCompanies = companies.filter((oneCopmFromArrayAtATime) => {
            return oneCopmFromArrayAtATime.name.toLowerCase().includes(searchfield.toLowerCase()) && (oneCopmFromArrayAtATime.category === this.state.category || !this.state.category);
        });

        return (
            <div className="container">
                <h1 className="text-center mt">Company Directory</h1>
                <h4 className="text-center mt"><i class="fas fa-map-marker-alt bali-icon"></i> Bali, Indonesia</h4>
                <SearchBox searchChange={this.inputChangeHandler} />
                <div className="row button-list">
                    <div className="col-12 col-md-9">
                        <button type="button" className={`btn btn-info ${this.state.category ===''? 'active': ''}`} onClick={() => this.buttonClickHandler('')}>All</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Restaurant'? 'active': ''}`} onClick={() => this.buttonClickHandler('Restaurant')}>Restaurants</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Supermarket'? 'active': ''}`} onClick={() => this.buttonClickHandler('Supermarket')}>Supermarkets</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Bank'? 'active': ''}`} onClick={() => this.buttonClickHandler('Bank')}>Banks</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Pharmacy'? 'active': ''}`} onClick={() => this.buttonClickHandler('Pharmacy')}>Pharmacies</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Clinic'? 'active': ''}`} onClick={() => this.buttonClickHandler('Clinic')}>Clinics</button>
                        <button type="button" className={`btn btn-info ${this.state.category ==='Gym'? 'active': ''}`} onClick={() => this.buttonClickHandler('Gym')}>Gyms</button>
                    </div>
                    <div className="col-3 text-right d-none d-md-block">
                        <button type="button" className={`btn btn-info ${this.state.view ==='list'? 'active': ''}`} title="List view" onClick={() => this.viewButtonClickHandler('list')}><i class="fas fa-list"></i></button>
                        <button type="button" className={`btn btn-info ${this.state.view ==='card'? 'active': ''}`} title="Gallery view" onClick={() => this.viewButtonClickHandler('card')}><i class="fas fa-th"></i></button>
                    </div>
                </div>
                <div className="comp-found">Companies found: {filteredCompanies.length}</div>
                <div className={`${this.state.view === 'list' ? 'd-none d-md-block' : 'd-none'}`}>
                    <CompaniesList companies={filteredCompanies}/>
                </div>
                <div className={`${this.state.view === 'card' ? 'd-block' : 'd-block d-md-none'}`}>
                    <CompaniesCards companies={filteredCompanies}/>
                </div>
            </div>
        );
    }
}

export default App;