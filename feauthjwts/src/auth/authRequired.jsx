import React from 'react';
// import axios from 'axios';
// could be process.env.API_URL
// axios.defaults.baseURL = 'http://localhost:5000/api';

export default function(Component) {
    const token = localStorage.getItem('jwt');
    return class Authenticated extends React.Component {
        render() {
        const notLoggedIn = <div>Please login to see our users</div>;

        return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
        }
    };
}
