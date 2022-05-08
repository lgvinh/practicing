interface BodyResponse<T> {
  message?: string;
  data?: T;
  statusCode?: number;
}

interface IResponseBuilder<T> {
  withStatus(statusCode: number): IResponseBuilder<T>;
  withData(data: T): IResponseBuilder<T>;
  withMessage(message: string): IResponseBuilder<T>;
  toJSON(): BodyResponse<T>;
  onSuccess(statusCode?: number): IResponseBuilder<T>;
  onError(statusCode?: number): IResponseBuilder<T>;
}

class ResponseBuilder<T> implements IResponseBuilder<T> {
  constructor(private readonly bodyResponse?: BodyResponse<T>) {}

  withData(data: T): IResponseBuilder<T> {
    const bodyResponse: BodyResponse<T> = {
      data,
      statusCode: this.bodyResponse?.statusCode ?? 200,
      message: this.bodyResponse?.message ?? '',
    };

    return new ResponseBuilder<T>(bodyResponse);
  }

  withMessage(message: string): IResponseBuilder<T> {
    const bodyResponse: BodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: this.bodyResponse?.statusCode ?? 200,
      message,
    };

    return new ResponseBuilder<T>(bodyResponse);
  }

  withStatus(statusCode: number): IResponseBuilder<T> {
    const bodyResponse: BodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode,
      message: this.bodyResponse?.message ?? '',
    };

    return new ResponseBuilder<T>(bodyResponse);
  }

  onError(statusCode: number): IResponseBuilder<T> {
    const bodyResponse: BodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: statusCode ?? 500,
      message: this.bodyResponse?.message ?? '',
    };

    return new ResponseBuilder<T>(bodyResponse);
  }

  onSuccess(statusCode: number): IResponseBuilder<T> {
    const bodyResponse: BodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: statusCode ?? 200,
      message: this.bodyResponse?.message ?? '',
    };

    return new ResponseBuilder<T>(bodyResponse);
  }

  toJSON(): BodyResponse<T> {
    return this.bodyResponse;
  }
}

interface IUser {
  id: string;
  name: string;
  role: string;
}

const main = () => {
  const user: IUser = {
    id: 'Andrew Garfield no Gwen',
    name: 'Tom Holland no May',
    role: 'admin',
  };

  const responseBuilder = new ResponseBuilder<IUser>();

  const response = responseBuilder
    .withData(user)
    .withMessage('success')
    .withStatus(200)
    .toJSON();

  console.log('response :>> ', response);
};

main();
