import React, { Component } from 'react';
import './MainPage.scss';
import MoviePoster from '../assets/poster.jpg';
import ChevronRight from '../assets/chevron.svg';
import ChevronLeft from '../assets/chevronLeft.svg';
import Settings from '../assets/Settings.svg';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChevronRight: false,
      scrollPostition: 0,
      movieLists: new Array(10).fill({
        title: 'Favourite Superhero Movies',
        movies: new Array(10).fill({
          posterUrl: MoviePoster,
        }),
      }),
    };
  }

  handleScroll = e => {
    this.setState(
      {
        scrollPostition: window.pageXOffset,
      },
      this.checkScroll
    );
  };

  handleScrollToStats = () => {
    window.scrollTo({
      right: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <>
        <div className="TopWidgetsContainer">
          <img src={ChevronLeft} className="ChevronSideBar" />

          <SearchBar />

          <img src={Settings} className="Settings" />
        </div>
        <div className="MainPage">
          <div className="MainPageContentWrapper">
            <div className="ListContainer">
              {this.state.movieLists.map(function(list, i) {
                return (
                  <div className="ListContentWrapper">
                    <div className="ListTitleContainer">
                      <h1 key={i} className="ListTitle">
                        {list.title}
                      </h1>
                    </div>
                    <div className="MovieListWrapper">
                      {list.movies.map(function(movie, j) {
                        return (
                          <img
                            //onClick={() => this.setState(prevState => ({Views: prevState.Views + 1}))}
                            src={movie.posterUrl}
                            className="MoviePoster"
                          />
                        );
                      })}
                      <img
                        //onClick={this.handleScrollToStats}
                        src={ChevronRight}
                        className="ChevronList"
                      />
                    </div>
                    <div className="MovieDividerLine" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
