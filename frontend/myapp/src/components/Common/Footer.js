import React from 'react';

// reactstrap components
import { Row, Container } from 'reactstrap';

function Footer() {
  return (
    <footer className='footer footer-black footer-white'>
      <Container>
        <Row>
          <nav className='footer-nav'>
            <ul>
              <li>
                <a
                  href='https://www.creative-tim.com?ref=pkr-footer'
                  target='_blank'
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href='http://blog.creative-tim.com/?ref=pkr-footer'
                  target='_blank'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='https://www.creative-tim.com/license?ref=pkr-footer'
                  target='_blank'
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className='credits ml-auto'>
            <span className='copyright'>
              © {new Date().getFullYear()}, made with{' '}
              <i className='fa fa-heart heart' /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
      <div
        style={{
          width: '100%',

          backgroundColor: '#343A40',
          padding: '50px',
        }}
      >
        <div style={{ width: '1300px', margin: 'auto', position: 'relative' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              color: 'white',
              marginTop: '10px',
            }}
          >
            주식회사 부귀영화 | 대표 김서영 | 제휴 문의 | 01039542088 <br />
            대표메일 | 서영님 yeommy90@gmail.com
            <br />
            사업장 | 서울 서초구 서초대로77길 54 1402호 <br /> 고객센터 |
            cs@boogimovie.co.kr, 02-515-9985 (평일 09시~18시)
            <br /> 제휴 및 대외 협력 | fbrnjsghks@gmail.com <br /> TMDB | WATCHA
            | NETFLIX | Copyright© 주식회사 부귀영화 All rights reserved
          </div>

          <img
            className='footer_logo'
            alt='...'
            src={require('assets/img/logo.gif')}
            style={{
              width: '180px',
              position: 'absolute',
              bottom: 0,
              right: 0,
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
