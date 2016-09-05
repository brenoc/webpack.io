import React, { Component } from 'react';
import Link from './Link';
import Container from './Container';
import Sidebar from './Sidebar';
import MediaQuery from 'react-responsive';
import SidebarToggle from './SidebarToggle';
import SidebarBack from './SidebarBack';

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      isSidebarOpen: false
    };

    this.handlers = {
      onClickMenu: this._onClickMenu.bind(this),
      onClickBackButton: this._onClickBackButton.bind(this)
    };
  }

  render() {
    let { section, page } = this.props,
      edit = `https://github.com/webpack/webpack.io/edit/master/content/${page.url}.md`;

    return (
      <Container className="page">
        <MediaQuery minWidth={720}>
          <Sidebar pages={ section.pages() } />
        </MediaQuery>

        <MediaQuery maxWidth={720}>
          {this.state.isSidebarOpen
            ? [
              <Sidebar isMobile={true} pages={ section.pages() } />,
              <SidebarBack onClick={this.handlers.onClickBackButton} />
            ]
            : <SidebarToggle onClick={this.handlers.onClickMenu} />
          }
        </MediaQuery>

        <section className="page-content">
          <h1>{ page.title }</h1>

          <a className="page-edit" href={ edit }>
            Edit this Page&nbsp;&nbsp;
            <i className="icon-edit" />
          </a>

          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </section>
      </Container>
    );
  }


  /**
   * On click on menu
   *
   * @param {object} e - Native event
   */
  _onClickMenu(e) {
    this.setState({
      isSidebarOpen: true
    });
  }

  /**
   * On click sidebar's back button
   *
   * @param {object} e - Native event
   */
  _onClickBackButton(e) {
    this.setState({
      isSidebarOpen: false
    });
  }

}
