import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
    window.scrollTo(0, 0);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-3">
        <div className="card mb-4 mx-auto w-75 px-3 pt-3">
          <img className="card-img-top" src={player.imageUrl} alt="Player Card" />
          <div className="card-body px-0 pt-3 pb-3">
            <h5 className="card-title font-weight-bold">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn btn-danger m-2" onClick={this.editPlayerEvent}><i className="fas fa-pencil-alt"></i></button>
            <button className="btn btn-danger m-2" onClick={this.deletePlayerEvent}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
