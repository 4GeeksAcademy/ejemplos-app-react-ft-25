//import React from 'react'
import { sumar, restar, multiplicar } from './libs/functions'

import config, { USER } from '../config'
import { Card } from './Card.jsx'
import { MyButton } from './MyButton.jsx'

const App = () => {
    return (
        <>
            <h1 className='text-primary text-center'>Hola Mundo</h1>
            <p>{config.user} {USER}</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card title="Prueba 1" url="https://picsum.photos/id/666/400/250" description="Esto es una prueba" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Prueba 2" url="https://picsum.photos/id/450/400/250" description="Esto es una prueba" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Prueba 3" url="https://picsum.photos/id/390/400/250" description="Esto es una prueba" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Prueba 4" url="https://picsum.photos/id/890/400/250" description="Esto es una prueba" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Esto es una prueba" url="https://picsum.photos/id/278/400/250" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <MyButton className={"btn btn-primary btn-sm"} text={"Button 1"} />
                        <MyButton type="reset" className="btn btn-success btn-sm" text="Button 2" />
                        <MyButton type="submit" className="btn btn-danger btn-sm" text="Button 3" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App