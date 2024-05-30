import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-40">
      <h1 className=" text-red-700 text-9xl">404</h1>
      <h1 className="text-5xl my-4">Oops! Page Not Found</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="my-4">
        <i>{error.statusText || error.message}</i>
      </p> <br />
      <Link className="bg-red-600 mt-10 py-4 px-10 mr-4" to={'/'}>Home</Link>
      <Link className="bg-red-600 mt-10 py-4 px-10" to={'/contact'}>Contact</Link>
    </div>
  );
}