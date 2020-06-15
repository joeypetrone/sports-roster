import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <MediaQuery minDeviceWidth={769}>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#"><img className="NSC-brand-logo" src="https://nashville-mp7static.mlsdigital.net/styles/non-retina_desktop_logo/s3/nashville-300x300.png?itok=z38pa3jS" alt="Nashville Soccer Club Logo"/></a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {
                  authed
                    ? <button className="btn btn-danger text-white" onClick={this.logMeOut}>Logout</button>
                    : ''
                }
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
            <nav className="navbar navbar-mobile navbar-expand-lg px-2">
              <a className="navbar-brand navbar-mobile-brand" href="#"><img className="NSC-brand-logo img-mobile" src="https://nashville-mp7static.mlsdigital.net/styles/non-retina_desktop_logo/s3/nashville-300x300.png?itok=z38pa3jS" alt="Nashville Soccer Club Logo"/></a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {
                    authed
                      ? <button className="btn btn-danger btn-mobile text-white" onClick={this.logMeOut}>Logout</button>
                      : ''
                  }
                </li>
              </ul>
            </nav>
          </MediaQuery>
      </div>
    );
  }
}

export default MyNavbar;
