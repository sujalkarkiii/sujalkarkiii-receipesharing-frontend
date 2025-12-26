import axios from "axios"
import { act } from "react";

export const hadlesignup = async (signupdata) => {
  try {
    const response = await axios.post("http://localhost:5001/register", signupdata)
    return response.data;
  } catch (error) {
    console.log("Signup error:", error);
  }
}




export const hadlelogin = async (loginData) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/login",
      loginData,
      { withCredentials: true }
    );
    console.log("Login successful!");


    return response.data;
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
  }
};


export const createPost = async (postData) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/post",
      postData,
      {
        withCredentials: true

      }
    );
    return response.data
  } catch (error) {
    console.error(
      "Post error:",
      error.response ? error.response.data : error.message
    );
    return { success: false };
  }
};




export const hanldhome = async () => {
  try {
    const posts = await axios.get(
      "http://localhost:5001/home",
      { withCredentials: true }
    );
    return posts.data;
  } catch (error) {
    console.error("Home error:", error.response ? error.response.data : error.message);
  }
};


export const handleprotection = async () => {
  try {

    const protect = await axios.get("http://localhost:5001/protected", { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const frineds = async () => {
  try {

    const protect = await axios.get("http://localhost:5001/users", { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}

export const handlesendrequest = async (userId) => {
  try {

    const protect = await axios.post(`http://localhost:5001/requestsent/${userId}`, {}, { withCredentials: true })

    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}

export const handlecanclerequest = async (userId) => {
  try {

    const protect = await axios.delete(`http://localhost:5001/cancelrequest/${userId}`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}



export const handlecheckrequest = async () => {
  try {

    const protect = await axios.get("http://localhost:5001/checkrequest", { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}



export const handleloadrequest = async () => {
  try {

    const protect = await axios.get("http://localhost:5001/loadrequest", { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const handleaccept = async (userid) => {
  try {
    const protect = await axios.post("http://localhost:5001/friends", { userid }, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}




export const handledeleterequest = async (userId) => {
  try {

    const protect = await axios.delete(`http://localhost:5001/deleterequest/${userId}`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const handlenewfriend = async () => {
  try {
    const response = await axios.get("http://localhost:5001/loadfriend", {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error(
      "Protected route error:",
      error.response ? error.response.data : error.message
    );
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("http://localhost:5001/logout",{}, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error(
      "Protected route error:",
      error.response ? error.response.data : error.message
    );
  }
};
