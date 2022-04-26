import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";

import Pagination from "react-bootstrap-4-pagination";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(0);
  const picsPerPage = 10;
  const pagesVisited = pageNumber * picsPerPage;
  const slicedPhotos = photos.slice(pagesVisited, pagesVisited + picsPerPage);

  const displayPICS = slicedPhotos.map((photo) => {
    return (
      <>
        <img
          alt={photo.name}
          key={photo.id}
          src={photo.download_image}
          width="200"
          height="200"
        />
      </>
    );
  });

  const pageCount = Math.ceil(photos.length / picsPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="App">
        <h1> PHOTO GALLERY </h1> <p> Enjoy! </p> <hr />
        <div className="gallery"> {displayPICS} </div>{" "}
      </div>{" "}
      <Pagination
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />{" "}
      
    </>
  );
}

export default App;
