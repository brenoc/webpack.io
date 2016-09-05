import React from 'react';
import Link from './Link';

export default function Sidebar(props) {
  return (
    <nav className={`sidebar ${props.isMobile ? 'sidebar-mobile' : ''}`}>
      {
        props.pages.map((page, i) => (
          <div key={ `sidebar-link-${i}` } className="sidebar-link">
            <Link className="sidebar-link-text" to={ `/${page.url}` }>{ page.title }</Link>
          </div>
        ))
      }
    </nav>
  );
}