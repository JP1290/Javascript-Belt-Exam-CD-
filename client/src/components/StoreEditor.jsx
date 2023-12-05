import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";




const Update = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setName(res.data.name);
                setNumber(res.data.number);
                setOpen(res.data.open);
            })
            .catch(err => console.log(err))
    }, [])


    const updateHandler = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/stores/' + id, {
            name,
            number,
            open
        })
            .then(res => {
                console.log(res);
                navigate("/stores/" + id);
            })
            .catch(err => console.log(err))
    }


    return (

        <div>

            <div>

                <h2>Store Finder</h2>

                <Link to = {"/"}>go back home</Link>

            </div>

            <h5>Edit this store!</h5>

            <form onSubmit={ updateHandler }>

                <p>

                    <label>Store Name</label><br />

                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />

                </p>

                <p>

                    <label>Store Number</label><br />

                    <input type="number" 
                    name="number"
                    value={number} 
                    onChange={(e) => { setNumber(e.target.value) }} />

                </p>

                <p>

                    <label>Open?</label><br />

                    <input type="checkbox" 
                    name="open"
                    checked={open} 
                    onChange={(e) => { setOpen(e.target.checked) }} />

                </p>
                

                <input type="submit" />

            </form>

        </div>

    )
}
export default Update;

