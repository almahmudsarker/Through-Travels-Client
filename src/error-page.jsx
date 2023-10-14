import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col p-20 justify-center items-center"
      id="error-page"
    >
      <img
        src="https://github.com/almahmudsarker/parlour-apps/blob/main/src/assets/images/Sorry,%20This%20page%20is%20not%20found..png?raw=true"
        alt="error"
      />
      <img
        src="https://github.com/almahmudsarker/Through-Travels-Client/blob/main/src/assets/images/Frame.png?raw=true"
        alt="404"
      />
      <Link to="/">
        <button className="w-[300px] h-[64px] rounded-xl text-white bg-[#0a3661] mt-4">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
