import User from "../../domain/entity/user_entity";

class UserModel extends User {
  constructor(id: string, username: string, email: string) {
    super(id, username, email);
  }

  static fromJSON(data: any): UserModel {
    return new UserModel(data["_id"], data["_username"], data["_email"]);
  }
}

export default UserModel;
