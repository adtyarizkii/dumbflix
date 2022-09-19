import { React, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import bgImg from "../../assets/the-witcher.png";
import { Link } from "react-router-dom";
import Login from "../../components/ModalLogin";
import Register from "../../components/ModalRegist";
import img from "../../assets/txtw.png";
import Logo from "../../assets/dumbflix-logo.png";
import movies from "../../dummyData/movies.js";
import tvSeries from "../../dummyData/tvseries.js";

function Auth() {
  const title = "Home";
  document.title = "Dumbflix | " + title;

  const [dataMovies, setDataMovies] = useState(movies);
  const [dataTvSeries, setDataTvSeries] = useState(tvSeries);

  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const registerHere = (e) => {
    e.preventDefault();
    setRegisterShow(false);
    setLoginShow(true);
  };

  const loginHere = (e) => {
    e.preventDefault();
    setLoginShow(false);
    setRegisterShow(true);
  };

  //   let { data: film } = useQuery('filmsCache', async () => {
  //     const response = await API.get('/films');
  //     return response.data.data;
  //   });

  return (
    <>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navbg"
        style={{ height: "10vh" }}
      >
        <Container>
          <Nav>
            <Nav.Link>
              <Link to="/auth" className="navlink text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user/tvshows" className="navlink text-white">
                TV Shows
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user/movies" className="navlink text-white">
                Movies
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "17.5rem" }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <button
              className="btnregist me-2"
              onClick={() => setRegisterShow(true)}
            >
              Register
            </button>
            <button className="btnlogin" onClick={() => setLoginShow(true)}>
              Login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)), url(${bgImg})`,
          height: "110vh",
          width: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ctnm">
          <div className="container p-5">
            <img src={img} alt="" />
            <p
              className="mt-3"
              style={{
                textAlign: "justify",
                width: "43%",
              }}
            >
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beast
            </p>
            <div className="d-flex">
              <p style={{ padding: "3px" }}>2019 </p>{" "}
              <p className="ms-3 tvseries"> TV Series</p>
            </div>
            <button className="btn-watch mt-2">WATCH NOW !</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h4 className="text-white ms-3">Tv Series</h4>
        <div className="containerCard">
          {dataTvSeries.slice(0, 6).map((item) => (
            <Link to="/detailFilm">
              <div className="box" key={item.id}>
                <div className="imgBx">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h4 className="text-white ms-3">Movies</h4>
        <div className="containerCard">
          {dataMovies.slice(0, 6).map((item) => (
            <Link to="/detailFilm">
              <div className="box mb-5" key={item.id}>
                <div className="imgBx">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* modal */}
      <Login
        loginHere={loginHere}
        loginShow={loginShow}
        setLoginShow={setLoginShow}
      />
      <Register
        registerHere={registerHere}
        registerShow={registerShow}
        setRegisterShow={setRegisterShow}
      />
    </>
  );
}

export default Auth;
