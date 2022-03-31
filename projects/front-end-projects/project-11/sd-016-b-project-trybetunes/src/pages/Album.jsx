import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      music: [],
      artistName: '',
      albumName: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    getMusics(id).then((music) => {
      const { artistName, collectionName: albumName } = music[0];

      this.setState({
        music,
        artistName,
        albumName,
      });
    });

    this.favorites();
  }

  async favorites() {
    const favoriteSongs = await getFavoriteSongs();

    console.log(favoriteSongs);
  }

  render() {
    const { music, artistName, albumName } = this.state;

    return (
      <div data-testid="page-album">
        <Header />

        { music.length !== 0 && (
          <>
            <div>
              <span data-testid="artist-name">{ `${artistName} - ` }</span>
              <span data-testid="album-name">{ albumName }</span>
            </div>
            <div>
              { music.map((m) => (
                m.trackName && (
                  <MusicCard
                    key={ m.trackId }
                    music={ m }
                  />
                )
              ))}
            </div>
          </>
        )}

      </div>
    );
  }
}
// LINK - https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
