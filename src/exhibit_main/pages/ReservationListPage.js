import ListItem from '../components/ListItem'
import React, { useEffect, useState } from 'react'

const ReservationListPage = () => {

    let [reservations, setReservations] = useState([])

    useEffect(() => {
        getReservations()
    }, [])

    let getReservations = async () => {
        let response = await fetch (`/api/reservations/`)
        let data = await response.json()
        console.log('DATA: ', data)
        setReservations(data)
        for(let i=0; i<reservations.length; i++) {
            if (reservations[i].Day === '9월 3일') {
                console.log(reservations[i]);
            }
        }
    }

    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782;</h2>
                <p className='notes-count'>{reservations.length}</p>
            </div>
            <div className='Notes-list'>
                {reservations.map((reservation, index) => (
                    <ListItem key={index} reservation={reservation} />
                ))}
            </div>
        </div>
    )
}

export default ReservationListPage