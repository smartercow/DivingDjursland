import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  const [slideList, setSlideList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSlides = async () => {
    /* await */
    /* setSlideList */
  };

  useEffect(() => {
    setLoading(true);
    getSlides()
      .then(() => {
        setError(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        /* CSS - @media screen (max-width: 640px): height: 15rem */
        /*       @media screen (min-width: 640px): height: 18rem */
        /*       @media screen (min-width: 768px): height: 20rem */
      >
        {loading && (
          <SwiperSlide>
            <div
              className=""
              /*               css={{
                backgroundColor: "",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} */
            >
              <div>
                <h3>Loading...</h3> {/* <Loading /> */}
              </div>
            </div>
          </SwiperSlide>
        )}
        {slideList.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link /* href={slide.link} passHref={true} */ to={slide.link}>
              <a>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  /* layout="fill" */
                  /* objectFit="cover" */
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
