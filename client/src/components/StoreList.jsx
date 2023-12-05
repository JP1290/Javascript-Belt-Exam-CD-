import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'


const StoreList = (props) => {
    const { stores, setStores } = props
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/stores")

            .then((res) => {
                console.log(res.data)
                setStores(res.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteStore = e => {
        const id = e.target.id
        axios
            .delete(`http://localhost:8000/api/stores/` + id)
            .then((res) =>{
                const newStores = stores.filter( store => store._id !== id)
                setStores(newStores)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div>

            <h2>Store Finder</h2>

            <h5>Find stores in your area!</h5>

            <table>

                <thead>

                    <tr>

                        <th> Store </th>

                        <th> Store Number </th>

                        <th> Open </th>
                        
                        <th> Remove </th>

                    </tr>

                </thead>

                <tbody>
                    {
                        stores.map( (store) => {
                            return (

                                <tr key = {store._id}>

                                    <td><Link to = {`/stores/` + store._id}> {store.name} </Link></td>

                                    <td> {store.number} </td>

                                    <td> {store.open ? "True" : "False"} </td>

                                    <td><button onClick = {deleteStore} id = {store._id}>Remove</button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <button><Link to = {`/stores/add`}>Can't find your store?</Link></button>

        </div>
    )

}

export default StoreList