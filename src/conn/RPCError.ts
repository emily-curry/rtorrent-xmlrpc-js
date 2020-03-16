export class RPCError extends Error {
  public code: number;
  public faultCode: number;
  public faultString: string;

  constructor(
    message: string,
    faultString: string,
    code: number,
    faultCode: number
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.prototype.constructor.name;
    this.faultString = faultString;
    this.code = code;
    this.faultCode = faultCode;
  }
}
