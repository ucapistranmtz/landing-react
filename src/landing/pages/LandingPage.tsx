import {
  HeaderArea,
  AboutArea,
  ContactUsArea,
  FeatureArea,
  FootherArea,
  TestimonialsArea,
  WelcomeArea,
} from "../sections";

export const LandingPage = () => {
  return (
    <>
      <div>
        <div className="main-area">
          <HeaderArea />
          <WelcomeArea />
        </div>
        <AboutArea />
        <FeatureArea />
        <TestimonialsArea />
        <ContactUsArea />
        <FootherArea />
      </div>
    </>
  );
};
