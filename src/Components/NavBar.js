import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { BiTime } from 'react-icons/bi';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import '../css/navBar.css'
import { Form, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
const NavBar = ({ handleChange, moviesInList, setMoviesListed, setSelectedMovie }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowing = (movie) => {
        setSelectedMovie(movie?.moviesInList);
        navigate(`/film/${movie.moviesInList?.id}`);
    };
    useEffect(() => {
        if (moviesInList) {
            setMoviesListed(moviesInList);
        }
    }, [moviesInList, setMoviesListed]);
    const handleDeleted = (mov) => {
        const updatedMovies = moviesInList.filter((movie) => movie.moviesInList.id !== mov.id)
        dispatch(deleteMovie(updatedMovies))
    }

    return (
        <section className='sec3'>
            <Container className='containerNav'>
                <Navbar expand="lg" id='home' >
                    <Navbar.Brand href="/" style={{ color: 'white' }}><BiSolidMoviePlay className='me-2 fs-3 c-white' />Movies Box</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <Link to={'/'}><Nav.Link href="#home" className='ps-5 text-white'>Home</Nav.Link></Link>
                            <Nav.Link href="#movies" className='ps-5 text-white'>Movies</Nav.Link>
                            <Nav.Link href="#popular" className='ps-5 text-white'>New & Popular</Nav.Link>
                            <Nav.Link className='ps-5 text-white' onClick={handleShow}>My List</Nav.Link>
                            {moviesInList.length ? (
                                <Offcanvas show={show} onHide={handleClose} >
                                    <Offcanvas.Header closeButton >
                                        <Offcanvas.Title className='text-white '>{moviesInList.map((movie) => (
                                            <div key={movie.moviesInList.id} >
                                                <p className='text-center pt-5'>{movie.moviesInList.title}</p>
                                                <AiFillDelete size={25} className='deleteIcon' onClick={() => handleDeleted(movie.moviesInList)} />
                                                <div className='position-relative'>
                                                    <img
                                                        alt='img'
                                                        className='imgCanvas'
                                                        src={`http://www.themoviedb.org/t/p/w220_and_h330_face${movie.moviesInList.poster_path}`}
                                                    />
                                                    <AiFillPlayCircle className='overlay-playIcon' onClick={() => handleShowing(movie)} />
                                                </div>
                                            </div>
                                        ))}</Offcanvas.Title>
                                    </Offcanvas.Header>
                                </Offcanvas>
                            ) :
                                <Offcanvas show={show} onHide={handleClose} >
                                    <Offcanvas.Header closeButton onClick={handleClose} >
                                        <Offcanvas.Title className='text-white text-center '>Please Add Movies</Offcanvas.Title>
                                    </Offcanvas.Header>
                                </Offcanvas>
                            }
                            <Nav.Link href="#footer" className='ps-5 text-white'>PRICING</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto" >
                            <Nav.Link href="#link" className='sign rounded ps-5 text-white' >SIGN IN <BsFillPersonFill className='fs-5  mb-1' /></Nav.Link>
                            <Form className="d-flex">
                                <Form.Control
                                    style={{ backgroundColor: '#d1cece' }}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 "
                                    aria-label="Search"
                                    onChange={handleChange}
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className='textNav text-white'>
                    <h3>Movies</h3>
                    <h1>Unlimited <span>Movies</span>,</h1>
                    <h2>Popular TV Shows</h2>
                    <div>
                        <span className='hdSpan'>HD</span>
                        <span className='px-3'>Drama,Action</span>
                        <span className='pe-2'>2023 <FaRegCalendarDays color='#f4b35d' /></span>
                        <span>90 min <BiTime color='#f4b35d' /></span>
                    </div>
                    <button className='watch mt-4' type=""><AiFillPlayCircle className='watchIcon' color='#f4b35d' size={25} /> Watch now</button>
                </div>
            </Container>
        </section>
    )
}

export default NavBar