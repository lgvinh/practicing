import { AbstractChainHandler, IChainHandler } from './base';

interface IUser {
  id: string;
  name: string;
  password: string;
  role: string;
}

class NormalSignIn extends AbstractChainHandler<IUser> {
  public handle(user: IUser): IUser {
    console.log('NormalSignIn: Processing user sign in');
    return this.nextHandler ? this.nextHandler.handle(user) : user;
  }
}

class AuthorizeUser extends AbstractChainHandler<IUser> {
  public handle(user: IUser): IUser {
    if (user.role === 'admin') {
      console.log(`AuthorizeUser: user "${user.id}" is admin, proceed`);
      return this.nextHandler ? this.nextHandler.handle(user) : user;
    }

    throw new Error(`AuthorizeUser: user "${user.id}" isn't admin, exit`);
  }
}

class ValidateUser extends AbstractChainHandler<IUser> {
  public handle(user: IUser): IUser {
    if (typeof user.id === 'string') {
      console.log(`ValidateUser: user "${user.id}" is valid, proceed`);
      return this.nextHandler ? this.nextHandler.handle(user) : user;
    }

    throw new Error(`ValidateUser: user "${user.id}" isn't valid, exit`);
  }
}

class AuthenticateUser extends AbstractChainHandler<IUser> {
  public handle(user: IUser): IUser {
    if (user.password === 'password') {
      console.log(
        `AuthenticateUser: user "${user.id}" password is valid, proceed`,
      );
      return this.nextHandler ? this.nextHandler.handle(user) : user;
    }

    throw new Error(
      `AuthenticateUser: user "${user.id}" password isn't valid, exit`,
    );
  }
}

class CheckUser extends AbstractChainHandler<IUser> {
  public handle(user: IUser): IUser {
    if (user.name === 'Tom Holland no May') {
      console.log(`CheckUser: user "${user.id}" name is valid, proceed`);
      return this.nextHandler ? this.nextHandler.handle(user) : user;
    }

    throw new Error(`CheckUser: user "${user.id}" name isn't valid, exit`);
  }
}

const processUserSignIn = (handler: IChainHandler<IUser>) => {
  const user: IUser = {
    id: 'Andrew Garfield no Gwen',
    name: 'Tom Holland no May',
    password: 'password',
    role: 'admin',
  };

  return handler.handle(user);
};

const main = () => {
  const normalSignIn = new NormalSignIn();
  const authenticateUser = new AuthenticateUser();
  const validateUser = new ValidateUser();
  const authorizeUser = new AuthorizeUser();
  // This can be freely added to the sign in process without breaking the current process
  const checkUser = new CheckUser();

  normalSignIn
    .setNext(validateUser)
    .setNext(authenticateUser)
    // .setNext(checkUser)
    .setNext(authorizeUser);

  processUserSignIn(normalSignIn);
};

main();
