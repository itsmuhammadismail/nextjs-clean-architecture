import Mapper from "../../../../shared/interfaces/mapper";
import User from "../../domain/entity/user_entity";
import UserModel from "../model/user_model";

class UserMapper implements Mapper<User, UserModel> {
  mapModeltoEntity(model: UserModel): User {
    return new User(model.id, model.username, model.email);
  }
}

export default UserMapper;
