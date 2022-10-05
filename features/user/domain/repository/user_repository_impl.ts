import { Failure, ServerFailure } from "../../../../shared/error/failure";
import UserDataSource from "../../data/datasource/user_datasource";
import UserMapper from "../../data/mapper/user_mapper";
import UserModel from "../../data/model/user_model";
import UserRepository from "../../data/repository/user_repository";
import User from "../entity/user_entity";
import LoginParams from "../params/login_params";

class UserRepositoryImpl implements UserRepository {
  userDatasource: UserDataSource;
  userMapper: UserMapper;

  constructor(
    userDatasource = new UserDataSource(),
    userMapper = new UserMapper()
  ) {
    this.userDatasource = userDatasource;
    this.userMapper = userMapper;
  }

  async login(params: LoginParams): Promise<User | Failure> {
    try {
      const userModel: UserModel = await this.userDatasource.login(params);
      return this.userMapper.mapModeltoEntity(userModel);
    } catch (err) {
      throw err instanceof Error
        ? new ServerFailure(err.message)
        : new ServerFailure("Error");
    }
  }
}

export default UserRepositoryImpl;
