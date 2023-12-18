import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import ReactPlayer from 'react-player';
import Video1 from '../assets/mainvideo.mp4';
import Video2 from '../assets/secundaryvideo.mp4';
const Banner = () => {

    const banners = [
        {
            id: 'banner1',
            pizzaImage: Video1,
            mainText: 'The most world famous pizza',
            secondaryText: 'Do you want a Slide?',
        },
        {
            id: 'banner2',
            pizzaImage: Video2,
            mainText: 'You have to taste the peluflavor',
            secondaryText: 'we are celebrating our anniversary!',
        },
      ];
  return (
    <div className='banner-section'>
         <Carousel indicators={false} controls={false}>
            {banners.map((b) => {
                return  <Carousel.Item key={b.id} className='banner'>
            <ReactPlayer
              url={b.pizzaImage}
              width='100%'
              height='100%'
              playing
              loop
              muted
              controls={false}
            />
                            <Carousel.Caption className='banner-text'>
                            <h3>{b.mainText}</h3>
                            <p>{b.secondaryText}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
            }
        </Carousel>
    </div>
  );
};

export default Banner;
