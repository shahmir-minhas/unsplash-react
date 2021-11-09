import React, { Component } from "react";

const Images = () => {
  return (
    <React.Fragment>
      <section className="flex-images">
        <div className="flex-col">
          <div className="">
            <img src="images/photo-grid-1.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-4.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-2.jpg" alt="" className="img-card" />
          </div>
        </div>
        <div className="flex-col">
          <div className="">
            <img src="images/photo-grid-4.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-2.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-1.jpg" alt="" className="img-card" />
          </div>
        </div>
        <div className="flex-col">
          <div className="">
            <img src="images/photo-grid-1.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-2.jpg" alt="" className="img-card" />
          </div>
          <div className="">
            <img src="images/photo-grid-4.jpg" alt="" className="img-card" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Images;
