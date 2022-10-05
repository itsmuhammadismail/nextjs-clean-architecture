import { Failure } from "../../../../shared/error/failure";
import UseCase from "../../../../shared/interfaces/usecase";
import User from "../entity/user_entity";
import LoginParams from "../params/login_params";
import UserRepositoryImpl from "../repository/user_repository_impl";

class LoginUseCase implements UseCase<User, LoginParams> {
  userRepositoryImpl: UserRepositoryImpl;
  constructor(userRepositoryImpl = new UserRepositoryImpl()) {
    this.userRepositoryImpl = userRepositoryImpl;
  }

  call(params: LoginParams): Promise<User | Failure> {
    return this.userRepositoryImpl.login(params);
  }
}
