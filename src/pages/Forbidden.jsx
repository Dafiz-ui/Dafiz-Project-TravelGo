import ErrorPage from "../components/ErrorPage";

export default function Forbidden() {
  return (
    <ErrorPage
      errorCode={403}
      description="You don't have permission to access this resource. Contact your administrator if you believe this is an error."
    />
  );
}