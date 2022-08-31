import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/App.scss'
import Header from './1_Header'
import Main from './js_main/2_0_Main'
import Program from './js_program/2_0_Main'
import Footer from './3_Footer'

function App() {
    return (
        <>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/program/*" element={<Program />}></Route>
				</Routes>
                <Footer />
			</BrowserRouter>
        </>
    );
}

export default App;