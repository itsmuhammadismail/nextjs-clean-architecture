export interface Failure {
  message: string;
}

export class ServerFailure implements Failure {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}
