import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className='row align-items-start flex-row-reverse mt-5'>
            <div className='col-lg-6'>
              <div className="profile">
              </div>
              <h5 className='connect'>Connect with me!</h5>
              <p className='email'>Email me at xixi.lin1990@gmail.com</p>
              <h5 className='text-muted text-center mx-auto'>
                <a href='https://github.com/xixilinn' target="blank"><FaGithub /></a> /{' '}
                <a href='https://linkedin.com/in/xixilinn/' target="blank"><BsLinkedin /></a>
              </h5>
            </div>
            <div className='col-lg-6'>
              <h1>About Me</h1>
              <hr></hr>
              <h5>Hi, I'm Xi Xi Lin! I'm currently a software engineer for CSG.</h5>
              <p>
                I'm an independent web developer and I love building and designing websites, be it for a client, a friend, or for myself.
                I have no artistic abilities, but often find myself admiring great art pieces, I believe that creating websites
                are the best way for me to show off my creative design skills. I'm a highly organized individual, a strong listener,
                a fast learner, and a team player. I'm always asking questions and learning new things, and I hope to learn from you too!
              </p>
              <p>
                Aside from web development, you'll often find me out and about. I love taking long walks with a nice cup of iced coffee in hand
                to enjoy the weather and the foliage of good ol' Boston, Massachusetts, or strumbling across hole-in-the-wall restaurants and eating
                so well there I barely have the strength to walk home. Other than that, you'll find me at home, by my desk, playing games—fighting games
                especially!—or watching a series of Asian dramas.
              </p>
            </div>
          </div>
          <div>
            <h1>Skills</h1>
            <hr></hr>
            <ul className="nav justify-content-beginning border-1 pt-1 pb-1">
              <li className="nav-item pr-1">
                <h5>Languages</h5>
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>HTML/CSS</li>
                  <li>Bash</li>
                </ul>
              </li>
              <li className="nav-item pr-1">
                <h5>OS</h5>
                <ul>
                  <li>Linux/Unix</li>
                  <li>Windows</li>
                </ul>
              </li>
              <li className="nav-item pr-1">
                <h5>Frameworks</h5>
                <ul>
                  <li>React</li>
                  <li>Flask</li>
                  <li>Express.js</li>
                  <li>Bootstrap</li>
                </ul>
              </li>
              <li className="nav-item pr-1">
                <h5>Databases</h5>
                <ul>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Redshift</li>
                  <li>MySQL</li>
                </ul>
              </li>
              <li className="nav-item pr-1">
                <h5>Tools</h5>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Jira/Trello/ADO</li>
                  <li>Docker</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                </ul>
              </li>
            </ul>
            <br></br>
          </div>
        </Container>
      </div>
    );
  }
}