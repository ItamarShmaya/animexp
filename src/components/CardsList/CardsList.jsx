import "./CardsList.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import NextArrow from "../CarouselArrows/NextArrow";
import PrevArrow from "../CarouselArrows/PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardsList = ({ list, type }) => {
  const renderCards = () => {
    return list.map((anime, i) => {
      return (
        <NavLink key={anime.mal_id} to={`/${type}/${anime.mal_id}`}>
          <Card anime={anime} index={i} />;
        </NavLink>
      );
    });
  };

  const settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-list-container">
      <Slider {...settings}>{renderCards()}</Slider>
    </div>
  );
};

export default CardsList;
