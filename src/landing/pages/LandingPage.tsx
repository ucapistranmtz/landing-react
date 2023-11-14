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
      <div className="container-landing">
        {/*  <HeaderArea/>*/}
        <WelcomeArea />
        <AboutArea />
        <FeatureArea />
        <TestimonialsArea />
        <ContactUsArea />
        <FootherArea />
      </div>
    </>
  );
};
