/**
 * Describes an exception that occurred in the remote application.
 */
export class RPCError extends Error {
  /**
   * @deprecated The error code reported by the remote application. rTorrent provides this only
   * sometimes, and it is not clear how it is different from faultCode. Prefer faultCode.
   */
  public code: number;
  /**
   * The fault code reported by the remote application.
   */
  public faultCode: number;
  /**
   * A description of the fault that occurred in the remote application.
   */
  public faultString: string;

  constructor(message: string, faultString: string, code: number, faultCode: number) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.prototype.constructor.name;
    this.faultString = faultString;
    this.code = code;
    this.faultCode = faultCode;
  }
}

/**
 * Describes a collection of exceptions that occurred in the remote application (e.g. during system.multicall).
 */
export class RPCAggregateError extends Error {
  /**
   * A list of all faults that generated the exception.
   */
  public innerErrors: RPCError[];

  constructor(message: string, innerErrors: RPCError[]) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.prototype.constructor.name;
    this.innerErrors = innerErrors;
  }
}
