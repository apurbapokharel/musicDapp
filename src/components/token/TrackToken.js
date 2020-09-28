import React, { Component } from 'react';
import Table from './Table'

class ViewStats extends Component {

    render() {
        return (
        <div className="container">
          <div className="row-lg-12">
                <div className="col-lg-12">
                    <h1 className="">Token History</h1>
                    <hr/>
                </div>
                <div id="content" className="">
                        <div id="txnHistory">
                            <Table />
                        </div>
                </div>    
            </div> 
        </div>
        );
    }
}

export default ViewStats;