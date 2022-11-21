import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

const Jumbocomp = props => {
    const data = props.data[0]
    return (
        <div>
            <div className='px-5 mb-4 bg-light rounded-3'>
                <div className='container-fluid py-5'>
                    <h1 className='display-5 fw-bold'>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    <p className='col-md-8 fs-6'>{data.topText}</p>
                    <hr />
                    <p>{data.bottomText}</p>
                    <button className='btn btn-dark btn-lg' type='button'>
                        <FontAwesomeIcon icon={faCoffee} />
                        {data.btnText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jumbocomp
