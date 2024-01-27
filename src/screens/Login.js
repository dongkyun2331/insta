import { isLoggedInVar } from "../apollo";

export const Login = () => {
  return (
    <div>
      <button onClick={() => isLoggedInVar(true)}>Log in</button>
    </div>
  );
};
