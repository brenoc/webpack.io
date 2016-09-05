import React from 'react';
import Link from './Link';
import Container from './Container';
import Logo from './Logo';

export default function Navigation({ home = '/', theme = '', pages }) {
  return (
    <div className={`navigation ${ theme }`}>
      <Container className="navigation-inner">
        <Link className="navigation-logo" to={{ pathname: home }}>
          <Logo theme={ theme === 'light' ? 'dark' : 'light' } />
        </Link>

        <nav className="navigation-nav">{ pages.map((link, i) => (
          <Link
            key={ `link-${i}` }
            className="navigation-nav-link"
            activeClassName="-active"
            to={ `/${link.url}` }>
            { link.title }
          </Link>
        )) }</nav>
      </Container>
    </div>
  );
}
