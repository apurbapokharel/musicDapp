import React, { Component } from 'react'
import UploadForm from './UploadForm';
import UploadFormNavbar from './UploadFormNavbar';
import Footer from '../landingPage/PageFooter';
import NewUploadForm from './NewUploadForm';

class UploadFormView extends Component {
    render() {
        return (
            <div className="App">
                {/* <UploadFormNavbar /> */}
                {/* <UploadForm /> */}
                <NewUploadForm />
                {/* <Footer /> */}
            </div>
        )
    }
}
export default UploadFormView;