import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Match this with your animation duration (8s)

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 296.348 292.341"
      >
        <path
          d="M901.787,678.213V533.191h56.17s23.49,11.575,27.234,29.958,3.064,32.34-9.531,49.021L960,603.319v-3.745s9.872-5.446,10.894-19.744S960,554.3,953.532,554.3H918.809v35.064l80.68,55.149h1.6l.489-107.213h15.617V678.213L918.468,611.83l-.681,66.383Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path aqua"
        />
        <path
          d="M923.234,621.7v58.213L919.83,684H874.894s-19.745-2.043-30.979-19.064c0,0-11.234,2.043-15.66-10.213v-7.574a17.275,17.275,0,0,1-14.51-13.532v-22.6s1.149-11.489,15.064-14.042V546.17s-6.639-1.489-7.532-6.17h-1.532S814.979,403.489,960,395.66c0,0,134.128-1.7,138.894,144.34a15.454,15.454,0,0,1-7.149,7.149l.34,49.021a16.823,16.823,0,0,1,13.958,12.936v24.511s1.7,7.489-14.639,14.3c0,0,0,10.553-3.4,13.617s-13.447,3.489-13.447,3.489-6.255,12.894-24.893,17.617l-2.809.639h-27.574l-6.766-.639Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink"
        />
        <path
          d="M878.043,678.213h16.085s1.276.361,1.532-3.724V567.745s.383-3.809-3.192-4.064c-6.561-.469-6.573-.2-14.425-.042Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path aqua"
        />
        <path
          d="M873.362,570.3l.51,101.617s-11.744,7.915-25.532-14.3c0,0-7.659,3.574-12.255-5.106V539.4a22.062,22.062,0,0,1-5.83-6.213c-2.3-3.829-1.915-119.148,129.234-129.872,0,0,127.953-1.147,129.655,133.979l1.92,4.4-6.3,3.064-1.021,107.745s2.042,9.7-10.979,7.149c0,0-10.213,15.273-29.872,15.829l.817-110.011s16.374.565,23.523,10.948l4.255.51,1.022-31.149s-5.873-3.723-8.426-8.489c0,0,5.362-98.915-101.872-105.383,0,0-100.426-3.894-109.277,105.383,0,0,.511,7.468-3.574,9.511l.51,31.659S863.319,566.333,873.362,570.3Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink"
        />
        <path
          d="M1037.787,564.85l-14.807.079c.281.25-2.657.4-2.8,2.483l-.122,108.46a4.052,4.052,0,0,0,3.811,3.75c3.576.236,13.277,0,13.277,0Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path aqua"
        />
        <path
          d="M830.255,601.064v40.669s-10.178-1.335-12.386-7.891V610.655S821.058,602.156,830.255,601.064Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink thin"
        />
        <path
          d="M1089.41,642.507l-.266-41.513s10.187,1.3,12.437,7.975l.152,23.669S1098.6,641.332,1089.41,642.507Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink thin"
        />
        <path
          d="M894.3,556.511l-21.192,3.319s-14.3,4.34-15.829,6.893H856V547.957a10.971,10.971,0,0,0,6.638-6.893l.766-16.6s10.128-79.787,96.085-85.149c0,0,79.83-1.021,96.809,84L1057.574,540a11.761,11.761,0,0,0,5.107,8.085l.766.128.638,18.51s-7.787-5.489-20.553-6.638l-20.936-.255.127-28.724-1.787-2.042-8.681-.255.128-9.958s-3.7-4.723-4.979-8.17l8.681-10.085s1.532-9.192,0-10.724-29.234-42.255-29.234-42.255-7.532-6.511-17.489-4.468c0,0-18.128,6-25.277,18.766a29.127,29.127,0,0,0-2.681,18.128s25.022,38.936,28.851,41.744,13.022,2.3,13.022,2.3l1.914-.255,7.532,9.361s0,.979,2.681,1.49l.639.255.127,100.341L923.277,586l-.128-28.085,29.617.128s27.234,14.893,2.979,39.148l-.851,1.7.51,6.127v1.532l14.809,9.362,2.723,2.042,5.617-.51s10.979-10.511,13.958-29.532V569.277s-2.468-15.788-10.894-25.873c0,0-5.447-9.574-23.319-16.34l-58.626-.341-4.537,6.468Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink"
        />
        <path
          d="M985.83,518.085s-7.641,3.7-13.575,0a202.262,202.262,0,0,1-25.234-36.511s-2.936-7.276-.766-14.425c0,0,9.66-18.553,25.988-20.122a16.39,16.39,0,0,1,10.012,2.122c4.979,2.936,29.745,41.745,29.745,41.745s1.4,6,0,8.553-10.6,10.213-10.6,10.213l6.256,10.524s2.108,8.981-4.6,10.8c-5.192,1.4-7.277-2.043-7.277-2.043Z"
          transform="translate(-811.745 -393.659)"
          className="preloader-path pink thin"
        />
      </svg>
    </div>
  );
};

export default Preloader;