import React from 'react';

import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
    putPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImageUrl: '',
    isEditing: false,
  }

  componentDidMount = () => {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        playerName: player.name,
        playerPosition: player.position,
        playerImageUrl: player.imageUrl,
        isEditing: true,
      });
    }
  }

  componentDidUpdate = (prevProps) => {
    const { player } = this.props;
    if (this.props.player !== prevProps.player) {
      if (player.name) {
        this.setState({
          playerName: player.name,
          playerPosition: player.position,
          playerImageUrl: player.imageUrl,
          isEditing: true,
        });
      }
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImageUrl } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImageUrl,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  updatePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImageUrl } = this.state;
    const { player, putPlayer } = this.props;
    const updatedPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImageUrl,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
  }

  render() {
    const {
      playerName,
      playerPosition,
      playerImageUrl,
      isEditing,
    } = this.state;

    return (
      <div className="PlayerForm">
        <form className="col-sm-8 col-md-6 offset-md-3 bg-light rounded border p-3 mb-3">
          <div className="form-group">
            <label htmlFor="player-name">Player Name</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="Eddie George"
              value={playerName}
              onChange={this.nameChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="Power Foward"
              value={playerPosition}
              onChange={this.positionChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="player-image-url">Player Image Url</label>
            <input
              type="text"
              className="form-control"
              id="player-image-url"
              placeholder="https://www.eddiegeorge.com"
              value={playerImageUrl}
              onChange={this.imageUrlChange}
              />
          </div>
          { isEditing
            ? <button className="btn btn-primary" onClick={this.updatePlayer}>Update Player</button>
            : <button className="btn btn-primary" onClick={this.savePlayer}>Save Player</button>
          }
        </form>
      </div>
    );
  }
}

export default PlayerForm;
