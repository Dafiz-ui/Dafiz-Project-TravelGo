import { Link } from "react-router-dom";

export default function ErrorPage({ errorCode, description, image }) {
  const getDefaultImage = (code) => {
    switch (code) {
      case 400:
        return "https://illustrations.popsy.co/white/error.svg";
      case 401:
        return "https://illustrations.popsy.co/white/lock.svg";
      case 403:
        return "https://illustrations.popsy.co/white/forbidden.svg";
      case 404:
        return "https://illustrations.popsy.co/white/not-found.svg";
      default:
        return "https://illustrations.popsy.co/white/error.svg";
    }
  };

  const getDefaultDescription = (code) => {
    switch (code) {
      case 400:
        return "The request you made is invalid. Please check your input and try again.";
      case 401:
        return "You need to be authenticated to access this resource.";
      case 403:
        return "You don't have permission to access this resource.";
      case 404:
        return "The page you're looking for doesn't exist or has been moved.";
      default:
        return "Something went wrong. Please try again later.";
    }
  };

  const displayImage = image || getDefaultImage(errorCode);
  const displayDescription = description || getDefaultDescription(errorCode);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <img
            src={displayImage}
            alt={`Error ${errorCode}`}
            className="w-64 h-64 mx-auto mb-6"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-8xl font-bold text-gray-800 mb-4">{errorCode}</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {errorCode === 400 && "Bad Request"}
            {errorCode === 401 && "Unauthorized"}
            {errorCode === 403 && "Forbidden"}
            {errorCode === 404 && "Page Not Found"}
            {![400, 401, 403, 404].includes(errorCode) && "Error"}
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {displayDescription}
          </p>

          <div className="space-y-3">
            <Link
              to="/"
              className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go Back Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-block w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}