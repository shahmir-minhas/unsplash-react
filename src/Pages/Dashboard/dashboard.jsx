import React, { Component } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/context';


const Dashboard = () => {
    const {islogout} = useContext(AuthContext)

    const handleLogout = () =>{
        islogout();
        //reload clears the state of context provider
        window.location.reload();
    }
    return ( <React.Fragment>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <div className="text-center">
        <button className="btn btn-danger active" onClick={handleLogout}>Logout</button>
        </div>
        
    </React.Fragment> );
}
 
export default Dashboard;