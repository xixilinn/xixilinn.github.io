import { Component } from 'react';
import { Container, Badge, Button } from 'react-bootstrap';
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Container className='container'>
                    <div className='mt-5'>
                        <h1>Projects</h1>
                        <hr></hr>
                        {/* Request Box */}
                        <div>
                            <h4>Yonmie</h4>
                            <img className='d-block' src="https://cdn.discordapp.com/attachments/960701390320181248/1138211224685916230/image.png" alt='preview'></img>
                            <div className='row align-items-start flex-row mt-3'>
                                <div className='col-md-6'>
                                    <h5 className='about'>About</h5>
                                    <p>
                                        This is a simple website built using React for a personal client who wanted a
                                        website to showcase her art and have an easy way to display her commission prices.
                                    </p>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button href='https://yonmie.com' target='blank' variant='outline-primary'>
                                            View Website
                                        </Button>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h5 className='tools'>Tools</h5>
                                    <h5 className='languages'>
                                        <Badge pill variant='primary'>Javascript</Badge>{' '}
                                        <Badge pill variant='primary'>HTML</Badge>{' '}
                                        <Badge pill variant='primary'>CSS</Badge>{' '}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <center><hr className='separator'></hr></center>
                        {/* Instagredients */}
                        <div>
                            <h4>Instagredients</h4>
                            <img className='d-block' src="https://cdn.discordapp.com/attachments/960701390320181248/960701460176338994/unknown.png" alt='preview'></img>
                            <div className='row align-items-start flex-row mt-3'>
                                <div className='col-md-6'>
                                    <h5 className='about'>About</h5>
                                    <p>
                                        Instagredients is an Android application made in Android Studio that allows users 
                                        to input ingredients and search for recipes containing inputted ingredients. Recipes 
                                        are scraped from www.allrecipes.com.
                                    </p>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button href='https://github.com/linxatwit/Instagredients' target='blank' variant='outline-primary'>
                                            View Project
                                        </Button>{' '}
                                        <Button href='https://play.google.com/store/apps/details?id=edu.wit.mobileapp.instagredients&hl=en_US&gl=US' target='blank' variant='outline-primary'>
                                            Download App
                                        </Button>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h5 className='tools'>Tools</h5>
                                    <h5 className='languages'>
                                        <Badge pill variant='primary'>Java</Badge>{' '}
                                        <Badge pill variant='primary'>Python</Badge>{' '}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <center><hr className='separator'></hr></center>
                        {/* Accessibot */}
                        <div>
                            <h4>Accessibot</h4>
                            <img className='d-block' src="https://cdn.discordapp.com/attachments/960701390320181248/960701491230945290/unknown.png" alt='preview'></img>
                            <div className='row align-items-start flex-row mt-3'>
                                <div className='col-md-6'>
                                    <h5 className='about'>About</h5>
                                    <p>
                                        Discord has quickly become one of the most used VoIP and instant messaging applications used by tens of 
                                        millions around the world. However, Discord has not yet been able to offer features that promote enough 
                                        accessibility for a wide range of its users. Accessibot aims to be an in-app discord bot solution to address accessibility 
                                        issues targeting those with hearing, speech, or visual impairments. Features include text-to-speech for voice connection, 
                                        speech-to-text, custom fonts, and easier channel navigation via text commands. Through accessibot, we hope that discord 
                                        will become a more inclusive service for all so that nobody feels limited in their ability to interact with others
                                    </p>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button href='https://github.com/linxatwit/Accessibot' target='blank' variant='outline-primary'>
                                            View Project
                                        </Button>{' '}
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h5 className='tools'>Tools</h5>
                                    <h5 className='languages'>
                                        <Badge pill variant='primary'>Javascript</Badge>{' '}
                                        <Badge pill variant='primary'>Python</Badge>{' '}
                                        <Badge pill variant='primary'>HTML</Badge>{' '}
                                        <Badge pill variant='primary'>CSS</Badge>{' '}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <center><hr className='separator'></hr></center>
                        <br></br>
                    </div>
                </Container>
            </div>
        )
    }
}