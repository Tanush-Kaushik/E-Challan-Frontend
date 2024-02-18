import React from 'react'
import Heading from './Heading'
import ButtonPair from './ButtonPair'

const Home = () => {
    return (
        <>
            <section className='heroSection container'>
                <div className='empty' />
                <Heading
                    heading1="Check your speeding tickets online now!"
                    heading2="Enter your vehicle number plate to quickly and easily check for any outstanding speeding tickets."
                    className="heroText"
                    button1="Check"
                    button2="Pay"
                />
            </section>
            <section className='featureSection container'>
                <Heading
                    heading1="Simplify the Process with Our Online Ticket Checking Feature"
                    heading2="Our online ticket checking feature allows you to easily check and pay your speeding tickets using just your vehicle number plate."
                    className="featureText"
                />
                <div className='empty' />
            </section>
            <section className='featureSectionContinued container'>
                <div className='feature'>
                    <h4>Convenient</h4>
                    <Heading
                        heading1="Secure Payment Gateway for Ticket Fines"
                        heading2="Our website provides a secure payment gateway for conveniently paying your ticket fines online. With just a few clicks, you can easily settle your fines and avoid any hassle."
                        button1="Learn More"
                        button2="Sign Up >"
                        className="featureContinueText"
                    />
                </div>
                <div className='empty' />
            </section>
            <section className='benefitsSection container'>
                <div className='benefits'>
                    <h4>Convenience</h4>
                    <Heading
                        heading1="Save Time and Simplify Ticket Management"
                        heading2="Our website offers a hassle-free solution for checking and paying speeding tickets. With just a few clicks, you can conveniently handle your ticket without the need to visit a physical location. Enjoy the convenience of managing your tickets online, anytime."
                        className='benefitText'
                    />
                    <div className='benefitList'>
                        <Heading
                            heading1="Time-Saving"
                            heading2="Skip the long queues and save valuable time with our online ticket management system."
                        />
                        <Heading
                            heading1="Ease of Use"
                            heading2="Our user-friendly interface makes it simple and intuitive to handle your speeding tickets."
                        />
                    </div>
                    <ButtonPair
                        button1="Learn More"
                        button2="Sign Up >"
                        className="benefitsButtons"
                    />
                </div>
                <div className='empty' />
            </section>
            <section className='upperTriangle'>
            </section>
            <section className='workingSection container'>
                <h4>Simplified</h4>
                <Heading
                    heading1="Easy Steps to Check and Pay Tickets"
                    heading2="Follow these simple steps to check and pay for your speeding tickets hassle-free."
                />
                <div className='workingCards'>
                    <Heading
                        heading1="Enter License Plate Number"
                        heading2="Input your vehicle's Plate number into out system." />
                    <Heading
                        heading1="View Ticket Details"
                        heading2="Get an overview of your speeding ticket details." />
                    <Heading
                        heading1="Make Payment"
                        heading2="Pay for your speeding ticket securely and conveniently." />
                </div>
                <ButtonPair
                    button1="Check"
                    button2="Pay >"
                    className="workingButtons"
                />
            </section>
            <section className='lowerTriangle'>
            </section>
            <section className='TestimonialSection container'>
                <div className='empty' />
                <div className='testimonial'>

                    <h1>⭐⭐⭐⭐⭐</h1>
                    <Heading
                        heading1="I was able to easily check and pay for my speeding ticket using this service. It saved me a lot of time and hassle." />
                    <h4>John Doe</h4>
                    <h4>Marketing Manager,ABC inc.</h4>
                </div>
            </section>
            <section className='CTASection container'>
                <Heading
                    heading1="Check Your Tickets Online"
                    heading2="Easily check and pay speeding tickets online."
                    button1="Start"
                    button2="Learn More"
                    className="CTA"
                />
            </section >
        </>
    )
}

export default Home