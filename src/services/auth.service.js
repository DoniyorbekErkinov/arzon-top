import ApiService from "./ApiService.js";
const AuthService = {
  Login(data) {
    return ApiService.post("Account/login", data);
  },
};

export default AuthService;
