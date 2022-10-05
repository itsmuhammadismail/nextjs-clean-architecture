import { Failure } from "../error/failure";

interface UseCase<T, P> {
  call(params: P): Promise<Failure | T>;
}

export default UseCase;