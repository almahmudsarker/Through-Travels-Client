// import { ScaleLoader } from "react-spinners";
import gif from '../../assets/images/travel-logo-transparent.gif'
const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      {/* <ScaleLoader size={100} color="#3f96f4" /> */}
      <img className='w-40 h-40' src={gif} alt="loader" />
    </div>
  );
};

export default Loader;
