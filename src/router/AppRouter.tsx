import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "../twitlightZone";

export const AppRouter = () => {
  return (
    <Routes>
      {
        <>
          <Route path="/notfound/*" element={<NotFoundPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </>
      }
    </Routes>
  );
};
