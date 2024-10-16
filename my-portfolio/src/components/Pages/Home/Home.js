import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
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
								<a href='https://github.com/linxatwit' target="blank"><GoMarkGithub /></a> /{' '}
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
									<li>jQuery</li>
									<li>Bootstrap</li>
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
									<li>Jira/Trello</li>
									<li>Docker</li>
									<li>Heroku</li>
									<li>Netlify</li>
									<li>Jupyter</li>
									<li>Android Studio</li>
									<li>Unity</li>
									<li>Eclipse</li>
								</ul>
							</li>
						</ul>
						<br></br>
					</div>
				</Container>
			</div>
		)
	}
}