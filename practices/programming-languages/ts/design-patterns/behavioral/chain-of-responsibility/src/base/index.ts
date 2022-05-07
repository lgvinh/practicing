/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
interface IChainHandler<T> {
  nextHandler: IChainHandler<T>;

  setNext(handler: IChainHandler<T>): IChainHandler<T>;

  handle(request: T): T | null;
}

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
abstract class AbstractChainHandler<T> implements IChainHandler<T> {
  public nextHandler: IChainHandler<T>;

  public setNext(handler: IChainHandler<T>): IChainHandler<T> {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  public handle(request: T): T {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

export { AbstractChainHandler, IChainHandler };
