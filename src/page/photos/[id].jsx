import React, { useEffect, useState } from "react";

function PhotosById() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <p>ID: {photo.id}</p>
          <p>Title: {photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotosById;
