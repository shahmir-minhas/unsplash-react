import React, { Component } from "react";

const Slider = () => {
  return (
    <React.Fragment>
      <section className="image">
        <div className="image-content">
          <h1>Unsplash</h1>
          <p>
            The internet resourse of <a href="#">free reusable images</a>
          </p>
          <p>powered by creators everywhere</p>
          <div className="input-box">
            <span className="search-icon unsplash-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              name=""
              value=""
              className="unsplash-input"
              placeholder="Search free High resolution photos"
              onclick="showSearch()"
            />

            <div id="search" className="search-content">
              <div className="search-types">
                <p>
                  Recent Searches <span>Clear</span>{" "}
                </p>
                <button type="button" name="button" className="search-btn">
                  potrait
                </button>
                <button type="button" name="button" className="search-btn">
                  arab people
                </button>
                <button type="button" name="button" className="search-btn">
                  arab person
                </button>
                <button type="button" name="button" className="search-btn">
                  person
                </button>
                <button type="button" name="button" className="search-btn">
                  avatar
                </button>
              </div>
              <div className="search-types">
                <p>Trending Searches</p>
                <button type="button" name="button" className="search-btn">
                  <i className="bi bi-graph-up-arrow"></i> pumpkin
                </button>
                <button type="button" name="button" className="search-btn">
                  <i className="bi bi-graph-up-arrow"></i> psni
                </button>
                <button type="button" name="button" className="search-btn">
                  <i className="bi bi-graph-up-arrow"></i> snow
                </button>
                <button type="button" name="button" className="search-btn">
                  <i className="bi bi-graph-up-arrow"></i> spin
                </button>
                <button type="button" name="button" className="search-btn">
                  <i className="bi bi-graph-up-arrow"></i> instagram
                </button>
              </div>
              <div className="search-types">
                <p>Trending Topics</p>
                <div className="flex">
                  <div className="flex search-topics">
                    <div className="img-btn"></div>
                    <a href="#">Nature</a>
                  </div>
                  <div className="flex search-topics">
                    <div className="img-btn"></div>
                    <a href="#">People</a>
                  </div>
                  <div className="flex search-topics">
                    <div className="img-btn"></div>
                    <a href="#">current events</a>
                  </div>
                  <div className="flex search-topics">
                    <div className="img-btn"></div>
                    <a href="#">fashion</a>
                  </div>
                  <div className="flex search-topics">
                    <div className="img-btn"></div>
                    <a href="#">experimental</a>
                  </div>
                </div>
              </div>
              <div className="search-types">
                <p>Trending Collections</p>
                <button type="button" name="button" className="search-btn">
                  Olympics
                </button>
                <button type="button" name="button" className="search-btn">
                  Tokyo
                </button>
                <button type="button" name="button" className="search-btn">
                  wings
                </button>
                <button type="button" name="button" className="search-btn">
                  camping
                </button>
                <button type="button" name="button" className="search-btn">
                  shadyside
                </button>
              </div>
            </div>

            <span className="visual-icon unsplash-icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 32 32"
                fill="currentColor"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
              </svg>
            </span>
          </div>
          <p>
            Trending:
            <a href="#">flower, </a>
            <a href="#">wallpapers, </a>
            <a href="#">backgrounds, </a>
            <a href="#">happy, </a>
            <a href="#">love </a>
          </p>
        </div>
        <div className="credits">
          <p>
            <a href="#">Photo of the day</a> by <a href="#">Nolan Di Meo</a>
          </p>
        </div>
        <div className="read-more">
          <p>
            Read more about <a href="#">Unsplash license</a>
          </p>
        </div>
        <div className="square-space">
          <svg
            width="170"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 29"
          >
            <path
              d="M5.7 13.6L16.9 2.2C18.1 1 19.8.3 21.5.3c1.7 0 3.4.7 4.6 1.9l.9.9-1.7 1.8-1-.9c-.8-.8-1.8-1.2-2.9-1.2-1.1 0-2.1.4-2.9 1.2L7.4 15.3l-1.7-1.7zm16.7-5.9L20.7 6 9.4 17.3c-1.6 1.6-4.2 1.6-5.7 0-1.6-1.6-1.6-4.2 0-5.8l9.7-9.8L11.6 0 1.9 9.8c-2.5 2.6-2.5 6.7 0 9.3C3.1 20.3 4.8 21 6.5 21c1.7 0 3.4-.7 4.6-1.9L22.4 7.7zm6.5.2c-1.7 0-3.4.7-4.6 1.9L13.1 21.2l1.8 1.8 11.3-11.3c1.6-1.6 4.2-1.6 5.7 0 .8.8 1.2 1.8 1.2 2.9 0 1.1-.4 2.1-1.2 2.9l-9.7 9.8 1.8 1.8 9.7-9.8c2.6-2.6 2.6-6.7 0-9.3-1.4-1.4-3-2.1-4.8-2.1zm-.8 5.7L16.8 25c-1.6 1.6-4.1 1.6-5.7 0l-.9-.9-1.7 1.8.9.9c1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9l11.2-11.3-1.7-1.9zm25 1.1c-.4-.3-.8-.6-1.3-.8-.5-.2-1.1-.4-1.7-.6l-1-.3c-.4-.1-.8-.3-1.1-.4-.3-.1-.6-.3-.8-.4-.2-.2-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-.5.2-1 .6-1.3.4-.3 1-.5 1.7-.5.8 0 1.4.2 1.8.5.4.3.7.8.9 1.4l2.4-.2c-.1-1.2-.6-2.1-1.5-2.8-.9-.7-2-1.1-3.5-1.1-.8 0-1.5.1-2.1.3-.6.2-1.1.5-1.6.9-.4.4-.8.8-1 1.3-.2.5-.4 1.1-.4 1.7 0 .6.1 1.1.3 1.5.2.4.5.8.8 1.2.4.3.8.6 1.3.9.5.2 1.1.5 1.7.6l1.1.3c.4.1.8.2 1.1.3.3.1.6.2.8.4.2.2.4.3.5.6.1.2.2.5.2.8 0 .7-.2 1.2-.7 1.6-.5.4-1.1.6-2 .6-.9 0-1.6-.2-2.1-.6-.5-.4-.9-1-1-1.7l-2.4.2c.2 1.4.8 2.5 1.8 3.2 1 .7 2.2 1 3.6 1 .8 0 1.5-.1 2.2-.3.7-.2 1.2-.5 1.7-.9s.8-.9 1.1-1.4c.3-.6.4-1.2.4-1.8 0-.6-.1-1.2-.3-1.6-.2-.6-.4-1-.8-1.3zm17.9 3c-.4.9-.9 1.7-1.5 2.4l1.9 2.3v.6H69l-1.3-1.6c-.5.2-1 .4-1.5.5-.6.1-1.2.1-1.8.1-1.1 0-2.1-.2-2.9-.6-.9-.4-1.6-.9-2.2-1.5-.6-.7-1.1-1.4-1.4-2.4-.3-.9-.5-1.9-.5-3s.2-2.1.5-3c.3-.9.8-1.7 1.4-2.4.6-.7 1.4-1.2 2.2-1.6.9-.4 1.8-.6 2.9-.6 1.1 0 2 .2 2.9.6.9.5 1.7 1 2.3 1.7.6.7 1.1 1.5 1.4 2.4.3.9.5 1.9.5 3s-.2 2.1-.5 3.1zm-2.1-3.1c0-.8-.1-1.5-.3-2.1-.2-.7-.5-1.2-.9-1.7s-.9-.8-1.4-1.1c-.6-.3-1.2-.4-1.9-.4s-1.3.1-1.9.4c-.6.3-1 .6-1.4 1.1-.4.5-.7 1-.9 1.7-.2.6-.3 1.3-.3 2.1s.1 1.5.3 2.1c.2.7.5 1.2.9 1.7s.9.9 1.4 1.1c.6.3 1.2.4 1.9.4s1.3-.1 1.9-.4c.6-.3 1-.6 1.4-1.1.4-.5.7-1 .9-1.7.2-.6.3-1.3.3-2.1zm15.5 1.3c0 1.3-.3 2.3-.8 2.9-.6.6-1.3 1-2.4 1-1 0-1.8-.3-2.4-1-.6-.6-.8-1.6-.8-2.9V7.1h-2.5V16c0 1 .1 1.9.4 2.7.3.7.6 1.4 1.1 1.8.5.5 1.1.8 1.8 1 .7.2 1.5.3 2.4.3.9 0 1.7-.1 2.4-.3.7-.2 1.3-.6 1.8-1 .5-.5.9-1.1 1.1-1.8.3-.7.4-1.6.4-2.7V7.1h-2.5v8.8zm13.9-8.5l5 13.5v.7h-2.5l-1.4-4.1h-6.2l-1.4 4.1h-2.3v-.7l5.1-13.5h3.7zm.4 8l-.8-2.3c-.3-.9-.6-1.6-.7-2.2-.2-.6-.4-1-.5-1.5H96c-.1.2-.2.4-.2.7-.1.2-.2.5-.3.8l-.3.9c-.1.4-.3.8-.4 1.2l-.8 2.3h4.7zm14.4.4l4.1 5.1v.7h-2.4l-4.3-5.6h-1.6v5.6h-2.5V7.4h4.6c.7 0 1.4 0 2.1.1.7.1 1.2.3 1.8.7 1.1.7 1.7 1.9 1.7 3.3 0 .6-.1 1.2-.3 1.7-.2.5-.4.9-.8 1.2-.3.3-.7.6-1.1.8-.4.3-.8.5-1.3.6zm-2-1.9c1 0 1.7-.2 2.2-.5.5-.3.8-.9.8-1.7 0-.8-.3-1.4-.8-1.7-.6-.3-1.3-.5-2.2-.5h-2.2v4.3h2.2zm11.7 1.5h6.3v-2.1h-6.3V9.6h6.8V7.4h-9.2v14.2h9.4v-2.2h-6.9v-4zm19.7-.7c-.4-.3-.8-.6-1.3-.8-.5-.2-1.1-.4-1.7-.6l-1-.3c-.4-.1-.8-.3-1.1-.4-.3-.1-.6-.3-.8-.4-.2-.2-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-.5.2-1 .6-1.3.4-.3 1-.5 1.7-.5.8 0 1.4.2 1.8.5.4.3.7.8.9 1.4l2.4-.2c-.1-1.2-.6-2.1-1.5-2.8-.9-.7-2-1.1-3.5-1.1-.8 0-1.5.1-2.1.3-.6.2-1.1.5-1.6.9-.4.4-.8.8-1 1.3-.2.5-.4 1.1-.4 1.7 0 .6.1 1.1.3 1.5.2.4.5.8.8 1.2.4.3.8.6 1.3.9.5.2 1.1.5 1.7.6l1.1.3c.4.1.8.2 1.1.3.3.1.6.2.8.4.2.2.4.3.5.6.1.2.2.5.2.8 0 .7-.2 1.2-.7 1.6-.5.4-1.1.6-2 .6-.9 0-1.6-.2-2.1-.6-.5-.4-.9-1-1-1.7l-2.4.2c.2 1.4.8 2.5 1.8 3.2 1 .7 2.2 1 3.6 1 .8 0 1.5-.1 2.2-.3.7-.2 1.2-.5 1.7-.9s.8-.9 1.1-1.4c.3-.6.4-1.2.4-1.8 0-.6-.1-1.2-.3-1.6-.2-.6-.4-1-.8-1.3zm15-4.7c.2.5.3 1.1.3 1.7 0 .7-.1 1.4-.4 1.9-.2.5-.6 1-1.1 1.4-.5.4-1 .6-1.7.8-.7.2-1.4.3-2.3.3h-2.6v5.5h-2.5V7.4h5.3c1 0 1.8.1 2.5.3.7.2 1.2.5 1.6.9.5.4.8.9.9 1.4zm-2.2 1.8c0-.4-.1-.8-.2-1.1-.2-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.4-.4-.1-.8-.1-1.2-.1h-2.5V14h2.4c.4 0 .8 0 1.2-.1.4-.1.7-.2 1-.4.3-.2.5-.4.6-.7.2-.3.3-.6.3-1zm12-4.4l5 13.5v.7h-2.5l-1.4-4.1h-6.2l-1.4 4.1h-2.3v-.7l5.1-13.5h3.7zm.4 8l-.8-2.3c-.3-.9-.6-1.6-.7-2.2-.2-.6-.4-1-.5-1.5h-.7c-.1.2-.2.4-.2.7-.1.2-.2.5-.3.8l-.3.9c-.1.4-.3.8-.4 1.2l-.8 2.3h4.7zm15.7 3.6c-.6.4-1.4.7-2.3.7-.7 0-1.4-.1-1.9-.4-.6-.3-1-.6-1.4-1.1-.4-.5-.7-1-.9-1.7-.2-.6-.3-1.3-.3-2.1 0-.7.1-1.4.3-2.1.2-.6.5-1.2.9-1.7s.8-.8 1.4-1.1c.6-.3 1.2-.4 1.9-.4.9 0 1.6.2 2.2.6.6.4 1.1 1 1.4 1.7l2.5-.5c-.4-1.2-1.2-2.2-2.2-2.9-1.1-.7-2.4-1.1-3.9-1.1-1.1 0-2 .2-2.9.6-.9.4-1.6.9-2.2 1.6-.6.7-1.1 1.4-1.4 2.3-.3.9-.5 1.9-.5 2.9 0 1.1.2 2 .5 2.9.3.9.8 1.7 1.4 2.3.6.7 1.4 1.2 2.2 1.5.9.4 1.8.6 2.9.6.8 0 1.6-.1 2.3-.3s1.3-.5 1.8-.9 1-.8 1.3-1.3c.4-.5.7-1 .9-1.6l-2.5-.4c-.4 1-.9 1.5-1.5 1.9zm9.6.3v-4h6.3v-2.2H193V9.4h6.8V7.2h-9.3v14.3h9.4v-2.2H193z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#fff"
            />
          </svg>
          <p>Start your website with Squarespace today</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Slider;
