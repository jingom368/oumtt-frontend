import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './assets/css/oumtt.scss'
import Header from './exhibit_main/1_Header'
import Main from './exhibit_main/2_0_Main'	
import Program from './exhibit_program/2_0_Program'	
import ReservationListPage from './exhibit_main/pages/ReservationListPage'
import ReservationPage from './exhibit_main/pages/ReservationList'
// import Program from './js_program/2_0_Main'
// import BasicTextFields from './exhibit_main/2_0_exper';
import './Reservation.css'

function Oumtt() {
    return (
        <>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/project/exhibit/main/" element={<Main />}></Route>
					<Route path="/project/exhibit/program/" element={<Program />}></Route>
				</Routes>
				<div className="container dark">
					<div className="app">
						<Routes>
							<Route path="/reservation/" element={<ReservationListPage />}></Route>
							<Route path="/reservation/:id/" element={<ReservationPage />}></Route>
						</Routes>
					</div>
				</div>
                {/* <Footer /> */}
			</BrowserRouter>
        </>
    );
}

export default Oumtt;