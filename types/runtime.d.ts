import { StorageAccessType } from './Storage.d';
import { UUID, UUIDKind } from './UUID';
import { KeyPairType } from '../textsecure/Types.d';

export type SetCredentialsOptions = {
  uuid: string;
  pni: string;
  number: string;
  deviceId: number;
  deviceName?: string;
  password: string;
};

declare global {
  interface Window {
    textsecure: {
      storage: {
        get<K extends keyof StorageAccessType, V extends StorageAccessType[K]>(
          key: K
        ): V | undefined;

        get<K extends keyof StorageAccessType, V extends StorageAccessType[K]>(
          key: K,
          defaultValue: V
        ): V;
        protocol: {
          getIdentityKeyPair(ourUuid: UUID): KeyPairType | undefined;
          hydrateCaches(): Promise<void>;
        };
        put<K extends keyof StorageAccessType>(
          key: K,
          value: StorageAccessType[K]
        ): Promise<void>;
        user: {
          getCheckedUuid(uuidKind?: UUIDKind): UUID;
          getNumber(): string | undefined;
          getUuid(uuidKind?: UUIDKind): UUID | undefined;
          setCredentials(credentials: SetCredentialsOptions): Promise<void>;
          setDeviceNameEncrypted(): Promise<void>;
          setPni(pni: string): Promise<void>;
        };
      };
    };
  }
}
