import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
  return (
    <div className='album-item'>
      <div className='album-thumbnail'>
        <img src={album.imageUrl} alt={album.title} />
      </div>
      <h3>{album.title}</h3>
    </div>
  );
}

export default AlbumItem;
