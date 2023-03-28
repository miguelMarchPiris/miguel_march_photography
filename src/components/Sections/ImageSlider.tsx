import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import {baseUrl} from '../../data/data';
// import heroImage from '../../images/profilepic.jpg'

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  & .image {
    height: 300px;
  }
`;

// const heroImage = 'images/panoramic_background.jpg'

const baseImagePath = baseUrl + '/images/';

const listImages = [
  'images_web_slider_1.jpg',
  'images_web_slider_2.jpg',
  'images_web_slider_3.jpg',
  'images_web_slider_4.jpg',
  'images_web_slider_5.jpg',
  'images_web_slider_6.jpg',
  'images_web_slider_9.jpg',
  'images_web_slider_10.jpg',
  'images_web_slider_11.jpg',
  'images_web_slider_12.jpg',
];

const images = listImages.map(path => ({
  original: baseImagePath + path,
  thumbnail: baseImagePath + path,
}));
// eslint-disable-next-line react-memo/require-memo
const ImageSlider = () => {
  console.log(images);
  console.log(process.env.PUBLIC_URL);

  // Ante la duda: https://github.com/xiaolin/react-image-gallery
  return (
    <Container>
      <ImageGallery autoPlay={true} items={images} showPlayButton={true} slideDuration={700} slideInterval={8000} />
    </Container>
  );
};
export default ImageSlider;
