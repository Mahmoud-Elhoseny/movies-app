import React from 'react'
import '../css/Footer.css'
import { Container } from 'react-bootstrap'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id='footer'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Movies Box</h4>
                        <p className='text-white'>A film is - or should be - more like
                            <br /> music than like fiction. </p>
                    </div>
                    <div>
                        <h4>Movies Box</h4>
                        <ul>
                            <li className='pb-1'><a href="#home" className=' text-white'>Home</a></li>
                            <li className='pb-1'><a href="#movies" className=' text-white'>Movies</a></li>
                            <li className='pb-1'><a href="#popular" className=' text-white'>New & Popular</a></li>
                            <li><a href="#home" className=' text-white'>My List</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SERVICES</h4>
                        <ul>
                            <li className='pb-1'><a href="#" className=' text-white'>Watching</a></li>
                            <li><a href="#" className=' text-white'>Publishing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>FOLLOW</h4>
                        <ul className='d-flex icons'>
                            <li><a href='https://www.linkedin.com/in/mahmoud-elhoseny-910755261' target='blank' className=' text-white'><AiFillLinkedin size={30} /></a></li>
                            <li><a href='https://github.com/Mahmoud-Elhoseny' target='blank' className=' text-white'><AiFillGithub size={30} /></a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer