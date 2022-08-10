export const goToSignUpPage = (navigate) => {
    navigate("/signup");
  };

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToFeedPage = (navigate) => {
    navigate("/feed");
  };

export const goToLoginPage = (navigate) => {
    navigate("/");
  };

  export const postDetailsPage = (navigate, id, body) => {
    navigate(`/post/${id}`);
  };

  export const logout = (navigate) => {
    navigate("/");
    window.localStorage.removeItem("token");
  };
