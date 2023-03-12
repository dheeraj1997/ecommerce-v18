import {useLocation} from "react-router-dom";

export default function ErrorRoute() {
  const location = useLocation()
  console.error("error at", location);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{location.pathname}</i>
      </p>
    </div>
  );
}