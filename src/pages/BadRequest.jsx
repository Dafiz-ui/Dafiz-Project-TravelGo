import ErrorPage from "../components/ErrorPage";

export default function BadRequest() {
  return (
    <ErrorPage
      errorCode={400}
      description="The server cannot process the request due to a client error. Please check your input data and try again."
    />
  );
}