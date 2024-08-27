import data from '../assets/data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const Freebook = () => {
    const freeBooksdata = data.filter((i)=>{return i.price===0})
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div>
        <h1 className="max-w-screen-2xl container mx-auto md:px-20 px-4 font-bold text-2xl">Free Courses</h1>
        <p className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-2 py-2 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius autem,
          aspernatur explicabo atque nesciunt rerum nisi neque ratione ullam a
          assumenda distinctio asperiores earum laborum itaque eveniet! Labore,
          quisquam blanditiis.
        </p>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <Slider {...settings}>
            {freeBooksdata.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
