import { isLoggedInVar } from "../apollo";

export const Home = () => {
  return (
    <div>
      <button onClick={() => isLoggedInVar(false)}>Log out</button>
    </div>
  );
};
