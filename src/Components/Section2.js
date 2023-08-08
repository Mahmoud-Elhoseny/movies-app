import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/section2.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai';
import { BiSolidTime } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { IoAddOutline } from 'react-icons/io5';
import { ListMovie } from '../store/authSlice';

const Section2 = ({ movies, query }) => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
    const showArrows = !isMobile;
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [iconTrans, setIconTrans] = useState({});

    const handleShow = (mov) => {
        setSelectedMovie(mov);
        setShow(true);
    };
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const handleClick = (movie) => {
        const movId = movie.id
        setIconTrans((prevIconTrans) => ({
            ...prevIconTrans,
            [movId]: !prevIconTrans[movId]
        }));
        dispatch(ListMovie({ moviesInList: movie }))
    };


    let movie = movies?.results.slice(8);
    const renderMovies = (movies) => {
        return movies.filter((movies) => {
            if (query === "") {
                return movies
            }
            else if (movies.title.toLowerCase().includes(query.toLowerCase())) {
                return movies
            }
        })?.map((mov) => (
            <Col className='center' key={mov.id} xs={12} sm={6} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }} className='cart mb-3'>
                    <Card.Img variant="top" src={`http://www.themoviedb.org/t/p/w220_and_h330_face${mov.poster_path}`} />
                    <div className='text-center'>
                        <h3 className='titlesize'>{mov.title}</h3>
                        <span className='fw-bold p-2'>{mov.release_date}</span>
                    </div>
                    <div className='text-center fw-bold'>
                        <p className='hdSpan'>HD</p>
                        <div className='d-flex justify-content-between px-3 pb-2'>
                            <span>90min<BiSolidTime color='#f4b35d' /></span>
                            <span> {mov.vote_count}<AiFillStar color='#f4b35d' /></span>
                        </div>
                    </div>
                    {
                        iconTrans[mov.id] ? (<span className='overlay-icon'><MdOutlineDoneOutline /></span>) :
                            <span className='overlay-icon'><IoAddOutline onClick={() => handleClick(mov)} /></span>
                    }
                    <span className="overlay-text">{mov.overview}</span>
                    <button onClick={() => handleShow(mov)} className='overlay-button' type="">
                        <AiFillPlayCircle className='watchIcon' color='#f4b35d' size={25} />
                        Watch now
                    </button>
                    {show && selectedMovie && (
                        <div className="modall" id="myModall">
                            <div className="modall-content">
                                <span className="close" onClick={handleClose}>
                                    &times;
                                </span>
                                <div className='text-center'>
                                    <h1 className='titlesize text-white'>{selectedMovie?.title}</h1>
                                    <img alt='poster' className='imgModal' src={`http://www.themoviedb.org/t/p/w220_and_h330_face${selectedMovie.poster_path}`} />
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            </Col>
        ));
    };
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array?.length; i += size) {
            const chunk = array.slice(i, i + size);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    };
    const chunkedMovies = chunkArray(movie, 4);
    const renderSlides = () => {
        if (isMobile) {
            return chunkedMovies?.map((chunk, index) => (
                <Row key={index}>{renderMovies(chunk)}</Row>
            ));
        } else {
            return (
                <Carousel interval={null} activeIndex={index} onSelect={handleSelect} controls={showArrows}>
                    {chunkedMovies?.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <Row>{renderMovies(chunk)}</Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        }
    };
    return (
        <div className='section2 ' id='movies'>
            <h1 className='text-center text-white py-2'> Movies Playing Now</h1>
            <Container>
                <Row>
                    <Col>
                        {renderSlides()}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Section2;