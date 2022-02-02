import React, {Component} from 'react';
import BlockCmn from "../../../../components/_commons/block-cmn";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import CountriesApi from "../../../../services/API/countries.api";
import TripService from "../../../../services/SiteAdmin/trip.service";
import SiteUtils from "../../../../ressources/utils/site.utils";
import DateUtils from "../../../../ressources/utils/date.utils";
import ICON from "../../../../ressources/utils/icon.utils";
import {ShowIf} from "../../../../services/Routing/auth.service";


export default class AddCityTripForm extends Component {

    state = {
        cities: [],
        citiesList: [],
        countriesList: []
    }

    componentDidMount() {
        let countriesList = []
        let citiesList = []
        CountriesApi.fetchAllCountries().then(res =>
            res.data.forEach(country => {
                countriesList.push({value: country.name.common, label: country.name.common})
                this.setState({countriesList});
            })
        )

        TripService.fetchAllCities().then(res => {
            res.citiesList.forEach(city => {
                citiesList.push({value: city.id, label: city.name, country: city.country})
            })
            this.setState({citiesList});
        })

    }


    handleAddCity = (city) => {
        console.log(city)
        if (city != null) {
            let cities = this.state.cities
            let c = {}
            c.name = city.label
            c.country = city.country
            c.dateCity = ''
            c.description = ''
            if (SiteUtils.isNumeric(city.value)) {
                c.id = city.value
            } else {
                c.isNew = true
            }

            cities.push(c)
            cities[0].dateCity = this.props.date.debut
            this.setState({cities})
            this.props.setCities(this.state.cities)
        }

    };

    handleChangeCountry(e, i) {
        let cities = this.state.cities
        cities[i].country = e.value
        this.setState({cities});
        this.props.setCities(this.state.cities)
    }

    handleCityDateChange = (e, i) => {
        let cities = this.state.cities
        cities[i].dateCity = document.getElementById(`dateCity_${i}`).value
        this.setState({cities});
        this.props.setCities(this.state.cities)
    }

    handleCityNameChange(e, i) {
        let cities = this.state.cities
        cities[i].name = e.target.value
        this.setState({cities});
        this.props.setCities(this.state.cities)
    }

    handleInfosChange(e, i) {
        let cities = this.state.cities

        cities[i].description = e.target.value
        this.setState({cities});
        this.props.setCities(this.state.cities)
    }

    moveCity = (indexCity, targetIndex) => {
        let cities = this.state.cities
        let city = cities[indexCity];
        cities.splice(indexCity, 1);
        cities.splice(targetIndex, 0, city);
        if (cities.length > 0) {
            cities[0].dateCity = this.props.date.debut
            for (let i = 1; i < cities.length; i++) {
                cities[i].dateCity = ''
            }
        }

        this.setState({cities});
        this.props.setCities(this.state.cities)
    }

    removeCity = (indexCity) => {
        let cities = this.state.cities
        cities.splice(indexCity, 1);

        if (cities.length > 0) {
            cities[0].dateCity = this.props.date.debut
            for (let i = 1; i < cities.length; i++) {
                cities[i].dateCity = ''
            }
        }

        this.setState({cities});
        this.props.setCities(this.state.cities)
    }


