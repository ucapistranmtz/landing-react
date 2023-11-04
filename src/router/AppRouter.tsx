import { Route, Routes } from "react-router-dom";

import { LandingPage, NotFoundPage, ServerErrorPage } from "../";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="/error" element={<ServerErrorPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
