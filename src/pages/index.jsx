import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hello from './hello'
import Signup from './signup'
import Login from './login'
import Members from './ourmembers'
import Recepies from '../components/recepies'
import Regions from '../components/regions'
import RecipePage from '../components/receptpage'


const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <Hello />
                <Signup />
                <Login />
                <Members /> */}

                <Routes>
                    <Route path="/" element={<Hello />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/ourteam" element={<Members />} />
                    <Route path="/recepies" element={<Recepies />} />
                    <Route path="/regions" element={<Regions />} />
                    <Route path="/" element={<Recepies />} />
                    <Route path="/recipe/:id" element={<RecipePage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages
