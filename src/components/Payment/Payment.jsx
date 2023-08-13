import React from "react";
import Marquee from "react-fast-marquee";
import Img1 from "../../assets/images/Payment/01.png"
import Img2 from "../../assets/images/Payment/02.png"
import Img3 from "../../assets/images/Payment/03.png"
import Img4 from "../../assets/images/Payment/04.png"
import Img5 from "../../assets/images/Payment/05.png"
import Img6 from "../../assets/images/Payment/06.png"
import Img7 from "../../assets/images/Payment/07.png"
import Img8 from "../../assets/images/Payment/08.png"
import Img9 from "../../assets/images/Payment/09.png"
import Img10 from "../../assets/images/Payment/10.png"
import Img11 from "../../assets/images/Payment/11.png"
import Img12 from "../../assets/images/Payment/12.png"
import Img13 from "../../assets/images/Payment/13.png"
import Img14 from "../../assets/images/Payment/14.png"
import Img15 from "../../assets/images/Payment/15.png"
import Img16 from "../../assets/images/Payment/16.png"
import Img17 from "../../assets/images/Payment/17.png"
import Heading from "../Heading/Heading";


const Payment = () => {
  return (
    <div className="mt-12">
    {/* <Heading title="Payment Partner" subtitle="Now you can Pay with our trusted world wide payment services" center={true}  /> */}
      <Marquee gradient={true} gradientWidth={250} pauseOnClick={true}>
        <img src={Img1} alt="Payment" />
        <img src={Img2} alt="Payment" />
        <img src={Img3} alt="Payment" />
        <img src={Img4} alt="Payment" />
        <img src={Img5} alt="Payment" />
        <img src={Img6} alt="Payment" />
        <img src={Img7} alt="Payment" />
        <img src={Img8} alt="Payment" />
        <img src={Img9} alt="Payment" />
        <img src={Img10} alt="Payment" />
        <img src={Img11} alt="Payment" />
        <img src={Img12} alt="Payment" />
        <img src={Img13} alt="Payment" />
        <img src={Img14} alt="Payment" />
        <img src={Img15} alt="Payment" />
        <img src={Img16} alt="Payment" />
        <img src={Img17} alt="Payment" />
      </Marquee>
    </div>
  );
};

export default Payment;
