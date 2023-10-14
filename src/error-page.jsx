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
        src="https://github.com/almahmudsarker/parlour-apps/blob/main/src/assets/images/Frame.png?raw=true"
        alt="404"
      />
      <Link to="/">
        <button className="w-[300px] h-[64px] rounded-xl text-white bg-[#00162B] mt-4">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
