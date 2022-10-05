import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './assets/css/oumtt.scss'
import Header from './exhibit_main/1_Header'
import NaMain from './nature_main/Main'
import NaProgram from './nature_program/Program'
import ExMain from './exhibit_main/Main'	
import ExProgram from './exhibit_program/Program'
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
					<Route path="/project/nature/main/" element={<NaMain />}></Route>
					<Route path="/project/nature/program/" element={<NaProgram />}></Route>
					<Route path="/project/exhibit/main/" element={<ExMain />}></Route>
					<Route path="/project/exhibit/program/" element={<ExProgram />}></Route>
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