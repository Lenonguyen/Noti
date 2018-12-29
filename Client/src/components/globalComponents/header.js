import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { googleAuth, searchNoti } from 'actions/';
import SearchBar from './search_box';

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
                  <div className='user-nav'>
                    <a href='/auth/google' className='user-nav__login'>Get started</a>
                  </div>
                );
              default:
                return (
                      <div className='user-nav'>
                        <div className="user-nav__user">
                          <img src={auth.image} alt="User photo" className="user-nav__user-photo" />
                          <span className="user-nav__user-name">{auth.displayName}</span>
                        </div>
                        <a href = '/api/logout' className = 'user-nav__logout'>Log Out</a>
                      </div>
                );
          }
      }

      renderSearchBar() {
        const { handleSubmit } = this.props;
          return (
            <div className = 'header__search-box'>
              <form onSubmit={handleSubmit(this.onSubmit)} className="search">
                  <SearchBar onSearchTermChange={this.onSearchChange}/>
                    <button className="search__button">
                      <svg className="search__icon">
                          <use xlinkHref="../style/img/sprite.svg#icon-magnifying-glass" />
                      </svg>
                    </button>
              </form>
            </div>
          );
      }

      onSubmit = (values) => {
          this.props.searchNoti(values);
      }

      onSearchChange = (term) => {
          this.setState({searchTerm : term})
      }

      render() {
        return (
          <div>
            <header className = 'header'>
              <div className = 'header__logo-box'>
                <img src = '' alt = 'logo' className = 'header__logo' />
              </div>
                { this.renderSearchBar() }
                { this.renderGoogleAuth() }
            </header>
          </div>
      );
    }
}

function mapStateToProps (state) {
    return { auth : state.auth };
}

export default reduxForm({
  form: 'NotiSearchForm'
})( connect(mapStateToProps, { googleAuth })(Header));
