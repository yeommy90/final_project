import React from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('navbar-dark bg-dark');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  }, []); // 두번째 파라미터에 빈 배열을 넣어 최초 렌더링 이후에만 이벤트 리스너가 등록되도록 설정
  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand='lg'>
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            href='/'
            target=''
            title='Coded by Creative Tim'
            style={{ margin: 0, padding: 0 }}
          >
            <img
              alt='...'
              src={require('assets/img/logo.gif')}
              style={{ width: '180px' }}
            />
          </NavbarBrand>
          {/* <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button> */}
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* 네비 버튼 */}

            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type='text'
                style={{
                  height: '30px',
                  marginTop: '0px',
                  backgroundColor: 'black',
                  opacity: '0.7',
                  color: 'white',
                  borderRadius: '5px',
                  border: 'none',
                  padding: '5px 10px',
                }}
                placeholder='검색어를 입력하세요...'
              />
              <button
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  right: '3%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={require('assets/img/search.png')}
                  alt='검색 버튼'
                  style={{
                    width: '17px',
                    height: '17px',
                    filter: 'invert(50%)',
                    marginLeft: '10px',
                  }}
                />
              </button>
            </div>

            <NavItem>
              <NavLink
                href='https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar'
                target='_blank'
              >
                아무개 님의 마이페이지
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className='btn-round' color='danger' href='/login'>
                LOGIN
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
