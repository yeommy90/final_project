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
    <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            target=""
            title="Coded by Creative Tim"
            style={{ margin: 0, padding: 0 }}
          >
            <img
              alt="..."
              src={require('assets/img/logo.gif')}
              style={{ width: '180px' }}
            />
          </NavbarBrand>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* 네비 버튼 */}
            <NavItem>
              <NavLink href="/search">[검색]</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">아무개 님의 마이페이지</NavLink>
            </NavItem>
            <NavItem>
              <Button className="btn-round" color="danger" href="/login">
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
