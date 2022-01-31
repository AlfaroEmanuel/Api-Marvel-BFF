"use strict";
class ModuleError extends Error {
  constructor(cause) {
    if (cause instanceof Error) {
      super(cause.message);
      this.cause = cause;
    } else super(cause);

    this.name = "ModuleError";
    this.customError = true;
  }
}

module.exports = ModuleError;
