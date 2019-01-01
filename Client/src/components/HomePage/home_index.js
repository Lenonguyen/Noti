import React, { Component } from 'react';
import Header from 'components/globalComponents/header';
import { connect } from 'react-redux';

class HomeIndex extends Component {
  render() {
    return (
         <div>
              <Header />
         </div>
    );
  }
}
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(HomeIndex);
