import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function BuyToken(){
    const musicContactContract = useSelector(state => state.musicContractContract);
    const currentAccount = useSelector(state => state.currentAccount);
    const redeemableBalance =  useSelector(state => state.redeemableBalance);
    const [numberOfToken, setNumberOfToken] = useState("")

    // const tokenSaleContract = useSelector(state => state.tokenSaleContract);
    // const tokenHeld = useSelector(state => state.tokenHeld);
    // const tokenPriceETH = useSelector(state => state.tokenPriceETH);
    // const tokenPriceWEI = useSelector(state => state.tokenPriceWEI);
    // const tokenSold = useSelector(state => state.tokenSold);
    // const [transferAddress, setTransferAddress] = useState("")
    // const [transferValue, setTransferValue] = useState("")
    useEffect(() => {

    }, []);

    return(
        <div className="container ">
          <div className="row ">
                <div className="col-lg-12">
                    <h1 className="">REDEEM</h1>
                    <hr/>
                    <br/>
                </div>

                <div id="content" className="">
                        <p >
                            You {currentAccount} currently have {redeemableBalance}&nbsp;DAPP that can be redeemed.
                        </p>
                        <br/>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            //const value = numberOfToken * 10**10
                            const value = numberOfToken
                            console.log(value)
                            musicContactContract.methods.redeemTokens(value*10**10, currentAccount).send({from: currentAccount})
                        }} role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input 
                                        id="numberOfTokens" 
                                        className="form-control input-lg" 
                                        type="number" 
                                        name="number" 
                                        placeholder="Redeem some or all token(s)"
                                        pattern="[0-9]"
                                        value={numberOfToken}
                                        onChange={(e) => {setNumberOfToken(e.target.value)}}
                                        required
                                    />
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary btn-lg">Redeem Tokens</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <br/>
                    {/* </div>  */}
                </div>
          </div>
      </div>
    )
}
    
export default BuyToken;
