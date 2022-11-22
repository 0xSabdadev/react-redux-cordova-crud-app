import React from 'react'
import logo from './logo.svg'
import {Counter} from './features/counter/Counter'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeActivity from './screens/HomeActivity'
import AddActivity from './screens/AddActivity'
import EditActivity from './screens/EditActivity'

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomeActivity />} />
                    <Route path='/add' element={<AddActivity />} />
                    <Route path='/edit/:id' element={<EditActivity />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
