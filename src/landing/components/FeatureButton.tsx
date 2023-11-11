export const FeatureButton = (button: { ref: string; text: string }) => {
  return (
    <a href={button.ref} className="main-button">
      {button.text}
    </a>
  );
};
