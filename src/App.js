import React, {useState} from 'react'
import Datastable from './components/Datastable'
import Jumbocomp from './components/Jumbocomp'
import NavBar from './components/NavBar'

function App() {
    const starter = useState({
        title: 'Kelompok 6',
        subtitle: 'PBP Submission',
        topText:
            'Using a series of utilities, you can create this jumbotron, just like theone in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.',
        bottomText:
            'It uses utility classes for typography and spacing to space content out within the larger container.',
        btnText: ' Learn More',
    })
    return (
        <div>
            <NavBar />
            <Jumbocomp data={starter} />
            <Datastable />
        </div>
    )
}

export default App
