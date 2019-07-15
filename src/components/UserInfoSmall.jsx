import React, { Component } from 'react';

// props: fullName, profilePicUrl

class UserInfoSmall extends Component {
    render() { 
        return ( 
            <div className="card bg-light">
                <div className="row">
                    <div className="col">
                        <img className='img-fluid rounded' src={this.props.profilePicUrl}></img>
                    </div>
                    <div className="col">
                        <div className='text'>{this.props.fullName}</div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserInfoSmall;