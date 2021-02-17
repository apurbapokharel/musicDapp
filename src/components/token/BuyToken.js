import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function BuyToken(){
    const[forceRerender, setForceRerender] = useState(0)
    const tokenContract = useSelector(state => state.tokenContract);
    const tokenSaleContract = useSelector(state => state.tokenSaleContract);
    const tokenHeld = useSelector(state => state.tokenHeld);
    const tokenPriceETH = useSelector(state => state.tokenPriceETH);
    const tokenPriceWEI = useSelector(state => state.tokenPriceWEI);
    const tokenSold = useSelector(state => state.tokenSold);
    const currentAccount = useSelector(state => state.currentAccount);
    const [numberOfToken, setNumberOfToken] = useState("")
    const [transferAddress, setTransferAddress] = useState("")
    const [transferValue, setTransferValue] = useState("")
    useEffect(() => {
        var progressPercent = (Math.ceil(tokenSold) / 750000) * 100
        var fillBar = document.getElementById('progress')
        fillBar.style.width = progressPercent + '%'
    }, [forceRerender]);

    return(
        <div className="container ">
          <div className="row ">
                <div className="col-lg-12">
                    <h1 className="">EXCHANGE</h1>
                    <hr/>
                    <br/>
                </div>

                <div id="content" className="">
                        <p >
                            Introducing "MUSIC Token" (MSIC)!
                            Token price is {tokenPriceETH} Ether. You currently have {tokenHeld}&nbsp;MSIC.
                        </p>
                        <br/>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            const value = numberOfToken
                            console.log(value)
                            tokenSaleContract.methods.buyTokens(value*10**10, currentAccount).send({from: currentAccount, value : (value * tokenPriceWEI)})
                        }} role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                        id="numberOfTokens" 
                                        className="form-control input-lg" 
                                        type="number" 
                                        name="number" 
                                        placeholder="Buy 1 or more token(s)"
                                        pattern="[0-9]"
                                        value={numberOfToken}
                                        onChange={(e) => {setNumberOfToken(e.target.value)}}
                                        required
                                    />
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary btn-lg">Buy Tokens</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <div className="progress">
                            <div id="progress" className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <p> {tokenSold} / 750000 tokens sold</p>
                        <hr />
                        <p id="accountAddress"></p>
                    {/* </div>  */}
                </div>

                <div className="col-lg-12">
                    <h1 className="">TRANSFER</h1>
                    <hr/>
                    <br/>
                </div>

                <div id="content" className="">
                        <p >
                           Transfer tokens from {currentAccount} . You currently have {tokenHeld}&nbsp;MSIC.
                        </p>
                        <br/>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            const address = transferAddress
                            const value = transferValue
                            // console.log(address)
                            tokenContract.methods.tTransfer(transferAddress, value*10**10, currentAccount).send({from: currentAccount })
                        }} role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                    id="transferAddress" 
                                    className="form-control input-lg"  
                                    name="number" 
                                    placeholder="to: address"
                                    value={transferAddress}
                                    onChange={(e) => {setTransferAddress(e.target.value)}}
                                    required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                        id="transferValue" 
                                        className="form-control input-lg" 
                                        type="number" 
                                        name="number" 
                                        placeholder="token number: 1 or more"
                                        pattern="[0-9]"
                                        value={transferValue}
                                        onChange={(e) => {setTransferValue(e.target.value)}}
                                        required
                                    />
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary btn-lg">Transfer Tokens</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    <br/>
                    <hr />
                </div>     
          </div>
      </div>
    )
}
    
export default BuyToken;
