module.exports = class ErrorCommand {
    async command() {
      const error = new Error("caught an error");
      error.abortOnFailure = true
      throw error;
    }
  };
  