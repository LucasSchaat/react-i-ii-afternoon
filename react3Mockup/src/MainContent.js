import React, {Component} from 'react'
import './App.css';
import data from './data'

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            i: 0
        }
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    handlePrevious() {
        if (this.state.i > 0) {
            this.setState({i: this.state.i - 1})
        }
    }

    handleNext() {
        if (this.state.i < data.length - 1) {
            this.setState({i: this.state.i + 1})
        }
    }
    
    render() {
        return(
            <div className='mainContent'>
                <div className='details'>
                    <div className='tracker'>{`${data[this.state.i].id}/25`}</div>
                    <div className='fullName'>{`${data[this.state.i].name.first} ${data[this.state.i].name.last}`}</div>
                    <div className='description'>
                        <div className='personDescription'>
                            <div>From:</div>
                            <div  className='genericLabel'>{`${data[this.state.i].city}, ${data[this.state.i].country}`}</div>
                        </div>
                        <div className='personDescription'>
                            <div>Job Title:</div>
                            <div  className='genericLabel'>{data[this.state.i].title}</div>
                        </div>
                        <div className='personDescription'>
                            <div>Employer:</div>
                            <div  className='genericLabel'>{data[this.state.i].employer}</div>
                        </div>    
                    </div>
                    <div className='favMovies'>
                        <div className='personDescription'>Favorite Movies:</div>
                            <ol className='movieList'>
                                <li className='movieStyle'>{data[this.state.i].favoriteMovies[0]}</li>
                                <li className='movieStyle'>{data[this.state.i].favoriteMovies[1]}</li>
                                <li className='movieStyle'>{data[this.state.i].favoriteMovies[2]}</li>
                            </ol>
                    </div>
                </div>
                <div className='buttonsContainer'>
                    <div>
                        <button className='noColorButtons' onClick={this.handlePrevious}>{`< Previous`}</button>
                    </div>
                    <div className='buttonsGroup'>
                        <button className='colorButtons'>Edit</button>
                        <button className='colorButtons'>Delete</button>
                        <button className='colorButtons'>New</button>
                    </div>
                    <div>
                        <button className='noColorButtons' onClick={this.handleNext}>{`Next >`}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent