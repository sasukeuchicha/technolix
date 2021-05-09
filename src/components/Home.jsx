import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Home =() => {
    return(
        <>
        <div className="background_home">
            <section id ="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="text-center">
                                <h1>Welcome to <strong className="brand-name"> Technolix</strong></h1>
                                <h2 className="mt-2">
                                    Turning Ideas into reality
                                </h2>
                                <div className="mt-3">
                                <NavLink className="btn_about_us" to="/Events">
                                    Explore
                                </NavLink>
                                </div>
                            </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        </>
    )
}

export default Home