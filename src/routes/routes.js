import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("../components/home/home"));

function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="*" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;
