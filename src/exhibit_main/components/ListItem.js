import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ reservation }) => {
    return (
        <Link to={`/reservation/${reservation.id}`}>
            <table border="2">
                <thead>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>무용 전공 여부</th>
                    <th>개인 정보 동의</th>
                    <th>날짜</th>
                    <th>인원수</th>
                    <th>시간</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{reservation.Name}</td>
                        <td>{reservation.Phone}</td>
                        <td>{reservation.Dance}</td>
                        <td>{reservation.Personal}</td>
                        <td>{reservation.Day}</td>
                        <td>{reservation.Person}</td>
                        <td>{reservation.Time}</td>
                    </tr>
                </tbody>
            </table>
        </Link>
    )
}

export default ListItem
