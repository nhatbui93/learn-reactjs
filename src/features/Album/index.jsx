import React from 'react';
import AlbumList from './AlbumList';
import './styles.scss';
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const title = 'Lựa chọn hôm nay';
  const dataListAlbum = [
    {
      id: 1,
      title: 'V-Pop: The A-List',
      imageUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/2/8/66282fb2645bd1ddbbe3b0dd22c796ef.jpg',
    },
    {
      id: 2,
      title: 'Những Sự Kết Hợp Mới',
      imageUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/d/5/f8d50b42ce9e0a5f79894322a6d632c1.jpg',
    },
    {
      id: 3,
      title: 'Rap Việt Cực Chất',
      imageUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/0/8/a208a236de20ab5ec79ec99855ecc275.jpg',
    },
    {
      id: 4,
      title: 'Girl Krush',
      imageUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/7/2/3f72ba33fdb90d65fbcf8ed8a21bca7e.jpg',
    },
  ];
  return (
    <section className='section section-album'>
      <h2>{title}</h2>
      <AlbumList albumList={dataListAlbum} />
    </section>
  );
}

export default AlbumFeature;
