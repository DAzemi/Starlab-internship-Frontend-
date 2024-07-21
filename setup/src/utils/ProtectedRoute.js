import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRole }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    let timer;
    if (!token || (token && token.role !== allowedRole && countdown > 0)) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [token, allowedRole, countdown]);

  useEffect(() => {
    if (countdown === 0 && !allowedRole.includes(token?.role)) {
      navigate("/login");
    }
  }, [countdown, navigate, allowedRole, token]);
  
  const hasAccess = token && allowedRole.includes(token.role
    );
  return hasAccess ? (
    <Outlet />
  ) : (
    <h1 className="text-xl p-8 text-blue-900 text-center bg-blue-200">
      You do not have access to this page. Redirecting to login in {countdown}{" "}
      seconds...
    </h1>
  );
};

export default ProtectedRoute;
