import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function Home() {
  return (
    <>
      <div className="page-header section-dark" style={{backgroundImage:"url(" + require("assets/img/antoine-barres.jpg") + ")",}}>
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">부귀영화</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              영화 추천 서비스
            </h2>
          </Container>
          
        </div>
        <div className="moving-clouds" style={{  backgroundImage: "url(" + require("assets/img/clouds.png") + ")",  }}/>
      </div>
    </>
  );
}

export default Home;
