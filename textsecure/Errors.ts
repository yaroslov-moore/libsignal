// Copyright 2020-2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

export type HTTPErrorHeadersType = {
  [name: string]: string | ReadonlyArray<string>;
};

export type SendMessageChallengeData = {
  readonly token?: string;
  readonly options?: ReadonlyArray<string>;
};

export class HTTPError extends Error {
  public override readonly name = 'HTTPError';

  public readonly code: number;

  public readonly responseHeaders: HTTPErrorHeadersType;

  public readonly response: unknown;

  constructor(
    message: string,
    options: {
      code: number;
      headers: HTTPErrorHeadersType;
      response?: unknown;
      stack?: string;
    }
  ) {
    super(`${message}; code: ${options.code}`);

    const { code: providedCode, headers, response, stack } = options;

    this.code = providedCode > 999 || providedCode < 100 ? -1 : providedCode;
    this.responseHeaders = headers;

    this.stack += `\nOriginal stack:\n${stack}`;
    this.response = response;
  }
}

export class ConnectTimeoutError extends Error {}
