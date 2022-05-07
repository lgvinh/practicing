interface IChainHandler<T> {
  setNext(handler: IChainHandler<T>): IChainHandler<T>;
  internalHandle(request: T): T | null;
  handle(request: T): T | null;
}

abstract class AbstractChainHandler<T> implements IChainHandler<T> {
  private nextHandler: IChainHandler<T>;
  private logger: Console;
  private errorHandler?: (params: any) => any = null;

  constructor(logger: Console, errorHandler?: (params: any) => any) {
    this.logger = logger;
    if (errorHandler) {
      this.errorHandler = errorHandler;
    }
  }

  public setNext(handler: IChainHandler<T>): IChainHandler<T> {
    this.nextHandler = handler;

    return handler;
  }

  public internalHandle(params: T): T {
    throw new Error(`internalHandle hasn't implemented yet, params: ${params}`);
  }

  public handle(request: T): T {
    try {
      console.log('\n ----------- HANDLING -----------');
      this.logger.info(
        '- Handling internal handle with this input: ',
        JSON.stringify(request),
      );
      this.internalHandle(request);
    } catch (error) {
      console.log('\n ----------- Error -----------');
      this.logger.info(`${this.constructor.name} catches error`);
      this.logger.error('Catch error on internalHandle: ', error.message);

      if (!this.errorHandler) {
        this.logger.info('Ending handler...');
        throw new Error(error);
      }

      this.logger.info(
        'Moving to errorHandler with this input: ',
        JSON.stringify(request),
      );
      this.errorHandler(request);
    } finally {
      this.logger.info('- Done handling internal handle');
    }

    if (this.nextHandler) {
      this.logger.info(
        '- Moving to the next handler: ',
        this.nextHandler.constructor.name,
      );
      return this.nextHandler.handle(request);
    }

    console.log('\n ----------- DONE -----------');

    this.logger.info('- Ending handler...');

    return null;
  }
}

interface IUser {
  id: string;
  name: string;
  password: string;
  role: string;
}

class AuthorizeUser extends AbstractChainHandler<IUser> {
  public internalHandle(user: IUser): IUser {
    if (user.role === 'admin') {
      console.log(`- - AuthorizeUser: user "${user.id}" is admin, proceed`);
      return user;
    }

    throw new Error(`AuthorizeUser: user "${user.id}" isn't admin, exit`);
  }
}

class ValidateUser extends AbstractChainHandler<IUser> {
  public internalHandle(user: IUser): IUser {
    if (typeof user.id === 'string') {
      console.log(`- - ValidateUser: user "${user.id}" is valid, proceed`);
      return user;
    }

    throw new Error(`ValidateUser: user "${user.id}" isn't valid, exit`);
  }
}

class AuthenticateUser extends AbstractChainHandler<IUser> {
  public internalHandle(user: IUser): IUser {
    if (user.password === 'password') {
      console.log(
        `- - AuthenticateUser: user "${user.id}" password is valid, proceed`,
      );
      return user;
    }

    throw new Error(
      `AuthenticateUser: user "${user.id}" password isn't valid, exit`,
    );
  }
}

class CheckUser extends AbstractChainHandler<IUser> {
  public internalHandle(user: IUser): IUser {
    if (user.name === 'Tom Holland no May') {
      console.log(`- - CheckUser: user "${user.id}" name is valid, proceed`);
      return user;
    }

    throw new Error(`CheckUser: user "${user.id}" name isn't valid, exit`);
  }
}

const processUserSignIn = (handler: IChainHandler<IUser>) => {
  const user: IUser = {
    id: 'Andrew Garfield no Gwen',
    name: 'Tom Holland no May',
    password: 'password',
    role: 'admin1',
  };

  return handler.handle(user);
};

const commonErrorHandler = () => {
  console.log('Error has been handled');
};

const main = () => {
  const authenticateUser = new AuthenticateUser(console);
  const validateUser = new ValidateUser(console);
  const authorizeUser = new AuthorizeUser(console, commonErrorHandler);
  // This can be freely added to the sign in process without breaking the current process
  const checkUser = new CheckUser(console);

  validateUser
    .setNext(authenticateUser)
    .setNext(checkUser)
    .setNext(authorizeUser);

  processUserSignIn(validateUser);
};

main();
