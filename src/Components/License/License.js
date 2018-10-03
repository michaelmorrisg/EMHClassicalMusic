import React, {Component} from 'react'
import './License.css'

class License extends Component {

    render(){
        return(
            <div className="licensing-main">
                <div className="licensing-content">
                    <h1 className="page-header">Licensing</h1>
                    <p>For licensing, please contact Warner/Chappell Production Music</p>
                    <p>(615) 244-6515</p>
                    <p>licensing@warnerchappellpm.com</p>
                    <img src={require('../../Assets/warnerLogo.png')}/>
                </div>
            </div>
        )
    }
}
export default License