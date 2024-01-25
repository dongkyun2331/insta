export const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Log in</button>
    </div>
  );
};
