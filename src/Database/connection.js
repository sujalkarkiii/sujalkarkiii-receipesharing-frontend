import axios from "axios"
const API = import.meta.env.VITE_API_URL

export const hadlesignup = async (signupdata) => {
  try {
    const response = await axios.post(`${API}/register`, signupdata)
    return response.data;
  } catch (error) {
    console.log("Signup error:", error);
  }
}




export const hadlelogin = async (loginData) => {
  try {
    const response = await axios.post(
      `${API}/login`,
      loginData,
      { withCredentials: true }
    );
    console.log("Login successful!");
    return response.data;
  } catch (error) {
    if (error.response?.status === 429) {
      alert("You have tried to login too many times. Please wait 15 minutes and try again.");
    }
    console.error("Login error:", error.response ? error.response.data : error.message);
  }
};


export const createPost = async (postData) => {
  try {
    const response = await axios.post(
      `${API}/post`,
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
      `${API}/home`,
      { withCredentials: true }
    );
    return posts.data;
  } catch (error) {
    console.error("Home error:", error.response ? error.response.data : error.message);
  }
};


export const handleprotection = async () => {
  try {

    const protect = await axios.get(`${API}/Protected`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const frineds = async () => {
  try {

    const protect = await axios.get(`${API}/users`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}

export const handlesendrequest = async (userId) => {
  try {

    const protect = await axios.post(`${API}/requestsent/${userId}`, {}, { withCredentials: true })

    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}

export const handlecanclerequest = async (userId) => {
  try {

    const protect = await axios.delete(`${API}/cancelrequest/${userId}`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}



export const handlecheckrequest = async () => {
  try {

    const protect = await axios.get(`${API}/checkrequest`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}



export const handleloadrequest = async () => {
  try {

    const protect = await axios.get(`${API}/loadrequest`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const handleaccept = async (userid) => {
  try {
    const protect = await axios.post(`${API}/friends`, { userid }, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}




export const handledeleterequest = async (userId) => {
  try {

    const protect = await axios.delete(`${API}/deleterequest/${userId}`, { withCredentials: true })
    return protect.data
  } catch (error) {
    console.error("Protected route error:", error.response ? error.response.data : error.message);
  }
}


export const handlenewfriend = async () => {
  try {
    const response = await axios.get(`${API}/loadfriend`, {
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
    const response = await axios.post(`${API}/logout`, {}, {
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
