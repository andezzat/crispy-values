import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { Line } from 'react-progressbar.js'

import Row from '../../../lib/bootstrap/components/Row.jsx';


import { profiles } from '../../../data/';

export default class ResultsCard extends React.Component {

  render() {
    const { profileName, values, valueMappings } = this.props;
    const image = '/images/avatars/' + profileName + '_avatar.png';
    // const image = 'http://via.placeholder.com/100x100';

    const profile = profiles.find((profile) => {
      return profile.name.toLowerCase() === profileName.toLowerCase();
    });

    return (
      <div className={cx('card', 'border-light', 'mb-3', 'text-center')}>
        <img className={cx('card-img-top', 'resultImage')} src={image} />
        <div className="card-body">
          <h4 className={cx('card-title', 'mb-4')}>{profile.title}</h4>
          {values.map((value, i) => {
            return (
              <div key={i}>
                <p className={cx('mb-2', 'mt-3')}>{value.name}</p>
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
        </div>
        <Row justifyContent="around">
          <div className="col-md-8">
            <Link
              to={{ pathname: '/profile', search: '?name=' + profileName.toLowerCase(), state: 'result' }}
              className={cx('btn-shadow', 'btn-shadow-sm', 'btn-shadow-primary', 'mb-3', 'mt-2')}>
              Visit Profile
            </Link>
          </div>
        </Row>
      </div>
    );
  }
};
