import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Stats from './Stats'
import Table from './Table'

class ViewStats extends Component {

    constructor(props) {
        super(props);
        this.state = {
          address: "",
          songName: ""
        };
      }

    generateHTML1() {
        ReactDOM.render(<Table address={this.state.address}/>, document.getElementById("txnHistory"))
    }

    generateHTML2() {
        ReactDOM.render(<Stats songName={this.state.songName}/>, document.getElementById("searchResult"))
    }

    render() {
        return (
        <div className="container">
          <div className="row-lg-12">
                <div className="col-lg-12">
                    <h1 className="">SEARCH</h1>
                    <hr/>
                </div>
                <div id="content" className="">
                        <p >
                            Add the address of the artist to view their transaction history.
                        </p>
                        <br/>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            this.setState({address :this.address.value.toLocaleLowerCase()}, ()=> {
                                this.generateHTML1()
                            })
                        }} role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                    id="address" 
                                    className="form-control input-lg" 
                                    name="number" 
                                    placeholder="Artist's address"
                                    ref = {(input) => {this.address = input}}
                                    required
                                    />
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <hr/>
                        <div id="txnHistory"></div>
                </div> 

                <div id="content" className="">
                        <p >
                            Enter the song name to view song stats.
                        </p>
                        <br/>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            this.setState({songName :this.address.value}, ()=> {
                                this.generateHTML2()
                            })
                        }} role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                    id="address" 
                                    className="form-control input-lg" 
                                    name="number" 
                                    placeholder="Song Name"
                                    ref = {(input) => {this.address = input}}
                                    required
                                    />
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <hr/>
                        <div id="searchResult"></div>
                </div>    
            </div> 
        </div>
        );
    }
}

export default ViewStats;