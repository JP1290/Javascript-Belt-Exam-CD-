import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams} from "react-router-dom";


const StoreDetail = (props) => {

    const [ oneStore, setOneStore] =useState({})
    const {id} =  useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/stores/${id}`)
            .then((res) => {
                console.log(res.data)
                setOneStore(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (

        <div>

            <div>

                <h2> Store Finder </h2>

                <Link to = {"/"}>go back home</Link>
            
            </div>

            <h4> {oneStore.name} </h4>
            
            <h4> Store Number {oneStore.number} </h4>

            <h4> {oneStore.open ? "Open" : "Closed"} </h4>

            <button><Link to = {"/stores/edit/" + id}>Edit Store Details</Link></button>

        </div>
    )
}

export default StoreDetail