import useAuth from "../hooks/useAuth";

export default function MixedAuthPage () {
  const user = useAuth(false);

  return (
    <div>
      <h1>Content for unauthenticated</h1>
      {user && <h1>Content for authenticated only</h1>}
    </div>
  );
}