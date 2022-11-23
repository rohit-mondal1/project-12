import React, { useEffect, useState } from "react";

const Slider = () => {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setSlide(data));
  }, []);
  console.log(slide);

  return (
    <div className="carousel h-[450px] w-full">
      {slide.map((s , i) => (
        <div key={i+1} id={s.id} className="carousel-item relative w-full">
          {/* sl 1 */}
          <div
            className="hero  h-[450px]"
            style={{
              backgroundImage: `url(${s.image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{s.name}</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={s.previseslider} className="btn btn-circle">
              ❮
            </a>
            <a href={s.nextslideId} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
