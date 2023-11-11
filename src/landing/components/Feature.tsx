import { FeatureButton } from "./FeatureButton";
export const Feature = (feature: {
  order: number;
  img: string;
  title: string;
  paragraph: string;
  buttonRef: string;
  buttonText: string;
}) => {
  return (
    <>
      <h2>{feature.order}</h2>
      <img src={feature.img} alt="" />
      <h4>{feature.title}</h4>
      <FeatureButton
        ref={feature.buttonRef}
        text={feature.buttonText}
        key={`${feature.order}-${feature.title}`}
      />
    </>
  );
};
