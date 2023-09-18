"use client";

const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("Authorization");
    return token;
  } else {
    console.log("No window so no local storage");
  }
};

const setToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("Authorization", token);
  }
};

export { getToken, setToken };
