const InitialState = {
  loginApplicant: false,
  applicant: null,
  tokenApplicant: null,
  recruiter: null,
  tokenRecruiter: null,
};

function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN_APPLICANT":
      console.log(action.payload);
      localStorage.setItem("applicant", JSON.stringify(action.payload.email));
      localStorage.setItem(
        "tokenApplicant",
        JSON.stringify(action.payload.accessToken)
      );
      return {
        ...state,
        loginApplicant: true,
        applicant: action.payload.email,
        tokenApplicant: action.payload.accessToken,
      };
    case "LOGOUT_APPLICANT":
      localStorage.removeItem("applicant");
      localStorage.removeItem("tokenApplicant");
      return {
        ...state,
        loginApplicant: false,
        applicant: "",
        tokenApplicant: "",
      };

    default:
      return state;
  }
}
export { InitialState };
export default AuthReducer;
