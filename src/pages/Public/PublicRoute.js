import React from "react";

import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Home";
import Contact from "./Contact";
import Error from "../../_utils/Error";
import Layout from "./Layout";

// Optimisation du router

const PublicRoute = () => {
  return (
    <div>
      <Routes>
        {/* Route Nested et Layout public */}

        <Route element={<Layout />}>
          {/* page par default */}
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* Error */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRoute;
