import React from 'react';
import './App.css'

export default function TodoBannert(props){

        return(
            <div className="banner">
                {props.items.length === 1 ? <h1>You have 1 task remaining</h1> 
                : <h1>You have {props.items.length} tasks remaining</h1>}                
            </div>
        ); 
}


