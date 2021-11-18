import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./Login.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Test_components = React.memo(({ children, ...props }) => {
  useEffect(() => {
    alert("mount");
    return () => {
      alert("did mount");
    };
  }, []);
  let { pagesize } = useSelector((state) => state.UsersPage);
  console.log(pagesize);
  useEffect(() => {
    console.log("mount");
    return () => console.log("delete");
  }, []);
  return (
    <>
      <button onClick={() => props.fun(47)}>fun</button>
      <button onClick={() => props.nfun(100)}>test b</button>

      <input {...props} value={children} />
    </>
  );
});

export default Test_components;
