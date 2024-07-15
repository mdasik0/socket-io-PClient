import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="flex gap-3 p-10">
      <Link className="bg-gray-200 px-3 py-1.5 rounded-full" to={'/sign-in'}>sign in</Link>
      <Link className="bg-gray-200 px-3 py-1.5 rounded-full" to={'/sign-up'}>sign up</Link>
    </div>
  );
};

export default App;