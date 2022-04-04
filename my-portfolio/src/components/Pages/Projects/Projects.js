import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className='row align-items-start flex-row mt-5'>
                        <div className='col-lg'>
                            <h1>Skills</h1>
                            <hr></hr>
                            <ul className="nav justify-content-beginning border-1 pt-1 pb-1">
                                <li className="nav-item pr-1">
                                    <h5>Languages</h5>
                                    <ul>
                                        <li>Python</li>
                                        <li>HTML/CSS</li>
                                        <li>Javascript</li>
                                        <li>Bash</li>
                                        <li>Java</li>
                                        <li>C#</li>
                                    </ul>
                                </li>
                                <li className="nav-item pr-1">
                                    <h5>OS</h5>
                                    <ul>
                                        <li>Windows</li>
                                        <li>Linux/Unix</li>
                                        <li>Android</li>
                                    </ul>
                                </li>
                                <li className="nav-item pr-1">
                                    <h5>Frameworks</h5>
                                    <ul>
                                        <li>Flask</li>
                                        <li>React</li>
                                        <li>Express.js</li>
                                    </ul>
                                </li>
                                <li className="nav-item pr-1">
                                    <h5>Databases</h5>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>PostgreSQL</li>
                                        <li>SQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </li>
                                <li className="nav-item pr-1">
                                    <h5>Tools</h5>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Heroku</li>
                                        <li>Jupyter</li>
                                        <li>Jira/Trello</li>
                                        <li>Android Studio</li>
                                        <li>Unity</li>
                                        <li>Eclipse</li>
                                    </ul>
                                </li>
                            </ul>
                            <br></br>
                            <h1>Projects</h1>
                            <hr></hr>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}