import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component{

      renderGoogleAuth() => {
          const {auth} = this.props;
          switch (auth) {
              case null:
                return;
              case false:
                return (<a href = '/auth/google' className><button>Get started</button></a>);
              default:
                return (

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
              <div>
            </header>
          </div>
      )
    }
}

function mapStateToProps ({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
