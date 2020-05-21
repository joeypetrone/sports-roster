import React from 'react';

import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-3">
        <div className="card mb-4 mx-auto w-75 px-3 pt-3">
          <img className="card-img-top" src={player.imageUrl} alt="Player Card" />
          <div className="card-body px-0 pt-3">
            <h5 className="card-title font-weight-bold">{player.name}</h5>
            <p className="card-text">{player.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
