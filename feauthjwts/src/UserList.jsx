import React from 'react';
import axios from 'axios';

import './auth/tokenConfig';
import requiresAuth from './auth/authRequired';

class UserList extends React.Component {
    state = {
        users: [],
    };

    render() {
        const currentusers = this.state.users
        // console.log("bannanas:",currentusers)
        return (
            <>
                <h2>Our Users</h2>
                <div>
                    <ul>
                        {currentusers.map(user => (
                            <div className="userinfo">
                                <div>
                                <h4>Username</h4>    
                                <li key={user.id}>Username: {user.username}</li>
                            </div>
                            <div>
                                <h4>Department</h4>    
                                <li key={user.id}>Department: {user.department}</li>
                            </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </>
        );
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/users';

        axios
        .get(endpoint)
        .then(res => {
            console.log('users', res.data.users);
            this.setState(() => ({ users: res.data.users }));
        })
        .catch(({ response }) => {
            console.error('users error', response);
        });
    }
    }

    export default requiresAuth(UserList);