    render() {
        return (
            <BlockCmn classname={`border p-3 ${this.props.citiesErrors ? "has-error" : ''}`}>
                <div className="mb-3">
                    <h3 className="text-decoration-underline text-end text-uppercase">Les étapes du circuit</h3>
                </div>
                <div className="mb-3">
                    <CreatableSelect onChange={(e) => this.handleAddCity(e)}
                                     options={this.state.citiesList} classname="form-select w-100 mb-3"
                                     isSearchable
                                     isClearable
                                     placeholder="Ajouter une ville"/>
                </div>
                {this.state.cities.length > 0 && (
                    <div className="border px-2 py-3 row m-0">
                        <div className="col-10 row row-cols-1 row-cols-md-2  m-0 ">
                            <div className="col my-3">
                                <label htmlFor={`city_name_0`} className="label-control">Ville</label>
                                <input type="text" name="" id={`city_name_0`} required value={this.state.cities[0].name}
                                       readOnly={this.state.cities[0].id != null} className="form-control"
                                       onChange={(event => this.handleCityNameChange(event, 0))}/>
                            </div>
                            <div className={`col my-3`}>
                                <label htmlFor="country" className="label-control-2">Pays</label>

                                {this.state.cities[0].isNew && (
                                    <Select className="" options={this.state.countriesList}
                                            value={this.state.cities[0].country}
                                            placeholder="Selectionner un pays" isSearchable required
                                            onChange={(event) => this.handleChangeCountry(event, 0)}/>
                                )}
                                {this.state.cities[0].id != null && (
                                    <input type="text" id={`city_name_0`} value={this.state.cities[0].country}
                                           readOnly={true} className="form-control"/>)}

                            </div>
                            <div className="col my-3 w-100">

                                <label htmlFor={`dateCity_0`} className="label-control">Date d'étape: </label>
                                <input id={`dateCity_0`} type="date" className="form-control"
                                       value={this.props.date.debut} readOnly={true}/>
                            </div>
                            <div className="com my-3 w-100">
                                <label htmlFor="description_0" className="form-label">Infomations</label>
                                <textarea value={this.state.cities[0].description} className="form-control"
                                          onChange={(e) => this.handleInfosChange(e, 0)}
                                          name="description_0" id="description_0" rows="2" placeholder="Informations" required/>
                            </div>

                        </div>
                        <div className="col btn-group-vertical p-0">
                            <button type="button" className="btn btn-outline-secondary"
                                    disabled={true}>{ICON.NAV_UP}</button>
                            <button type="button" className="btn btn-outline-danger"
                                    onClick={() => this.removeCity(0)}>{ICON.DELETE}</button>
                            <button type="button"
                                    className={`btn ${1 === this.state.cities.length ? 'btn-outline-secondary' : 'btn-outline-primary'}`}
                                    disabled={1 === this.state.cities.length}
                                    onClick={() => this.moveCity(0, 1)}>{ICON.NAV_DOWN}
                            </button>
                        </div>
                    </div>

                )}
                {this.state.cities.length > 1 && (<hr className="col w-100 my-3" style={{height: '0.2rem'}}/>)}
                {this.state.cities && this.state.cities.map((city, i) => (
                    this.state.cities[0] !== city && (
                        <span key={i}>
                            <div className="border px-2 py-3 row m-0">
                                <div className="col-10 row row-cols-1 row-cols-md-2 m-0 px-2 py-3">
                                    <div className="col my-3">
                                        <label htmlFor={`city_name_${i}`} className="label-control">Ville</label>
                                        <input type="text" name="" id={`city_name_${i}`} value={city.name}
                                               readOnly={city.id != null} className="form-control"
                                               onChange={(event => this.handleCityNameChange(event, i))}
                                               required/>
                                    </div>
                                    <div className={`col my-3`}>
                                        <label htmlFor="country" className="label-control-2">Pays</label>

                                        {city.isNew && (
                                            <Select className="" options={this.state.countriesList}
                                                    placeholder="Selectionner un pays" isSearchable
                                                    onChange={(event) => this.handleChangeCountry(event, i)} required/>
                                        )}
                                        {city.id != null && (
                                            <input type="text" id={`city_name_${i}`} value={city.country}
                                                   readOnly={true} className="form-control"/>)}

                                    </div>
                                    <div className="col my-3 w-100">

                                        <label htmlFor={`dateCity_${i}`}
                                               className="label-control">Date d'étape: </label>
                                        <input id={`dateCity_${i}`} type="date" className="form-control"
                                               onChange={(e) => this.handleCityDateChange(e, i)}
                                               min={!SiteUtils.isEmptyStr(this.state.cities[i - 1].dateCity) ? DateUtils.addDays(this.state.cities[i - 1].dateCity, 1) : DateUtils.addDays(this.props.date.debut, 1)}
                                               max={DateUtils.addDays(this.props.date.fin, -1)} value={city.dateCity}
                                               required
                                        />
                                    </div>
                                    <div className="com my-3 w-100">
                                        <label htmlFor={`description_${i}`} className="form-label">Infomations</label>
                                        <textarea value={city.description} className="form-control"
                                                  onChange={(e) => this.handleInfosChange(e, i)} required
                                                  name={`description_${i}`} id={`description_${i}`} rows="2" placeholder="Informations"/>
                                     </div>
                                </div>
                                <div className="col btn-group-vertical p-0">
                                    <button type="button" className="btn btn-outline-primary"
                                            onClick={() => this.moveCity(i, i - 1)}>{ICON.NAV_UP}</button>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={() => this.removeCity(i)}>{ICON.DELETE}</button>
                                    <button type="button" disabled={i + 1 === this.state.cities.length}
                                            className={`btn ${i + 1 === this.state.cities.length ? 'btn-outline-secondary' : 'btn-outline-primary'}`}
                                            onClick={() => this.moveCity(i, i + 1)}>{ICON.NAV_DOWN}</button>
                                </div>

                            </div>
                            {i + 1 < this.state.cities.length && (
                                <hr className="col w-100 my-3" style={{height: '0.2rem'}}/>
                            )}

                        </span>
                    )
                ))}
                <div className="w-100 nav justify-content-end">
                    <label
                        className={`text-danger label-control ${ShowIf(this.props.citiesErrors)}`}>{this.props.citiesErrors}</label>
                </div>
            </BlockCmn>
        );
    }


}

