import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuth } from 'actions/';

class Header extends Component{
      componentDidMount() {
          this.props.googleAuth();
      }
      renderGoogleAuth() {
          const { auth } = this.props;
          switch (auth) {
              case {}:
                return;
              case false:
                return (
                  <a href = '/auth/google' className = 'header__google-auth'>Get started</a>
                );
              default:
                return (
                      <a href = '/api/logout' className = 'header__google-auth'>Log Out</a>
                );
          }
      }
      render() {
        return (
          <div>
            <header className = 'header'>
              <div className = 'header__logo-box'>
                <img src = '' alt = 'logo' className = 'header__logo' />
              </div>
            <div className = 'header__search-box'>

            </div>
              <div>
                { this.renderGoogleAuth() }
              </div>
            </header>
          </div>
      );
    }
}

function mapStateToProps (state) {
    return { auth : state.auth };
}

export default connect(mapStateToProps, { googleAuth })(Header);
