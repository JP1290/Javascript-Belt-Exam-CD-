import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


const StoreForm = (props) => {
    const { stores, setStores } = props;
    const navigate = useNavigate();
    const [name, setName] = useState(""); 
    const [number, setNumber] = useState("");
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.
            post('http://localhost:8000/api/stores', {
                name,
                number,
                open,
            })
            .then(res =>{
                console.log(res);
                console.log(res.data);
                setStores([...stores, res.data])
                navigate("/stores/" + res.data._id)
            })
            .catch( err => {
                console.error("error here", err)
                console.log(err.response.data)
                const errorResponse = err.response.data.errors
                const errArray = []
                for ( const key of Object.keys(errorResponse)) {
                    errArray.push(errorResponse[key].message)
                }
                setErrors(errArray)
            })
    }
    
    return (
    <>
    <div>

        <div>

            <h2>Store Finder</h2>

            <Link to = {"/"}>go back home</Link>

        </div>

        <h5>Add a new store!</h5>

        <form onSubmit={onSubmitHandler}>

            {
                errors.map((err, idx) => (
                        <p key = {idx} >{err} </p>
                    ))
            }

            <p>

                <label>Store Name</label><br/>

                <input type="text" onChange = {(e)=>setName(e.target.value)}/>

            </p>

            <p>

                <label>Store number</label><br/>

                <input type="number" onChange = {(e)=>setNumber(e.target.value)}/>

            </p>

            <p>

                <label>Open?</label><br/>

                <input type="checkbox" onChange = {(e)=>setOpen(e.target.checked)}/>

            </p>

            <input type="submit" value = "Add a new Store"/>

        </form>

    </div>
    </>
    )
}
export default StoreForm;

