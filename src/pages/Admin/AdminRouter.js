import React from "react";

import { Routes, Route } from "react-router-dom";
import { ALayout, Dashboard } from "../Admin";

const AdminRouter = () => {
  return (
    <div className="adminrouter">
      <Routes>
        {/* Route Nested et ALayout Admin */}

        <Route element={<ALayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
