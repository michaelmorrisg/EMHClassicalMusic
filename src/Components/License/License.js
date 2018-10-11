import React, {Component} from 'react'
import './License.css'

class License extends Component {

    render(){
        return(
            <div className="licensing-main">
                <div className="licensing-content">
                    <div className="licensing-left">
                        <h1 className="page-header" id="small-title">Licensing</h1>
                    </div>
                    <div className="licensing-right">
                        <p>For licensing, please contact Warner/Chappell Production Music</p>
                        <p>(615) 244-6515</p>
                        <p>licensing@warnerchappellpm.com</p>
                    </div>
                </div>
                    <img src={require('../../Assets/warnerLogo.png')}/>
            </div>
        )
    }
}
export default License