import React from 'react';

import Formsy from 'formsy-react';
import cx from 'classnames';

import Text from '../components/Survey/Form/Text.jsx';

import Row from '../../../lib/bootstrap/components/Row.jsx';

export default class Test extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      canSubmit: false,
    };
  };
  enableButton() {
    this.setState({
      canSubmit: true
    });
  };
  disableButton() {
    this.setState({
      canSubmit: false
    });
  };
  submit(model) {
    // Do something
  };

  render() {
    const submitCx = cx(
      'btn',
      'btn-sm',
      'btn-outline-primary',
    );

    return (
      <div>
        <div className="agency-start-project-intro">
          <div className="container">
            <h3>Your Details</h3>
            <p>
              We need to collect some personal information about you before we begin.
              We promise we won't divulge any of your details for any marketing purposes.
            </p>
          </div>
        </div>
        <div className="container">
          <Row>
            <div className="col-md-9">
              <div className="panel">
                <div className="panel-body">
                  <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <Text name="Email" labelFor="Email" labelText="Email Address" validations="isEmail" validationError="Please enter a valid Email Address." required />
                    <button className={submitCx} type="submit" disabled={!this.state.canSubmit}>Submit</button>
                  </Formsy.Form>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  };
}
