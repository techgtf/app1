import React, {useEffect, useRef, useState} from 'react'
import {Container} from "react-bootstrap";
import {Helmet} from "react-helmet";
import Footer from "../components/footer/Footer";

const EmployeeTestimonial = () => {
    return (
        <React.Fragment>
            <section class="employe-page">
            <Container>
                <h1>Employee Testimonials</h1>
                <div class="employee">
                    <div class="box-emp">
                        <div class="img-emp">
                    <img src='assets/img/employee/1.jpg' width="100%"></img>
                    </div>
                        <div class="emp-content">
                            <h4>Some Name Here</h4>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    

                    
                </div>
            </Container>
            </section>

            <Footer/>
        </React.Fragment>
    );
}



export default EmployeeTestimonial