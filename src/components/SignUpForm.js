import Button from "./Button";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="flex-grow flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign Up
        </h2>
        <Link className="mt-2 text-center text-sm text-gray-600" to="/login">
          Or try it using{" "}
          <span className="font-bold text-gray-600 hover:text-gray-500 underline">
            admin@admin//admin
          </span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 drop-shadow-xl rounded-md sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-700"
              >
                User
              </label>
              <div className="mt-1">
                <input
                  id="user"
                  name="user"
                  type="user"
                  autoComplete="user"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-sm">
                <span className="font-medium">Already registered </span>
                <Link
                  className="font-bold text-gray-600 hover:text-gray-500 underline"
                  to="/login"
                >
                  log in?
                </Link>
              </div>
            </div>

            <div>
              <Button
                position="column"
                type="submit"
                // action={handleNewProjectBtn}
                text="Sign Up"
                color="lime"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
