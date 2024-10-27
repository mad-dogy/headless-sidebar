import { Link } from "react-router-dom";

export const HomePage = () => {
  return <h3>Home Page
    <Link to={'/profile'}>to profile</Link>
  </h3>;
};
