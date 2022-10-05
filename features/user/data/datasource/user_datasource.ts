import Axios from "../../../../shared/network/network";
import LoginParams from "../../domain/params/login_params";
import UserModel from "../model/user_model";

class UserDataSource {
  async login(params: LoginParams): Promise<UserModel> {
    try {
      const res = await Axios.fetch({
        method: "POST",
        url: "auth/login",
        data: { username: params.username, password: params.password },
      });

      return UserModel.fromJSON(res);
    } catch (err) {
      throw err;
    }
  }
}

export default UserDataSource;
