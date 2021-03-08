import React, {useState} from 'react';
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        updateItem,
        deleteItem,
        item={title: "Some Title", _id: "ABC"}
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <span>
            {
                !editing &&
                <>
                    <Link className="nav-link" to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit" style={{color:'black'}}></i>
                </>
            }

            {
                editing &&
                <>
                    <input
                        onChange={(e)=>setCachedItem({...cachedItem, title: e.target.value})}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }}
                       className="fas fa-check" style={{color:'black'}}></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times" style={{color:'black'}}></i>
                </>
            }


        </span>
    )
}

export default EditableItem