import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import SpacialFooter from '../../../lib/spacial/components/Footer.jsx';

import { footer as content } from '../../../data/';

export default class Footer extends React.Component {
  render() {
    const links = content.siteMap.links.map((link, i) => (
      <li key={i}><Link to={link.href}>{link.text}</Link></li>
    ));
    const socialLinks = content.social.links.map((link, i) => (
      <li key={i}><a href={link.href}><i className={cx(link.FAClasses)} />{link.text}</a></li>
    ));

    return (
      <SpacialFooter style="light" id="footer">
        <Row>
          <div className="col-md-4">
            <div className="title">{content.siteMap.title}</div>
            <ul className="menu">
              {links}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="title">{content.social.title}</div>
            <ul className="menu">
              {socialLinks}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="title">{content.contact.title}</div>
            <ul className="menu">
              <p>{content.contact.text}</p>
              <li><a href={content.contact.link.href}><i className={cx(content.contact.link.FAClasses)}></i>{content.contact.link.text}</a></li>
            </ul>
          </div>
        </Row>
        <div className="bottom">
          <ul>
            {content.bottom.links.map((link, i) => {
              return (
                <li key={i}>
                  <Link to={link.href}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </SpacialFooter>
    );
  }
}
