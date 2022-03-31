import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      isChecked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { isChecked } = this.state;
    const { music } = this.props;

    this.setState({ loading: true, isChecked: !isChecked },
      async () => {
        if (isChecked) {
          await removeSong(music);
          this.setState({ loading: false });
        } else {
          await addSong(music);
          this.setState({ loading: false });
        }
      });
  }

  render() {
    const { music } = this.props;

    const { trackName, previewUrl, trackId } = music;
    const { loading, isChecked } = this.state;

    return (
      <div>
        { loading ? <Loading /> : (
          <div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <span>{ trackName }</span>
            <label htmlFor="input-favorite">
              Favorita
              <input
                type="checkbox"
                id="input-favorite"
                checked={ isChecked }
                data-testid={ `checkbox-music-${trackId}` }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.objectOf(PropTypes.any).isRequired,
};
