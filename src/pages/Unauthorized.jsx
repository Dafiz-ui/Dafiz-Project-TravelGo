import ErrorPage from "../components/ErrorPage";

export default function Unauthorized() {
  return (
    <ErrorPage
      errorCode={401}
      description="You need to log in to access this resource. Please authenticate yourself to continue."
    />
  );
}