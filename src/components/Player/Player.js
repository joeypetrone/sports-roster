import React from 'react';

import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    return (
      <div className="Player">
        Player
      </div>
    );
  }
}

export default Player;
