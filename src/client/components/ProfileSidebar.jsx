import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { Line } from 'react-progressbar.js'

import Row from '../../../lib/bootstrap/components/Row.jsx';


export default class ProfileSidebar extends React.Component {

  render() {
    const { title, image, text, profileName, values, valueMappings, button } = this.props;

    return (
      <div className="sidebar">
        <div className="block">
          <div className="title">{title}</div>
          <div className={cx('card', 'border-light', 'mb-3', 'text-center')} id="resultsCard">
            <img className={cx('card-img-top', 'avatarImage')} src={image} />
            <div className="card-body">
              {text &&
              <p>{text}</p>}
              {profileName &&
              <h4 className={cx('card-title', 'mb-4')}>{profileName}</h4>}
              {values &&
              values.map((value, i) => {
                return (
                  <div key={i}>
                    <p>{value.name}</p>
                    <Line
                      key={i}
                      progress={value.score / valueMappings[value.name.toLowerCase()].max}
                      initialAnimate={true}
                      containerClassName={'.progressBar'}
                      options={{
                        strokeWidth: 2,
                        easing: 'easeInOut',
                        duration: 1400,
                        color: '#FFEA82',
                        trailWidth: 1,
                        trailColor: '#eee'
                      }}
                    />
                  </div>
                );
              })}
              {button &&
              <Row justifyContent="around">
                <div className="col-md-8">
                  <Link {...button.props}>
                    {button.text}
                  </Link>
                </div>
              </Row>}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
