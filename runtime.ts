import Helpers from './textsecure/Helpers';
import { KeyPairType } from './textsecure/Types.d';
import { StorageAccessType } from './types/Storage.d';
import { UUID, UUIDKind, UUIDStringType } from './types/UUID';
import { SetCredentialsOptions } from './types/runtime';
import { strictAssert } from './util/assert';

const items: Partial<StorageAccessType> = Object.create(null),
  ourIdentityKeys: Map<UUIDStringType, KeyPairType> = new Map<
    UUIDStringType,
    KeyPairType
  >();

global.window = <any>{
  textsecure: {
    storage: {
      get<K extends keyof StorageAccessType, V extends StorageAccessType[K]>(
        key: K,
        defaultValue?: V
      ): V | undefined {
        // if (!this.ready) {
        //   log.warn('Called storage.get before storage is ready. key:', key);
        // }

        const item = items[key];
        if (item === undefined) {
          return defaultValue;
        }

        return item as V;
      },
      protocol: {
        getIdentityKeyPair(ourUuid: UUID): KeyPairType | undefined {
          return ourIdentityKeys.get(ourUuid.toString());
        },
        async hydrateCaches(): Promise<void> {
          await Promise.all([
            (async () => {
              ourIdentityKeys.clear();
              const map = window.textsecure.storage.get('identityKeyMap');
              if (!map) {
                return;
              }

              for (const key of Object.keys(map)) {
                const { privKey, pubKey } = map[key];
                ourIdentityKeys.set(new UUID(key).toString(), {
                  privKey,
                  pubKey,
                });
              }
            })(),
            // (async () => {
            //   this.ourRegistrationIds.clear();
            //   const map = await window.Signal.Data.getItemById('registrationIdMap');
            //   if (!map) {
            //     return;
            //   }

            //   for (const key of Object.keys(map.value)) {
            //     this.ourRegistrationIds.set(new UUID(key).toString(), map.value[key]);
            //   }
            // })(),
            // _fillCaches<string, IdentityKeyType, PublicKey>(
            //   this,
            //   'identityKeys',
            //   window.Signal.Data.getAllIdentityKeys()
            // ),
            // _fillCaches<string, SessionType, SessionRecord>(
            //   this,
            //   'sessions',
            //   window.Signal.Data.getAllSessions()
            // ),
            // _fillCaches<string, PreKeyType, PreKeyRecord>(
            //   this,
            //   'preKeys',
            //   window.Signal.Data.getAllPreKeys()
            // ),
            // _fillCaches<string, SenderKeyType, SenderKeyRecord>(
            //   this,
            //   'senderKeys',
            //   window.Signal.Data.getAllSenderKeys()
            // ),
            // _fillCaches<string, SignedPreKeyType, SignedPreKeyRecord>(
            //   this,
            //   'signedPreKeys',
            //   window.Signal.Data.getAllSignedPreKeys()
            // ),
          ]);
        },
      },
      async put<K extends keyof StorageAccessType>(
        key: K,
        value: StorageAccessType[K]
      ): Promise<void> {
        // if (!this.ready) {
        //   log.warn('Called storage.put before storage is ready. key:', key);
        // }

        items[key] = value;
        // await window.Signal.Data.createOrUpdateItem({ id: key, value });

        // window.reduxActions?.items.putItemExternal(key, value);
      },
      user: {
        getCheckedUuid(uuidKind?: UUIDKind): UUID {
          const uuid = this.getUuid(uuidKind);
          strictAssert(uuid !== undefined, 'Must have our own uuid');
          return uuid;
        },
        getNumber(): string | undefined {
          const numberId = window.textsecure.storage.get('number_id');
          if (numberId === undefined) return undefined;
          return Helpers.unencodeNumber(numberId)[0];
        },
        getUuid(uuidKind = UUIDKind.ACI): UUID | undefined {
          if (uuidKind === UUIDKind.PNI) {
            const pni = window.textsecure.storage.get('pni');
            if (pni === undefined) return undefined;
            return new UUID(pni);
          }

          strictAssert(
            uuidKind === UUIDKind.ACI,
            `Unsupported uuid kind: ${uuidKind}`
          );
          const uuid = window.textsecure.storage.get('uuid_id');
          if (!uuid) return undefined;
          return new UUID(Helpers.unencodeNumber(uuid.toLowerCase())[0]);
        },
        async setCredentials(
          credentials: SetCredentialsOptions
        ): Promise<void> {
          const { uuid, pni, number, deviceId, deviceName, password } =
            credentials;

          await Promise.all([
            window.textsecure.storage.put('number_id', `${number}.${deviceId}`),
            window.textsecure.storage.put('uuid_id', `${uuid}.${deviceId}`),
            window.textsecure.storage.put('password', password),
            this.setPni(pni),
            deviceName
              ? window.textsecure.storage.put('device_name', deviceName)
              : Promise.resolve(),
          ]);
        },
        setDeviceNameEncrypted(): Promise<void> {
          return window.textsecure.storage.put('deviceNameEncrypted', true);
        },
        async setPni(pni: string): Promise<void> {
          await window.textsecure.storage.put('pni', UUID.cast(pni));
        },
      },
    },
  },
};
