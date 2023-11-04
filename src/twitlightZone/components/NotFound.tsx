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
      <div id="container">
        <AloneCoffeeShop />
        <WarningMessage />
        <UnchartedTerritory />
        <HelpMessage />
        <ScapeButton />
      </div>
    </>
  );
};
