import { Failure } from "../../../../shared/error/failure";
import User from "../../domain/entity/user_entity";

interface UserRepository {
  login: (params: LoginParams) => Promise<User | Failure>;
}

export default UserRepository;
