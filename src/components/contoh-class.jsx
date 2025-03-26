import React from 'react';
import PropTypes from 'prop-types';

class SayKocak extends React.Component {
  render() {
    const { name } = this.props;

    return <h1>Hallo kocak, {name}</h1>;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  // ...
}

function NavigationHeader({ user }) {
  // ...
}

{
  /*
    <NavigationHeader user={new User('Dicoding')} />;
    <NavigationHeader user={{ name: 'Dicoding' }} />; 
  */
}

SayKocak.propTypes = {
  name: PropTypes.string.isRequired,
};

NavigationHeader.propTypes = {
  user: PropTypes.instanceOf(User),
};

export { SayKocak, NavigationHeader, User };
