import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeActivity from './screens/HomeActivity'
import AddActivity from './screens/AddActivity'
import EditActivity from './screens/EditActivity'
import NavBar from './components/NavBar'
import BottomBar from './components/BottomBar'
import TeamActibity from './screens/TeamActibity'

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <BottomBar />
                <Routes>
                    <Route path='/' element={<HomeActivity />} />
                    <Route path='/add' element={<AddActivity />} />
                    <Route path='/edit/:id' element={<EditActivity />} />
                    <Route path='/team' element={<TeamActibity />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
