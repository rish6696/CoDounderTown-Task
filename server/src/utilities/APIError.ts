

export class APIError extends Error {
  status: number;
  message: string;
  type :string;
  error:string;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
    this.type='error-custom'
    this.error='default-error'
  }
}
