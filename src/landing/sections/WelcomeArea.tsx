import { Welcome } from "../components";
export const WelcomeArea = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="row">
          <Welcome />
        </div>
      </div>
    </div>
  );
};
