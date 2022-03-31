import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      btnEnable: true,
      inputText: '',
      loading: false,
      searchResults: [],
      temp: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.callAlbum = this.callAlbum.bind(this);
    this.verifyAlbumNull = this.verifyAlbumNull.bind(this);
  }

  handleChange(e) {
    const minText = 2;

    if (e.target.value.length >= minText) {
      this.setState({
        btnEnable: false,
        inputText: e.target.value,
      });
    } else {
      this.setState({
        btnEnable: true,
        inputText: e.target.value,
      });
    }
  }

  callAlbum() {
    const { inputText } = this.state;

    this.setState({ temp: inputText });

    this.setState({ inputText: '', loading: true },
      async () => {
        const { temp } = this.state;

        const results = await searchAlbumsAPI(temp);
        this.setState({
          searchResults: results,
          loading: false,
        });
      });
  }

  verifyAlbumNull() {
    const { temp } = this.state;

    return (
      <div>
        { temp && (
          <div>
            <p>Nenhum álbum foi encontrado</p>
          </div>
        )}
      </div>
    );
  }

  albumGrid() {
    const { searchResults, temp } = this.state;

    return (
      <div>
        { (searchResults.length !== 0) ? (
          <>
            <div>
              <p>
                Resultado de álbuns de:
                {' '}
                { temp }
              </p>
            </div>
            <div>
              { searchResults.map((result, index) => {
                const { artworkUrl100,
                  collectionName,
                  artistName,
                  collectionId } = result;

                return (
                  <div key={ index }>
                    <img src={ artworkUrl100 } alt={ collectionName } />
                    <Link
                      to={ `/album/${collectionId}` }
                      data-testid={ `link-to-album-${collectionId}` }
                    >
                      { collectionName }
                    </Link>
                    <span>{ artistName }</span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          this.verifyAlbumNull()
        )}
      </div>
    );
  }

  render() {
    const { btnEnable, inputText, loading } = this.state;

    return (
      <div data-testid="page-search">
        { loading ? <Loading /> : (
          <div>
            <Header />
            <div>
              <input
                type="text"
                placeholder="Nome do Artista"
                onChange={ this.handleChange }
                data-testid="search-artist-input"
                value={ inputText }
              />
              <button
                type="submit"
                data-testid="search-artist-button"
                disabled={ btnEnable }
                onClick={ this.callAlbum }
              >
                Pesquisar
              </button>
            </div>
          </div>
        )}
        { this.albumGrid() }
      </div>
    );
  }
}
