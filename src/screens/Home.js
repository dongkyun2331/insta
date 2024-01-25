export const Home = ({ setIsLoggedIn }) => {
  return (
    <div>
      <button onClick={() => setIsLoggedIn(false)}>Log out</button>
    </div>
  );
};
