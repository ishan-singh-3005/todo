import React, {useState} from 'react';
import './ListItems.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default function ListItems(props){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const items = props.items;
    const listItems= items.map(items =>
        {
            return(
            <div className="list" key={items.key}>
                <p>
                    <input type="text" 
                    id={items.key} 
                    value={items.text}
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, items.key)
                        }
                    }/>
                    <span>                        
                        <IconButton className="faicons"
                        onClick={ () => props.deleteItem(items.key)}>
                            <DeleteIcon/>
                        </IconButton>  
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <PriorityHighIcon data-tut="tag"/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem >High</MenuItem>
                            <MenuItem >Medium</MenuItem>
                            <MenuItem >Low</MenuItem>
                        </Menu>
                        {props.priority === "High" ? <button>High</button> : null}                                   
                    </span>
                </p>
            </div>
            )
        })

    return(
        <div>{listItems}</div>
    )
}