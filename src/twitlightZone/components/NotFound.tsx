import "./NotFound.css";
import {
  ScapeButton,
  WarningMessage,
  UnchartedTerritory,
  HelpMessage,
  AloneCoffeeShop,
} from "./";
export const NotFound = () => {
  return (
    <>
      <div className="container">
        <WarningMessage />
        <AloneCoffeeShop />

        <UnchartedTerritory />
        <HelpMessage />
        <ScapeButton />
      </div>
    </>
  );
};
