import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import SpacialFooter from '../../../lib/spacial/components/Footer.jsx';

export default class Footer extends React.Component {
  render() {
    const facebookFA = cx(
      'fa',
      'fa-facebook'
    );
    const twitterFA = cx(
      'fa',
      'fa-twitter'
    );
    const mailFA = cx(
      'fa',
      'fa-envelope'
    );
    return (
      <SpacialFooter style="light">
        <Row>
          <div className="col-md-4">
            <div className="title">Values Footprints</div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/test">Values Test</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="title">Social Media</div>
            <ul className="menu">
              <li><a href="http://www.facebook.com/values-footprints"><i className={facebookFA}></i>Facebook</a></li>
              <li><a href="http://www.twitter.com/values-footprints"><i className={twitterFA}></i>Twitter</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="title">Get In Touch</div>
            <ul className="menu">
              <p>Got some feedback, an idea or more? Why not shoot us an email and we'll get back to you as soon as possible!</p>
              <li><a href="mailto:ecastellas@swin.edu.au"><i className={mailFA}></i>Mail</a></li>
            </ul>
          </div>
        </Row>
        <div className="bottom">
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </SpacialFooter>
    );
  }
}
