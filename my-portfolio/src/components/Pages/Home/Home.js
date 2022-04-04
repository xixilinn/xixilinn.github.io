import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className='row align-items-start flex-row mt-5'>
                        <div className='col-lg-6'>
                            <h1>About Me</h1>
                            <hr></hr>
                            <h6>Hi, I'm Xi Xi Lin! I'm currently a graduate student at Wentworth Institute of Technology majoring in Applied Computer Science.</h6>
                            <br></br>
                            <p>
                                I'm an independent web developer and I love building and designing websites, be it for a client, a friend, or for myself. 
                                Since I have no artistic abilities, but often find myself admiring great art pieces, I believe that creating websites 
                                are the best way for me to show off my creative design skills. I'm a highly organized individual, a strong listener, 
                                a fast learner, and a team player. I'm always asking questions and learning new things, and I hope to learn from you too!
                            </p>
                            <br></br>
                            <p>
                                Aside from web development, you'll often find me out and about. I love taking long walks with a nice cup of iced coffee in hand 
                                to enjoy the weather and the foliage of good ol' Boston, Massachusetts, or strumbling across hole-in-the-wall restaurants and eating 
                                so well there I barely have the strength to walk home. Other than that, you'll find me at home, by my desk, playing games—fighting games 
                                especially!—or watching a series of Asian dramas.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}