import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ChevronLeft } from '../../assets/svg/chevron-left.svg'

const ReservationPage = () => {

    const { id } = useParams();

    let [reservation, setReservation] = useState([])

    useEffect(() => {
        getReservation()
    }, [id])

    let getReservation = async () => {
        let response = await fetch (`/api/reservations/${id}/`)
        let data = await response.json()
        console.log('DATA: ', data)
        setReservation(data)
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/reservation/">
                        <ChevronLeft />
                    </Link>
                </h3>
            </div>
            <h3>{reservation.Name}
                <br />{reservation.Phone}
                <br />{reservation.Day}
                <br />{reservation.Time}
                <br />{reservation.Dance}
                <br />{reservation.Personal}
            </h3>
        </div>
    )
}

export default ReservationPage