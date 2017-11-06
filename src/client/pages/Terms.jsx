import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import { terms } from '../../../data/';

export default class Terms extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="customer-story-header">
          <div className="container">
            <h2>{terms.title}</h2>
            <p>{terms.subtitle}</p>
          </div>
        </div>
        <div className="customer-story-content">
          <div className="container">
            <Row>
              <div className="col-md-12">
                <div className="customer-story-body">
                  {terms.sections.map((section, i) => {
                    return (
                      <div key={i}>
                        {section.heading &&
                        <h2>{section.heading}</h2>
                        }
                        {section.text.map((text, i) =>
                        <p>{text}</p>)}
                        {section.list &&
                        <ul>
                        {section.list.map((item, i) =>
                           <li key={i}>{item}</li>
                        )}
                        </ul>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
