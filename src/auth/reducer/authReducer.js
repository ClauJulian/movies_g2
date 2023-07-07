export const authInitialState = {
  user: null,
  isLoggedIn: false,
};

export const AUTH_KEY_LOCAL_STORAGE = "auth";

export const authInitializer = (initialValue = authInitialState) =>
  JSON.parse(localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)) || initialValue;

export const AUTH_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const authReducer = (
  state = authInitialState,
  { type: authType, payload }
) => {
  switch (authType) {
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };

    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
