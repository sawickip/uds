import { Component } from 'react';
import cls from 'classnames';

import css from './style.scss';

const IMAGES = [
  '../static/pexels-photo-416676.jpg',
  '../static/pexels-photo-209817.jpg',
  '../static/pexels-photo-221210.jpg',
  '../static/pexels-photo-298008.jpg',
  '../static/pexels-photo-442585.jpg',
  '../static/pexels-photo-704214.jpg',
  '../static/photo-1431324155629-1a6deb1dec8d.jpg',
  '../static/photo-1434682881908-b43d0467b798.jpg',
];

const INTERVAL = 10000;

export default class BackgroundSwitcher extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loadedImages: [],
      image: null,
      scrollTop: 0
    };

    this.intervall = null;
  }

  componentDidMount () {
    this.pickRandomImage();
    this.updateScrollTop();
    window.addEventListener('scroll', this.updateScrollTop);
    this.intervall = setInterval(this.pickRandomImage, INTERVAL);
  }

  componentWillUnmount () {
    clearInterval(this.intervall);
    window.removeEventListener('scroll', this.updateScrollTop);
  }

  pickRandomImage = () => {
    const index = Math.round(Math.random() * (IMAGES.length - 1));

    if (index !== this.state.imageIndex) {
      // this.setState({ imageIndex: index });

      if (!this.state.loadedImages[IMAGES[index]]) {
        const img = new Image();
        img.onload = () => {
          this.setState({
            imageIndex: index,
            loadedImages: [
              ...this.state.loadedImages,
              IMAGES[index]
            ]
          })
        }
        img.src = IMAGES[index];
      }
      
      return;
    }
    
    this.pickRandomImage();
  }

  updateScrollTop = () => {
    this.setState({
      scrollTop: document.scrollingElement.scrollTop
    })
  }

  render () {
    return (
      <div className={css.root}>
        {
          // IMAGES.map((image, index) => {
          this.state.loadedImages.map((image, index) => {
            const isActive = this.state.imageIndex === index;

            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPositionY: this.state.scrollTop / 3
                }}
                className={cls(css.heroImage, {
                  [css.active]: isActive
                }
              )}/>
            )
          })
        }
      </div>
    )
  }
};