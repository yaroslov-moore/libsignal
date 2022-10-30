// Copyright 2021-2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import type { IncomingWebSocketRequest } from './WebsocketResources';

export type CompatPreKeyType = {
  keyId: number;
  keyPair: KeyPairType;
};

export type CompatSignedPreKeyType = {
  keyId: number;
  keyPair: KeyPairType;
  signature: Uint8Array;
};

export interface IRequestHandler {
  handleRequest(request: IncomingWebSocketRequest): void;
}

export type KeyPairType = {
  privKey: Uint8Array;
  pubKey: Uint8Array;
};

export type OuterSignedPrekeyType = {
  confirmed: boolean;
  // eslint-disable-next-line camelcase
  created_at: number;
  keyId: number;
  privKey: Uint8Array;
  pubKey: Uint8Array;
};

export type StorageServiceCallOptionsType = {
  credentials?: StorageServiceCredentials;
  greaterThanVersion?: number;
};

export type StorageServiceCredentials = {
  username: string;
  password: string;
};

export type WebAPICredentials = {
  username: string;
  password: string;
};
