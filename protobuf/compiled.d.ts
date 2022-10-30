import Long from 'long';
import * as $protobuf from 'protobufjs';
/** Namespace signalservice. */
export namespace signalservice {
  /** Properties of a CDSClientRequest. */
  interface ICDSClientRequest {
    /** CDSClientRequest aciUakPairs */
    aciUakPairs?: Uint8Array | null;

    /** CDSClientRequest prevE164s */
    prevE164s?: Uint8Array | null;

    /** CDSClientRequest newE164s */
    newE164s?: Uint8Array | null;

    /** CDSClientRequest discardE164s */
    discardE164s?: Uint8Array | null;

    /** CDSClientRequest hasMore */
    hasMore?: boolean | null;

    /** CDSClientRequest token */
    token?: Uint8Array | null;

    /** CDSClientRequest tokenAck */
    tokenAck?: boolean | null;

    /** CDSClientRequest returnAcisWithoutUaks */
    returnAcisWithoutUaks?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a CDSClientRequest. */
  class CDSClientRequest implements ICDSClientRequest {
    /**
     * Constructs a new CDSClientRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ICDSClientRequest);

    /** CDSClientRequest aciUakPairs. */
    public aciUakPairs: Uint8Array;

    /** CDSClientRequest prevE164s. */
    public prevE164s: Uint8Array;

    /** CDSClientRequest newE164s. */
    public newE164s: Uint8Array;

    /** CDSClientRequest discardE164s. */
    public discardE164s: Uint8Array;

    /** CDSClientRequest hasMore. */
    public hasMore: boolean;

    /** CDSClientRequest token. */
    public token: Uint8Array;

    /** CDSClientRequest tokenAck. */
    public tokenAck: boolean;

    /** CDSClientRequest returnAcisWithoutUaks. */
    public returnAcisWithoutUaks: boolean;

    /**
     * Encodes the specified CDSClientRequest message. Does not implicitly {@link signalservice.CDSClientRequest.verify|verify} messages.
     * @param message CDSClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ICDSClientRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CDSClientRequest message, length delimited. Does not implicitly {@link signalservice.CDSClientRequest.verify|verify} messages.
     * @param message CDSClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ICDSClientRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CDSClientRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDSClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CDSClientRequest;

    /**
     * Decodes a CDSClientRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDSClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CDSClientRequest;

    /**
     * Creates a CDSClientRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDSClientRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.CDSClientRequest;

    /**
     * Creates a plain object from a CDSClientRequest message. Also converts values to other types if specified.
     * @param message CDSClientRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.CDSClientRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CDSClientRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a CDSClientResponse. */
  interface ICDSClientResponse {
    /** CDSClientResponse e164PniAciTriples */
    e164PniAciTriples?: Uint8Array | null;

    /** CDSClientResponse retryAfterSecs */
    retryAfterSecs?: number | null;

    /** CDSClientResponse token */
    token?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a CDSClientResponse. */
  class CDSClientResponse implements ICDSClientResponse {
    /**
     * Constructs a new CDSClientResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ICDSClientResponse);

    /** CDSClientResponse e164PniAciTriples. */
    public e164PniAciTriples: Uint8Array;

    /** CDSClientResponse retryAfterSecs. */
    public retryAfterSecs: number;

    /** CDSClientResponse token. */
    public token: Uint8Array;

    /**
     * Encodes the specified CDSClientResponse message. Does not implicitly {@link signalservice.CDSClientResponse.verify|verify} messages.
     * @param message CDSClientResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ICDSClientResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CDSClientResponse message, length delimited. Does not implicitly {@link signalservice.CDSClientResponse.verify|verify} messages.
     * @param message CDSClientResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ICDSClientResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CDSClientResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDSClientResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CDSClientResponse;

    /**
     * Decodes a CDSClientResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDSClientResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CDSClientResponse;

    /**
     * Creates a CDSClientResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDSClientResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.CDSClientResponse;

    /**
     * Creates a plain object from a CDSClientResponse message. Also converts values to other types if specified.
     * @param message CDSClientResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.CDSClientResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CDSClientResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a CrashReport. */
  interface ICrashReport {
    /** CrashReport filename */
    filename?: string | null;

    /** CrashReport content */
    content?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a CrashReport. */
  class CrashReport implements ICrashReport {
    /**
     * Constructs a new CrashReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ICrashReport);

    /** CrashReport filename. */
    public filename: string;

    /** CrashReport content. */
    public content: Uint8Array;

    /**
     * Encodes the specified CrashReport message. Does not implicitly {@link signalservice.CrashReport.verify|verify} messages.
     * @param message CrashReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ICrashReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CrashReport message, length delimited. Does not implicitly {@link signalservice.CrashReport.verify|verify} messages.
     * @param message CrashReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ICrashReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CrashReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CrashReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CrashReport;

    /**
     * Decodes a CrashReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CrashReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CrashReport;

    /**
     * Creates a CrashReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CrashReport
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.CrashReport;

    /**
     * Creates a plain object from a CrashReport message. Also converts values to other types if specified.
     * @param message CrashReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.CrashReport,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CrashReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a CrashReportList. */
  interface ICrashReportList {
    /** CrashReportList reports */
    reports?: signalservice.ICrashReport[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a CrashReportList. */
  class CrashReportList implements ICrashReportList {
    /**
     * Constructs a new CrashReportList.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ICrashReportList);

    /** CrashReportList reports. */
    public reports: signalservice.ICrashReport[];

    /**
     * Encodes the specified CrashReportList message. Does not implicitly {@link signalservice.CrashReportList.verify|verify} messages.
     * @param message CrashReportList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ICrashReportList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CrashReportList message, length delimited. Does not implicitly {@link signalservice.CrashReportList.verify|verify} messages.
     * @param message CrashReportList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ICrashReportList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CrashReportList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CrashReportList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CrashReportList;

    /**
     * Decodes a CrashReportList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CrashReportList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CrashReportList;

    /**
     * Creates a CrashReportList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CrashReportList
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.CrashReportList;

    /**
     * Creates a plain object from a CrashReportList message. Also converts values to other types if specified.
     * @param message CrashReportList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.CrashReportList,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CrashReportList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ProvisioningUuid. */
  interface IProvisioningUuid {
    /** ProvisioningUuid uuid */
    uuid?: string | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ProvisioningUuid. */
  class ProvisioningUuid implements IProvisioningUuid {
    /**
     * Constructs a new ProvisioningUuid.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IProvisioningUuid);

    /** ProvisioningUuid uuid. */
    public uuid: string;

    /**
     * Encodes the specified ProvisioningUuid message. Does not implicitly {@link signalservice.ProvisioningUuid.verify|verify} messages.
     * @param message ProvisioningUuid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IProvisioningUuid,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProvisioningUuid message, length delimited. Does not implicitly {@link signalservice.ProvisioningUuid.verify|verify} messages.
     * @param message ProvisioningUuid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IProvisioningUuid,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProvisioningUuid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProvisioningUuid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisioningUuid;

    /**
     * Decodes a ProvisioningUuid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProvisioningUuid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisioningUuid;

    /**
     * Creates a ProvisioningUuid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProvisioningUuid
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ProvisioningUuid;

    /**
     * Creates a plain object from a ProvisioningUuid message. Also converts values to other types if specified.
     * @param message ProvisioningUuid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ProvisioningUuid,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProvisioningUuid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ProvisionEnvelope. */
  interface IProvisionEnvelope {
    /** ProvisionEnvelope publicKey */
    publicKey?: Uint8Array | null;

    /** ProvisionEnvelope body */
    body?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ProvisionEnvelope. */
  class ProvisionEnvelope implements IProvisionEnvelope {
    /**
     * Constructs a new ProvisionEnvelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IProvisionEnvelope);

    /** ProvisionEnvelope publicKey. */
    public publicKey: Uint8Array;

    /** ProvisionEnvelope body. */
    public body: Uint8Array;

    /**
     * Encodes the specified ProvisionEnvelope message. Does not implicitly {@link signalservice.ProvisionEnvelope.verify|verify} messages.
     * @param message ProvisionEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IProvisionEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProvisionEnvelope message, length delimited. Does not implicitly {@link signalservice.ProvisionEnvelope.verify|verify} messages.
     * @param message ProvisionEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IProvisionEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProvisionEnvelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProvisionEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisionEnvelope;

    /**
     * Decodes a ProvisionEnvelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProvisionEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisionEnvelope;

    /**
     * Creates a ProvisionEnvelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProvisionEnvelope
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ProvisionEnvelope;

    /**
     * Creates a plain object from a ProvisionEnvelope message. Also converts values to other types if specified.
     * @param message ProvisionEnvelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ProvisionEnvelope,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProvisionEnvelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ProvisionMessage. */
  interface IProvisionMessage {
    /** ProvisionMessage aciIdentityKeyPublic */
    aciIdentityKeyPublic?: Uint8Array | null;

    /** ProvisionMessage aciIdentityKeyPrivate */
    aciIdentityKeyPrivate?: Uint8Array | null;

    /** ProvisionMessage pniIdentityKeyPublic */
    pniIdentityKeyPublic?: Uint8Array | null;

    /** ProvisionMessage pniIdentityKeyPrivate */
    pniIdentityKeyPrivate?: Uint8Array | null;

    /** ProvisionMessage aci */
    aci?: string | null;

    /** ProvisionMessage pni */
    pni?: string | null;

    /** ProvisionMessage number */
    number?: string | null;

    /** ProvisionMessage provisioningCode */
    provisioningCode?: string | null;

    /** ProvisionMessage userAgent */
    userAgent?: string | null;

    /** ProvisionMessage profileKey */
    profileKey?: Uint8Array | null;

    /** ProvisionMessage readReceipts */
    readReceipts?: boolean | null;

    /** ProvisionMessage ProvisioningVersion */
    ProvisioningVersion?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ProvisionMessage. */
  class ProvisionMessage implements IProvisionMessage {
    /**
     * Constructs a new ProvisionMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IProvisionMessage);

    /** ProvisionMessage aciIdentityKeyPublic. */
    public aciIdentityKeyPublic: Uint8Array;

    /** ProvisionMessage aciIdentityKeyPrivate. */
    public aciIdentityKeyPrivate: Uint8Array;

    /** ProvisionMessage pniIdentityKeyPublic. */
    public pniIdentityKeyPublic: Uint8Array;

    /** ProvisionMessage pniIdentityKeyPrivate. */
    public pniIdentityKeyPrivate: Uint8Array;

    /** ProvisionMessage aci. */
    public aci: string;

    /** ProvisionMessage pni. */
    public pni: string;

    /** ProvisionMessage number. */
    public number: string;

    /** ProvisionMessage provisioningCode. */
    public provisioningCode: string;

    /** ProvisionMessage userAgent. */
    public userAgent: string;

    /** ProvisionMessage profileKey. */
    public profileKey: Uint8Array;

    /** ProvisionMessage readReceipts. */
    public readReceipts: boolean;

    /** ProvisionMessage ProvisioningVersion. */
    public ProvisioningVersion: number;

    /**
     * Encodes the specified ProvisionMessage message. Does not implicitly {@link signalservice.ProvisionMessage.verify|verify} messages.
     * @param message ProvisionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IProvisionMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProvisionMessage message, length delimited. Does not implicitly {@link signalservice.ProvisionMessage.verify|verify} messages.
     * @param message ProvisionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IProvisionMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProvisionMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProvisionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisionMessage;

    /**
     * Decodes a ProvisionMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProvisionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisionMessage;

    /**
     * Creates a ProvisionMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProvisionMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ProvisionMessage;

    /**
     * Creates a plain object from a ProvisionMessage message. Also converts values to other types if specified.
     * @param message ProvisionMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ProvisionMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProvisionMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** ProvisioningVersion enum. */
  enum ProvisioningVersion {
    INITIAL = 0,
    TABLET_SUPPORT = 1,
    CURRENT = 1,
  }

  /** Properties of a DeviceName. */
  interface IDeviceName {
    /** DeviceName ephemeralPublic */
    ephemeralPublic?: Uint8Array | null;

    /** DeviceName syntheticIv */
    syntheticIv?: Uint8Array | null;

    /** DeviceName ciphertext */
    ciphertext?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a DeviceName. */
  class DeviceName implements IDeviceName {
    /**
     * Constructs a new DeviceName.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IDeviceName);

    /** DeviceName ephemeralPublic. */
    public ephemeralPublic: Uint8Array;

    /** DeviceName syntheticIv. */
    public syntheticIv: Uint8Array;

    /** DeviceName ciphertext. */
    public ciphertext: Uint8Array;

    /**
     * Encodes the specified DeviceName message. Does not implicitly {@link signalservice.DeviceName.verify|verify} messages.
     * @param message DeviceName message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IDeviceName,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeviceName message, length delimited. Does not implicitly {@link signalservice.DeviceName.verify|verify} messages.
     * @param message DeviceName message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IDeviceName,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeviceName message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceName
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.DeviceName;

    /**
     * Decodes a DeviceName message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceName
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.DeviceName;

    /**
     * Creates a DeviceName message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceName
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.DeviceName;

    /**
     * Creates a plain object from a DeviceName message. Also converts values to other types if specified.
     * @param message DeviceName
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.DeviceName,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeviceName to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of an AvatarUploadAttributes. */
  interface IAvatarUploadAttributes {
    /** AvatarUploadAttributes key */
    key?: string | null;

    /** AvatarUploadAttributes credential */
    credential?: string | null;

    /** AvatarUploadAttributes acl */
    acl?: string | null;

    /** AvatarUploadAttributes algorithm */
    algorithm?: string | null;

    /** AvatarUploadAttributes date */
    date?: string | null;

    /** AvatarUploadAttributes policy */
    policy?: string | null;

    /** AvatarUploadAttributes signature */
    signature?: string | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an AvatarUploadAttributes. */
  class AvatarUploadAttributes implements IAvatarUploadAttributes {
    /**
     * Constructs a new AvatarUploadAttributes.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IAvatarUploadAttributes);

    /** AvatarUploadAttributes key. */
    public key: string;

    /** AvatarUploadAttributes credential. */
    public credential: string;

    /** AvatarUploadAttributes acl. */
    public acl: string;

    /** AvatarUploadAttributes algorithm. */
    public algorithm: string;

    /** AvatarUploadAttributes date. */
    public date: string;

    /** AvatarUploadAttributes policy. */
    public policy: string;

    /** AvatarUploadAttributes signature. */
    public signature: string;

    /**
     * Encodes the specified AvatarUploadAttributes message. Does not implicitly {@link signalservice.AvatarUploadAttributes.verify|verify} messages.
     * @param message AvatarUploadAttributes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IAvatarUploadAttributes,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AvatarUploadAttributes message, length delimited. Does not implicitly {@link signalservice.AvatarUploadAttributes.verify|verify} messages.
     * @param message AvatarUploadAttributes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IAvatarUploadAttributes,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AvatarUploadAttributes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AvatarUploadAttributes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AvatarUploadAttributes;

    /**
     * Decodes an AvatarUploadAttributes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AvatarUploadAttributes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AvatarUploadAttributes;

    /**
     * Creates an AvatarUploadAttributes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AvatarUploadAttributes
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.AvatarUploadAttributes;

    /**
     * Creates a plain object from an AvatarUploadAttributes message. Also converts values to other types if specified.
     * @param message AvatarUploadAttributes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.AvatarUploadAttributes,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AvatarUploadAttributes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a Member. */
  interface IMember {
    /** Member userId */
    userId?: Uint8Array | null;

    /** Member role */
    role?: signalservice.Member.Role | null;

    /** Member profileKey */
    profileKey?: Uint8Array | null;

    /** Member presentation */
    presentation?: Uint8Array | null;

    /** Member joinedAtVersion */
    joinedAtVersion?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a Member. */
  class Member implements IMember {
    /**
     * Constructs a new Member.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IMember);

    /** Member userId. */
    public userId: Uint8Array;

    /** Member role. */
    public role: signalservice.Member.Role;

    /** Member profileKey. */
    public profileKey: Uint8Array;

    /** Member presentation. */
    public presentation: Uint8Array;

    /** Member joinedAtVersion. */
    public joinedAtVersion: number;

    /**
     * Encodes the specified Member message. Does not implicitly {@link signalservice.Member.verify|verify} messages.
     * @param message Member message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IMember,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Member message, length delimited. Does not implicitly {@link signalservice.Member.verify|verify} messages.
     * @param message Member message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IMember,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Member message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Member
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Member;

    /**
     * Decodes a Member message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Member
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Member;

    /**
     * Creates a Member message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Member
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.Member;

    /**
     * Creates a plain object from a Member message. Also converts values to other types if specified.
     * @param message Member
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.Member,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Member to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Member {
    /** Role enum. */
    enum Role {
      UNKNOWN = 0,
      DEFAULT = 1,
      ADMINISTRATOR = 2,
    }
  }

  /** Properties of a MemberPendingProfileKey. */
  interface IMemberPendingProfileKey {
    /** MemberPendingProfileKey member */
    member?: signalservice.IMember | null;

    /** MemberPendingProfileKey addedByUserId */
    addedByUserId?: Uint8Array | null;

    /** MemberPendingProfileKey timestamp */
    timestamp?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a MemberPendingProfileKey. */
  class MemberPendingProfileKey implements IMemberPendingProfileKey {
    /**
     * Constructs a new MemberPendingProfileKey.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IMemberPendingProfileKey);

    /** MemberPendingProfileKey member. */
    public member?: signalservice.IMember | null;

    /** MemberPendingProfileKey addedByUserId. */
    public addedByUserId: Uint8Array;

    /** MemberPendingProfileKey timestamp. */
    public timestamp: Long;

    /**
     * Encodes the specified MemberPendingProfileKey message. Does not implicitly {@link signalservice.MemberPendingProfileKey.verify|verify} messages.
     * @param message MemberPendingProfileKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IMemberPendingProfileKey,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MemberPendingProfileKey message, length delimited. Does not implicitly {@link signalservice.MemberPendingProfileKey.verify|verify} messages.
     * @param message MemberPendingProfileKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IMemberPendingProfileKey,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MemberPendingProfileKey message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemberPendingProfileKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberPendingProfileKey;

    /**
     * Decodes a MemberPendingProfileKey message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemberPendingProfileKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberPendingProfileKey;

    /**
     * Creates a MemberPendingProfileKey message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemberPendingProfileKey
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.MemberPendingProfileKey;

    /**
     * Creates a plain object from a MemberPendingProfileKey message. Also converts values to other types if specified.
     * @param message MemberPendingProfileKey
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.MemberPendingProfileKey,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MemberPendingProfileKey to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a MemberPendingAdminApproval. */
  interface IMemberPendingAdminApproval {
    /** MemberPendingAdminApproval userId */
    userId?: Uint8Array | null;

    /** MemberPendingAdminApproval profileKey */
    profileKey?: Uint8Array | null;

    /** MemberPendingAdminApproval presentation */
    presentation?: Uint8Array | null;

    /** MemberPendingAdminApproval timestamp */
    timestamp?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a MemberPendingAdminApproval. */
  class MemberPendingAdminApproval implements IMemberPendingAdminApproval {
    /**
     * Constructs a new MemberPendingAdminApproval.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IMemberPendingAdminApproval);

    /** MemberPendingAdminApproval userId. */
    public userId: Uint8Array;

    /** MemberPendingAdminApproval profileKey. */
    public profileKey: Uint8Array;

    /** MemberPendingAdminApproval presentation. */
    public presentation: Uint8Array;

    /** MemberPendingAdminApproval timestamp. */
    public timestamp: Long;

    /**
     * Encodes the specified MemberPendingAdminApproval message. Does not implicitly {@link signalservice.MemberPendingAdminApproval.verify|verify} messages.
     * @param message MemberPendingAdminApproval message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IMemberPendingAdminApproval,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MemberPendingAdminApproval message, length delimited. Does not implicitly {@link signalservice.MemberPendingAdminApproval.verify|verify} messages.
     * @param message MemberPendingAdminApproval message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IMemberPendingAdminApproval,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MemberPendingAdminApproval message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemberPendingAdminApproval
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberPendingAdminApproval;

    /**
     * Decodes a MemberPendingAdminApproval message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemberPendingAdminApproval
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberPendingAdminApproval;

    /**
     * Creates a MemberPendingAdminApproval message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemberPendingAdminApproval
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.MemberPendingAdminApproval;

    /**
     * Creates a plain object from a MemberPendingAdminApproval message. Also converts values to other types if specified.
     * @param message MemberPendingAdminApproval
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.MemberPendingAdminApproval,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MemberPendingAdminApproval to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a MemberBanned. */
  interface IMemberBanned {
    /** MemberBanned userId */
    userId?: Uint8Array | null;

    /** MemberBanned timestamp */
    timestamp?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a MemberBanned. */
  class MemberBanned implements IMemberBanned {
    /**
     * Constructs a new MemberBanned.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IMemberBanned);

    /** MemberBanned userId. */
    public userId: Uint8Array;

    /** MemberBanned timestamp. */
    public timestamp: Long;

    /**
     * Encodes the specified MemberBanned message. Does not implicitly {@link signalservice.MemberBanned.verify|verify} messages.
     * @param message MemberBanned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IMemberBanned,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MemberBanned message, length delimited. Does not implicitly {@link signalservice.MemberBanned.verify|verify} messages.
     * @param message MemberBanned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IMemberBanned,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MemberBanned message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemberBanned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberBanned;

    /**
     * Decodes a MemberBanned message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemberBanned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberBanned;

    /**
     * Creates a MemberBanned message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemberBanned
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.MemberBanned;

    /**
     * Creates a plain object from a MemberBanned message. Also converts values to other types if specified.
     * @param message MemberBanned
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.MemberBanned,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MemberBanned to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of an AccessControl. */
  interface IAccessControl {
    /** AccessControl attributes */
    attributes?: signalservice.AccessControl.AccessRequired | null;

    /** AccessControl members */
    members?: signalservice.AccessControl.AccessRequired | null;

    /** AccessControl addFromInviteLink */
    addFromInviteLink?: signalservice.AccessControl.AccessRequired | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an AccessControl. */
  class AccessControl implements IAccessControl {
    /**
     * Constructs a new AccessControl.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IAccessControl);

    /** AccessControl attributes. */
    public attributes: signalservice.AccessControl.AccessRequired;

    /** AccessControl members. */
    public members: signalservice.AccessControl.AccessRequired;

    /** AccessControl addFromInviteLink. */
    public addFromInviteLink: signalservice.AccessControl.AccessRequired;

    /**
     * Encodes the specified AccessControl message. Does not implicitly {@link signalservice.AccessControl.verify|verify} messages.
     * @param message AccessControl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IAccessControl,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AccessControl message, length delimited. Does not implicitly {@link signalservice.AccessControl.verify|verify} messages.
     * @param message AccessControl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IAccessControl,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AccessControl message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccessControl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AccessControl;

    /**
     * Decodes an AccessControl message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccessControl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AccessControl;

    /**
     * Creates an AccessControl message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccessControl
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.AccessControl;

    /**
     * Creates a plain object from an AccessControl message. Also converts values to other types if specified.
     * @param message AccessControl
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.AccessControl,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AccessControl to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AccessControl {
    /** AccessRequired enum. */
    enum AccessRequired {
      UNKNOWN = 0,
      ANY = 1,
      MEMBER = 2,
      ADMINISTRATOR = 3,
      UNSATISFIABLE = 4,
    }
  }

  /** Properties of a Group. */
  interface IGroup {
    /** Group publicKey */
    publicKey?: Uint8Array | null;

    /** Group title */
    title?: Uint8Array | null;

    /** Group avatar */
    avatar?: string | null;

    /** Group disappearingMessagesTimer */
    disappearingMessagesTimer?: Uint8Array | null;

    /** Group accessControl */
    accessControl?: signalservice.IAccessControl | null;

    /** Group version */
    version?: number | null;

    /** Group members */
    members?: signalservice.IMember[] | null;

    /** Group membersPendingProfileKey */
    membersPendingProfileKey?: signalservice.IMemberPendingProfileKey[] | null;

    /** Group membersPendingAdminApproval */
    membersPendingAdminApproval?:
      | signalservice.IMemberPendingAdminApproval[]
      | null;

    /** Group inviteLinkPassword */
    inviteLinkPassword?: Uint8Array | null;

    /** Group descriptionBytes */
    descriptionBytes?: Uint8Array | null;

    /** Group announcementsOnly */
    announcementsOnly?: boolean | null;

    /** Group membersBanned */
    membersBanned?: signalservice.IMemberBanned[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a Group. */
  class Group implements IGroup {
    /**
     * Constructs a new Group.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroup);

    /** Group publicKey. */
    public publicKey: Uint8Array;

    /** Group title. */
    public title: Uint8Array;

    /** Group avatar. */
    public avatar: string;

    /** Group disappearingMessagesTimer. */
    public disappearingMessagesTimer: Uint8Array;

    /** Group accessControl. */
    public accessControl?: signalservice.IAccessControl | null;

    /** Group version. */
    public version: number;

    /** Group members. */
    public members: signalservice.IMember[];

    /** Group membersPendingProfileKey. */
    public membersPendingProfileKey: signalservice.IMemberPendingProfileKey[];

    /** Group membersPendingAdminApproval. */
    public membersPendingAdminApproval: signalservice.IMemberPendingAdminApproval[];

    /** Group inviteLinkPassword. */
    public inviteLinkPassword: Uint8Array;

    /** Group descriptionBytes. */
    public descriptionBytes: Uint8Array;

    /** Group announcementsOnly. */
    public announcementsOnly: boolean;

    /** Group membersBanned. */
    public membersBanned: signalservice.IMemberBanned[];

    /**
     * Encodes the specified Group message. Does not implicitly {@link signalservice.Group.verify|verify} messages.
     * @param message Group message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroup,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Group message, length delimited. Does not implicitly {@link signalservice.Group.verify|verify} messages.
     * @param message Group message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroup,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Group message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Group
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Group;

    /**
     * Decodes a Group message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Group
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Group;

    /**
     * Creates a Group message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Group
     */
    public static fromObject(object: { [k: string]: any }): signalservice.Group;

    /**
     * Creates a plain object from a Group message. Also converts values to other types if specified.
     * @param message Group
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.Group,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Group to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a GroupChange. */
  interface IGroupChange {
    /** GroupChange actions */
    actions?: Uint8Array | null;

    /** GroupChange serverSignature */
    serverSignature?: Uint8Array | null;

    /** GroupChange changeEpoch */
    changeEpoch?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupChange. */
  class GroupChange implements IGroupChange {
    /**
     * Constructs a new GroupChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupChange);

    /** GroupChange actions. */
    public actions: Uint8Array;

    /** GroupChange serverSignature. */
    public serverSignature: Uint8Array;

    /** GroupChange changeEpoch. */
    public changeEpoch: number;

    /**
     * Encodes the specified GroupChange message. Does not implicitly {@link signalservice.GroupChange.verify|verify} messages.
     * @param message GroupChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupChange,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupChange message, length delimited. Does not implicitly {@link signalservice.GroupChange.verify|verify} messages.
     * @param message GroupChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupChange,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupChange;

    /**
     * Decodes a GroupChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupChange;

    /**
     * Creates a GroupChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupChange
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupChange;

    /**
     * Creates a plain object from a GroupChange message. Also converts values to other types if specified.
     * @param message GroupChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupChange,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupChange {
    /** Properties of an Actions. */
    interface IActions {
      /** Actions sourceUuid */
      sourceUuid?: Uint8Array | null;

      /** Actions version */
      version?: number | null;

      /** Actions addMembers */
      addMembers?: signalservice.GroupChange.Actions.IAddMemberAction[] | null;

      /** Actions deleteMembers */
      deleteMembers?:
        | signalservice.GroupChange.Actions.IDeleteMemberAction[]
        | null;

      /** Actions modifyMemberRoles */
      modifyMemberRoles?:
        | signalservice.GroupChange.Actions.IModifyMemberRoleAction[]
        | null;

      /** Actions modifyMemberProfileKeys */
      modifyMemberProfileKeys?:
        | signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction[]
        | null;

      /** Actions addPendingMembers */
      addPendingMembers?:
        | signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction[]
        | null;

      /** Actions deletePendingMembers */
      deletePendingMembers?:
        | signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction[]
        | null;

      /** Actions promotePendingMembers */
      promotePendingMembers?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction[]
        | null;

      /** Actions modifyTitle */
      modifyTitle?: signalservice.GroupChange.Actions.IModifyTitleAction | null;

      /** Actions modifyAvatar */
      modifyAvatar?: signalservice.GroupChange.Actions.IModifyAvatarAction | null;

      /** Actions modifyDisappearingMessagesTimer */
      modifyDisappearingMessagesTimer?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction | null;

      /** Actions modifyAttributesAccess */
      modifyAttributesAccess?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction | null;

      /** Actions modifyMemberAccess */
      modifyMemberAccess?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction | null;

      /** Actions modifyAddFromInviteLinkAccess */
      modifyAddFromInviteLinkAccess?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction | null;

      /** Actions addMemberPendingAdminApprovals */
      addMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction[]
        | null;

      /** Actions deleteMemberPendingAdminApprovals */
      deleteMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction[]
        | null;

      /** Actions promoteMemberPendingAdminApprovals */
      promoteMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction[]
        | null;

      /** Actions modifyInviteLinkPassword */
      modifyInviteLinkPassword?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction | null;

      /** Actions modifyDescription */
      modifyDescription?: signalservice.GroupChange.Actions.IModifyDescriptionAction | null;

      /** Actions modifyAnnouncementsOnly */
      modifyAnnouncementsOnly?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction | null;

      /** Actions addMembersBanned */
      addMembersBanned?:
        | signalservice.GroupChange.Actions.IAddMemberBannedAction[]
        | null;

      /** Actions deleteMembersBanned */
      deleteMembersBanned?:
        | signalservice.GroupChange.Actions.IDeleteMemberBannedAction[]
        | null;

      /** Actions promoteMembersPendingPniAciProfileKey */
      promoteMembersPendingPniAciProfileKey?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction[]
        | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Actions. */
    class Actions implements IActions {
      /**
       * Constructs a new Actions.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.GroupChange.IActions);

      /** Actions sourceUuid. */
      public sourceUuid: Uint8Array;

      /** Actions version. */
      public version: number;

      /** Actions addMembers. */
      public addMembers: signalservice.GroupChange.Actions.IAddMemberAction[];

      /** Actions deleteMembers. */
      public deleteMembers: signalservice.GroupChange.Actions.IDeleteMemberAction[];

      /** Actions modifyMemberRoles. */
      public modifyMemberRoles: signalservice.GroupChange.Actions.IModifyMemberRoleAction[];

      /** Actions modifyMemberProfileKeys. */
      public modifyMemberProfileKeys: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction[];

      /** Actions addPendingMembers. */
      public addPendingMembers: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction[];

      /** Actions deletePendingMembers. */
      public deletePendingMembers: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction[];

      /** Actions promotePendingMembers. */
      public promotePendingMembers: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction[];

      /** Actions modifyTitle. */
      public modifyTitle?: signalservice.GroupChange.Actions.IModifyTitleAction | null;

      /** Actions modifyAvatar. */
      public modifyAvatar?: signalservice.GroupChange.Actions.IModifyAvatarAction | null;

      /** Actions modifyDisappearingMessagesTimer. */
      public modifyDisappearingMessagesTimer?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction | null;

      /** Actions modifyAttributesAccess. */
      public modifyAttributesAccess?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction | null;

      /** Actions modifyMemberAccess. */
      public modifyMemberAccess?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction | null;

      /** Actions modifyAddFromInviteLinkAccess. */
      public modifyAddFromInviteLinkAccess?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction | null;

      /** Actions addMemberPendingAdminApprovals. */
      public addMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction[];

      /** Actions deleteMemberPendingAdminApprovals. */
      public deleteMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction[];

      /** Actions promoteMemberPendingAdminApprovals. */
      public promoteMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction[];

      /** Actions modifyInviteLinkPassword. */
      public modifyInviteLinkPassword?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction | null;

      /** Actions modifyDescription. */
      public modifyDescription?: signalservice.GroupChange.Actions.IModifyDescriptionAction | null;

      /** Actions modifyAnnouncementsOnly. */
      public modifyAnnouncementsOnly?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction | null;

      /** Actions addMembersBanned. */
      public addMembersBanned: signalservice.GroupChange.Actions.IAddMemberBannedAction[];

      /** Actions deleteMembersBanned. */
      public deleteMembersBanned: signalservice.GroupChange.Actions.IDeleteMemberBannedAction[];

      /** Actions promoteMembersPendingPniAciProfileKey. */
      public promoteMembersPendingPniAciProfileKey: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction[];

      /**
       * Encodes the specified Actions message. Does not implicitly {@link signalservice.GroupChange.Actions.verify|verify} messages.
       * @param message Actions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.GroupChange.IActions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Actions message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.verify|verify} messages.
       * @param message Actions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.GroupChange.IActions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Actions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Actions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupChange.Actions;

      /**
       * Decodes an Actions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Actions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupChange.Actions;

      /**
       * Creates an Actions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Actions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.GroupChange.Actions;

      /**
       * Creates a plain object from an Actions message. Also converts values to other types if specified.
       * @param message Actions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.GroupChange.Actions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Actions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Actions {
      /** Properties of an AddMemberAction. */
      interface IAddMemberAction {
        /** AddMemberAction added */
        added?: signalservice.IMember | null;

        /** AddMemberAction joinFromInviteLink */
        joinFromInviteLink?: boolean | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an AddMemberAction. */
      class AddMemberAction implements IAddMemberAction {
        /**
         * Constructs a new AddMemberAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberAction
        );

        /** AddMemberAction added. */
        public added?: signalservice.IMember | null;

        /** AddMemberAction joinFromInviteLink. */
        public joinFromInviteLink: boolean;

        /**
         * Encodes the specified AddMemberAction message. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberAction.verify|verify} messages.
         * @param message AddMemberAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified AddMemberAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberAction.verify|verify} messages.
         * @param message AddMemberAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddMemberAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMemberAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberAction;

        /**
         * Decodes an AddMemberAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMemberAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberAction;

        /**
         * Creates an AddMemberAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMemberAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.AddMemberAction;

        /**
         * Creates a plain object from an AddMemberAction message. Also converts values to other types if specified.
         * @param message AddMemberAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.AddMemberAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddMemberAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a DeleteMemberAction. */
      interface IDeleteMemberAction {
        /** DeleteMemberAction deletedUserId */
        deletedUserId?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a DeleteMemberAction. */
      class DeleteMemberAction implements IDeleteMemberAction {
        /**
         * Constructs a new DeleteMemberAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberAction
        );

        /** DeleteMemberAction deletedUserId. */
        public deletedUserId: Uint8Array;

        /**
         * Encodes the specified DeleteMemberAction message. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberAction.verify|verify} messages.
         * @param message DeleteMemberAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMemberAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberAction.verify|verify} messages.
         * @param message DeleteMemberAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteMemberAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMemberAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberAction;

        /**
         * Decodes a DeleteMemberAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMemberAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberAction;

        /**
         * Creates a DeleteMemberAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMemberAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.DeleteMemberAction;

        /**
         * Creates a plain object from a DeleteMemberAction message. Also converts values to other types if specified.
         * @param message DeleteMemberAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.DeleteMemberAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteMemberAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyMemberRoleAction. */
      interface IModifyMemberRoleAction {
        /** ModifyMemberRoleAction userId */
        userId?: Uint8Array | null;

        /** ModifyMemberRoleAction role */
        role?: signalservice.Member.Role | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyMemberRoleAction. */
      class ModifyMemberRoleAction implements IModifyMemberRoleAction {
        /**
         * Constructs a new ModifyMemberRoleAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMemberRoleAction
        );

        /** ModifyMemberRoleAction userId. */
        public userId: Uint8Array;

        /** ModifyMemberRoleAction role. */
        public role: signalservice.Member.Role;

        /**
         * Encodes the specified ModifyMemberRoleAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMemberRoleAction.verify|verify} messages.
         * @param message ModifyMemberRoleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMemberRoleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyMemberRoleAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMemberRoleAction.verify|verify} messages.
         * @param message ModifyMemberRoleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMemberRoleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyMemberRoleAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyMemberRoleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMemberRoleAction;

        /**
         * Decodes a ModifyMemberRoleAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyMemberRoleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMemberRoleAction;

        /**
         * Creates a ModifyMemberRoleAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyMemberRoleAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyMemberRoleAction;

        /**
         * Creates a plain object from a ModifyMemberRoleAction message. Also converts values to other types if specified.
         * @param message ModifyMemberRoleAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyMemberRoleAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyMemberRoleAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyMemberProfileKeyAction. */
      interface IModifyMemberProfileKeyAction {
        /** ModifyMemberProfileKeyAction presentation */
        presentation?: Uint8Array | null;

        /** ModifyMemberProfileKeyAction userId */
        userId?: Uint8Array | null;

        /** ModifyMemberProfileKeyAction profileKey */
        profileKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyMemberProfileKeyAction. */
      class ModifyMemberProfileKeyAction
        implements IModifyMemberProfileKeyAction
      {
        /**
         * Constructs a new ModifyMemberProfileKeyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction
        );

        /** ModifyMemberProfileKeyAction presentation. */
        public presentation: Uint8Array;

        /** ModifyMemberProfileKeyAction userId. */
        public userId: Uint8Array;

        /** ModifyMemberProfileKeyAction profileKey. */
        public profileKey: Uint8Array;

        /**
         * Encodes the specified ModifyMemberProfileKeyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction.verify|verify} messages.
         * @param message ModifyMemberProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyMemberProfileKeyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction.verify|verify} messages.
         * @param message ModifyMemberProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyMemberProfileKeyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyMemberProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction;

        /**
         * Decodes a ModifyMemberProfileKeyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyMemberProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction;

        /**
         * Creates a ModifyMemberProfileKeyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyMemberProfileKeyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction;

        /**
         * Creates a plain object from a ModifyMemberProfileKeyAction message. Also converts values to other types if specified.
         * @param message ModifyMemberProfileKeyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyMemberProfileKeyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of an AddMemberPendingProfileKeyAction. */
      interface IAddMemberPendingProfileKeyAction {
        /** AddMemberPendingProfileKeyAction added */
        added?: signalservice.IMemberPendingProfileKey | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an AddMemberPendingProfileKeyAction. */
      class AddMemberPendingProfileKeyAction
        implements IAddMemberPendingProfileKeyAction
      {
        /**
         * Constructs a new AddMemberPendingProfileKeyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction
        );

        /** AddMemberPendingProfileKeyAction added. */
        public added?: signalservice.IMemberPendingProfileKey | null;

        /**
         * Encodes the specified AddMemberPendingProfileKeyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message AddMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified AddMemberPendingProfileKeyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message AddMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddMemberPendingProfileKeyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction;

        /**
         * Decodes an AddMemberPendingProfileKeyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction;

        /**
         * Creates an AddMemberPendingProfileKeyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMemberPendingProfileKeyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction;

        /**
         * Creates a plain object from an AddMemberPendingProfileKeyAction message. Also converts values to other types if specified.
         * @param message AddMemberPendingProfileKeyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddMemberPendingProfileKeyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a DeleteMemberPendingProfileKeyAction. */
      interface IDeleteMemberPendingProfileKeyAction {
        /** DeleteMemberPendingProfileKeyAction deletedUserId */
        deletedUserId?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a DeleteMemberPendingProfileKeyAction. */
      class DeleteMemberPendingProfileKeyAction
        implements IDeleteMemberPendingProfileKeyAction
      {
        /**
         * Constructs a new DeleteMemberPendingProfileKeyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction
        );

        /** DeleteMemberPendingProfileKeyAction deletedUserId. */
        public deletedUserId: Uint8Array;

        /**
         * Encodes the specified DeleteMemberPendingProfileKeyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message DeleteMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMemberPendingProfileKeyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message DeleteMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteMemberPendingProfileKeyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction;

        /**
         * Decodes a DeleteMemberPendingProfileKeyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction;

        /**
         * Creates a DeleteMemberPendingProfileKeyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMemberPendingProfileKeyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction;

        /**
         * Creates a plain object from a DeleteMemberPendingProfileKeyAction message. Also converts values to other types if specified.
         * @param message DeleteMemberPendingProfileKeyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteMemberPendingProfileKeyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a PromoteMemberPendingProfileKeyAction. */
      interface IPromoteMemberPendingProfileKeyAction {
        /** PromoteMemberPendingProfileKeyAction presentation */
        presentation?: Uint8Array | null;

        /** PromoteMemberPendingProfileKeyAction userId */
        userId?: Uint8Array | null;

        /** PromoteMemberPendingProfileKeyAction profileKey */
        profileKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a PromoteMemberPendingProfileKeyAction. */
      class PromoteMemberPendingProfileKeyAction
        implements IPromoteMemberPendingProfileKeyAction
      {
        /**
         * Constructs a new PromoteMemberPendingProfileKeyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction
        );

        /** PromoteMemberPendingProfileKeyAction presentation. */
        public presentation: Uint8Array;

        /** PromoteMemberPendingProfileKeyAction userId. */
        public userId: Uint8Array;

        /** PromoteMemberPendingProfileKeyAction profileKey. */
        public profileKey: Uint8Array;

        /**
         * Encodes the specified PromoteMemberPendingProfileKeyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message PromoteMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified PromoteMemberPendingProfileKeyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction.verify|verify} messages.
         * @param message PromoteMemberPendingProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PromoteMemberPendingProfileKeyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PromoteMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction;

        /**
         * Decodes a PromoteMemberPendingProfileKeyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PromoteMemberPendingProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction;

        /**
         * Creates a PromoteMemberPendingProfileKeyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PromoteMemberPendingProfileKeyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction;

        /**
         * Creates a plain object from a PromoteMemberPendingProfileKeyAction message. Also converts values to other types if specified.
         * @param message PromoteMemberPendingProfileKeyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PromoteMemberPendingProfileKeyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a PromoteMemberPendingPniAciProfileKeyAction. */
      interface IPromoteMemberPendingPniAciProfileKeyAction {
        /** PromoteMemberPendingPniAciProfileKeyAction presentation */
        presentation?: Uint8Array | null;

        /** PromoteMemberPendingPniAciProfileKeyAction userId */
        userId?: Uint8Array | null;

        /** PromoteMemberPendingPniAciProfileKeyAction pni */
        pni?: Uint8Array | null;

        /** PromoteMemberPendingPniAciProfileKeyAction profileKey */
        profileKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a PromoteMemberPendingPniAciProfileKeyAction. */
      class PromoteMemberPendingPniAciProfileKeyAction
        implements IPromoteMemberPendingPniAciProfileKeyAction
      {
        /**
         * Constructs a new PromoteMemberPendingPniAciProfileKeyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction
        );

        /** PromoteMemberPendingPniAciProfileKeyAction presentation. */
        public presentation: Uint8Array;

        /** PromoteMemberPendingPniAciProfileKeyAction userId. */
        public userId: Uint8Array;

        /** PromoteMemberPendingPniAciProfileKeyAction pni. */
        public pni: Uint8Array;

        /** PromoteMemberPendingPniAciProfileKeyAction profileKey. */
        public profileKey: Uint8Array;

        /**
         * Encodes the specified PromoteMemberPendingPniAciProfileKeyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction.verify|verify} messages.
         * @param message PromoteMemberPendingPniAciProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified PromoteMemberPendingPniAciProfileKeyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction.verify|verify} messages.
         * @param message PromoteMemberPendingPniAciProfileKeyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PromoteMemberPendingPniAciProfileKeyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PromoteMemberPendingPniAciProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction;

        /**
         * Decodes a PromoteMemberPendingPniAciProfileKeyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PromoteMemberPendingPniAciProfileKeyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction;

        /**
         * Creates a PromoteMemberPendingPniAciProfileKeyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PromoteMemberPendingPniAciProfileKeyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction;

        /**
         * Creates a plain object from a PromoteMemberPendingPniAciProfileKeyAction message. Also converts values to other types if specified.
         * @param message PromoteMemberPendingPniAciProfileKeyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PromoteMemberPendingPniAciProfileKeyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of an AddMemberPendingAdminApprovalAction. */
      interface IAddMemberPendingAdminApprovalAction {
        /** AddMemberPendingAdminApprovalAction added */
        added?: signalservice.IMemberPendingAdminApproval | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an AddMemberPendingAdminApprovalAction. */
      class AddMemberPendingAdminApprovalAction
        implements IAddMemberPendingAdminApprovalAction
      {
        /**
         * Constructs a new AddMemberPendingAdminApprovalAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction
        );

        /** AddMemberPendingAdminApprovalAction added. */
        public added?: signalservice.IMemberPendingAdminApproval | null;

        /**
         * Encodes the specified AddMemberPendingAdminApprovalAction message. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message AddMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified AddMemberPendingAdminApprovalAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message AddMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddMemberPendingAdminApprovalAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction;

        /**
         * Decodes an AddMemberPendingAdminApprovalAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction;

        /**
         * Creates an AddMemberPendingAdminApprovalAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMemberPendingAdminApprovalAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction;

        /**
         * Creates a plain object from an AddMemberPendingAdminApprovalAction message. Also converts values to other types if specified.
         * @param message AddMemberPendingAdminApprovalAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddMemberPendingAdminApprovalAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a DeleteMemberPendingAdminApprovalAction. */
      interface IDeleteMemberPendingAdminApprovalAction {
        /** DeleteMemberPendingAdminApprovalAction deletedUserId */
        deletedUserId?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a DeleteMemberPendingAdminApprovalAction. */
      class DeleteMemberPendingAdminApprovalAction
        implements IDeleteMemberPendingAdminApprovalAction
      {
        /**
         * Constructs a new DeleteMemberPendingAdminApprovalAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction
        );

        /** DeleteMemberPendingAdminApprovalAction deletedUserId. */
        public deletedUserId: Uint8Array;

        /**
         * Encodes the specified DeleteMemberPendingAdminApprovalAction message. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message DeleteMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMemberPendingAdminApprovalAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message DeleteMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteMemberPendingAdminApprovalAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction;

        /**
         * Decodes a DeleteMemberPendingAdminApprovalAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction;

        /**
         * Creates a DeleteMemberPendingAdminApprovalAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMemberPendingAdminApprovalAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction;

        /**
         * Creates a plain object from a DeleteMemberPendingAdminApprovalAction message. Also converts values to other types if specified.
         * @param message DeleteMemberPendingAdminApprovalAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteMemberPendingAdminApprovalAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a PromoteMemberPendingAdminApprovalAction. */
      interface IPromoteMemberPendingAdminApprovalAction {
        /** PromoteMemberPendingAdminApprovalAction userId */
        userId?: Uint8Array | null;

        /** PromoteMemberPendingAdminApprovalAction role */
        role?: signalservice.Member.Role | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a PromoteMemberPendingAdminApprovalAction. */
      class PromoteMemberPendingAdminApprovalAction
        implements IPromoteMemberPendingAdminApprovalAction
      {
        /**
         * Constructs a new PromoteMemberPendingAdminApprovalAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction
        );

        /** PromoteMemberPendingAdminApprovalAction userId. */
        public userId: Uint8Array;

        /** PromoteMemberPendingAdminApprovalAction role. */
        public role: signalservice.Member.Role;

        /**
         * Encodes the specified PromoteMemberPendingAdminApprovalAction message. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message PromoteMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified PromoteMemberPendingAdminApprovalAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction.verify|verify} messages.
         * @param message PromoteMemberPendingAdminApprovalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PromoteMemberPendingAdminApprovalAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PromoteMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction;

        /**
         * Decodes a PromoteMemberPendingAdminApprovalAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PromoteMemberPendingAdminApprovalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction;

        /**
         * Creates a PromoteMemberPendingAdminApprovalAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PromoteMemberPendingAdminApprovalAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction;

        /**
         * Creates a plain object from a PromoteMemberPendingAdminApprovalAction message. Also converts values to other types if specified.
         * @param message PromoteMemberPendingAdminApprovalAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PromoteMemberPendingAdminApprovalAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of an AddMemberBannedAction. */
      interface IAddMemberBannedAction {
        /** AddMemberBannedAction added */
        added?: signalservice.IMemberBanned | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an AddMemberBannedAction. */
      class AddMemberBannedAction implements IAddMemberBannedAction {
        /**
         * Constructs a new AddMemberBannedAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberBannedAction
        );

        /** AddMemberBannedAction added. */
        public added?: signalservice.IMemberBanned | null;

        /**
         * Encodes the specified AddMemberBannedAction message. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberBannedAction.verify|verify} messages.
         * @param message AddMemberBannedAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified AddMemberBannedAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.AddMemberBannedAction.verify|verify} messages.
         * @param message AddMemberBannedAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddMemberBannedAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMemberBannedAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberBannedAction;

        /**
         * Decodes an AddMemberBannedAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMemberBannedAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberBannedAction;

        /**
         * Creates an AddMemberBannedAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMemberBannedAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.AddMemberBannedAction;

        /**
         * Creates a plain object from an AddMemberBannedAction message. Also converts values to other types if specified.
         * @param message AddMemberBannedAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.AddMemberBannedAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddMemberBannedAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a DeleteMemberBannedAction. */
      interface IDeleteMemberBannedAction {
        /** DeleteMemberBannedAction deletedUserId */
        deletedUserId?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a DeleteMemberBannedAction. */
      class DeleteMemberBannedAction implements IDeleteMemberBannedAction {
        /**
         * Constructs a new DeleteMemberBannedAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberBannedAction
        );

        /** DeleteMemberBannedAction deletedUserId. */
        public deletedUserId: Uint8Array;

        /**
         * Encodes the specified DeleteMemberBannedAction message. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberBannedAction.verify|verify} messages.
         * @param message DeleteMemberBannedAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMemberBannedAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.DeleteMemberBannedAction.verify|verify} messages.
         * @param message DeleteMemberBannedAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteMemberBannedAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMemberBannedAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberBannedAction;

        /**
         * Decodes a DeleteMemberBannedAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMemberBannedAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberBannedAction;

        /**
         * Creates a DeleteMemberBannedAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMemberBannedAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.DeleteMemberBannedAction;

        /**
         * Creates a plain object from a DeleteMemberBannedAction message. Also converts values to other types if specified.
         * @param message DeleteMemberBannedAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.DeleteMemberBannedAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteMemberBannedAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyTitleAction. */
      interface IModifyTitleAction {
        /** ModifyTitleAction title */
        title?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyTitleAction. */
      class ModifyTitleAction implements IModifyTitleAction {
        /**
         * Constructs a new ModifyTitleAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyTitleAction
        );

        /** ModifyTitleAction title. */
        public title: Uint8Array;

        /**
         * Encodes the specified ModifyTitleAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyTitleAction.verify|verify} messages.
         * @param message ModifyTitleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyTitleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyTitleAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyTitleAction.verify|verify} messages.
         * @param message ModifyTitleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyTitleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyTitleAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyTitleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyTitleAction;

        /**
         * Decodes a ModifyTitleAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyTitleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyTitleAction;

        /**
         * Creates a ModifyTitleAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyTitleAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyTitleAction;

        /**
         * Creates a plain object from a ModifyTitleAction message. Also converts values to other types if specified.
         * @param message ModifyTitleAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyTitleAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyTitleAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyAvatarAction. */
      interface IModifyAvatarAction {
        /** ModifyAvatarAction avatar */
        avatar?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyAvatarAction. */
      class ModifyAvatarAction implements IModifyAvatarAction {
        /**
         * Constructs a new ModifyAvatarAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAvatarAction
        );

        /** ModifyAvatarAction avatar. */
        public avatar: string;

        /**
         * Encodes the specified ModifyAvatarAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAvatarAction.verify|verify} messages.
         * @param message ModifyAvatarAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAvatarAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyAvatarAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAvatarAction.verify|verify} messages.
         * @param message ModifyAvatarAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAvatarAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyAvatarAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyAvatarAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAvatarAction;

        /**
         * Decodes a ModifyAvatarAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyAvatarAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAvatarAction;

        /**
         * Creates a ModifyAvatarAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyAvatarAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyAvatarAction;

        /**
         * Creates a plain object from a ModifyAvatarAction message. Also converts values to other types if specified.
         * @param message ModifyAvatarAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyAvatarAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyAvatarAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyDisappearingMessagesTimerAction. */
      interface IModifyDisappearingMessagesTimerAction {
        /** ModifyDisappearingMessagesTimerAction timer */
        timer?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyDisappearingMessagesTimerAction. */
      class ModifyDisappearingMessagesTimerAction
        implements IModifyDisappearingMessagesTimerAction
      {
        /**
         * Constructs a new ModifyDisappearingMessagesTimerAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction
        );

        /** ModifyDisappearingMessagesTimerAction timer. */
        public timer: Uint8Array;

        /**
         * Encodes the specified ModifyDisappearingMessagesTimerAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction.verify|verify} messages.
         * @param message ModifyDisappearingMessagesTimerAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyDisappearingMessagesTimerAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction.verify|verify} messages.
         * @param message ModifyDisappearingMessagesTimerAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyDisappearingMessagesTimerAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyDisappearingMessagesTimerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction;

        /**
         * Decodes a ModifyDisappearingMessagesTimerAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyDisappearingMessagesTimerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction;

        /**
         * Creates a ModifyDisappearingMessagesTimerAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyDisappearingMessagesTimerAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction;

        /**
         * Creates a plain object from a ModifyDisappearingMessagesTimerAction message. Also converts values to other types if specified.
         * @param message ModifyDisappearingMessagesTimerAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyDisappearingMessagesTimerAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyAttributesAccessControlAction. */
      interface IModifyAttributesAccessControlAction {
        /** ModifyAttributesAccessControlAction attributesAccess */
        attributesAccess?: signalservice.AccessControl.AccessRequired | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyAttributesAccessControlAction. */
      class ModifyAttributesAccessControlAction
        implements IModifyAttributesAccessControlAction
      {
        /**
         * Constructs a new ModifyAttributesAccessControlAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction
        );

        /** ModifyAttributesAccessControlAction attributesAccess. */
        public attributesAccess: signalservice.AccessControl.AccessRequired;

        /**
         * Encodes the specified ModifyAttributesAccessControlAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction.verify|verify} messages.
         * @param message ModifyAttributesAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyAttributesAccessControlAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction.verify|verify} messages.
         * @param message ModifyAttributesAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyAttributesAccessControlAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyAttributesAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction;

        /**
         * Decodes a ModifyAttributesAccessControlAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyAttributesAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction;

        /**
         * Creates a ModifyAttributesAccessControlAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyAttributesAccessControlAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction;

        /**
         * Creates a plain object from a ModifyAttributesAccessControlAction message. Also converts values to other types if specified.
         * @param message ModifyAttributesAccessControlAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyAttributesAccessControlAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyAvatarAccessControlAction. */
      interface IModifyAvatarAccessControlAction {
        /** ModifyAvatarAccessControlAction avatarAccess */
        avatarAccess?: signalservice.AccessControl.AccessRequired | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyAvatarAccessControlAction. */
      class ModifyAvatarAccessControlAction
        implements IModifyAvatarAccessControlAction
      {
        /**
         * Constructs a new ModifyAvatarAccessControlAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction
        );

        /** ModifyAvatarAccessControlAction avatarAccess. */
        public avatarAccess: signalservice.AccessControl.AccessRequired;

        /**
         * Encodes the specified ModifyAvatarAccessControlAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction.verify|verify} messages.
         * @param message ModifyAvatarAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyAvatarAccessControlAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction.verify|verify} messages.
         * @param message ModifyAvatarAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyAvatarAccessControlAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyAvatarAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction;

        /**
         * Decodes a ModifyAvatarAccessControlAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyAvatarAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction;

        /**
         * Creates a ModifyAvatarAccessControlAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyAvatarAccessControlAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction;

        /**
         * Creates a plain object from a ModifyAvatarAccessControlAction message. Also converts values to other types if specified.
         * @param message ModifyAvatarAccessControlAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyAvatarAccessControlAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyMembersAccessControlAction. */
      interface IModifyMembersAccessControlAction {
        /** ModifyMembersAccessControlAction membersAccess */
        membersAccess?: signalservice.AccessControl.AccessRequired | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyMembersAccessControlAction. */
      class ModifyMembersAccessControlAction
        implements IModifyMembersAccessControlAction
      {
        /**
         * Constructs a new ModifyMembersAccessControlAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction
        );

        /** ModifyMembersAccessControlAction membersAccess. */
        public membersAccess: signalservice.AccessControl.AccessRequired;

        /**
         * Encodes the specified ModifyMembersAccessControlAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMembersAccessControlAction.verify|verify} messages.
         * @param message ModifyMembersAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyMembersAccessControlAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyMembersAccessControlAction.verify|verify} messages.
         * @param message ModifyMembersAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyMembersAccessControlAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyMembersAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMembersAccessControlAction;

        /**
         * Decodes a ModifyMembersAccessControlAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyMembersAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMembersAccessControlAction;

        /**
         * Creates a ModifyMembersAccessControlAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyMembersAccessControlAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyMembersAccessControlAction;

        /**
         * Creates a plain object from a ModifyMembersAccessControlAction message. Also converts values to other types if specified.
         * @param message ModifyMembersAccessControlAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyMembersAccessControlAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyMembersAccessControlAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyAddFromInviteLinkAccessControlAction. */
      interface IModifyAddFromInviteLinkAccessControlAction {
        /** ModifyAddFromInviteLinkAccessControlAction addFromInviteLinkAccess */
        addFromInviteLinkAccess?: signalservice.AccessControl.AccessRequired | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyAddFromInviteLinkAccessControlAction. */
      class ModifyAddFromInviteLinkAccessControlAction
        implements IModifyAddFromInviteLinkAccessControlAction
      {
        /**
         * Constructs a new ModifyAddFromInviteLinkAccessControlAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction
        );

        /** ModifyAddFromInviteLinkAccessControlAction addFromInviteLinkAccess. */
        public addFromInviteLinkAccess: signalservice.AccessControl.AccessRequired;

        /**
         * Encodes the specified ModifyAddFromInviteLinkAccessControlAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction.verify|verify} messages.
         * @param message ModifyAddFromInviteLinkAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyAddFromInviteLinkAccessControlAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction.verify|verify} messages.
         * @param message ModifyAddFromInviteLinkAccessControlAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyAddFromInviteLinkAccessControlAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyAddFromInviteLinkAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction;

        /**
         * Decodes a ModifyAddFromInviteLinkAccessControlAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyAddFromInviteLinkAccessControlAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction;

        /**
         * Creates a ModifyAddFromInviteLinkAccessControlAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyAddFromInviteLinkAccessControlAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction;

        /**
         * Creates a plain object from a ModifyAddFromInviteLinkAccessControlAction message. Also converts values to other types if specified.
         * @param message ModifyAddFromInviteLinkAccessControlAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyAddFromInviteLinkAccessControlAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyInviteLinkPasswordAction. */
      interface IModifyInviteLinkPasswordAction {
        /** ModifyInviteLinkPasswordAction inviteLinkPassword */
        inviteLinkPassword?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyInviteLinkPasswordAction. */
      class ModifyInviteLinkPasswordAction
        implements IModifyInviteLinkPasswordAction
      {
        /**
         * Constructs a new ModifyInviteLinkPasswordAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction
        );

        /** ModifyInviteLinkPasswordAction inviteLinkPassword. */
        public inviteLinkPassword: Uint8Array;

        /**
         * Encodes the specified ModifyInviteLinkPasswordAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction.verify|verify} messages.
         * @param message ModifyInviteLinkPasswordAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyInviteLinkPasswordAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction.verify|verify} messages.
         * @param message ModifyInviteLinkPasswordAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyInviteLinkPasswordAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyInviteLinkPasswordAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction;

        /**
         * Decodes a ModifyInviteLinkPasswordAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyInviteLinkPasswordAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction;

        /**
         * Creates a ModifyInviteLinkPasswordAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyInviteLinkPasswordAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction;

        /**
         * Creates a plain object from a ModifyInviteLinkPasswordAction message. Also converts values to other types if specified.
         * @param message ModifyInviteLinkPasswordAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyInviteLinkPasswordAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyDescriptionAction. */
      interface IModifyDescriptionAction {
        /** ModifyDescriptionAction descriptionBytes */
        descriptionBytes?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyDescriptionAction. */
      class ModifyDescriptionAction implements IModifyDescriptionAction {
        /**
         * Constructs a new ModifyDescriptionAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyDescriptionAction
        );

        /** ModifyDescriptionAction descriptionBytes. */
        public descriptionBytes: Uint8Array;

        /**
         * Encodes the specified ModifyDescriptionAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyDescriptionAction.verify|verify} messages.
         * @param message ModifyDescriptionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyDescriptionAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyDescriptionAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyDescriptionAction.verify|verify} messages.
         * @param message ModifyDescriptionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyDescriptionAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyDescriptionAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyDescriptionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyDescriptionAction;

        /**
         * Decodes a ModifyDescriptionAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyDescriptionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyDescriptionAction;

        /**
         * Creates a ModifyDescriptionAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyDescriptionAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyDescriptionAction;

        /**
         * Creates a plain object from a ModifyDescriptionAction message. Also converts values to other types if specified.
         * @param message ModifyDescriptionAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyDescriptionAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyDescriptionAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a ModifyAnnouncementsOnlyAction. */
      interface IModifyAnnouncementsOnlyAction {
        /** ModifyAnnouncementsOnlyAction announcementsOnly */
        announcementsOnly?: boolean | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a ModifyAnnouncementsOnlyAction. */
      class ModifyAnnouncementsOnlyAction
        implements IModifyAnnouncementsOnlyAction
      {
        /**
         * Constructs a new ModifyAnnouncementsOnlyAction.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction
        );

        /** ModifyAnnouncementsOnlyAction announcementsOnly. */
        public announcementsOnly: boolean;

        /**
         * Encodes the specified ModifyAnnouncementsOnlyAction message. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction.verify|verify} messages.
         * @param message ModifyAnnouncementsOnlyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ModifyAnnouncementsOnlyAction message, length delimited. Does not implicitly {@link signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction.verify|verify} messages.
         * @param message ModifyAnnouncementsOnlyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyAnnouncementsOnlyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyAnnouncementsOnlyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction;

        /**
         * Decodes a ModifyAnnouncementsOnlyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyAnnouncementsOnlyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction;

        /**
         * Creates a ModifyAnnouncementsOnlyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyAnnouncementsOnlyAction
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction;

        /**
         * Creates a plain object from a ModifyAnnouncementsOnlyAction message. Also converts values to other types if specified.
         * @param message ModifyAnnouncementsOnlyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyAnnouncementsOnlyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }
  }

  /** Properties of a GroupChanges. */
  interface IGroupChanges {
    /** GroupChanges groupChanges */
    groupChanges?: signalservice.GroupChanges.IGroupChangeState[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupChanges. */
  class GroupChanges implements IGroupChanges {
    /**
     * Constructs a new GroupChanges.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupChanges);

    /** GroupChanges groupChanges. */
    public groupChanges: signalservice.GroupChanges.IGroupChangeState[];

    /**
     * Encodes the specified GroupChanges message. Does not implicitly {@link signalservice.GroupChanges.verify|verify} messages.
     * @param message GroupChanges message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupChanges,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupChanges message, length delimited. Does not implicitly {@link signalservice.GroupChanges.verify|verify} messages.
     * @param message GroupChanges message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupChanges,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupChanges message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupChanges;

    /**
     * Decodes a GroupChanges message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupChanges;

    /**
     * Creates a GroupChanges message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupChanges
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupChanges;

    /**
     * Creates a plain object from a GroupChanges message. Also converts values to other types if specified.
     * @param message GroupChanges
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupChanges,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupChanges to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupChanges {
    /** Properties of a GroupChangeState. */
    interface IGroupChangeState {
      /** GroupChangeState groupChange */
      groupChange?: signalservice.IGroupChange | null;

      /** GroupChangeState groupState */
      groupState?: signalservice.IGroup | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a GroupChangeState. */
    class GroupChangeState implements IGroupChangeState {
      /**
       * Constructs a new GroupChangeState.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.GroupChanges.IGroupChangeState);

      /** GroupChangeState groupChange. */
      public groupChange?: signalservice.IGroupChange | null;

      /** GroupChangeState groupState. */
      public groupState?: signalservice.IGroup | null;

      /**
       * Encodes the specified GroupChangeState message. Does not implicitly {@link signalservice.GroupChanges.GroupChangeState.verify|verify} messages.
       * @param message GroupChangeState message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.GroupChanges.IGroupChangeState,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GroupChangeState message, length delimited. Does not implicitly {@link signalservice.GroupChanges.GroupChangeState.verify|verify} messages.
       * @param message GroupChangeState message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.GroupChanges.IGroupChangeState,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GroupChangeState message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GroupChangeState
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupChanges.GroupChangeState;

      /**
       * Decodes a GroupChangeState message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GroupChangeState
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupChanges.GroupChangeState;

      /**
       * Creates a GroupChangeState message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GroupChangeState
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.GroupChanges.GroupChangeState;

      /**
       * Creates a plain object from a GroupChangeState message. Also converts values to other types if specified.
       * @param message GroupChangeState
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.GroupChanges.GroupChangeState,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GroupChangeState to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a GroupAttributeBlob. */
  interface IGroupAttributeBlob {
    /** GroupAttributeBlob title */
    title?: string | null;

    /** GroupAttributeBlob avatar */
    avatar?: Uint8Array | null;

    /** GroupAttributeBlob disappearingMessagesDuration */
    disappearingMessagesDuration?: number | null;

    /** GroupAttributeBlob descriptionText */
    descriptionText?: string | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupAttributeBlob. */
  class GroupAttributeBlob implements IGroupAttributeBlob {
    /**
     * Constructs a new GroupAttributeBlob.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupAttributeBlob);

    /** GroupAttributeBlob title. */
    public title?: string | null;

    /** GroupAttributeBlob avatar. */
    public avatar?: Uint8Array | null;

    /** GroupAttributeBlob disappearingMessagesDuration. */
    public disappearingMessagesDuration?: number | null;

    /** GroupAttributeBlob descriptionText. */
    public descriptionText?: string | null;

    /** GroupAttributeBlob content. */
    public content?:
      | 'title'
      | 'avatar'
      | 'disappearingMessagesDuration'
      | 'descriptionText';

    /**
     * Encodes the specified GroupAttributeBlob message. Does not implicitly {@link signalservice.GroupAttributeBlob.verify|verify} messages.
     * @param message GroupAttributeBlob message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupAttributeBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupAttributeBlob message, length delimited. Does not implicitly {@link signalservice.GroupAttributeBlob.verify|verify} messages.
     * @param message GroupAttributeBlob message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupAttributeBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupAttributeBlob message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupAttributeBlob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupAttributeBlob;

    /**
     * Decodes a GroupAttributeBlob message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupAttributeBlob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupAttributeBlob;

    /**
     * Creates a GroupAttributeBlob message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupAttributeBlob
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupAttributeBlob;

    /**
     * Creates a plain object from a GroupAttributeBlob message. Also converts values to other types if specified.
     * @param message GroupAttributeBlob
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupAttributeBlob,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupAttributeBlob to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a GroupExternalCredential. */
  interface IGroupExternalCredential {
    /** GroupExternalCredential token */
    token?: string | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupExternalCredential. */
  class GroupExternalCredential implements IGroupExternalCredential {
    /**
     * Constructs a new GroupExternalCredential.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupExternalCredential);

    /** GroupExternalCredential token. */
    public token: string;

    /**
     * Encodes the specified GroupExternalCredential message. Does not implicitly {@link signalservice.GroupExternalCredential.verify|verify} messages.
     * @param message GroupExternalCredential message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupExternalCredential,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupExternalCredential message, length delimited. Does not implicitly {@link signalservice.GroupExternalCredential.verify|verify} messages.
     * @param message GroupExternalCredential message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupExternalCredential,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupExternalCredential message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupExternalCredential
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupExternalCredential;

    /**
     * Decodes a GroupExternalCredential message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupExternalCredential
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupExternalCredential;

    /**
     * Creates a GroupExternalCredential message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupExternalCredential
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupExternalCredential;

    /**
     * Creates a plain object from a GroupExternalCredential message. Also converts values to other types if specified.
     * @param message GroupExternalCredential
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupExternalCredential,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupExternalCredential to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a GroupInviteLink. */
  interface IGroupInviteLink {
    /** GroupInviteLink v1Contents */
    v1Contents?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1 | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupInviteLink. */
  class GroupInviteLink implements IGroupInviteLink {
    /**
     * Constructs a new GroupInviteLink.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupInviteLink);

    /** GroupInviteLink v1Contents. */
    public v1Contents?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1 | null;

    /** GroupInviteLink contents. */
    public contents?: 'v1Contents';

    /**
     * Encodes the specified GroupInviteLink message. Does not implicitly {@link signalservice.GroupInviteLink.verify|verify} messages.
     * @param message GroupInviteLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupInviteLink,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupInviteLink message, length delimited. Does not implicitly {@link signalservice.GroupInviteLink.verify|verify} messages.
     * @param message GroupInviteLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupInviteLink,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupInviteLink message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupInviteLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupInviteLink;

    /**
     * Decodes a GroupInviteLink message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupInviteLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupInviteLink;

    /**
     * Creates a GroupInviteLink message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupInviteLink
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupInviteLink;

    /**
     * Creates a plain object from a GroupInviteLink message. Also converts values to other types if specified.
     * @param message GroupInviteLink
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupInviteLink,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupInviteLink to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupInviteLink {
    /** Properties of a GroupInviteLinkContentsV1. */
    interface IGroupInviteLinkContentsV1 {
      /** GroupInviteLinkContentsV1 groupMasterKey */
      groupMasterKey?: Uint8Array | null;

      /** GroupInviteLinkContentsV1 inviteLinkPassword */
      inviteLinkPassword?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a GroupInviteLinkContentsV1. */
    class GroupInviteLinkContentsV1 implements IGroupInviteLinkContentsV1 {
      /**
       * Constructs a new GroupInviteLinkContentsV1.
       * @param [properties] Properties to set
       */
      constructor(
        properties?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1
      );

      /** GroupInviteLinkContentsV1 groupMasterKey. */
      public groupMasterKey: Uint8Array;

      /** GroupInviteLinkContentsV1 inviteLinkPassword. */
      public inviteLinkPassword: Uint8Array;

      /**
       * Encodes the specified GroupInviteLinkContentsV1 message. Does not implicitly {@link signalservice.GroupInviteLink.GroupInviteLinkContentsV1.verify|verify} messages.
       * @param message GroupInviteLinkContentsV1 message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GroupInviteLinkContentsV1 message, length delimited. Does not implicitly {@link signalservice.GroupInviteLink.GroupInviteLinkContentsV1.verify|verify} messages.
       * @param message GroupInviteLinkContentsV1 message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GroupInviteLinkContentsV1 message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GroupInviteLinkContentsV1
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupInviteLink.GroupInviteLinkContentsV1;

      /**
       * Decodes a GroupInviteLinkContentsV1 message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GroupInviteLinkContentsV1
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupInviteLink.GroupInviteLinkContentsV1;

      /**
       * Creates a GroupInviteLinkContentsV1 message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GroupInviteLinkContentsV1
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.GroupInviteLink.GroupInviteLinkContentsV1;

      /**
       * Creates a plain object from a GroupInviteLinkContentsV1 message. Also converts values to other types if specified.
       * @param message GroupInviteLinkContentsV1
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.GroupInviteLink.GroupInviteLinkContentsV1,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GroupInviteLinkContentsV1 to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a GroupJoinInfo. */
  interface IGroupJoinInfo {
    /** GroupJoinInfo publicKey */
    publicKey?: Uint8Array | null;

    /** GroupJoinInfo title */
    title?: Uint8Array | null;

    /** GroupJoinInfo avatar */
    avatar?: string | null;

    /** GroupJoinInfo memberCount */
    memberCount?: number | null;

    /** GroupJoinInfo addFromInviteLink */
    addFromInviteLink?: signalservice.AccessControl.AccessRequired | null;

    /** GroupJoinInfo version */
    version?: number | null;

    /** GroupJoinInfo pendingAdminApproval */
    pendingAdminApproval?: boolean | null;

    /** GroupJoinInfo descriptionBytes */
    descriptionBytes?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupJoinInfo. */
  class GroupJoinInfo implements IGroupJoinInfo {
    /**
     * Constructs a new GroupJoinInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupJoinInfo);

    /** GroupJoinInfo publicKey. */
    public publicKey: Uint8Array;

    /** GroupJoinInfo title. */
    public title: Uint8Array;

    /** GroupJoinInfo avatar. */
    public avatar: string;

    /** GroupJoinInfo memberCount. */
    public memberCount: number;

    /** GroupJoinInfo addFromInviteLink. */
    public addFromInviteLink: signalservice.AccessControl.AccessRequired;

    /** GroupJoinInfo version. */
    public version: number;

    /** GroupJoinInfo pendingAdminApproval. */
    public pendingAdminApproval: boolean;

    /** GroupJoinInfo descriptionBytes. */
    public descriptionBytes: Uint8Array;

    /**
     * Encodes the specified GroupJoinInfo message. Does not implicitly {@link signalservice.GroupJoinInfo.verify|verify} messages.
     * @param message GroupJoinInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupJoinInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupJoinInfo message, length delimited. Does not implicitly {@link signalservice.GroupJoinInfo.verify|verify} messages.
     * @param message GroupJoinInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupJoinInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupJoinInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupJoinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupJoinInfo;

    /**
     * Decodes a GroupJoinInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupJoinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupJoinInfo;

    /**
     * Creates a GroupJoinInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupJoinInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupJoinInfo;

    /**
     * Creates a plain object from a GroupJoinInfo message. Also converts values to other types if specified.
     * @param message GroupJoinInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupJoinInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupJoinInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of an Envelope. */
  interface IEnvelope {
    /** Envelope type */
    type?: signalservice.Envelope.Type | null;

    /** Envelope sourceUuid */
    sourceUuid?: string | null;

    /** Envelope sourceDevice */
    sourceDevice?: number | null;

    /** Envelope destinationUuid */
    destinationUuid?: string | null;

    /** Envelope timestamp */
    timestamp?: Long | null;

    /** Envelope content */
    content?: Uint8Array | null;

    /** Envelope serverGuid */
    serverGuid?: string | null;

    /** Envelope serverTimestamp */
    serverTimestamp?: Long | null;

    /** Envelope ephemeral */
    ephemeral?: boolean | null;

    /** Envelope urgent */
    urgent?: boolean | null;

    /** Envelope updatedPni */
    updatedPni?: string | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an Envelope. */
  class Envelope implements IEnvelope {
    /**
     * Constructs a new Envelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IEnvelope);

    /** Envelope type. */
    public type: signalservice.Envelope.Type;

    /** Envelope sourceUuid. */
    public sourceUuid: string;

    /** Envelope sourceDevice. */
    public sourceDevice: number;

    /** Envelope destinationUuid. */
    public destinationUuid: string;

    /** Envelope timestamp. */
    public timestamp: Long;

    /** Envelope content. */
    public content: Uint8Array;

    /** Envelope serverGuid. */
    public serverGuid: string;

    /** Envelope serverTimestamp. */
    public serverTimestamp: Long;

    /** Envelope ephemeral. */
    public ephemeral: boolean;

    /** Envelope urgent. */
    public urgent: boolean;

    /** Envelope updatedPni. */
    public updatedPni: string;

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link signalservice.Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link signalservice.Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Envelope;

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Envelope;

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Envelope
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.Envelope;

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @param message Envelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.Envelope,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Envelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Envelope {
    /** Type enum. */
    enum Type {
      UNKNOWN = 0,
      CIPHERTEXT = 1,
      KEY_EXCHANGE = 2,
      PREKEY_BUNDLE = 3,
      RECEIPT = 5,
      UNIDENTIFIED_SENDER = 6,
      PLAINTEXT_CONTENT = 8,
    }
  }

  /** Properties of a Content. */
  interface IContent {
    /** Content dataMessage */
    dataMessage?: signalservice.IDataMessage | null;

    /** Content syncMessage */
    syncMessage?: signalservice.ISyncMessage | null;

    /** Content callingMessage */
    callingMessage?: signalservice.ICallingMessage | null;

    /** Content nullMessage */
    nullMessage?: signalservice.INullMessage | null;

    /** Content receiptMessage */
    receiptMessage?: signalservice.IReceiptMessage | null;

    /** Content typingMessage */
    typingMessage?: signalservice.ITypingMessage | null;

    /** Content senderKeyDistributionMessage */
    senderKeyDistributionMessage?: Uint8Array | null;

    /** Content decryptionErrorMessage */
    decryptionErrorMessage?: Uint8Array | null;

    /** Content storyMessage */
    storyMessage?: signalservice.IStoryMessage | null;

    /** Content pniSignatureMessage */
    pniSignatureMessage?: signalservice.IPniSignatureMessage | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a Content. */
  class Content implements IContent {
    /**
     * Constructs a new Content.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IContent);

    /** Content dataMessage. */
    public dataMessage?: signalservice.IDataMessage | null;

    /** Content syncMessage. */
    public syncMessage?: signalservice.ISyncMessage | null;

    /** Content callingMessage. */
    public callingMessage?: signalservice.ICallingMessage | null;

    /** Content nullMessage. */
    public nullMessage?: signalservice.INullMessage | null;

    /** Content receiptMessage. */
    public receiptMessage?: signalservice.IReceiptMessage | null;

    /** Content typingMessage. */
    public typingMessage?: signalservice.ITypingMessage | null;

    /** Content senderKeyDistributionMessage. */
    public senderKeyDistributionMessage: Uint8Array;

    /** Content decryptionErrorMessage. */
    public decryptionErrorMessage: Uint8Array;

    /** Content storyMessage. */
    public storyMessage?: signalservice.IStoryMessage | null;

    /** Content pniSignatureMessage. */
    public pniSignatureMessage?: signalservice.IPniSignatureMessage | null;

    /**
     * Encodes the specified Content message. Does not implicitly {@link signalservice.Content.verify|verify} messages.
     * @param message Content message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IContent,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Content message, length delimited. Does not implicitly {@link signalservice.Content.verify|verify} messages.
     * @param message Content message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IContent,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Content message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Content;

    /**
     * Decodes a Content message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Content;

    /**
     * Creates a Content message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Content
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.Content;

    /**
     * Creates a plain object from a Content message. Also converts values to other types if specified.
     * @param message Content
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.Content,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Content to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a CallingMessage. */
  interface ICallingMessage {
    /** CallingMessage offer */
    offer?: signalservice.CallingMessage.IOffer | null;

    /** CallingMessage answer */
    answer?: signalservice.CallingMessage.IAnswer | null;

    /** CallingMessage iceCandidates */
    iceCandidates?: signalservice.CallingMessage.IIceCandidate[] | null;

    /** CallingMessage legacyHangup */
    legacyHangup?: signalservice.CallingMessage.IHangup | null;

    /** CallingMessage busy */
    busy?: signalservice.CallingMessage.IBusy | null;

    /** CallingMessage hangup */
    hangup?: signalservice.CallingMessage.IHangup | null;

    /** CallingMessage supportsMultiRing */
    supportsMultiRing?: boolean | null;

    /** CallingMessage destinationDeviceId */
    destinationDeviceId?: number | null;

    /** CallingMessage opaque */
    opaque?: signalservice.CallingMessage.IOpaque | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a CallingMessage. */
  class CallingMessage implements ICallingMessage {
    /**
     * Constructs a new CallingMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ICallingMessage);

    /** CallingMessage offer. */
    public offer?: signalservice.CallingMessage.IOffer | null;

    /** CallingMessage answer. */
    public answer?: signalservice.CallingMessage.IAnswer | null;

    /** CallingMessage iceCandidates. */
    public iceCandidates: signalservice.CallingMessage.IIceCandidate[];

    /** CallingMessage legacyHangup. */
    public legacyHangup?: signalservice.CallingMessage.IHangup | null;

    /** CallingMessage busy. */
    public busy?: signalservice.CallingMessage.IBusy | null;

    /** CallingMessage hangup. */
    public hangup?: signalservice.CallingMessage.IHangup | null;

    /** CallingMessage supportsMultiRing. */
    public supportsMultiRing: boolean;

    /** CallingMessage destinationDeviceId. */
    public destinationDeviceId: number;

    /** CallingMessage opaque. */
    public opaque?: signalservice.CallingMessage.IOpaque | null;

    /**
     * Encodes the specified CallingMessage message. Does not implicitly {@link signalservice.CallingMessage.verify|verify} messages.
     * @param message CallingMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ICallingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CallingMessage message, length delimited. Does not implicitly {@link signalservice.CallingMessage.verify|verify} messages.
     * @param message CallingMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ICallingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CallingMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CallingMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CallingMessage;

    /**
     * Decodes a CallingMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CallingMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CallingMessage;

    /**
     * Creates a CallingMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CallingMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.CallingMessage;

    /**
     * Creates a plain object from a CallingMessage message. Also converts values to other types if specified.
     * @param message CallingMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.CallingMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CallingMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace CallingMessage {
    /** Properties of an Offer. */
    interface IOffer {
      /** Offer callId */
      callId?: Long | null;

      /** Offer sdp */
      sdp?: string | null;

      /** Offer type */
      type?: signalservice.CallingMessage.Offer.Type | null;

      /** Offer opaque */
      opaque?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Offer. */
    class Offer implements IOffer {
      /**
       * Constructs a new Offer.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IOffer);

      /** Offer callId. */
      public callId: Long;

      /** Offer sdp. */
      public sdp: string;

      /** Offer type. */
      public type: signalservice.CallingMessage.Offer.Type;

      /** Offer opaque. */
      public opaque: Uint8Array;

      /**
       * Encodes the specified Offer message. Does not implicitly {@link signalservice.CallingMessage.Offer.verify|verify} messages.
       * @param message Offer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IOffer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Offer message, length delimited. Does not implicitly {@link signalservice.CallingMessage.Offer.verify|verify} messages.
       * @param message Offer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IOffer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Offer message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Offer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Offer;

      /**
       * Decodes an Offer message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Offer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Offer;

      /**
       * Creates an Offer message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Offer
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.Offer;

      /**
       * Creates a plain object from an Offer message. Also converts values to other types if specified.
       * @param message Offer
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.Offer,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Offer to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Offer {
      /** Type enum. */
      enum Type {
        OFFER_AUDIO_CALL = 0,
        OFFER_VIDEO_CALL = 1,
      }
    }

    /** Properties of an Answer. */
    interface IAnswer {
      /** Answer callId */
      callId?: Long | null;

      /** Answer sdp */
      sdp?: string | null;

      /** Answer opaque */
      opaque?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Answer. */
    class Answer implements IAnswer {
      /**
       * Constructs a new Answer.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IAnswer);

      /** Answer callId. */
      public callId: Long;

      /** Answer sdp. */
      public sdp: string;

      /** Answer opaque. */
      public opaque: Uint8Array;

      /**
       * Encodes the specified Answer message. Does not implicitly {@link signalservice.CallingMessage.Answer.verify|verify} messages.
       * @param message Answer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Answer message, length delimited. Does not implicitly {@link signalservice.CallingMessage.Answer.verify|verify} messages.
       * @param message Answer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Answer message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Answer;

      /**
       * Decodes an Answer message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Answer;

      /**
       * Creates an Answer message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Answer
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.Answer;

      /**
       * Creates a plain object from an Answer message. Also converts values to other types if specified.
       * @param message Answer
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.Answer,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Answer to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of an IceCandidate. */
    interface IIceCandidate {
      /** IceCandidate callId */
      callId?: Long | null;

      /** IceCandidate mid */
      mid?: string | null;

      /** IceCandidate line */
      line?: number | null;

      /** IceCandidate sdp */
      sdp?: string | null;

      /** IceCandidate opaque */
      opaque?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an IceCandidate. */
    class IceCandidate implements IIceCandidate {
      /**
       * Constructs a new IceCandidate.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IIceCandidate);

      /** IceCandidate callId. */
      public callId: Long;

      /** IceCandidate mid. */
      public mid: string;

      /** IceCandidate line. */
      public line: number;

      /** IceCandidate sdp. */
      public sdp: string;

      /** IceCandidate opaque. */
      public opaque: Uint8Array;

      /**
       * Encodes the specified IceCandidate message. Does not implicitly {@link signalservice.CallingMessage.IceCandidate.verify|verify} messages.
       * @param message IceCandidate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IIceCandidate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified IceCandidate message, length delimited. Does not implicitly {@link signalservice.CallingMessage.IceCandidate.verify|verify} messages.
       * @param message IceCandidate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IIceCandidate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an IceCandidate message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns IceCandidate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.IceCandidate;

      /**
       * Decodes an IceCandidate message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns IceCandidate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.IceCandidate;

      /**
       * Creates an IceCandidate message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns IceCandidate
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.IceCandidate;

      /**
       * Creates a plain object from an IceCandidate message. Also converts values to other types if specified.
       * @param message IceCandidate
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.IceCandidate,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this IceCandidate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Busy. */
    interface IBusy {
      /** Busy callId */
      callId?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Busy. */
    class Busy implements IBusy {
      /**
       * Constructs a new Busy.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IBusy);

      /** Busy callId. */
      public callId: Long;

      /**
       * Encodes the specified Busy message. Does not implicitly {@link signalservice.CallingMessage.Busy.verify|verify} messages.
       * @param message Busy message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IBusy,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Busy message, length delimited. Does not implicitly {@link signalservice.CallingMessage.Busy.verify|verify} messages.
       * @param message Busy message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IBusy,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Busy message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Busy
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Busy;

      /**
       * Decodes a Busy message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Busy
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Busy;

      /**
       * Creates a Busy message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Busy
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.Busy;

      /**
       * Creates a plain object from a Busy message. Also converts values to other types if specified.
       * @param message Busy
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.Busy,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Busy to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Hangup. */
    interface IHangup {
      /** Hangup callId */
      callId?: Long | null;

      /** Hangup type */
      type?: signalservice.CallingMessage.Hangup.Type | null;

      /** Hangup deviceId */
      deviceId?: number | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Hangup. */
    class Hangup implements IHangup {
      /**
       * Constructs a new Hangup.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IHangup);

      /** Hangup callId. */
      public callId: Long;

      /** Hangup type. */
      public type: signalservice.CallingMessage.Hangup.Type;

      /** Hangup deviceId. */
      public deviceId: number;

      /**
       * Encodes the specified Hangup message. Does not implicitly {@link signalservice.CallingMessage.Hangup.verify|verify} messages.
       * @param message Hangup message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IHangup,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Hangup message, length delimited. Does not implicitly {@link signalservice.CallingMessage.Hangup.verify|verify} messages.
       * @param message Hangup message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IHangup,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Hangup message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Hangup
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Hangup;

      /**
       * Decodes a Hangup message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Hangup
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Hangup;

      /**
       * Creates a Hangup message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Hangup
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.Hangup;

      /**
       * Creates a plain object from a Hangup message. Also converts values to other types if specified.
       * @param message Hangup
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.Hangup,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Hangup to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Hangup {
      /** Type enum. */
      enum Type {
        HANGUP_NORMAL = 0,
        HANGUP_ACCEPTED = 1,
        HANGUP_DECLINED = 2,
        HANGUP_BUSY = 3,
        HANGUP_NEED_PERMISSION = 4,
      }
    }

    /** Properties of an Opaque. */
    interface IOpaque {
      /** Opaque data */
      data?: Uint8Array | null;

      /** Opaque urgency */
      urgency?: signalservice.CallingMessage.Opaque.Urgency | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Opaque. */
    class Opaque implements IOpaque {
      /**
       * Constructs a new Opaque.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.CallingMessage.IOpaque);

      /** Opaque data. */
      public data: Uint8Array;

      /** Opaque urgency. */
      public urgency: signalservice.CallingMessage.Opaque.Urgency;

      /**
       * Encodes the specified Opaque message. Does not implicitly {@link signalservice.CallingMessage.Opaque.verify|verify} messages.
       * @param message Opaque message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.CallingMessage.IOpaque,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Opaque message, length delimited. Does not implicitly {@link signalservice.CallingMessage.Opaque.verify|verify} messages.
       * @param message Opaque message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.CallingMessage.IOpaque,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Opaque message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Opaque
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Opaque;

      /**
       * Decodes an Opaque message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Opaque
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Opaque;

      /**
       * Creates an Opaque message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Opaque
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.CallingMessage.Opaque;

      /**
       * Creates a plain object from an Opaque message. Also converts values to other types if specified.
       * @param message Opaque
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.CallingMessage.Opaque,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Opaque to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Opaque {
      /** Urgency enum. */
      enum Urgency {
        DROPPABLE = 0,
        HANDLE_IMMEDIATELY = 1,
      }
    }
  }

  /** Properties of a DataMessage. */
  interface IDataMessage {
    /** DataMessage body */
    body?: string | null;

    /** DataMessage attachments */
    attachments?: signalservice.IAttachmentPointer[] | null;

    /** DataMessage group */
    group?: signalservice.IGroupContext | null;

    /** DataMessage groupV2 */
    groupV2?: signalservice.IGroupContextV2 | null;

    /** DataMessage flags */
    flags?: number | null;

    /** DataMessage expireTimer */
    expireTimer?: number | null;

    /** DataMessage profileKey */
    profileKey?: Uint8Array | null;

    /** DataMessage timestamp */
    timestamp?: Long | null;

    /** DataMessage quote */
    quote?: signalservice.DataMessage.IQuote | null;

    /** DataMessage contact */
    contact?: signalservice.DataMessage.IContact[] | null;

    /** DataMessage preview */
    preview?: signalservice.DataMessage.IPreview[] | null;

    /** DataMessage sticker */
    sticker?: signalservice.DataMessage.ISticker | null;

    /** DataMessage requiredProtocolVersion */
    requiredProtocolVersion?: number | null;

    /** DataMessage isViewOnce */
    isViewOnce?: boolean | null;

    /** DataMessage reaction */
    reaction?: signalservice.DataMessage.IReaction | null;

    /** DataMessage delete */
    delete?: signalservice.DataMessage.IDelete | null;

    /** DataMessage bodyRanges */
    bodyRanges?: signalservice.DataMessage.IBodyRange[] | null;

    /** DataMessage groupCallUpdate */
    groupCallUpdate?: signalservice.DataMessage.IGroupCallUpdate | null;

    /** DataMessage storyContext */
    storyContext?: signalservice.DataMessage.IStoryContext | null;

    /** DataMessage giftBadge */
    giftBadge?: signalservice.DataMessage.IGiftBadge | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a DataMessage. */
  class DataMessage implements IDataMessage {
    /**
     * Constructs a new DataMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IDataMessage);

    /** DataMessage body. */
    public body: string;

    /** DataMessage attachments. */
    public attachments: signalservice.IAttachmentPointer[];

    /** DataMessage group. */
    public group?: signalservice.IGroupContext | null;

    /** DataMessage groupV2. */
    public groupV2?: signalservice.IGroupContextV2 | null;

    /** DataMessage flags. */
    public flags: number;

    /** DataMessage expireTimer. */
    public expireTimer: number;

    /** DataMessage profileKey. */
    public profileKey: Uint8Array;

    /** DataMessage timestamp. */
    public timestamp: Long;

    /** DataMessage quote. */
    public quote?: signalservice.DataMessage.IQuote | null;

    /** DataMessage contact. */
    public contact: signalservice.DataMessage.IContact[];

    /** DataMessage preview. */
    public preview: signalservice.DataMessage.IPreview[];

    /** DataMessage sticker. */
    public sticker?: signalservice.DataMessage.ISticker | null;

    /** DataMessage requiredProtocolVersion. */
    public requiredProtocolVersion: number;

    /** DataMessage isViewOnce. */
    public isViewOnce: boolean;

    /** DataMessage reaction. */
    public reaction?: signalservice.DataMessage.IReaction | null;

    /** DataMessage delete. */
    public delete?: signalservice.DataMessage.IDelete | null;

    /** DataMessage bodyRanges. */
    public bodyRanges: signalservice.DataMessage.IBodyRange[];

    /** DataMessage groupCallUpdate. */
    public groupCallUpdate?: signalservice.DataMessage.IGroupCallUpdate | null;

    /** DataMessage storyContext. */
    public storyContext?: signalservice.DataMessage.IStoryContext | null;

    /** DataMessage giftBadge. */
    public giftBadge?: signalservice.DataMessage.IGiftBadge | null;

    /**
     * Encodes the specified DataMessage message. Does not implicitly {@link signalservice.DataMessage.verify|verify} messages.
     * @param message DataMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IDataMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DataMessage message, length delimited. Does not implicitly {@link signalservice.DataMessage.verify|verify} messages.
     * @param message DataMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IDataMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DataMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.DataMessage;

    /**
     * Decodes a DataMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.DataMessage;

    /**
     * Creates a DataMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.DataMessage;

    /**
     * Creates a plain object from a DataMessage message. Also converts values to other types if specified.
     * @param message DataMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.DataMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DataMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace DataMessage {
    /** Flags enum. */
    enum Flags {
      END_SESSION = 1,
      EXPIRATION_TIMER_UPDATE = 2,
      PROFILE_KEY_UPDATE = 4,
    }

    /** Properties of a Quote. */
    interface IQuote {
      /** Quote id */
      id?: Long | null;

      /** Quote authorUuid */
      authorUuid?: string | null;

      /** Quote text */
      text?: string | null;

      /** Quote attachments */
      attachments?: signalservice.DataMessage.Quote.IQuotedAttachment[] | null;

      /** Quote bodyRanges */
      bodyRanges?: signalservice.DataMessage.IBodyRange[] | null;

      /** Quote type */
      type?: signalservice.DataMessage.Quote.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Quote. */
    class Quote implements IQuote {
      /**
       * Constructs a new Quote.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IQuote);

      /** Quote id. */
      public id: Long;

      /** Quote authorUuid. */
      public authorUuid: string;

      /** Quote text. */
      public text: string;

      /** Quote attachments. */
      public attachments: signalservice.DataMessage.Quote.IQuotedAttachment[];

      /** Quote bodyRanges. */
      public bodyRanges: signalservice.DataMessage.IBodyRange[];

      /** Quote type. */
      public type: signalservice.DataMessage.Quote.Type;

      /**
       * Encodes the specified Quote message. Does not implicitly {@link signalservice.DataMessage.Quote.verify|verify} messages.
       * @param message Quote message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IQuote,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Quote message, length delimited. Does not implicitly {@link signalservice.DataMessage.Quote.verify|verify} messages.
       * @param message Quote message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IQuote,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Quote message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Quote
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Quote;

      /**
       * Decodes a Quote message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Quote
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Quote;

      /**
       * Creates a Quote message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Quote
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Quote;

      /**
       * Creates a plain object from a Quote message. Also converts values to other types if specified.
       * @param message Quote
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Quote,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Quote to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Quote {
      /** Type enum. */
      enum Type {
        NORMAL = 0,
        GIFT_BADGE = 1,
      }

      /** Properties of a QuotedAttachment. */
      interface IQuotedAttachment {
        /** QuotedAttachment contentType */
        contentType?: string | null;

        /** QuotedAttachment fileName */
        fileName?: string | null;

        /** QuotedAttachment thumbnail */
        thumbnail?: signalservice.IAttachmentPointer | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a QuotedAttachment. */
      class QuotedAttachment implements IQuotedAttachment {
        /**
         * Constructs a new QuotedAttachment.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.DataMessage.Quote.IQuotedAttachment
        );

        /** QuotedAttachment contentType. */
        public contentType: string;

        /** QuotedAttachment fileName. */
        public fileName: string;

        /** QuotedAttachment thumbnail. */
        public thumbnail?: signalservice.IAttachmentPointer | null;

        /**
         * Encodes the specified QuotedAttachment message. Does not implicitly {@link signalservice.DataMessage.Quote.QuotedAttachment.verify|verify} messages.
         * @param message QuotedAttachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Quote.IQuotedAttachment,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified QuotedAttachment message, length delimited. Does not implicitly {@link signalservice.DataMessage.Quote.QuotedAttachment.verify|verify} messages.
         * @param message QuotedAttachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Quote.IQuotedAttachment,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QuotedAttachment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuotedAttachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Quote.QuotedAttachment;

        /**
         * Decodes a QuotedAttachment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuotedAttachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Quote.QuotedAttachment;

        /**
         * Creates a QuotedAttachment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuotedAttachment
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Quote.QuotedAttachment;

        /**
         * Creates a plain object from a QuotedAttachment message. Also converts values to other types if specified.
         * @param message QuotedAttachment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Quote.QuotedAttachment,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this QuotedAttachment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    /** Properties of a Contact. */
    interface IContact {
      /** Contact name */
      name?: signalservice.DataMessage.Contact.IName | null;

      /** Contact number */
      number?: signalservice.DataMessage.Contact.IPhone[] | null;

      /** Contact email */
      email?: signalservice.DataMessage.Contact.IEmail[] | null;

      /** Contact address */
      address?: signalservice.DataMessage.Contact.IPostalAddress[] | null;

      /** Contact avatar */
      avatar?: signalservice.DataMessage.Contact.IAvatar | null;

      /** Contact organization */
      organization?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Contact. */
    class Contact implements IContact {
      /**
       * Constructs a new Contact.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IContact);

      /** Contact name. */
      public name?: signalservice.DataMessage.Contact.IName | null;

      /** Contact number. */
      public number: signalservice.DataMessage.Contact.IPhone[];

      /** Contact email. */
      public email: signalservice.DataMessage.Contact.IEmail[];

      /** Contact address. */
      public address: signalservice.DataMessage.Contact.IPostalAddress[];

      /** Contact avatar. */
      public avatar?: signalservice.DataMessage.Contact.IAvatar | null;

      /** Contact organization. */
      public organization: string;

      /**
       * Encodes the specified Contact message. Does not implicitly {@link signalservice.DataMessage.Contact.verify|verify} messages.
       * @param message Contact message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IContact,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Contact message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.verify|verify} messages.
       * @param message Contact message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IContact,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Contact message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Contact
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Contact;

      /**
       * Decodes a Contact message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Contact
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Contact;

      /**
       * Creates a Contact message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Contact
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Contact;

      /**
       * Creates a plain object from a Contact message. Also converts values to other types if specified.
       * @param message Contact
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Contact,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Contact to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Contact {
      /** Properties of a Name. */
      interface IName {
        /** Name givenName */
        givenName?: string | null;

        /** Name familyName */
        familyName?: string | null;

        /** Name prefix */
        prefix?: string | null;

        /** Name suffix */
        suffix?: string | null;

        /** Name middleName */
        middleName?: string | null;

        /** Name displayName */
        displayName?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a Name. */
      class Name implements IName {
        /**
         * Constructs a new Name.
         * @param [properties] Properties to set
         */
        constructor(properties?: signalservice.DataMessage.Contact.IName);

        /** Name givenName. */
        public givenName: string;

        /** Name familyName. */
        public familyName: string;

        /** Name prefix. */
        public prefix: string;

        /** Name suffix. */
        public suffix: string;

        /** Name middleName. */
        public middleName: string;

        /** Name displayName. */
        public displayName: string;

        /**
         * Encodes the specified Name message. Does not implicitly {@link signalservice.DataMessage.Contact.Name.verify|verify} messages.
         * @param message Name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Contact.IName,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Name message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.Name.verify|verify} messages.
         * @param message Name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IName,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Name message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Name;

        /**
         * Decodes a Name message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Name;

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Name
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Contact.Name;

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @param message Name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Contact.Name,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a Phone. */
      interface IPhone {
        /** Phone value */
        value?: string | null;

        /** Phone type */
        type?: signalservice.DataMessage.Contact.Phone.Type | null;

        /** Phone label */
        label?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a Phone. */
      class Phone implements IPhone {
        /**
         * Constructs a new Phone.
         * @param [properties] Properties to set
         */
        constructor(properties?: signalservice.DataMessage.Contact.IPhone);

        /** Phone value. */
        public value: string;

        /** Phone type. */
        public type: signalservice.DataMessage.Contact.Phone.Type;

        /** Phone label. */
        public label: string;

        /**
         * Encodes the specified Phone message. Does not implicitly {@link signalservice.DataMessage.Contact.Phone.verify|verify} messages.
         * @param message Phone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Contact.IPhone,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Phone message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.Phone.verify|verify} messages.
         * @param message Phone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IPhone,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Phone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Phone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Phone;

        /**
         * Decodes a Phone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Phone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Phone;

        /**
         * Creates a Phone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Phone
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Contact.Phone;

        /**
         * Creates a plain object from a Phone message. Also converts values to other types if specified.
         * @param message Phone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Contact.Phone,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Phone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Phone {
        /** Type enum. */
        enum Type {
          HOME = 1,
          MOBILE = 2,
          WORK = 3,
          CUSTOM = 4,
        }
      }

      /** Properties of an Email. */
      interface IEmail {
        /** Email value */
        value?: string | null;

        /** Email type */
        type?: signalservice.DataMessage.Contact.Email.Type | null;

        /** Email label */
        label?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an Email. */
      class Email implements IEmail {
        /**
         * Constructs a new Email.
         * @param [properties] Properties to set
         */
        constructor(properties?: signalservice.DataMessage.Contact.IEmail);

        /** Email value. */
        public value: string;

        /** Email type. */
        public type: signalservice.DataMessage.Contact.Email.Type;

        /** Email label. */
        public label: string;

        /**
         * Encodes the specified Email message. Does not implicitly {@link signalservice.DataMessage.Contact.Email.verify|verify} messages.
         * @param message Email message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Contact.IEmail,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Email message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.Email.verify|verify} messages.
         * @param message Email message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IEmail,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Email message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Email
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Email;

        /**
         * Decodes an Email message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Email
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Email;

        /**
         * Creates an Email message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Email
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Contact.Email;

        /**
         * Creates a plain object from an Email message. Also converts values to other types if specified.
         * @param message Email
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Contact.Email,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Email to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Email {
        /** Type enum. */
        enum Type {
          HOME = 1,
          MOBILE = 2,
          WORK = 3,
          CUSTOM = 4,
        }
      }

      /** Properties of a PostalAddress. */
      interface IPostalAddress {
        /** PostalAddress type */
        type?: signalservice.DataMessage.Contact.PostalAddress.Type | null;

        /** PostalAddress label */
        label?: string | null;

        /** PostalAddress street */
        street?: string | null;

        /** PostalAddress pobox */
        pobox?: string | null;

        /** PostalAddress neighborhood */
        neighborhood?: string | null;

        /** PostalAddress city */
        city?: string | null;

        /** PostalAddress region */
        region?: string | null;

        /** PostalAddress postcode */
        postcode?: string | null;

        /** PostalAddress country */
        country?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a PostalAddress. */
      class PostalAddress implements IPostalAddress {
        /**
         * Constructs a new PostalAddress.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.DataMessage.Contact.IPostalAddress
        );

        /** PostalAddress type. */
        public type: signalservice.DataMessage.Contact.PostalAddress.Type;

        /** PostalAddress label. */
        public label: string;

        /** PostalAddress street. */
        public street: string;

        /** PostalAddress pobox. */
        public pobox: string;

        /** PostalAddress neighborhood. */
        public neighborhood: string;

        /** PostalAddress city. */
        public city: string;

        /** PostalAddress region. */
        public region: string;

        /** PostalAddress postcode. */
        public postcode: string;

        /** PostalAddress country. */
        public country: string;

        /**
         * Encodes the specified PostalAddress message. Does not implicitly {@link signalservice.DataMessage.Contact.PostalAddress.verify|verify} messages.
         * @param message PostalAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Contact.IPostalAddress,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified PostalAddress message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.PostalAddress.verify|verify} messages.
         * @param message PostalAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IPostalAddress,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PostalAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostalAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.PostalAddress;

        /**
         * Decodes a PostalAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PostalAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.PostalAddress;

        /**
         * Creates a PostalAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostalAddress
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Contact.PostalAddress;

        /**
         * Creates a plain object from a PostalAddress message. Also converts values to other types if specified.
         * @param message PostalAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Contact.PostalAddress,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PostalAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace PostalAddress {
        /** Type enum. */
        enum Type {
          HOME = 1,
          WORK = 2,
          CUSTOM = 3,
        }
      }

      /** Properties of an Avatar. */
      interface IAvatar {
        /** Avatar avatar */
        avatar?: signalservice.IAttachmentPointer | null;

        /** Avatar isProfile */
        isProfile?: boolean | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an Avatar. */
      class Avatar implements IAvatar {
        /**
         * Constructs a new Avatar.
         * @param [properties] Properties to set
         */
        constructor(properties?: signalservice.DataMessage.Contact.IAvatar);

        /** Avatar avatar. */
        public avatar?: signalservice.IAttachmentPointer | null;

        /** Avatar isProfile. */
        public isProfile: boolean;

        /**
         * Encodes the specified Avatar message. Does not implicitly {@link signalservice.DataMessage.Contact.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.DataMessage.Contact.IAvatar,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Avatar message, length delimited. Does not implicitly {@link signalservice.DataMessage.Contact.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IAvatar,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Avatar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Avatar;

        /**
         * Decodes an Avatar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Avatar;

        /**
         * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Avatar
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.DataMessage.Contact.Avatar;

        /**
         * Creates a plain object from an Avatar message. Also converts values to other types if specified.
         * @param message Avatar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.DataMessage.Contact.Avatar,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Avatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    /** Properties of a Preview. */
    interface IPreview {
      /** Preview url */
      url?: string | null;

      /** Preview title */
      title?: string | null;

      /** Preview image */
      image?: signalservice.IAttachmentPointer | null;

      /** Preview description */
      description?: string | null;

      /** Preview date */
      date?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Preview. */
    class Preview implements IPreview {
      /**
       * Constructs a new Preview.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IPreview);

      /** Preview url. */
      public url: string;

      /** Preview title. */
      public title: string;

      /** Preview image. */
      public image?: signalservice.IAttachmentPointer | null;

      /** Preview description. */
      public description: string;

      /** Preview date. */
      public date: Long;

      /**
       * Encodes the specified Preview message. Does not implicitly {@link signalservice.DataMessage.Preview.verify|verify} messages.
       * @param message Preview message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IPreview,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Preview message, length delimited. Does not implicitly {@link signalservice.DataMessage.Preview.verify|verify} messages.
       * @param message Preview message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IPreview,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Preview message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Preview
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Preview;

      /**
       * Decodes a Preview message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Preview
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Preview;

      /**
       * Creates a Preview message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Preview
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Preview;

      /**
       * Creates a plain object from a Preview message. Also converts values to other types if specified.
       * @param message Preview
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Preview,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Preview to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Sticker. */
    interface ISticker {
      /** Sticker packId */
      packId?: Uint8Array | null;

      /** Sticker packKey */
      packKey?: Uint8Array | null;

      /** Sticker stickerId */
      stickerId?: number | null;

      /** Sticker data */
      data?: signalservice.IAttachmentPointer | null;

      /** Sticker emoji */
      emoji?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Sticker. */
    class Sticker implements ISticker {
      /**
       * Constructs a new Sticker.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.ISticker);

      /** Sticker packId. */
      public packId: Uint8Array;

      /** Sticker packKey. */
      public packKey: Uint8Array;

      /** Sticker stickerId. */
      public stickerId: number;

      /** Sticker data. */
      public data?: signalservice.IAttachmentPointer | null;

      /** Sticker emoji. */
      public emoji: string;

      /**
       * Encodes the specified Sticker message. Does not implicitly {@link signalservice.DataMessage.Sticker.verify|verify} messages.
       * @param message Sticker message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Sticker message, length delimited. Does not implicitly {@link signalservice.DataMessage.Sticker.verify|verify} messages.
       * @param message Sticker message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Sticker message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Sticker
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Sticker;

      /**
       * Decodes a Sticker message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Sticker
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Sticker;

      /**
       * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Sticker
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Sticker;

      /**
       * Creates a plain object from a Sticker message. Also converts values to other types if specified.
       * @param message Sticker
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Sticker,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Sticker to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Reaction. */
    interface IReaction {
      /** Reaction emoji */
      emoji?: string | null;

      /** Reaction remove */
      remove?: boolean | null;

      /** Reaction targetAuthorUuid */
      targetAuthorUuid?: string | null;

      /** Reaction targetTimestamp */
      targetTimestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Reaction. */
    class Reaction implements IReaction {
      /**
       * Constructs a new Reaction.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IReaction);

      /** Reaction emoji. */
      public emoji: string;

      /** Reaction remove. */
      public remove: boolean;

      /** Reaction targetAuthorUuid. */
      public targetAuthorUuid: string;

      /** Reaction targetTimestamp. */
      public targetTimestamp: Long;

      /**
       * Encodes the specified Reaction message. Does not implicitly {@link signalservice.DataMessage.Reaction.verify|verify} messages.
       * @param message Reaction message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IReaction,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Reaction message, length delimited. Does not implicitly {@link signalservice.DataMessage.Reaction.verify|verify} messages.
       * @param message Reaction message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IReaction,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Reaction message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Reaction
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Reaction;

      /**
       * Decodes a Reaction message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Reaction
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Reaction;

      /**
       * Creates a Reaction message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Reaction
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Reaction;

      /**
       * Creates a plain object from a Reaction message. Also converts values to other types if specified.
       * @param message Reaction
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Reaction,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Reaction to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Delete. */
    interface IDelete {
      /** Delete targetSentTimestamp */
      targetSentTimestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Delete. */
    class Delete implements IDelete {
      /**
       * Constructs a new Delete.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IDelete);

      /** Delete targetSentTimestamp. */
      public targetSentTimestamp: Long;

      /**
       * Encodes the specified Delete message. Does not implicitly {@link signalservice.DataMessage.Delete.verify|verify} messages.
       * @param message Delete message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IDelete,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Delete message, length delimited. Does not implicitly {@link signalservice.DataMessage.Delete.verify|verify} messages.
       * @param message Delete message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IDelete,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Delete message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Delete
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Delete;

      /**
       * Decodes a Delete message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Delete
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Delete;

      /**
       * Creates a Delete message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Delete
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.Delete;

      /**
       * Creates a plain object from a Delete message. Also converts values to other types if specified.
       * @param message Delete
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.Delete,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Delete to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a BodyRange. */
    interface IBodyRange {
      /** BodyRange start */
      start?: number | null;

      /** BodyRange length */
      length?: number | null;

      /** BodyRange mentionUuid */
      mentionUuid?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a BodyRange. */
    class BodyRange implements IBodyRange {
      /**
       * Constructs a new BodyRange.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IBodyRange);

      /** BodyRange start. */
      public start: number;

      /** BodyRange length. */
      public length: number;

      /** BodyRange mentionUuid. */
      public mentionUuid: string;

      /**
       * Encodes the specified BodyRange message. Does not implicitly {@link signalservice.DataMessage.BodyRange.verify|verify} messages.
       * @param message BodyRange message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IBodyRange,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified BodyRange message, length delimited. Does not implicitly {@link signalservice.DataMessage.BodyRange.verify|verify} messages.
       * @param message BodyRange message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IBodyRange,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a BodyRange message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns BodyRange
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.BodyRange;

      /**
       * Decodes a BodyRange message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns BodyRange
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.BodyRange;

      /**
       * Creates a BodyRange message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns BodyRange
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.BodyRange;

      /**
       * Creates a plain object from a BodyRange message. Also converts values to other types if specified.
       * @param message BodyRange
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.BodyRange,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this BodyRange to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a GroupCallUpdate. */
    interface IGroupCallUpdate {
      /** GroupCallUpdate eraId */
      eraId?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a GroupCallUpdate. */
    class GroupCallUpdate implements IGroupCallUpdate {
      /**
       * Constructs a new GroupCallUpdate.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IGroupCallUpdate);

      /** GroupCallUpdate eraId. */
      public eraId: string;

      /**
       * Encodes the specified GroupCallUpdate message. Does not implicitly {@link signalservice.DataMessage.GroupCallUpdate.verify|verify} messages.
       * @param message GroupCallUpdate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IGroupCallUpdate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GroupCallUpdate message, length delimited. Does not implicitly {@link signalservice.DataMessage.GroupCallUpdate.verify|verify} messages.
       * @param message GroupCallUpdate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IGroupCallUpdate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GroupCallUpdate message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GroupCallUpdate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.GroupCallUpdate;

      /**
       * Decodes a GroupCallUpdate message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GroupCallUpdate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.GroupCallUpdate;

      /**
       * Creates a GroupCallUpdate message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GroupCallUpdate
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.GroupCallUpdate;

      /**
       * Creates a plain object from a GroupCallUpdate message. Also converts values to other types if specified.
       * @param message GroupCallUpdate
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.GroupCallUpdate,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GroupCallUpdate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a StoryContext. */
    interface IStoryContext {
      /** StoryContext authorUuid */
      authorUuid?: string | null;

      /** StoryContext sentTimestamp */
      sentTimestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a StoryContext. */
    class StoryContext implements IStoryContext {
      /**
       * Constructs a new StoryContext.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IStoryContext);

      /** StoryContext authorUuid. */
      public authorUuid: string;

      /** StoryContext sentTimestamp. */
      public sentTimestamp: Long;

      /**
       * Encodes the specified StoryContext message. Does not implicitly {@link signalservice.DataMessage.StoryContext.verify|verify} messages.
       * @param message StoryContext message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IStoryContext,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified StoryContext message, length delimited. Does not implicitly {@link signalservice.DataMessage.StoryContext.verify|verify} messages.
       * @param message StoryContext message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IStoryContext,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a StoryContext message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StoryContext
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.StoryContext;

      /**
       * Decodes a StoryContext message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StoryContext
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.StoryContext;

      /**
       * Creates a StoryContext message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StoryContext
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.StoryContext;

      /**
       * Creates a plain object from a StoryContext message. Also converts values to other types if specified.
       * @param message StoryContext
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.StoryContext,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this StoryContext to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** ProtocolVersion enum. */
    enum ProtocolVersion {
      INITIAL = 0,
      MESSAGE_TIMERS = 1,
      VIEW_ONCE = 2,
      VIEW_ONCE_VIDEO = 3,
      REACTIONS = 4,
      CDN_SELECTOR_ATTACHMENTS = 5,
      MENTIONS = 6,
      PAYMENTS = 7,
      CURRENT = 7,
    }

    /** Properties of a GiftBadge. */
    interface IGiftBadge {
      /** GiftBadge receiptCredentialPresentation */
      receiptCredentialPresentation?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a GiftBadge. */
    class GiftBadge implements IGiftBadge {
      /**
       * Constructs a new GiftBadge.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.DataMessage.IGiftBadge);

      /** GiftBadge receiptCredentialPresentation. */
      public receiptCredentialPresentation: Uint8Array;

      /**
       * Encodes the specified GiftBadge message. Does not implicitly {@link signalservice.DataMessage.GiftBadge.verify|verify} messages.
       * @param message GiftBadge message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.DataMessage.IGiftBadge,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GiftBadge message, length delimited. Does not implicitly {@link signalservice.DataMessage.GiftBadge.verify|verify} messages.
       * @param message GiftBadge message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.DataMessage.IGiftBadge,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GiftBadge message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GiftBadge
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.GiftBadge;

      /**
       * Decodes a GiftBadge message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GiftBadge
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.GiftBadge;

      /**
       * Creates a GiftBadge message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GiftBadge
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.DataMessage.GiftBadge;

      /**
       * Creates a plain object from a GiftBadge message. Also converts values to other types if specified.
       * @param message GiftBadge
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.DataMessage.GiftBadge,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GiftBadge to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a NullMessage. */
  interface INullMessage {
    /** NullMessage padding */
    padding?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a NullMessage. */
  class NullMessage implements INullMessage {
    /**
     * Constructs a new NullMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.INullMessage);

    /** NullMessage padding. */
    public padding: Uint8Array;

    /**
     * Encodes the specified NullMessage message. Does not implicitly {@link signalservice.NullMessage.verify|verify} messages.
     * @param message NullMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.INullMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified NullMessage message, length delimited. Does not implicitly {@link signalservice.NullMessage.verify|verify} messages.
     * @param message NullMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.INullMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a NullMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NullMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.NullMessage;

    /**
     * Decodes a NullMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NullMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.NullMessage;

    /**
     * Creates a NullMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NullMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.NullMessage;

    /**
     * Creates a plain object from a NullMessage message. Also converts values to other types if specified.
     * @param message NullMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.NullMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this NullMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ReceiptMessage. */
  interface IReceiptMessage {
    /** ReceiptMessage type */
    type?: signalservice.ReceiptMessage.Type | null;

    /** ReceiptMessage timestamp */
    timestamp?: Long[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ReceiptMessage. */
  class ReceiptMessage implements IReceiptMessage {
    /**
     * Constructs a new ReceiptMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IReceiptMessage);

    /** ReceiptMessage type. */
    public type: signalservice.ReceiptMessage.Type;

    /** ReceiptMessage timestamp. */
    public timestamp: Long[];

    /**
     * Encodes the specified ReceiptMessage message. Does not implicitly {@link signalservice.ReceiptMessage.verify|verify} messages.
     * @param message ReceiptMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IReceiptMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReceiptMessage message, length delimited. Does not implicitly {@link signalservice.ReceiptMessage.verify|verify} messages.
     * @param message ReceiptMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IReceiptMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReceiptMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiptMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ReceiptMessage;

    /**
     * Decodes a ReceiptMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReceiptMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ReceiptMessage;

    /**
     * Creates a ReceiptMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReceiptMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ReceiptMessage;

    /**
     * Creates a plain object from a ReceiptMessage message. Also converts values to other types if specified.
     * @param message ReceiptMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ReceiptMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReceiptMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ReceiptMessage {
    /** Type enum. */
    enum Type {
      DELIVERY = 0,
      READ = 1,
      VIEWED = 2,
    }
  }

  /** Properties of a TypingMessage. */
  interface ITypingMessage {
    /** TypingMessage timestamp */
    timestamp?: Long | null;

    /** TypingMessage action */
    action?: signalservice.TypingMessage.Action | null;

    /** TypingMessage groupId */
    groupId?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a TypingMessage. */
  class TypingMessage implements ITypingMessage {
    /**
     * Constructs a new TypingMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ITypingMessage);

    /** TypingMessage timestamp. */
    public timestamp: Long;

    /** TypingMessage action. */
    public action: signalservice.TypingMessage.Action;

    /** TypingMessage groupId. */
    public groupId: Uint8Array;

    /**
     * Encodes the specified TypingMessage message. Does not implicitly {@link signalservice.TypingMessage.verify|verify} messages.
     * @param message TypingMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ITypingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TypingMessage message, length delimited. Does not implicitly {@link signalservice.TypingMessage.verify|verify} messages.
     * @param message TypingMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ITypingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TypingMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TypingMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.TypingMessage;

    /**
     * Decodes a TypingMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TypingMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.TypingMessage;

    /**
     * Creates a TypingMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TypingMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.TypingMessage;

    /**
     * Creates a plain object from a TypingMessage message. Also converts values to other types if specified.
     * @param message TypingMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.TypingMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TypingMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace TypingMessage {
    /** Action enum. */
    enum Action {
      STARTED = 0,
      STOPPED = 1,
    }
  }

  /** Properties of a StoryMessage. */
  interface IStoryMessage {
    /** StoryMessage profileKey */
    profileKey?: Uint8Array | null;

    /** StoryMessage group */
    group?: signalservice.IGroupContextV2 | null;

    /** StoryMessage fileAttachment */
    fileAttachment?: signalservice.IAttachmentPointer | null;

    /** StoryMessage textAttachment */
    textAttachment?: signalservice.ITextAttachment | null;

    /** StoryMessage allowsReplies */
    allowsReplies?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StoryMessage. */
  class StoryMessage implements IStoryMessage {
    /**
     * Constructs a new StoryMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStoryMessage);

    /** StoryMessage profileKey. */
    public profileKey: Uint8Array;

    /** StoryMessage group. */
    public group?: signalservice.IGroupContextV2 | null;

    /** StoryMessage fileAttachment. */
    public fileAttachment?: signalservice.IAttachmentPointer | null;

    /** StoryMessage textAttachment. */
    public textAttachment?: signalservice.ITextAttachment | null;

    /** StoryMessage allowsReplies. */
    public allowsReplies: boolean;

    /** StoryMessage attachment. */
    public attachment?: 'fileAttachment' | 'textAttachment';

    /**
     * Encodes the specified StoryMessage message. Does not implicitly {@link signalservice.StoryMessage.verify|verify} messages.
     * @param message StoryMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStoryMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StoryMessage message, length delimited. Does not implicitly {@link signalservice.StoryMessage.verify|verify} messages.
     * @param message StoryMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStoryMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StoryMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StoryMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StoryMessage;

    /**
     * Decodes a StoryMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StoryMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StoryMessage;

    /**
     * Creates a StoryMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StoryMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StoryMessage;

    /**
     * Creates a plain object from a StoryMessage message. Also converts values to other types if specified.
     * @param message StoryMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StoryMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StoryMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a TextAttachment. */
  interface ITextAttachment {
    /** TextAttachment text */
    text?: string | null;

    /** TextAttachment textStyle */
    textStyle?: signalservice.TextAttachment.Style | null;

    /** TextAttachment textForegroundColor */
    textForegroundColor?: number | null;

    /** TextAttachment textBackgroundColor */
    textBackgroundColor?: number | null;

    /** TextAttachment preview */
    preview?: signalservice.DataMessage.IPreview | null;

    /** TextAttachment gradient */
    gradient?: signalservice.TextAttachment.IGradient | null;

    /** TextAttachment color */
    color?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a TextAttachment. */
  class TextAttachment implements ITextAttachment {
    /**
     * Constructs a new TextAttachment.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ITextAttachment);

    /** TextAttachment text. */
    public text: string;

    /** TextAttachment textStyle. */
    public textStyle: signalservice.TextAttachment.Style;

    /** TextAttachment textForegroundColor. */
    public textForegroundColor: number;

    /** TextAttachment textBackgroundColor. */
    public textBackgroundColor: number;

    /** TextAttachment preview. */
    public preview?: signalservice.DataMessage.IPreview | null;

    /** TextAttachment gradient. */
    public gradient?: signalservice.TextAttachment.IGradient | null;

    /** TextAttachment color. */
    public color?: number | null;

    /** TextAttachment background. */
    public background?: 'gradient' | 'color';

    /**
     * Encodes the specified TextAttachment message. Does not implicitly {@link signalservice.TextAttachment.verify|verify} messages.
     * @param message TextAttachment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ITextAttachment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TextAttachment message, length delimited. Does not implicitly {@link signalservice.TextAttachment.verify|verify} messages.
     * @param message TextAttachment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ITextAttachment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TextAttachment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextAttachment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.TextAttachment;

    /**
     * Decodes a TextAttachment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextAttachment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.TextAttachment;

    /**
     * Creates a TextAttachment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextAttachment
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.TextAttachment;

    /**
     * Creates a plain object from a TextAttachment message. Also converts values to other types if specified.
     * @param message TextAttachment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.TextAttachment,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TextAttachment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace TextAttachment {
    /** Style enum. */
    enum Style {
      DEFAULT = 0,
      REGULAR = 1,
      BOLD = 2,
      SERIF = 3,
      SCRIPT = 4,
      CONDENSED = 5,
    }

    /** Properties of a Gradient. */
    interface IGradient {
      /** Gradient startColor */
      startColor?: number | null;

      /** Gradient endColor */
      endColor?: number | null;

      /** Gradient angle */
      angle?: number | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Gradient. */
    class Gradient implements IGradient {
      /**
       * Constructs a new Gradient.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.TextAttachment.IGradient);

      /** Gradient startColor. */
      public startColor: number;

      /** Gradient endColor. */
      public endColor: number;

      /** Gradient angle. */
      public angle: number;

      /**
       * Encodes the specified Gradient message. Does not implicitly {@link signalservice.TextAttachment.Gradient.verify|verify} messages.
       * @param message Gradient message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.TextAttachment.IGradient,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Gradient message, length delimited. Does not implicitly {@link signalservice.TextAttachment.Gradient.verify|verify} messages.
       * @param message Gradient message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.TextAttachment.IGradient,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Gradient message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Gradient
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.TextAttachment.Gradient;

      /**
       * Decodes a Gradient message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Gradient
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.TextAttachment.Gradient;

      /**
       * Creates a Gradient message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Gradient
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.TextAttachment.Gradient;

      /**
       * Creates a plain object from a Gradient message. Also converts values to other types if specified.
       * @param message Gradient
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.TextAttachment.Gradient,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Gradient to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a Verified. */
  interface IVerified {
    /** Verified destination */
    destination?: string | null;

    /** Verified destinationUuid */
    destinationUuid?: string | null;

    /** Verified identityKey */
    identityKey?: Uint8Array | null;

    /** Verified state */
    state?: signalservice.Verified.State | null;

    /** Verified nullMessage */
    nullMessage?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a Verified. */
  class Verified implements IVerified {
    /**
     * Constructs a new Verified.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IVerified);

    /** Verified destination. */
    public destination: string;

    /** Verified destinationUuid. */
    public destinationUuid: string;

    /** Verified identityKey. */
    public identityKey: Uint8Array;

    /** Verified state. */
    public state: signalservice.Verified.State;

    /** Verified nullMessage. */
    public nullMessage: Uint8Array;

    /**
     * Encodes the specified Verified message. Does not implicitly {@link signalservice.Verified.verify|verify} messages.
     * @param message Verified message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IVerified,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Verified message, length delimited. Does not implicitly {@link signalservice.Verified.verify|verify} messages.
     * @param message Verified message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IVerified,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Verified message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Verified
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Verified;

    /**
     * Decodes a Verified message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Verified
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Verified;

    /**
     * Creates a Verified message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Verified
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.Verified;

    /**
     * Creates a plain object from a Verified message. Also converts values to other types if specified.
     * @param message Verified
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.Verified,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Verified to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Verified {
    /** State enum. */
    enum State {
      DEFAULT = 0,
      VERIFIED = 1,
      UNVERIFIED = 2,
    }
  }

  /** Properties of a SyncMessage. */
  interface ISyncMessage {
    /** SyncMessage sent */
    sent?: signalservice.SyncMessage.ISent | null;

    /** SyncMessage contacts */
    contacts?: signalservice.SyncMessage.IContacts | null;

    /** SyncMessage groups */
    groups?: signalservice.SyncMessage.IGroups | null;

    /** SyncMessage request */
    request?: signalservice.SyncMessage.IRequest | null;

    /** SyncMessage read */
    read?: signalservice.SyncMessage.IRead[] | null;

    /** SyncMessage blocked */
    blocked?: signalservice.SyncMessage.IBlocked | null;

    /** SyncMessage verified */
    verified?: signalservice.IVerified | null;

    /** SyncMessage configuration */
    configuration?: signalservice.SyncMessage.IConfiguration | null;

    /** SyncMessage padding */
    padding?: Uint8Array | null;

    /** SyncMessage stickerPackOperation */
    stickerPackOperation?:
      | signalservice.SyncMessage.IStickerPackOperation[]
      | null;

    /** SyncMessage viewOnceOpen */
    viewOnceOpen?: signalservice.SyncMessage.IViewOnceOpen | null;

    /** SyncMessage fetchLatest */
    fetchLatest?: signalservice.SyncMessage.IFetchLatest | null;

    /** SyncMessage keys */
    keys?: signalservice.SyncMessage.IKeys | null;

    /** SyncMessage messageRequestResponse */
    messageRequestResponse?: signalservice.SyncMessage.IMessageRequestResponse | null;

    /** SyncMessage viewed */
    viewed?: signalservice.SyncMessage.IViewed[] | null;

    /** SyncMessage pniIdentity */
    pniIdentity?: signalservice.SyncMessage.IPniIdentity | null;

    /** SyncMessage pniChangeNumber */
    pniChangeNumber?: signalservice.SyncMessage.IPniChangeNumber | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a SyncMessage. */
  class SyncMessage implements ISyncMessage {
    /**
     * Constructs a new SyncMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ISyncMessage);

    /** SyncMessage sent. */
    public sent?: signalservice.SyncMessage.ISent | null;

    /** SyncMessage contacts. */
    public contacts?: signalservice.SyncMessage.IContacts | null;

    /** SyncMessage groups. */
    public groups?: signalservice.SyncMessage.IGroups | null;

    /** SyncMessage request. */
    public request?: signalservice.SyncMessage.IRequest | null;

    /** SyncMessage read. */
    public read: signalservice.SyncMessage.IRead[];

    /** SyncMessage blocked. */
    public blocked?: signalservice.SyncMessage.IBlocked | null;

    /** SyncMessage verified. */
    public verified?: signalservice.IVerified | null;

    /** SyncMessage configuration. */
    public configuration?: signalservice.SyncMessage.IConfiguration | null;

    /** SyncMessage padding. */
    public padding: Uint8Array;

    /** SyncMessage stickerPackOperation. */
    public stickerPackOperation: signalservice.SyncMessage.IStickerPackOperation[];

    /** SyncMessage viewOnceOpen. */
    public viewOnceOpen?: signalservice.SyncMessage.IViewOnceOpen | null;

    /** SyncMessage fetchLatest. */
    public fetchLatest?: signalservice.SyncMessage.IFetchLatest | null;

    /** SyncMessage keys. */
    public keys?: signalservice.SyncMessage.IKeys | null;

    /** SyncMessage messageRequestResponse. */
    public messageRequestResponse?: signalservice.SyncMessage.IMessageRequestResponse | null;

    /** SyncMessage viewed. */
    public viewed: signalservice.SyncMessage.IViewed[];

    /** SyncMessage pniIdentity. */
    public pniIdentity?: signalservice.SyncMessage.IPniIdentity | null;

    /** SyncMessage pniChangeNumber. */
    public pniChangeNumber?: signalservice.SyncMessage.IPniChangeNumber | null;

    /**
     * Encodes the specified SyncMessage message. Does not implicitly {@link signalservice.SyncMessage.verify|verify} messages.
     * @param message SyncMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ISyncMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SyncMessage message, length delimited. Does not implicitly {@link signalservice.SyncMessage.verify|verify} messages.
     * @param message SyncMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ISyncMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SyncMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.SyncMessage;

    /**
     * Decodes a SyncMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SyncMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.SyncMessage;

    /**
     * Creates a SyncMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SyncMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.SyncMessage;

    /**
     * Creates a plain object from a SyncMessage message. Also converts values to other types if specified.
     * @param message SyncMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.SyncMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SyncMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace SyncMessage {
    /** Properties of a Sent. */
    interface ISent {
      /** Sent destination */
      destination?: string | null;

      /** Sent destinationUuid */
      destinationUuid?: string | null;

      /** Sent timestamp */
      timestamp?: Long | null;

      /** Sent message */
      message?: signalservice.IDataMessage | null;

      /** Sent expirationStartTimestamp */
      expirationStartTimestamp?: Long | null;

      /** Sent unidentifiedStatus */
      unidentifiedStatus?:
        | signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus[]
        | null;

      /** Sent isRecipientUpdate */
      isRecipientUpdate?: boolean | null;

      /** Sent storyMessage */
      storyMessage?: signalservice.IStoryMessage | null;

      /** Sent storyMessageRecipients */
      storyMessageRecipients?:
        | signalservice.SyncMessage.Sent.IStoryMessageRecipient[]
        | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Sent. */
    class Sent implements ISent {
      /**
       * Constructs a new Sent.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.ISent);

      /** Sent destination. */
      public destination: string;

      /** Sent destinationUuid. */
      public destinationUuid: string;

      /** Sent timestamp. */
      public timestamp: Long;

      /** Sent message. */
      public message?: signalservice.IDataMessage | null;

      /** Sent expirationStartTimestamp. */
      public expirationStartTimestamp: Long;

      /** Sent unidentifiedStatus. */
      public unidentifiedStatus: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus[];

      /** Sent isRecipientUpdate. */
      public isRecipientUpdate: boolean;

      /** Sent storyMessage. */
      public storyMessage?: signalservice.IStoryMessage | null;

      /** Sent storyMessageRecipients. */
      public storyMessageRecipients: signalservice.SyncMessage.Sent.IStoryMessageRecipient[];

      /**
       * Encodes the specified Sent message. Does not implicitly {@link signalservice.SyncMessage.Sent.verify|verify} messages.
       * @param message Sent message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.ISent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Sent message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Sent.verify|verify} messages.
       * @param message Sent message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.ISent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Sent message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Sent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Sent;

      /**
       * Decodes a Sent message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Sent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Sent;

      /**
       * Creates a Sent message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Sent
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Sent;

      /**
       * Creates a plain object from a Sent message. Also converts values to other types if specified.
       * @param message Sent
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Sent,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Sent to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Sent {
      /** Properties of an UnidentifiedDeliveryStatus. */
      interface IUnidentifiedDeliveryStatus {
        /** UnidentifiedDeliveryStatus destination */
        destination?: string | null;

        /** UnidentifiedDeliveryStatus destinationUuid */
        destinationUuid?: string | null;

        /** UnidentifiedDeliveryStatus unidentified */
        unidentified?: boolean | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an UnidentifiedDeliveryStatus. */
      class UnidentifiedDeliveryStatus implements IUnidentifiedDeliveryStatus {
        /**
         * Constructs a new UnidentifiedDeliveryStatus.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus
        );

        /** UnidentifiedDeliveryStatus destination. */
        public destination: string;

        /** UnidentifiedDeliveryStatus destinationUuid. */
        public destinationUuid: string;

        /** UnidentifiedDeliveryStatus unidentified. */
        public unidentified: boolean;

        /**
         * Encodes the specified UnidentifiedDeliveryStatus message. Does not implicitly {@link signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus.verify|verify} messages.
         * @param message UnidentifiedDeliveryStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified UnidentifiedDeliveryStatus message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus.verify|verify} messages.
         * @param message UnidentifiedDeliveryStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UnidentifiedDeliveryStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnidentifiedDeliveryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus;

        /**
         * Decodes an UnidentifiedDeliveryStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnidentifiedDeliveryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus;

        /**
         * Creates an UnidentifiedDeliveryStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnidentifiedDeliveryStatus
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus;

        /**
         * Creates a plain object from an UnidentifiedDeliveryStatus message. Also converts values to other types if specified.
         * @param message UnidentifiedDeliveryStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UnidentifiedDeliveryStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a StoryMessageRecipient. */
      interface IStoryMessageRecipient {
        /** StoryMessageRecipient destinationUuid */
        destinationUuid?: string | null;

        /** StoryMessageRecipient distributionListIds */
        distributionListIds?: string[] | null;

        /** StoryMessageRecipient isAllowedToReply */
        isAllowedToReply?: boolean | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a StoryMessageRecipient. */
      class StoryMessageRecipient implements IStoryMessageRecipient {
        /**
         * Constructs a new StoryMessageRecipient.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.SyncMessage.Sent.IStoryMessageRecipient
        );

        /** StoryMessageRecipient destinationUuid. */
        public destinationUuid: string;

        /** StoryMessageRecipient distributionListIds. */
        public distributionListIds: string[];

        /** StoryMessageRecipient isAllowedToReply. */
        public isAllowedToReply: boolean;

        /**
         * Encodes the specified StoryMessageRecipient message. Does not implicitly {@link signalservice.SyncMessage.Sent.StoryMessageRecipient.verify|verify} messages.
         * @param message StoryMessageRecipient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.SyncMessage.Sent.IStoryMessageRecipient,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified StoryMessageRecipient message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Sent.StoryMessageRecipient.verify|verify} messages.
         * @param message StoryMessageRecipient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.SyncMessage.Sent.IStoryMessageRecipient,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StoryMessageRecipient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StoryMessageRecipient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.SyncMessage.Sent.StoryMessageRecipient;

        /**
         * Decodes a StoryMessageRecipient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StoryMessageRecipient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.SyncMessage.Sent.StoryMessageRecipient;

        /**
         * Creates a StoryMessageRecipient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StoryMessageRecipient
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.SyncMessage.Sent.StoryMessageRecipient;

        /**
         * Creates a plain object from a StoryMessageRecipient message. Also converts values to other types if specified.
         * @param message StoryMessageRecipient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.SyncMessage.Sent.StoryMessageRecipient,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StoryMessageRecipient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    /** Properties of a Contacts. */
    interface IContacts {
      /** Contacts blob */
      blob?: signalservice.IAttachmentPointer | null;

      /** Contacts complete */
      complete?: boolean | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Contacts. */
    class Contacts implements IContacts {
      /**
       * Constructs a new Contacts.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IContacts);

      /** Contacts blob. */
      public blob?: signalservice.IAttachmentPointer | null;

      /** Contacts complete. */
      public complete: boolean;

      /**
       * Encodes the specified Contacts message. Does not implicitly {@link signalservice.SyncMessage.Contacts.verify|verify} messages.
       * @param message Contacts message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IContacts,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Contacts message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Contacts.verify|verify} messages.
       * @param message Contacts message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IContacts,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Contacts message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Contacts
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Contacts;

      /**
       * Decodes a Contacts message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Contacts
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Contacts;

      /**
       * Creates a Contacts message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Contacts
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Contacts;

      /**
       * Creates a plain object from a Contacts message. Also converts values to other types if specified.
       * @param message Contacts
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Contacts,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Contacts to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Groups. */
    interface IGroups {
      /** Groups blob */
      blob?: signalservice.IAttachmentPointer | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Groups. */
    class Groups implements IGroups {
      /**
       * Constructs a new Groups.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IGroups);

      /** Groups blob. */
      public blob?: signalservice.IAttachmentPointer | null;

      /**
       * Encodes the specified Groups message. Does not implicitly {@link signalservice.SyncMessage.Groups.verify|verify} messages.
       * @param message Groups message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IGroups,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Groups message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Groups.verify|verify} messages.
       * @param message Groups message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IGroups,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Groups message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Groups
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Groups;

      /**
       * Decodes a Groups message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Groups
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Groups;

      /**
       * Creates a Groups message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Groups
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Groups;

      /**
       * Creates a plain object from a Groups message. Also converts values to other types if specified.
       * @param message Groups
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Groups,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Groups to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Blocked. */
    interface IBlocked {
      /** Blocked numbers */
      numbers?: string[] | null;

      /** Blocked uuids */
      uuids?: string[] | null;

      /** Blocked groupIds */
      groupIds?: Uint8Array[] | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Blocked. */
    class Blocked implements IBlocked {
      /**
       * Constructs a new Blocked.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IBlocked);

      /** Blocked numbers. */
      public numbers: string[];

      /** Blocked uuids. */
      public uuids: string[];

      /** Blocked groupIds. */
      public groupIds: Uint8Array[];

      /**
       * Encodes the specified Blocked message. Does not implicitly {@link signalservice.SyncMessage.Blocked.verify|verify} messages.
       * @param message Blocked message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IBlocked,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Blocked message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Blocked.verify|verify} messages.
       * @param message Blocked message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IBlocked,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Blocked message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Blocked
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Blocked;

      /**
       * Decodes a Blocked message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Blocked
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Blocked;

      /**
       * Creates a Blocked message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Blocked
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Blocked;

      /**
       * Creates a plain object from a Blocked message. Also converts values to other types if specified.
       * @param message Blocked
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Blocked,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Blocked to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Request. */
    interface IRequest {
      /** Request type */
      type?: signalservice.SyncMessage.Request.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Request. */
    class Request implements IRequest {
      /**
       * Constructs a new Request.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IRequest);

      /** Request type. */
      public type: signalservice.SyncMessage.Request.Type;

      /**
       * Encodes the specified Request message. Does not implicitly {@link signalservice.SyncMessage.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Request message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Request.verify|verify} messages.
       * @param message Request message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Request message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Request;

      /**
       * Decodes a Request message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Request
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Request;

      /**
       * Creates a Request message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Request
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Request;

      /**
       * Creates a plain object from a Request message. Also converts values to other types if specified.
       * @param message Request
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Request,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Request to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Request {
      /** Type enum. */
      enum Type {
        UNKNOWN = 0,
        CONTACTS = 1,
        GROUPS = 2,
        BLOCKED = 3,
        CONFIGURATION = 4,
        KEYS = 5,
        PNI_IDENTITY = 6,
      }
    }

    /** Properties of a Keys. */
    interface IKeys {
      /** Keys storageService */
      storageService?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Keys. */
    class Keys implements IKeys {
      /**
       * Constructs a new Keys.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IKeys);

      /** Keys storageService. */
      public storageService: Uint8Array;

      /**
       * Encodes the specified Keys message. Does not implicitly {@link signalservice.SyncMessage.Keys.verify|verify} messages.
       * @param message Keys message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IKeys,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Keys message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Keys.verify|verify} messages.
       * @param message Keys message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IKeys,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Keys message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Keys
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Keys;

      /**
       * Decodes a Keys message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Keys
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Keys;

      /**
       * Creates a Keys message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Keys
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Keys;

      /**
       * Creates a plain object from a Keys message. Also converts values to other types if specified.
       * @param message Keys
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Keys,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Keys to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a PniIdentity. */
    interface IPniIdentity {
      /** PniIdentity publicKey */
      publicKey?: Uint8Array | null;

      /** PniIdentity privateKey */
      privateKey?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a PniIdentity. */
    class PniIdentity implements IPniIdentity {
      /**
       * Constructs a new PniIdentity.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IPniIdentity);

      /** PniIdentity publicKey. */
      public publicKey: Uint8Array;

      /** PniIdentity privateKey. */
      public privateKey: Uint8Array;

      /**
       * Encodes the specified PniIdentity message. Does not implicitly {@link signalservice.SyncMessage.PniIdentity.verify|verify} messages.
       * @param message PniIdentity message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IPniIdentity,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PniIdentity message, length delimited. Does not implicitly {@link signalservice.SyncMessage.PniIdentity.verify|verify} messages.
       * @param message PniIdentity message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IPniIdentity,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PniIdentity message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PniIdentity
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.PniIdentity;

      /**
       * Decodes a PniIdentity message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PniIdentity
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.PniIdentity;

      /**
       * Creates a PniIdentity message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PniIdentity
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.PniIdentity;

      /**
       * Creates a plain object from a PniIdentity message. Also converts values to other types if specified.
       * @param message PniIdentity
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.PniIdentity,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PniIdentity to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Read. */
    interface IRead {
      /** Read sender */
      sender?: string | null;

      /** Read senderUuid */
      senderUuid?: string | null;

      /** Read timestamp */
      timestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Read. */
    class Read implements IRead {
      /**
       * Constructs a new Read.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IRead);

      /** Read sender. */
      public sender: string;

      /** Read senderUuid. */
      public senderUuid: string;

      /** Read timestamp. */
      public timestamp: Long;

      /**
       * Encodes the specified Read message. Does not implicitly {@link signalservice.SyncMessage.Read.verify|verify} messages.
       * @param message Read message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IRead,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Read message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Read.verify|verify} messages.
       * @param message Read message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IRead,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Read message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Read
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Read;

      /**
       * Decodes a Read message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Read
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Read;

      /**
       * Creates a Read message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Read
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Read;

      /**
       * Creates a plain object from a Read message. Also converts values to other types if specified.
       * @param message Read
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Read,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Read to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Viewed. */
    interface IViewed {
      /** Viewed senderE164 */
      senderE164?: string | null;

      /** Viewed senderUuid */
      senderUuid?: string | null;

      /** Viewed timestamp */
      timestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Viewed. */
    class Viewed implements IViewed {
      /**
       * Constructs a new Viewed.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IViewed);

      /** Viewed senderE164. */
      public senderE164: string;

      /** Viewed senderUuid. */
      public senderUuid: string;

      /** Viewed timestamp. */
      public timestamp: Long;

      /**
       * Encodes the specified Viewed message. Does not implicitly {@link signalservice.SyncMessage.Viewed.verify|verify} messages.
       * @param message Viewed message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IViewed,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Viewed message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Viewed.verify|verify} messages.
       * @param message Viewed message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IViewed,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Viewed message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Viewed
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Viewed;

      /**
       * Decodes a Viewed message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Viewed
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Viewed;

      /**
       * Creates a Viewed message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Viewed
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Viewed;

      /**
       * Creates a plain object from a Viewed message. Also converts values to other types if specified.
       * @param message Viewed
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Viewed,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Viewed to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Configuration. */
    interface IConfiguration {
      /** Configuration readReceipts */
      readReceipts?: boolean | null;

      /** Configuration unidentifiedDeliveryIndicators */
      unidentifiedDeliveryIndicators?: boolean | null;

      /** Configuration typingIndicators */
      typingIndicators?: boolean | null;

      /** Configuration provisioningVersion */
      provisioningVersion?: number | null;

      /** Configuration linkPreviews */
      linkPreviews?: boolean | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Configuration. */
    class Configuration implements IConfiguration {
      /**
       * Constructs a new Configuration.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IConfiguration);

      /** Configuration readReceipts. */
      public readReceipts: boolean;

      /** Configuration unidentifiedDeliveryIndicators. */
      public unidentifiedDeliveryIndicators: boolean;

      /** Configuration typingIndicators. */
      public typingIndicators: boolean;

      /** Configuration provisioningVersion. */
      public provisioningVersion: number;

      /** Configuration linkPreviews. */
      public linkPreviews: boolean;

      /**
       * Encodes the specified Configuration message. Does not implicitly {@link signalservice.SyncMessage.Configuration.verify|verify} messages.
       * @param message Configuration message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IConfiguration,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Configuration message, length delimited. Does not implicitly {@link signalservice.SyncMessage.Configuration.verify|verify} messages.
       * @param message Configuration message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IConfiguration,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Configuration message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Configuration
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Configuration;

      /**
       * Decodes a Configuration message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Configuration
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Configuration;

      /**
       * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Configuration
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.Configuration;

      /**
       * Creates a plain object from a Configuration message. Also converts values to other types if specified.
       * @param message Configuration
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.Configuration,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Configuration to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a StickerPackOperation. */
    interface IStickerPackOperation {
      /** StickerPackOperation packId */
      packId?: Uint8Array | null;

      /** StickerPackOperation packKey */
      packKey?: Uint8Array | null;

      /** StickerPackOperation type */
      type?: signalservice.SyncMessage.StickerPackOperation.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a StickerPackOperation. */
    class StickerPackOperation implements IStickerPackOperation {
      /**
       * Constructs a new StickerPackOperation.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IStickerPackOperation);

      /** StickerPackOperation packId. */
      public packId: Uint8Array;

      /** StickerPackOperation packKey. */
      public packKey: Uint8Array;

      /** StickerPackOperation type. */
      public type: signalservice.SyncMessage.StickerPackOperation.Type;

      /**
       * Encodes the specified StickerPackOperation message. Does not implicitly {@link signalservice.SyncMessage.StickerPackOperation.verify|verify} messages.
       * @param message StickerPackOperation message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IStickerPackOperation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified StickerPackOperation message, length delimited. Does not implicitly {@link signalservice.SyncMessage.StickerPackOperation.verify|verify} messages.
       * @param message StickerPackOperation message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IStickerPackOperation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a StickerPackOperation message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StickerPackOperation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.StickerPackOperation;

      /**
       * Decodes a StickerPackOperation message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StickerPackOperation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.StickerPackOperation;

      /**
       * Creates a StickerPackOperation message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StickerPackOperation
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.StickerPackOperation;

      /**
       * Creates a plain object from a StickerPackOperation message. Also converts values to other types if specified.
       * @param message StickerPackOperation
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.StickerPackOperation,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this StickerPackOperation to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace StickerPackOperation {
      /** Type enum. */
      enum Type {
        INSTALL = 0,
        REMOVE = 1,
      }
    }

    /** Properties of a ViewOnceOpen. */
    interface IViewOnceOpen {
      /** ViewOnceOpen sender */
      sender?: string | null;

      /** ViewOnceOpen senderUuid */
      senderUuid?: string | null;

      /** ViewOnceOpen timestamp */
      timestamp?: Long | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a ViewOnceOpen. */
    class ViewOnceOpen implements IViewOnceOpen {
      /**
       * Constructs a new ViewOnceOpen.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IViewOnceOpen);

      /** ViewOnceOpen sender. */
      public sender: string;

      /** ViewOnceOpen senderUuid. */
      public senderUuid: string;

      /** ViewOnceOpen timestamp. */
      public timestamp: Long;

      /**
       * Encodes the specified ViewOnceOpen message. Does not implicitly {@link signalservice.SyncMessage.ViewOnceOpen.verify|verify} messages.
       * @param message ViewOnceOpen message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IViewOnceOpen,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ViewOnceOpen message, length delimited. Does not implicitly {@link signalservice.SyncMessage.ViewOnceOpen.verify|verify} messages.
       * @param message ViewOnceOpen message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IViewOnceOpen,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ViewOnceOpen message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ViewOnceOpen
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.ViewOnceOpen;

      /**
       * Decodes a ViewOnceOpen message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ViewOnceOpen
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.ViewOnceOpen;

      /**
       * Creates a ViewOnceOpen message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ViewOnceOpen
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.ViewOnceOpen;

      /**
       * Creates a plain object from a ViewOnceOpen message. Also converts values to other types if specified.
       * @param message ViewOnceOpen
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.ViewOnceOpen,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ViewOnceOpen to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a MessageRequestResponse. */
    interface IMessageRequestResponse {
      /** MessageRequestResponse threadE164 */
      threadE164?: string | null;

      /** MessageRequestResponse threadUuid */
      threadUuid?: string | null;

      /** MessageRequestResponse groupId */
      groupId?: Uint8Array | null;

      /** MessageRequestResponse type */
      type?: signalservice.SyncMessage.MessageRequestResponse.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a MessageRequestResponse. */
    class MessageRequestResponse implements IMessageRequestResponse {
      /**
       * Constructs a new MessageRequestResponse.
       * @param [properties] Properties to set
       */
      constructor(
        properties?: signalservice.SyncMessage.IMessageRequestResponse
      );

      /** MessageRequestResponse threadE164. */
      public threadE164: string;

      /** MessageRequestResponse threadUuid. */
      public threadUuid: string;

      /** MessageRequestResponse groupId. */
      public groupId: Uint8Array;

      /** MessageRequestResponse type. */
      public type: signalservice.SyncMessage.MessageRequestResponse.Type;

      /**
       * Encodes the specified MessageRequestResponse message. Does not implicitly {@link signalservice.SyncMessage.MessageRequestResponse.verify|verify} messages.
       * @param message MessageRequestResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IMessageRequestResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MessageRequestResponse message, length delimited. Does not implicitly {@link signalservice.SyncMessage.MessageRequestResponse.verify|verify} messages.
       * @param message MessageRequestResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IMessageRequestResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MessageRequestResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MessageRequestResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.MessageRequestResponse;

      /**
       * Decodes a MessageRequestResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MessageRequestResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.MessageRequestResponse;

      /**
       * Creates a MessageRequestResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MessageRequestResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.MessageRequestResponse;

      /**
       * Creates a plain object from a MessageRequestResponse message. Also converts values to other types if specified.
       * @param message MessageRequestResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.MessageRequestResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MessageRequestResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace MessageRequestResponse {
      /** Type enum. */
      enum Type {
        UNKNOWN = 0,
        ACCEPT = 1,
        DELETE = 2,
        BLOCK = 3,
        BLOCK_AND_DELETE = 4,
      }
    }

    /** Properties of a FetchLatest. */
    interface IFetchLatest {
      /** FetchLatest type */
      type?: signalservice.SyncMessage.FetchLatest.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a FetchLatest. */
    class FetchLatest implements IFetchLatest {
      /**
       * Constructs a new FetchLatest.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IFetchLatest);

      /** FetchLatest type. */
      public type: signalservice.SyncMessage.FetchLatest.Type;

      /**
       * Encodes the specified FetchLatest message. Does not implicitly {@link signalservice.SyncMessage.FetchLatest.verify|verify} messages.
       * @param message FetchLatest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IFetchLatest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FetchLatest message, length delimited. Does not implicitly {@link signalservice.SyncMessage.FetchLatest.verify|verify} messages.
       * @param message FetchLatest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IFetchLatest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FetchLatest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FetchLatest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.FetchLatest;

      /**
       * Decodes a FetchLatest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FetchLatest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.FetchLatest;

      /**
       * Creates a FetchLatest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FetchLatest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.FetchLatest;

      /**
       * Creates a plain object from a FetchLatest message. Also converts values to other types if specified.
       * @param message FetchLatest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.FetchLatest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FetchLatest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace FetchLatest {
      /** Type enum. */
      enum Type {
        UNKNOWN = 0,
        LOCAL_PROFILE = 1,
        STORAGE_MANIFEST = 2,
        SUBSCRIPTION_STATUS = 3,
      }
    }

    /** Properties of a PniChangeNumber. */
    interface IPniChangeNumber {
      /** PniChangeNumber identityKeyPair */
      identityKeyPair?: Uint8Array | null;

      /** PniChangeNumber signedPreKey */
      signedPreKey?: Uint8Array | null;

      /** PniChangeNumber registrationId */
      registrationId?: number | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a PniChangeNumber. */
    class PniChangeNumber implements IPniChangeNumber {
      /**
       * Constructs a new PniChangeNumber.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SyncMessage.IPniChangeNumber);

      /** PniChangeNumber identityKeyPair. */
      public identityKeyPair: Uint8Array;

      /** PniChangeNumber signedPreKey. */
      public signedPreKey: Uint8Array;

      /** PniChangeNumber registrationId. */
      public registrationId: number;

      /**
       * Encodes the specified PniChangeNumber message. Does not implicitly {@link signalservice.SyncMessage.PniChangeNumber.verify|verify} messages.
       * @param message PniChangeNumber message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SyncMessage.IPniChangeNumber,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PniChangeNumber message, length delimited. Does not implicitly {@link signalservice.SyncMessage.PniChangeNumber.verify|verify} messages.
       * @param message PniChangeNumber message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SyncMessage.IPniChangeNumber,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PniChangeNumber message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PniChangeNumber
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.PniChangeNumber;

      /**
       * Decodes a PniChangeNumber message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PniChangeNumber
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.PniChangeNumber;

      /**
       * Creates a PniChangeNumber message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PniChangeNumber
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SyncMessage.PniChangeNumber;

      /**
       * Creates a plain object from a PniChangeNumber message. Also converts values to other types if specified.
       * @param message PniChangeNumber
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SyncMessage.PniChangeNumber,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PniChangeNumber to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of an AttachmentPointer. */
  interface IAttachmentPointer {
    /** AttachmentPointer cdnId */
    cdnId?: Long | null;

    /** AttachmentPointer cdnKey */
    cdnKey?: string | null;

    /** AttachmentPointer contentType */
    contentType?: string | null;

    /** AttachmentPointer key */
    key?: Uint8Array | null;

    /** AttachmentPointer size */
    size?: number | null;

    /** AttachmentPointer thumbnail */
    thumbnail?: Uint8Array | null;

    /** AttachmentPointer digest */
    digest?: Uint8Array | null;

    /** AttachmentPointer fileName */
    fileName?: string | null;

    /** AttachmentPointer flags */
    flags?: number | null;

    /** AttachmentPointer width */
    width?: number | null;

    /** AttachmentPointer height */
    height?: number | null;

    /** AttachmentPointer caption */
    caption?: string | null;

    /** AttachmentPointer blurHash */
    blurHash?: string | null;

    /** AttachmentPointer uploadTimestamp */
    uploadTimestamp?: Long | null;

    /** AttachmentPointer cdnNumber */
    cdnNumber?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an AttachmentPointer. */
  class AttachmentPointer implements IAttachmentPointer {
    /**
     * Constructs a new AttachmentPointer.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IAttachmentPointer);

    /** AttachmentPointer cdnId. */
    public cdnId?: Long | null;

    /** AttachmentPointer cdnKey. */
    public cdnKey?: string | null;

    /** AttachmentPointer contentType. */
    public contentType: string;

    /** AttachmentPointer key. */
    public key: Uint8Array;

    /** AttachmentPointer size. */
    public size: number;

    /** AttachmentPointer thumbnail. */
    public thumbnail: Uint8Array;

    /** AttachmentPointer digest. */
    public digest: Uint8Array;

    /** AttachmentPointer fileName. */
    public fileName: string;

    /** AttachmentPointer flags. */
    public flags: number;

    /** AttachmentPointer width. */
    public width: number;

    /** AttachmentPointer height. */
    public height: number;

    /** AttachmentPointer caption. */
    public caption: string;

    /** AttachmentPointer blurHash. */
    public blurHash: string;

    /** AttachmentPointer uploadTimestamp. */
    public uploadTimestamp: Long;

    /** AttachmentPointer cdnNumber. */
    public cdnNumber: number;

    /** AttachmentPointer attachmentIdentifier. */
    public attachmentIdentifier?: 'cdnId' | 'cdnKey';

    /**
     * Encodes the specified AttachmentPointer message. Does not implicitly {@link signalservice.AttachmentPointer.verify|verify} messages.
     * @param message AttachmentPointer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IAttachmentPointer,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AttachmentPointer message, length delimited. Does not implicitly {@link signalservice.AttachmentPointer.verify|verify} messages.
     * @param message AttachmentPointer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IAttachmentPointer,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AttachmentPointer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttachmentPointer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AttachmentPointer;

    /**
     * Decodes an AttachmentPointer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttachmentPointer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AttachmentPointer;

    /**
     * Creates an AttachmentPointer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttachmentPointer
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.AttachmentPointer;

    /**
     * Creates a plain object from an AttachmentPointer message. Also converts values to other types if specified.
     * @param message AttachmentPointer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.AttachmentPointer,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AttachmentPointer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AttachmentPointer {
    /** Flags enum. */
    enum Flags {
      VOICE_MESSAGE = 1,
      BORDERLESS = 2,
      GIF = 8,
    }
  }

  /** Properties of a GroupContext. */
  interface IGroupContext {
    /** GroupContext id */
    id?: Uint8Array | null;

    /** GroupContext type */
    type?: signalservice.GroupContext.Type | null;

    /** GroupContext name */
    name?: string | null;

    /** GroupContext membersE164 */
    membersE164?: string[] | null;

    /** GroupContext avatar */
    avatar?: signalservice.IAttachmentPointer | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupContext. */
  class GroupContext implements IGroupContext {
    /**
     * Constructs a new GroupContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupContext);

    /** GroupContext id. */
    public id: Uint8Array;

    /** GroupContext type. */
    public type: signalservice.GroupContext.Type;

    /** GroupContext name. */
    public name: string;

    /** GroupContext membersE164. */
    public membersE164: string[];

    /** GroupContext avatar. */
    public avatar?: signalservice.IAttachmentPointer | null;

    /**
     * Encodes the specified GroupContext message. Does not implicitly {@link signalservice.GroupContext.verify|verify} messages.
     * @param message GroupContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupContext,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupContext message, length delimited. Does not implicitly {@link signalservice.GroupContext.verify|verify} messages.
     * @param message GroupContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupContext,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupContext;

    /**
     * Decodes a GroupContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupContext;

    /**
     * Creates a GroupContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupContext
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupContext;

    /**
     * Creates a plain object from a GroupContext message. Also converts values to other types if specified.
     * @param message GroupContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupContext,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupContext {
    /** Type enum. */
    enum Type {
      UNKNOWN = 0,
      UPDATE = 1,
      DELIVER = 2,
      QUIT = 3,
      REQUEST_INFO = 4,
    }
  }

  /** Properties of a GroupContextV2. */
  interface IGroupContextV2 {
    /** GroupContextV2 masterKey */
    masterKey?: Uint8Array | null;

    /** GroupContextV2 revision */
    revision?: number | null;

    /** GroupContextV2 groupChange */
    groupChange?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupContextV2. */
  class GroupContextV2 implements IGroupContextV2 {
    /**
     * Constructs a new GroupContextV2.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupContextV2);

    /** GroupContextV2 masterKey. */
    public masterKey: Uint8Array;

    /** GroupContextV2 revision. */
    public revision: number;

    /** GroupContextV2 groupChange. */
    public groupChange: Uint8Array;

    /**
     * Encodes the specified GroupContextV2 message. Does not implicitly {@link signalservice.GroupContextV2.verify|verify} messages.
     * @param message GroupContextV2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupContextV2,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupContextV2 message, length delimited. Does not implicitly {@link signalservice.GroupContextV2.verify|verify} messages.
     * @param message GroupContextV2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupContextV2,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupContextV2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupContextV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupContextV2;

    /**
     * Decodes a GroupContextV2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupContextV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupContextV2;

    /**
     * Creates a GroupContextV2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupContextV2
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupContextV2;

    /**
     * Creates a plain object from a GroupContextV2 message. Also converts values to other types if specified.
     * @param message GroupContextV2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupContextV2,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupContextV2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ContactDetails. */
  interface IContactDetails {
    /** ContactDetails number */
    number?: string | null;

    /** ContactDetails uuid */
    uuid?: string | null;

    /** ContactDetails name */
    name?: string | null;

    /** ContactDetails avatar */
    avatar?: signalservice.ContactDetails.IAvatar | null;

    /** ContactDetails color */
    color?: string | null;

    /** ContactDetails verified */
    verified?: signalservice.IVerified | null;

    /** ContactDetails profileKey */
    profileKey?: Uint8Array | null;

    /** ContactDetails blocked */
    blocked?: boolean | null;

    /** ContactDetails expireTimer */
    expireTimer?: number | null;

    /** ContactDetails inboxPosition */
    inboxPosition?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ContactDetails. */
  class ContactDetails implements IContactDetails {
    /**
     * Constructs a new ContactDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IContactDetails);

    /** ContactDetails number. */
    public number: string;

    /** ContactDetails uuid. */
    public uuid: string;

    /** ContactDetails name. */
    public name: string;

    /** ContactDetails avatar. */
    public avatar?: signalservice.ContactDetails.IAvatar | null;

    /** ContactDetails color. */
    public color: string;

    /** ContactDetails verified. */
    public verified?: signalservice.IVerified | null;

    /** ContactDetails profileKey. */
    public profileKey: Uint8Array;

    /** ContactDetails blocked. */
    public blocked: boolean;

    /** ContactDetails expireTimer. */
    public expireTimer: number;

    /** ContactDetails inboxPosition. */
    public inboxPosition: number;

    /**
     * Encodes the specified ContactDetails message. Does not implicitly {@link signalservice.ContactDetails.verify|verify} messages.
     * @param message ContactDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IContactDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ContactDetails message, length delimited. Does not implicitly {@link signalservice.ContactDetails.verify|verify} messages.
     * @param message ContactDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IContactDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ContactDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContactDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ContactDetails;

    /**
     * Decodes a ContactDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContactDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ContactDetails;

    /**
     * Creates a ContactDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContactDetails
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ContactDetails;

    /**
     * Creates a plain object from a ContactDetails message. Also converts values to other types if specified.
     * @param message ContactDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ContactDetails,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ContactDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ContactDetails {
    /** Properties of an Avatar. */
    interface IAvatar {
      /** Avatar contentType */
      contentType?: string | null;

      /** Avatar length */
      length?: number | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Avatar. */
    class Avatar implements IAvatar {
      /**
       * Constructs a new Avatar.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.ContactDetails.IAvatar);

      /** Avatar contentType. */
      public contentType: string;

      /** Avatar length. */
      public length: number;

      /**
       * Encodes the specified Avatar message. Does not implicitly {@link signalservice.ContactDetails.Avatar.verify|verify} messages.
       * @param message Avatar message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.ContactDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Avatar message, length delimited. Does not implicitly {@link signalservice.ContactDetails.Avatar.verify|verify} messages.
       * @param message Avatar message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.ContactDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Avatar message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Avatar
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ContactDetails.Avatar;

      /**
       * Decodes an Avatar message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Avatar
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ContactDetails.Avatar;

      /**
       * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Avatar
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.ContactDetails.Avatar;

      /**
       * Creates a plain object from an Avatar message. Also converts values to other types if specified.
       * @param message Avatar
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.ContactDetails.Avatar,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Avatar to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a GroupDetails. */
  interface IGroupDetails {
    /** GroupDetails id */
    id?: Uint8Array | null;

    /** GroupDetails name */
    name?: string | null;

    /** GroupDetails membersE164 */
    membersE164?: string[] | null;

    /** GroupDetails members */
    members?: signalservice.GroupDetails.IMember[] | null;

    /** GroupDetails avatar */
    avatar?: signalservice.GroupDetails.IAvatar | null;

    /** GroupDetails active */
    active?: boolean | null;

    /** GroupDetails expireTimer */
    expireTimer?: number | null;

    /** GroupDetails color */
    color?: string | null;

    /** GroupDetails blocked */
    blocked?: boolean | null;

    /** GroupDetails inboxPosition */
    inboxPosition?: number | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupDetails. */
  class GroupDetails implements IGroupDetails {
    /**
     * Constructs a new GroupDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupDetails);

    /** GroupDetails id. */
    public id: Uint8Array;

    /** GroupDetails name. */
    public name: string;

    /** GroupDetails membersE164. */
    public membersE164: string[];

    /** GroupDetails members. */
    public members: signalservice.GroupDetails.IMember[];

    /** GroupDetails avatar. */
    public avatar?: signalservice.GroupDetails.IAvatar | null;

    /** GroupDetails active. */
    public active: boolean;

    /** GroupDetails expireTimer. */
    public expireTimer: number;

    /** GroupDetails color. */
    public color: string;

    /** GroupDetails blocked. */
    public blocked: boolean;

    /** GroupDetails inboxPosition. */
    public inboxPosition: number;

    /**
     * Encodes the specified GroupDetails message. Does not implicitly {@link signalservice.GroupDetails.verify|verify} messages.
     * @param message GroupDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupDetails message, length delimited. Does not implicitly {@link signalservice.GroupDetails.verify|verify} messages.
     * @param message GroupDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupDetails;

    /**
     * Decodes a GroupDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupDetails;

    /**
     * Creates a GroupDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupDetails
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupDetails;

    /**
     * Creates a plain object from a GroupDetails message. Also converts values to other types if specified.
     * @param message GroupDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupDetails,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupDetails {
    /** Properties of an Avatar. */
    interface IAvatar {
      /** Avatar contentType */
      contentType?: string | null;

      /** Avatar length */
      length?: number | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Avatar. */
    class Avatar implements IAvatar {
      /**
       * Constructs a new Avatar.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.GroupDetails.IAvatar);

      /** Avatar contentType. */
      public contentType: string;

      /** Avatar length. */
      public length: number;

      /**
       * Encodes the specified Avatar message. Does not implicitly {@link signalservice.GroupDetails.Avatar.verify|verify} messages.
       * @param message Avatar message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.GroupDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Avatar message, length delimited. Does not implicitly {@link signalservice.GroupDetails.Avatar.verify|verify} messages.
       * @param message Avatar message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.GroupDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Avatar message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Avatar
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupDetails.Avatar;

      /**
       * Decodes an Avatar message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Avatar
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupDetails.Avatar;

      /**
       * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Avatar
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.GroupDetails.Avatar;

      /**
       * Creates a plain object from an Avatar message. Also converts values to other types if specified.
       * @param message Avatar
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.GroupDetails.Avatar,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Avatar to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Properties of a Member. */
    interface IMember {
      /** Member uuid */
      uuid?: string | null;

      /** Member e164 */
      e164?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Member. */
    class Member implements IMember {
      /**
       * Constructs a new Member.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.GroupDetails.IMember);

      /** Member uuid. */
      public uuid: string;

      /** Member e164. */
      public e164: string;

      /**
       * Encodes the specified Member message. Does not implicitly {@link signalservice.GroupDetails.Member.verify|verify} messages.
       * @param message Member message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.GroupDetails.IMember,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Member message, length delimited. Does not implicitly {@link signalservice.GroupDetails.Member.verify|verify} messages.
       * @param message Member message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.GroupDetails.IMember,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Member message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Member
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupDetails.Member;

      /**
       * Decodes a Member message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Member
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupDetails.Member;

      /**
       * Creates a Member message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Member
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.GroupDetails.Member;

      /**
       * Creates a plain object from a Member message. Also converts values to other types if specified.
       * @param message Member
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.GroupDetails.Member,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Member to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a PniSignatureMessage. */
  interface IPniSignatureMessage {
    /** PniSignatureMessage pni */
    pni?: Uint8Array | null;

    /** PniSignatureMessage signature */
    signature?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a PniSignatureMessage. */
  class PniSignatureMessage implements IPniSignatureMessage {
    /**
     * Constructs a new PniSignatureMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IPniSignatureMessage);

    /** PniSignatureMessage pni. */
    public pni: Uint8Array;

    /** PniSignatureMessage signature. */
    public signature: Uint8Array;

    /**
     * Encodes the specified PniSignatureMessage message. Does not implicitly {@link signalservice.PniSignatureMessage.verify|verify} messages.
     * @param message PniSignatureMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IPniSignatureMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PniSignatureMessage message, length delimited. Does not implicitly {@link signalservice.PniSignatureMessage.verify|verify} messages.
     * @param message PniSignatureMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IPniSignatureMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PniSignatureMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PniSignatureMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.PniSignatureMessage;

    /**
     * Decodes a PniSignatureMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PniSignatureMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.PniSignatureMessage;

    /**
     * Creates a PniSignatureMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PniSignatureMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.PniSignatureMessage;

    /**
     * Creates a plain object from a PniSignatureMessage message. Also converts values to other types if specified.
     * @param message PniSignatureMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.PniSignatureMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PniSignatureMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a StorageManifest. */
  interface IStorageManifest {
    /** StorageManifest version */
    version?: Long | null;

    /** StorageManifest value */
    value?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StorageManifest. */
  class StorageManifest implements IStorageManifest {
    /**
     * Constructs a new StorageManifest.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStorageManifest);

    /** StorageManifest version. */
    public version: Long;

    /** StorageManifest value. */
    public value: Uint8Array;

    /**
     * Encodes the specified StorageManifest message. Does not implicitly {@link signalservice.StorageManifest.verify|verify} messages.
     * @param message StorageManifest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStorageManifest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StorageManifest message, length delimited. Does not implicitly {@link signalservice.StorageManifest.verify|verify} messages.
     * @param message StorageManifest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStorageManifest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StorageManifest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageManifest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageManifest;

    /**
     * Decodes a StorageManifest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageManifest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageManifest;

    /**
     * Creates a StorageManifest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageManifest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StorageManifest;

    /**
     * Creates a plain object from a StorageManifest message. Also converts values to other types if specified.
     * @param message StorageManifest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StorageManifest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StorageManifest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a StorageItem. */
  interface IStorageItem {
    /** StorageItem key */
    key?: Uint8Array | null;

    /** StorageItem value */
    value?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StorageItem. */
  class StorageItem implements IStorageItem {
    /**
     * Constructs a new StorageItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStorageItem);

    /** StorageItem key. */
    public key: Uint8Array;

    /** StorageItem value. */
    public value: Uint8Array;

    /**
     * Encodes the specified StorageItem message. Does not implicitly {@link signalservice.StorageItem.verify|verify} messages.
     * @param message StorageItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStorageItem,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StorageItem message, length delimited. Does not implicitly {@link signalservice.StorageItem.verify|verify} messages.
     * @param message StorageItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStorageItem,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StorageItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageItem;

    /**
     * Decodes a StorageItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageItem;

    /**
     * Creates a StorageItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageItem
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StorageItem;

    /**
     * Creates a plain object from a StorageItem message. Also converts values to other types if specified.
     * @param message StorageItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StorageItem,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StorageItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a StorageItems. */
  interface IStorageItems {
    /** StorageItems items */
    items?: signalservice.IStorageItem[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StorageItems. */
  class StorageItems implements IStorageItems {
    /**
     * Constructs a new StorageItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStorageItems);

    /** StorageItems items. */
    public items: signalservice.IStorageItem[];

    /**
     * Encodes the specified StorageItems message. Does not implicitly {@link signalservice.StorageItems.verify|verify} messages.
     * @param message StorageItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStorageItems,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StorageItems message, length delimited. Does not implicitly {@link signalservice.StorageItems.verify|verify} messages.
     * @param message StorageItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStorageItems,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StorageItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageItems;

    /**
     * Decodes a StorageItems message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageItems;

    /**
     * Creates a StorageItems message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageItems
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StorageItems;

    /**
     * Creates a plain object from a StorageItems message. Also converts values to other types if specified.
     * @param message StorageItems
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StorageItems,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StorageItems to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ReadOperation. */
  interface IReadOperation {
    /** ReadOperation readKey */
    readKey?: Uint8Array[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ReadOperation. */
  class ReadOperation implements IReadOperation {
    /**
     * Constructs a new ReadOperation.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IReadOperation);

    /** ReadOperation readKey. */
    public readKey: Uint8Array[];

    /**
     * Encodes the specified ReadOperation message. Does not implicitly {@link signalservice.ReadOperation.verify|verify} messages.
     * @param message ReadOperation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IReadOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReadOperation message, length delimited. Does not implicitly {@link signalservice.ReadOperation.verify|verify} messages.
     * @param message ReadOperation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IReadOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReadOperation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadOperation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ReadOperation;

    /**
     * Decodes a ReadOperation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadOperation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ReadOperation;

    /**
     * Creates a ReadOperation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadOperation
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ReadOperation;

    /**
     * Creates a plain object from a ReadOperation message. Also converts values to other types if specified.
     * @param message ReadOperation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ReadOperation,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReadOperation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a WriteOperation. */
  interface IWriteOperation {
    /** WriteOperation manifest */
    manifest?: signalservice.IStorageManifest | null;

    /** WriteOperation insertItem */
    insertItem?: signalservice.IStorageItem[] | null;

    /** WriteOperation deleteKey */
    deleteKey?: Uint8Array[] | null;

    /** WriteOperation clearAll */
    clearAll?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a WriteOperation. */
  class WriteOperation implements IWriteOperation {
    /**
     * Constructs a new WriteOperation.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IWriteOperation);

    /** WriteOperation manifest. */
    public manifest?: signalservice.IStorageManifest | null;

    /** WriteOperation insertItem. */
    public insertItem: signalservice.IStorageItem[];

    /** WriteOperation deleteKey. */
    public deleteKey: Uint8Array[];

    /** WriteOperation clearAll. */
    public clearAll: boolean;

    /**
     * Encodes the specified WriteOperation message. Does not implicitly {@link signalservice.WriteOperation.verify|verify} messages.
     * @param message WriteOperation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IWriteOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WriteOperation message, length delimited. Does not implicitly {@link signalservice.WriteOperation.verify|verify} messages.
     * @param message WriteOperation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IWriteOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WriteOperation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WriteOperation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WriteOperation;

    /**
     * Decodes a WriteOperation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WriteOperation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WriteOperation;

    /**
     * Creates a WriteOperation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WriteOperation
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.WriteOperation;

    /**
     * Creates a plain object from a WriteOperation message. Also converts values to other types if specified.
     * @param message WriteOperation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.WriteOperation,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WriteOperation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ManifestRecord. */
  interface IManifestRecord {
    /** ManifestRecord version */
    version?: Long | null;

    /** ManifestRecord sourceDevice */
    sourceDevice?: number | null;

    /** ManifestRecord keys */
    keys?: signalservice.ManifestRecord.IIdentifier[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ManifestRecord. */
  class ManifestRecord implements IManifestRecord {
    /**
     * Constructs a new ManifestRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IManifestRecord);

    /** ManifestRecord version. */
    public version: Long;

    /** ManifestRecord sourceDevice. */
    public sourceDevice: number;

    /** ManifestRecord keys. */
    public keys: signalservice.ManifestRecord.IIdentifier[];

    /**
     * Encodes the specified ManifestRecord message. Does not implicitly {@link signalservice.ManifestRecord.verify|verify} messages.
     * @param message ManifestRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IManifestRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ManifestRecord message, length delimited. Does not implicitly {@link signalservice.ManifestRecord.verify|verify} messages.
     * @param message ManifestRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IManifestRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ManifestRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ManifestRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ManifestRecord;

    /**
     * Decodes a ManifestRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ManifestRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ManifestRecord;

    /**
     * Creates a ManifestRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ManifestRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ManifestRecord;

    /**
     * Creates a plain object from a ManifestRecord message. Also converts values to other types if specified.
     * @param message ManifestRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ManifestRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ManifestRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ManifestRecord {
    /** Properties of an Identifier. */
    interface IIdentifier {
      /** Identifier raw */
      raw?: Uint8Array | null;

      /** Identifier type */
      type?: signalservice.ManifestRecord.Identifier.Type | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents an Identifier. */
    class Identifier implements IIdentifier {
      /**
       * Constructs a new Identifier.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.ManifestRecord.IIdentifier);

      /** Identifier raw. */
      public raw: Uint8Array;

      /** Identifier type. */
      public type: signalservice.ManifestRecord.Identifier.Type;

      /**
       * Encodes the specified Identifier message. Does not implicitly {@link signalservice.ManifestRecord.Identifier.verify|verify} messages.
       * @param message Identifier message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.ManifestRecord.IIdentifier,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Identifier message, length delimited. Does not implicitly {@link signalservice.ManifestRecord.Identifier.verify|verify} messages.
       * @param message Identifier message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.ManifestRecord.IIdentifier,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Identifier message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Identifier
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ManifestRecord.Identifier;

      /**
       * Decodes an Identifier message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Identifier
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ManifestRecord.Identifier;

      /**
       * Creates an Identifier message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Identifier
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.ManifestRecord.Identifier;

      /**
       * Creates a plain object from an Identifier message. Also converts values to other types if specified.
       * @param message Identifier
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.ManifestRecord.Identifier,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Identifier to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Identifier {
      /** Type enum. */
      enum Type {
        UNKNOWN = 0,
        CONTACT = 1,
        GROUPV1 = 2,
        GROUPV2 = 3,
        ACCOUNT = 4,
        STORY_DISTRIBUTION_LIST = 5,
        STICKER_PACK = 6,
      }
    }
  }

  /** Properties of a StorageRecord. */
  interface IStorageRecord {
    /** StorageRecord contact */
    contact?: signalservice.IContactRecord | null;

    /** StorageRecord groupV1 */
    groupV1?: signalservice.IGroupV1Record | null;

    /** StorageRecord groupV2 */
    groupV2?: signalservice.IGroupV2Record | null;

    /** StorageRecord account */
    account?: signalservice.IAccountRecord | null;

    /** StorageRecord storyDistributionList */
    storyDistributionList?: signalservice.IStoryDistributionListRecord | null;

    /** StorageRecord stickerPack */
    stickerPack?: signalservice.IStickerPackRecord | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StorageRecord. */
  class StorageRecord implements IStorageRecord {
    /**
     * Constructs a new StorageRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStorageRecord);

    /** StorageRecord contact. */
    public contact?: signalservice.IContactRecord | null;

    /** StorageRecord groupV1. */
    public groupV1?: signalservice.IGroupV1Record | null;

    /** StorageRecord groupV2. */
    public groupV2?: signalservice.IGroupV2Record | null;

    /** StorageRecord account. */
    public account?: signalservice.IAccountRecord | null;

    /** StorageRecord storyDistributionList. */
    public storyDistributionList?: signalservice.IStoryDistributionListRecord | null;

    /** StorageRecord stickerPack. */
    public stickerPack?: signalservice.IStickerPackRecord | null;

    /** StorageRecord record. */
    public record?:
      | 'contact'
      | 'groupV1'
      | 'groupV2'
      | 'account'
      | 'storyDistributionList'
      | 'stickerPack';

    /**
     * Encodes the specified StorageRecord message. Does not implicitly {@link signalservice.StorageRecord.verify|verify} messages.
     * @param message StorageRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStorageRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StorageRecord message, length delimited. Does not implicitly {@link signalservice.StorageRecord.verify|verify} messages.
     * @param message StorageRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStorageRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StorageRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageRecord;

    /**
     * Decodes a StorageRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageRecord;

    /**
     * Creates a StorageRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StorageRecord;

    /**
     * Creates a plain object from a StorageRecord message. Also converts values to other types if specified.
     * @param message StorageRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StorageRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StorageRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a ContactRecord. */
  interface IContactRecord {
    /** ContactRecord serviceUuid */
    serviceUuid?: string | null;

    /** ContactRecord serviceE164 */
    serviceE164?: string | null;

    /** ContactRecord pni */
    pni?: string | null;

    /** ContactRecord profileKey */
    profileKey?: Uint8Array | null;

    /** ContactRecord identityKey */
    identityKey?: Uint8Array | null;

    /** ContactRecord identityState */
    identityState?: signalservice.ContactRecord.IdentityState | null;

    /** ContactRecord givenName */
    givenName?: string | null;

    /** ContactRecord familyName */
    familyName?: string | null;

    /** ContactRecord username */
    username?: string | null;

    /** ContactRecord blocked */
    blocked?: boolean | null;

    /** ContactRecord whitelisted */
    whitelisted?: boolean | null;

    /** ContactRecord archived */
    archived?: boolean | null;

    /** ContactRecord markedUnread */
    markedUnread?: boolean | null;

    /** ContactRecord mutedUntilTimestamp */
    mutedUntilTimestamp?: Long | null;

    /** ContactRecord hideStory */
    hideStory?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ContactRecord. */
  class ContactRecord implements IContactRecord {
    /**
     * Constructs a new ContactRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IContactRecord);

    /** ContactRecord serviceUuid. */
    public serviceUuid: string;

    /** ContactRecord serviceE164. */
    public serviceE164: string;

    /** ContactRecord pni. */
    public pni: string;

    /** ContactRecord profileKey. */
    public profileKey: Uint8Array;

    /** ContactRecord identityKey. */
    public identityKey: Uint8Array;

    /** ContactRecord identityState. */
    public identityState: signalservice.ContactRecord.IdentityState;

    /** ContactRecord givenName. */
    public givenName: string;

    /** ContactRecord familyName. */
    public familyName: string;

    /** ContactRecord username. */
    public username: string;

    /** ContactRecord blocked. */
    public blocked: boolean;

    /** ContactRecord whitelisted. */
    public whitelisted: boolean;

    /** ContactRecord archived. */
    public archived: boolean;

    /** ContactRecord markedUnread. */
    public markedUnread: boolean;

    /** ContactRecord mutedUntilTimestamp. */
    public mutedUntilTimestamp: Long;

    /** ContactRecord hideStory. */
    public hideStory: boolean;

    /**
     * Encodes the specified ContactRecord message. Does not implicitly {@link signalservice.ContactRecord.verify|verify} messages.
     * @param message ContactRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IContactRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ContactRecord message, length delimited. Does not implicitly {@link signalservice.ContactRecord.verify|verify} messages.
     * @param message ContactRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IContactRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ContactRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContactRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ContactRecord;

    /**
     * Decodes a ContactRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContactRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ContactRecord;

    /**
     * Creates a ContactRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContactRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ContactRecord;

    /**
     * Creates a plain object from a ContactRecord message. Also converts values to other types if specified.
     * @param message ContactRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ContactRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ContactRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ContactRecord {
    /** IdentityState enum. */
    enum IdentityState {
      DEFAULT = 0,
      VERIFIED = 1,
      UNVERIFIED = 2,
    }
  }

  /** Properties of a GroupV1Record. */
  interface IGroupV1Record {
    /** GroupV1Record id */
    id?: Uint8Array | null;

    /** GroupV1Record blocked */
    blocked?: boolean | null;

    /** GroupV1Record whitelisted */
    whitelisted?: boolean | null;

    /** GroupV1Record archived */
    archived?: boolean | null;

    /** GroupV1Record markedUnread */
    markedUnread?: boolean | null;

    /** GroupV1Record mutedUntilTimestamp */
    mutedUntilTimestamp?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupV1Record. */
  class GroupV1Record implements IGroupV1Record {
    /**
     * Constructs a new GroupV1Record.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupV1Record);

    /** GroupV1Record id. */
    public id: Uint8Array;

    /** GroupV1Record blocked. */
    public blocked: boolean;

    /** GroupV1Record whitelisted. */
    public whitelisted: boolean;

    /** GroupV1Record archived. */
    public archived: boolean;

    /** GroupV1Record markedUnread. */
    public markedUnread: boolean;

    /** GroupV1Record mutedUntilTimestamp. */
    public mutedUntilTimestamp: Long;

    /**
     * Encodes the specified GroupV1Record message. Does not implicitly {@link signalservice.GroupV1Record.verify|verify} messages.
     * @param message GroupV1Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupV1Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupV1Record message, length delimited. Does not implicitly {@link signalservice.GroupV1Record.verify|verify} messages.
     * @param message GroupV1Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupV1Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupV1Record message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupV1Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupV1Record;

    /**
     * Decodes a GroupV1Record message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupV1Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupV1Record;

    /**
     * Creates a GroupV1Record message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupV1Record
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupV1Record;

    /**
     * Creates a plain object from a GroupV1Record message. Also converts values to other types if specified.
     * @param message GroupV1Record
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupV1Record,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupV1Record to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a GroupV2Record. */
  interface IGroupV2Record {
    /** GroupV2Record masterKey */
    masterKey?: Uint8Array | null;

    /** GroupV2Record blocked */
    blocked?: boolean | null;

    /** GroupV2Record whitelisted */
    whitelisted?: boolean | null;

    /** GroupV2Record archived */
    archived?: boolean | null;

    /** GroupV2Record markedUnread */
    markedUnread?: boolean | null;

    /** GroupV2Record mutedUntilTimestamp */
    mutedUntilTimestamp?: Long | null;

    /** GroupV2Record dontNotifyForMentionsIfMuted */
    dontNotifyForMentionsIfMuted?: boolean | null;

    /** GroupV2Record hideStory */
    hideStory?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a GroupV2Record. */
  class GroupV2Record implements IGroupV2Record {
    /**
     * Constructs a new GroupV2Record.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IGroupV2Record);

    /** GroupV2Record masterKey. */
    public masterKey: Uint8Array;

    /** GroupV2Record blocked. */
    public blocked: boolean;

    /** GroupV2Record whitelisted. */
    public whitelisted: boolean;

    /** GroupV2Record archived. */
    public archived: boolean;

    /** GroupV2Record markedUnread. */
    public markedUnread: boolean;

    /** GroupV2Record mutedUntilTimestamp. */
    public mutedUntilTimestamp: Long;

    /** GroupV2Record dontNotifyForMentionsIfMuted. */
    public dontNotifyForMentionsIfMuted: boolean;

    /** GroupV2Record hideStory. */
    public hideStory: boolean;

    /**
     * Encodes the specified GroupV2Record message. Does not implicitly {@link signalservice.GroupV2Record.verify|verify} messages.
     * @param message GroupV2Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IGroupV2Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GroupV2Record message, length delimited. Does not implicitly {@link signalservice.GroupV2Record.verify|verify} messages.
     * @param message GroupV2Record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IGroupV2Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GroupV2Record message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupV2Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupV2Record;

    /**
     * Decodes a GroupV2Record message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupV2Record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupV2Record;

    /**
     * Creates a GroupV2Record message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupV2Record
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.GroupV2Record;

    /**
     * Creates a plain object from a GroupV2Record message. Also converts values to other types if specified.
     * @param message GroupV2Record
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.GroupV2Record,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GroupV2Record to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of an AccountRecord. */
  interface IAccountRecord {
    /** AccountRecord profileKey */
    profileKey?: Uint8Array | null;

    /** AccountRecord givenName */
    givenName?: string | null;

    /** AccountRecord familyName */
    familyName?: string | null;

    /** AccountRecord avatarUrl */
    avatarUrl?: string | null;

    /** AccountRecord noteToSelfArchived */
    noteToSelfArchived?: boolean | null;

    /** AccountRecord readReceipts */
    readReceipts?: boolean | null;

    /** AccountRecord sealedSenderIndicators */
    sealedSenderIndicators?: boolean | null;

    /** AccountRecord typingIndicators */
    typingIndicators?: boolean | null;

    /** AccountRecord proxiedLinkPreviews */
    proxiedLinkPreviews?: boolean | null;

    /** AccountRecord noteToSelfMarkedUnread */
    noteToSelfMarkedUnread?: boolean | null;

    /** AccountRecord linkPreviews */
    linkPreviews?: boolean | null;

    /** AccountRecord phoneNumberSharingMode */
    phoneNumberSharingMode?: signalservice.AccountRecord.PhoneNumberSharingMode | null;

    /** AccountRecord notDiscoverableByPhoneNumber */
    notDiscoverableByPhoneNumber?: boolean | null;

    /** AccountRecord pinnedConversations */
    pinnedConversations?:
      | signalservice.AccountRecord.IPinnedConversation[]
      | null;

    /** AccountRecord preferContactAvatars */
    preferContactAvatars?: boolean | null;

    /** AccountRecord universalExpireTimer */
    universalExpireTimer?: number | null;

    /** AccountRecord primarySendsSms */
    primarySendsSms?: boolean | null;

    /** AccountRecord e164 */
    e164?: string | null;

    /** AccountRecord preferredReactionEmoji */
    preferredReactionEmoji?: string[] | null;

    /** AccountRecord subscriberId */
    subscriberId?: Uint8Array | null;

    /** AccountRecord subscriberCurrencyCode */
    subscriberCurrencyCode?: string | null;

    /** AccountRecord displayBadgesOnProfile */
    displayBadgesOnProfile?: boolean | null;

    /** AccountRecord keepMutedChatsArchived */
    keepMutedChatsArchived?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an AccountRecord. */
  class AccountRecord implements IAccountRecord {
    /**
     * Constructs a new AccountRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IAccountRecord);

    /** AccountRecord profileKey. */
    public profileKey: Uint8Array;

    /** AccountRecord givenName. */
    public givenName: string;

    /** AccountRecord familyName. */
    public familyName: string;

    /** AccountRecord avatarUrl. */
    public avatarUrl: string;

    /** AccountRecord noteToSelfArchived. */
    public noteToSelfArchived: boolean;

    /** AccountRecord readReceipts. */
    public readReceipts: boolean;

    /** AccountRecord sealedSenderIndicators. */
    public sealedSenderIndicators: boolean;

    /** AccountRecord typingIndicators. */
    public typingIndicators: boolean;

    /** AccountRecord proxiedLinkPreviews. */
    public proxiedLinkPreviews: boolean;

    /** AccountRecord noteToSelfMarkedUnread. */
    public noteToSelfMarkedUnread: boolean;

    /** AccountRecord linkPreviews. */
    public linkPreviews: boolean;

    /** AccountRecord phoneNumberSharingMode. */
    public phoneNumberSharingMode: signalservice.AccountRecord.PhoneNumberSharingMode;

    /** AccountRecord notDiscoverableByPhoneNumber. */
    public notDiscoverableByPhoneNumber: boolean;

    /** AccountRecord pinnedConversations. */
    public pinnedConversations: signalservice.AccountRecord.IPinnedConversation[];

    /** AccountRecord preferContactAvatars. */
    public preferContactAvatars: boolean;

    /** AccountRecord universalExpireTimer. */
    public universalExpireTimer: number;

    /** AccountRecord primarySendsSms. */
    public primarySendsSms: boolean;

    /** AccountRecord e164. */
    public e164: string;

    /** AccountRecord preferredReactionEmoji. */
    public preferredReactionEmoji: string[];

    /** AccountRecord subscriberId. */
    public subscriberId: Uint8Array;

    /** AccountRecord subscriberCurrencyCode. */
    public subscriberCurrencyCode: string;

    /** AccountRecord displayBadgesOnProfile. */
    public displayBadgesOnProfile: boolean;

    /** AccountRecord keepMutedChatsArchived. */
    public keepMutedChatsArchived: boolean;

    /**
     * Encodes the specified AccountRecord message. Does not implicitly {@link signalservice.AccountRecord.verify|verify} messages.
     * @param message AccountRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IAccountRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AccountRecord message, length delimited. Does not implicitly {@link signalservice.AccountRecord.verify|verify} messages.
     * @param message AccountRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IAccountRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AccountRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AccountRecord;

    /**
     * Decodes an AccountRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AccountRecord;

    /**
     * Creates an AccountRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.AccountRecord;

    /**
     * Creates a plain object from an AccountRecord message. Also converts values to other types if specified.
     * @param message AccountRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.AccountRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AccountRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AccountRecord {
    /** PhoneNumberSharingMode enum. */
    enum PhoneNumberSharingMode {
      EVERYBODY = 0,
      CONTACTS_ONLY = 1,
      NOBODY = 2,
    }

    /** Properties of a PinnedConversation. */
    interface IPinnedConversation {
      /** PinnedConversation contact */
      contact?: signalservice.AccountRecord.PinnedConversation.IContact | null;

      /** PinnedConversation legacyGroupId */
      legacyGroupId?: Uint8Array | null;

      /** PinnedConversation groupMasterKey */
      groupMasterKey?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a PinnedConversation. */
    class PinnedConversation implements IPinnedConversation {
      /**
       * Constructs a new PinnedConversation.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.AccountRecord.IPinnedConversation);

      /** PinnedConversation contact. */
      public contact?: signalservice.AccountRecord.PinnedConversation.IContact | null;

      /** PinnedConversation legacyGroupId. */
      public legacyGroupId?: Uint8Array | null;

      /** PinnedConversation groupMasterKey. */
      public groupMasterKey?: Uint8Array | null;

      /** PinnedConversation identifier. */
      public identifier?: 'contact' | 'legacyGroupId' | 'groupMasterKey';

      /**
       * Encodes the specified PinnedConversation message. Does not implicitly {@link signalservice.AccountRecord.PinnedConversation.verify|verify} messages.
       * @param message PinnedConversation message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.AccountRecord.IPinnedConversation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PinnedConversation message, length delimited. Does not implicitly {@link signalservice.AccountRecord.PinnedConversation.verify|verify} messages.
       * @param message PinnedConversation message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.AccountRecord.IPinnedConversation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PinnedConversation message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PinnedConversation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.AccountRecord.PinnedConversation;

      /**
       * Decodes a PinnedConversation message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PinnedConversation
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.AccountRecord.PinnedConversation;

      /**
       * Creates a PinnedConversation message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PinnedConversation
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.AccountRecord.PinnedConversation;

      /**
       * Creates a plain object from a PinnedConversation message. Also converts values to other types if specified.
       * @param message PinnedConversation
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.AccountRecord.PinnedConversation,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PinnedConversation to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace PinnedConversation {
      /** Properties of a Contact. */
      interface IContact {
        /** Contact uuid */
        uuid?: string | null;

        /** Contact e164 */
        e164?: string | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a Contact. */
      class Contact implements IContact {
        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signalservice.AccountRecord.PinnedConversation.IContact
        );

        /** Contact uuid. */
        public uuid: string;

        /** Contact e164. */
        public e164: string;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link signalservice.AccountRecord.PinnedConversation.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signalservice.AccountRecord.PinnedConversation.IContact,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link signalservice.AccountRecord.PinnedConversation.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signalservice.AccountRecord.PinnedConversation.IContact,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.AccountRecord.PinnedConversation.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.AccountRecord.PinnedConversation.Contact;

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signalservice.AccountRecord.PinnedConversation.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signalservice.AccountRecord.PinnedConversation.Contact,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }
  }

  /** Properties of a StoryDistributionListRecord. */
  interface IStoryDistributionListRecord {
    /** StoryDistributionListRecord identifier */
    identifier?: Uint8Array | null;

    /** StoryDistributionListRecord name */
    name?: string | null;

    /** StoryDistributionListRecord recipientUuids */
    recipientUuids?: string[] | null;

    /** StoryDistributionListRecord deletedAtTimestamp */
    deletedAtTimestamp?: Long | null;

    /** StoryDistributionListRecord allowsReplies */
    allowsReplies?: boolean | null;

    /** StoryDistributionListRecord isBlockList */
    isBlockList?: boolean | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StoryDistributionListRecord. */
  class StoryDistributionListRecord implements IStoryDistributionListRecord {
    /**
     * Constructs a new StoryDistributionListRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStoryDistributionListRecord);

    /** StoryDistributionListRecord identifier. */
    public identifier: Uint8Array;

    /** StoryDistributionListRecord name. */
    public name: string;

    /** StoryDistributionListRecord recipientUuids. */
    public recipientUuids: string[];

    /** StoryDistributionListRecord deletedAtTimestamp. */
    public deletedAtTimestamp: Long;

    /** StoryDistributionListRecord allowsReplies. */
    public allowsReplies: boolean;

    /** StoryDistributionListRecord isBlockList. */
    public isBlockList: boolean;

    /**
     * Encodes the specified StoryDistributionListRecord message. Does not implicitly {@link signalservice.StoryDistributionListRecord.verify|verify} messages.
     * @param message StoryDistributionListRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStoryDistributionListRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StoryDistributionListRecord message, length delimited. Does not implicitly {@link signalservice.StoryDistributionListRecord.verify|verify} messages.
     * @param message StoryDistributionListRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStoryDistributionListRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StoryDistributionListRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StoryDistributionListRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StoryDistributionListRecord;

    /**
     * Decodes a StoryDistributionListRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StoryDistributionListRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StoryDistributionListRecord;

    /**
     * Creates a StoryDistributionListRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StoryDistributionListRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StoryDistributionListRecord;

    /**
     * Creates a plain object from a StoryDistributionListRecord message. Also converts values to other types if specified.
     * @param message StoryDistributionListRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StoryDistributionListRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StoryDistributionListRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a StickerPackRecord. */
  interface IStickerPackRecord {
    /** StickerPackRecord packId */
    packId?: Uint8Array | null;

    /** StickerPackRecord packKey */
    packKey?: Uint8Array | null;

    /** StickerPackRecord position */
    position?: number | null;

    /** StickerPackRecord deletedAtTimestamp */
    deletedAtTimestamp?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StickerPackRecord. */
  class StickerPackRecord implements IStickerPackRecord {
    /**
     * Constructs a new StickerPackRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStickerPackRecord);

    /** StickerPackRecord packId. */
    public packId: Uint8Array;

    /** StickerPackRecord packKey. */
    public packKey: Uint8Array;

    /** StickerPackRecord position. */
    public position: number;

    /** StickerPackRecord deletedAtTimestamp. */
    public deletedAtTimestamp: Long;

    /**
     * Encodes the specified StickerPackRecord message. Does not implicitly {@link signalservice.StickerPackRecord.verify|verify} messages.
     * @param message StickerPackRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStickerPackRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StickerPackRecord message, length delimited. Does not implicitly {@link signalservice.StickerPackRecord.verify|verify} messages.
     * @param message StickerPackRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStickerPackRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StickerPackRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StickerPackRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StickerPackRecord;

    /**
     * Decodes a StickerPackRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StickerPackRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StickerPackRecord;

    /**
     * Creates a StickerPackRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StickerPackRecord
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StickerPackRecord;

    /**
     * Creates a plain object from a StickerPackRecord message. Also converts values to other types if specified.
     * @param message StickerPackRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StickerPackRecord,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StickerPackRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a StickerPack. */
  interface IStickerPack {
    /** StickerPack title */
    title?: string | null;

    /** StickerPack author */
    author?: string | null;

    /** StickerPack cover */
    cover?: signalservice.StickerPack.ISticker | null;

    /** StickerPack stickers */
    stickers?: signalservice.StickerPack.ISticker[] | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a StickerPack. */
  class StickerPack implements IStickerPack {
    /**
     * Constructs a new StickerPack.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IStickerPack);

    /** StickerPack title. */
    public title: string;

    /** StickerPack author. */
    public author: string;

    /** StickerPack cover. */
    public cover?: signalservice.StickerPack.ISticker | null;

    /** StickerPack stickers. */
    public stickers: signalservice.StickerPack.ISticker[];

    /**
     * Encodes the specified StickerPack message. Does not implicitly {@link signalservice.StickerPack.verify|verify} messages.
     * @param message StickerPack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IStickerPack,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StickerPack message, length delimited. Does not implicitly {@link signalservice.StickerPack.verify|verify} messages.
     * @param message StickerPack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IStickerPack,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StickerPack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StickerPack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StickerPack;

    /**
     * Decodes a StickerPack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StickerPack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StickerPack;

    /**
     * Creates a StickerPack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StickerPack
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.StickerPack;

    /**
     * Creates a plain object from a StickerPack message. Also converts values to other types if specified.
     * @param message StickerPack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.StickerPack,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this StickerPack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace StickerPack {
    /** Properties of a Sticker. */
    interface ISticker {
      /** Sticker id */
      id?: number | null;

      /** Sticker emoji */
      emoji?: string | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Sticker. */
    class Sticker implements ISticker {
      /**
       * Constructs a new Sticker.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.StickerPack.ISticker);

      /** Sticker id. */
      public id: number;

      /** Sticker emoji. */
      public emoji: string;

      /**
       * Encodes the specified Sticker message. Does not implicitly {@link signalservice.StickerPack.Sticker.verify|verify} messages.
       * @param message Sticker message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.StickerPack.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Sticker message, length delimited. Does not implicitly {@link signalservice.StickerPack.Sticker.verify|verify} messages.
       * @param message Sticker message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.StickerPack.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Sticker message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Sticker
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.StickerPack.Sticker;

      /**
       * Decodes a Sticker message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Sticker
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.StickerPack.Sticker;

      /**
       * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Sticker
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.StickerPack.Sticker;

      /**
       * Creates a plain object from a Sticker message. Also converts values to other types if specified.
       * @param message Sticker
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.StickerPack.Sticker,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Sticker to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a WebSocketRequestMessage. */
  interface IWebSocketRequestMessage {
    /** WebSocketRequestMessage verb */
    verb?: string | null;

    /** WebSocketRequestMessage path */
    path?: string | null;

    /** WebSocketRequestMessage body */
    body?: Uint8Array | null;

    /** WebSocketRequestMessage headers */
    headers?: string[] | null;

    /** WebSocketRequestMessage id */
    id?: Long | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a WebSocketRequestMessage. */
  class WebSocketRequestMessage implements IWebSocketRequestMessage {
    /**
     * Constructs a new WebSocketRequestMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IWebSocketRequestMessage);

    /** WebSocketRequestMessage verb. */
    public verb: string;

    /** WebSocketRequestMessage path. */
    public path: string;

    /** WebSocketRequestMessage body. */
    public body: Uint8Array;

    /** WebSocketRequestMessage headers. */
    public headers: string[];

    /** WebSocketRequestMessage id. */
    public id: Long;

    /**
     * Encodes the specified WebSocketRequestMessage message. Does not implicitly {@link signalservice.WebSocketRequestMessage.verify|verify} messages.
     * @param message WebSocketRequestMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IWebSocketRequestMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WebSocketRequestMessage message, length delimited. Does not implicitly {@link signalservice.WebSocketRequestMessage.verify|verify} messages.
     * @param message WebSocketRequestMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IWebSocketRequestMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WebSocketRequestMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebSocketRequestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketRequestMessage;

    /**
     * Decodes a WebSocketRequestMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebSocketRequestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketRequestMessage;

    /**
     * Creates a WebSocketRequestMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebSocketRequestMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.WebSocketRequestMessage;

    /**
     * Creates a plain object from a WebSocketRequestMessage message. Also converts values to other types if specified.
     * @param message WebSocketRequestMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.WebSocketRequestMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WebSocketRequestMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a WebSocketResponseMessage. */
  interface IWebSocketResponseMessage {
    /** WebSocketResponseMessage id */
    id?: Long | null;

    /** WebSocketResponseMessage status */
    status?: number | null;

    /** WebSocketResponseMessage message */
    message?: string | null;

    /** WebSocketResponseMessage headers */
    headers?: string[] | null;

    /** WebSocketResponseMessage body */
    body?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a WebSocketResponseMessage. */
  class WebSocketResponseMessage implements IWebSocketResponseMessage {
    /**
     * Constructs a new WebSocketResponseMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IWebSocketResponseMessage);

    /** WebSocketResponseMessage id. */
    public id: Long;

    /** WebSocketResponseMessage status. */
    public status: number;

    /** WebSocketResponseMessage message. */
    public message: string;

    /** WebSocketResponseMessage headers. */
    public headers: string[];

    /** WebSocketResponseMessage body. */
    public body: Uint8Array;

    /**
     * Encodes the specified WebSocketResponseMessage message. Does not implicitly {@link signalservice.WebSocketResponseMessage.verify|verify} messages.
     * @param message WebSocketResponseMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IWebSocketResponseMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WebSocketResponseMessage message, length delimited. Does not implicitly {@link signalservice.WebSocketResponseMessage.verify|verify} messages.
     * @param message WebSocketResponseMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IWebSocketResponseMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WebSocketResponseMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebSocketResponseMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketResponseMessage;

    /**
     * Decodes a WebSocketResponseMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebSocketResponseMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketResponseMessage;

    /**
     * Creates a WebSocketResponseMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebSocketResponseMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.WebSocketResponseMessage;

    /**
     * Creates a plain object from a WebSocketResponseMessage message. Also converts values to other types if specified.
     * @param message WebSocketResponseMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.WebSocketResponseMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WebSocketResponseMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Properties of a WebSocketMessage. */
  interface IWebSocketMessage {
    /** WebSocketMessage type */
    type?: signalservice.WebSocketMessage.Type | null;

    /** WebSocketMessage request */
    request?: signalservice.IWebSocketRequestMessage | null;

    /** WebSocketMessage response */
    response?: signalservice.IWebSocketResponseMessage | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a WebSocketMessage. */
  class WebSocketMessage implements IWebSocketMessage {
    /**
     * Constructs a new WebSocketMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IWebSocketMessage);

    /** WebSocketMessage type. */
    public type: signalservice.WebSocketMessage.Type;

    /** WebSocketMessage request. */
    public request?: signalservice.IWebSocketRequestMessage | null;

    /** WebSocketMessage response. */
    public response?: signalservice.IWebSocketResponseMessage | null;

    /**
     * Encodes the specified WebSocketMessage message. Does not implicitly {@link signalservice.WebSocketMessage.verify|verify} messages.
     * @param message WebSocketMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IWebSocketMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WebSocketMessage message, length delimited. Does not implicitly {@link signalservice.WebSocketMessage.verify|verify} messages.
     * @param message WebSocketMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IWebSocketMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WebSocketMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebSocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketMessage;

    /**
     * Decodes a WebSocketMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebSocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketMessage;

    /**
     * Creates a WebSocketMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebSocketMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.WebSocketMessage;

    /**
     * Creates a plain object from a WebSocketMessage message. Also converts values to other types if specified.
     * @param message WebSocketMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.WebSocketMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WebSocketMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace WebSocketMessage {
    /** Type enum. */
    enum Type {
      UNKNOWN = 0,
      REQUEST = 1,
      RESPONSE = 2,
    }
  }

  /** Properties of a ServerCertificate. */
  interface IServerCertificate {
    /** ServerCertificate certificate */
    certificate?: Uint8Array | null;

    /** ServerCertificate signature */
    signature?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a ServerCertificate. */
  class ServerCertificate implements IServerCertificate {
    /**
     * Constructs a new ServerCertificate.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IServerCertificate);

    /** ServerCertificate certificate. */
    public certificate: Uint8Array;

    /** ServerCertificate signature. */
    public signature: Uint8Array;

    /**
     * Encodes the specified ServerCertificate message. Does not implicitly {@link signalservice.ServerCertificate.verify|verify} messages.
     * @param message ServerCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IServerCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ServerCertificate message, length delimited. Does not implicitly {@link signalservice.ServerCertificate.verify|verify} messages.
     * @param message ServerCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IServerCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ServerCertificate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ServerCertificate;

    /**
     * Decodes a ServerCertificate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ServerCertificate;

    /**
     * Creates a ServerCertificate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerCertificate
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.ServerCertificate;

    /**
     * Creates a plain object from a ServerCertificate message. Also converts values to other types if specified.
     * @param message ServerCertificate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.ServerCertificate,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ServerCertificate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ServerCertificate {
    /** Properties of a Certificate. */
    interface ICertificate {
      /** Certificate id */
      id?: number | null;

      /** Certificate key */
      key?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Certificate. */
    class Certificate implements ICertificate {
      /**
       * Constructs a new Certificate.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.ServerCertificate.ICertificate);

      /** Certificate id. */
      public id: number;

      /** Certificate key. */
      public key: Uint8Array;

      /**
       * Encodes the specified Certificate message. Does not implicitly {@link signalservice.ServerCertificate.Certificate.verify|verify} messages.
       * @param message Certificate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.ServerCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Certificate message, length delimited. Does not implicitly {@link signalservice.ServerCertificate.Certificate.verify|verify} messages.
       * @param message Certificate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.ServerCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Certificate message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Certificate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ServerCertificate.Certificate;

      /**
       * Decodes a Certificate message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Certificate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ServerCertificate.Certificate;

      /**
       * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Certificate
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.ServerCertificate.Certificate;

      /**
       * Creates a plain object from a Certificate message. Also converts values to other types if specified.
       * @param message Certificate
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.ServerCertificate.Certificate,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Certificate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of a SenderCertificate. */
  interface ISenderCertificate {
    /** SenderCertificate certificate */
    certificate?: Uint8Array | null;

    /** SenderCertificate signature */
    signature?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents a SenderCertificate. */
  class SenderCertificate implements ISenderCertificate {
    /**
     * Constructs a new SenderCertificate.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.ISenderCertificate);

    /** SenderCertificate certificate. */
    public certificate: Uint8Array;

    /** SenderCertificate signature. */
    public signature: Uint8Array;

    /**
     * Encodes the specified SenderCertificate message. Does not implicitly {@link signalservice.SenderCertificate.verify|verify} messages.
     * @param message SenderCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.ISenderCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SenderCertificate message, length delimited. Does not implicitly {@link signalservice.SenderCertificate.verify|verify} messages.
     * @param message SenderCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.ISenderCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SenderCertificate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SenderCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.SenderCertificate;

    /**
     * Decodes a SenderCertificate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SenderCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.SenderCertificate;

    /**
     * Creates a SenderCertificate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SenderCertificate
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.SenderCertificate;

    /**
     * Creates a plain object from a SenderCertificate message. Also converts values to other types if specified.
     * @param message SenderCertificate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.SenderCertificate,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SenderCertificate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace SenderCertificate {
    /** Properties of a Certificate. */
    interface ICertificate {
      /** Certificate senderE164 */
      senderE164?: string | null;

      /** Certificate senderUuid */
      senderUuid?: string | null;

      /** Certificate senderDevice */
      senderDevice?: number | null;

      /** Certificate expires */
      expires?: Long | null;

      /** Certificate identityKey */
      identityKey?: Uint8Array | null;

      /** Certificate signer */
      signer?: signalservice.IServerCertificate | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Certificate. */
    class Certificate implements ICertificate {
      /**
       * Constructs a new Certificate.
       * @param [properties] Properties to set
       */
      constructor(properties?: signalservice.SenderCertificate.ICertificate);

      /** Certificate senderE164. */
      public senderE164: string;

      /** Certificate senderUuid. */
      public senderUuid: string;

      /** Certificate senderDevice. */
      public senderDevice: number;

      /** Certificate expires. */
      public expires: Long;

      /** Certificate identityKey. */
      public identityKey: Uint8Array;

      /** Certificate signer. */
      public signer?: signalservice.IServerCertificate | null;

      /**
       * Encodes the specified Certificate message. Does not implicitly {@link signalservice.SenderCertificate.Certificate.verify|verify} messages.
       * @param message Certificate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.SenderCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Certificate message, length delimited. Does not implicitly {@link signalservice.SenderCertificate.Certificate.verify|verify} messages.
       * @param message Certificate message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.SenderCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Certificate message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Certificate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SenderCertificate.Certificate;

      /**
       * Decodes a Certificate message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Certificate
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SenderCertificate.Certificate;

      /**
       * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Certificate
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.SenderCertificate.Certificate;

      /**
       * Creates a plain object from a Certificate message. Also converts values to other types if specified.
       * @param message Certificate
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.SenderCertificate.Certificate,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Certificate to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  /** Properties of an UnidentifiedSenderMessage. */
  interface IUnidentifiedSenderMessage {
    /** UnidentifiedSenderMessage ephemeralPublic */
    ephemeralPublic?: Uint8Array | null;

    /** UnidentifiedSenderMessage encryptedStatic */
    encryptedStatic?: Uint8Array | null;

    /** UnidentifiedSenderMessage encryptedMessage */
    encryptedMessage?: Uint8Array | null;

    __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  /** Represents an UnidentifiedSenderMessage. */
  class UnidentifiedSenderMessage implements IUnidentifiedSenderMessage {
    /**
     * Constructs a new UnidentifiedSenderMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: signalservice.IUnidentifiedSenderMessage);

    /** UnidentifiedSenderMessage ephemeralPublic. */
    public ephemeralPublic: Uint8Array;

    /** UnidentifiedSenderMessage encryptedStatic. */
    public encryptedStatic: Uint8Array;

    /** UnidentifiedSenderMessage encryptedMessage. */
    public encryptedMessage: Uint8Array;

    /**
     * Encodes the specified UnidentifiedSenderMessage message. Does not implicitly {@link signalservice.UnidentifiedSenderMessage.verify|verify} messages.
     * @param message UnidentifiedSenderMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: signalservice.IUnidentifiedSenderMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UnidentifiedSenderMessage message, length delimited. Does not implicitly {@link signalservice.UnidentifiedSenderMessage.verify|verify} messages.
     * @param message UnidentifiedSenderMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: signalservice.IUnidentifiedSenderMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UnidentifiedSenderMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnidentifiedSenderMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.UnidentifiedSenderMessage;

    /**
     * Decodes an UnidentifiedSenderMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnidentifiedSenderMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.UnidentifiedSenderMessage;

    /**
     * Creates an UnidentifiedSenderMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnidentifiedSenderMessage
     */
    public static fromObject(object: {
      [k: string]: any;
    }): signalservice.UnidentifiedSenderMessage;

    /**
     * Creates a plain object from an UnidentifiedSenderMessage message. Also converts values to other types if specified.
     * @param message UnidentifiedSenderMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: signalservice.UnidentifiedSenderMessage,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UnidentifiedSenderMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    public __unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace UnidentifiedSenderMessage {
    /** Properties of a Message. */
    interface IMessage {
      /** Message type */
      type?: signalservice.UnidentifiedSenderMessage.Message.Type | null;

      /** Message senderCertificate */
      senderCertificate?: signalservice.ISenderCertificate | null;

      /** Message content */
      content?: Uint8Array | null;

      /** Message contentHint */
      contentHint?: signalservice.UnidentifiedSenderMessage.Message.ContentHint | null;

      /** Message groupId */
      groupId?: Uint8Array | null;

      __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    /** Represents a Message. */
    class Message implements IMessage {
      /**
       * Constructs a new Message.
       * @param [properties] Properties to set
       */
      constructor(
        properties?: signalservice.UnidentifiedSenderMessage.IMessage
      );

      /** Message type. */
      public type: signalservice.UnidentifiedSenderMessage.Message.Type;

      /** Message senderCertificate. */
      public senderCertificate?: signalservice.ISenderCertificate | null;

      /** Message content. */
      public content: Uint8Array;

      /** Message contentHint. */
      public contentHint: signalservice.UnidentifiedSenderMessage.Message.ContentHint;

      /** Message groupId. */
      public groupId: Uint8Array;

      /**
       * Encodes the specified Message message. Does not implicitly {@link signalservice.UnidentifiedSenderMessage.Message.verify|verify} messages.
       * @param message Message message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: signalservice.UnidentifiedSenderMessage.IMessage,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Message message, length delimited. Does not implicitly {@link signalservice.UnidentifiedSenderMessage.Message.verify|verify} messages.
       * @param message Message message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: signalservice.UnidentifiedSenderMessage.IMessage,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Message message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Message
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.UnidentifiedSenderMessage.Message;

      /**
       * Decodes a Message message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Message
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.UnidentifiedSenderMessage.Message;

      /**
       * Creates a Message message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Message
       */
      public static fromObject(object: {
        [k: string]: any;
      }): signalservice.UnidentifiedSenderMessage.Message;

      /**
       * Creates a plain object from a Message message. Also converts values to other types if specified.
       * @param message Message
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: signalservice.UnidentifiedSenderMessage.Message,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Message to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      public __unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Message {
      /** Type enum. */
      enum Type {
        PREKEY_MESSAGE = 1,
        MESSAGE = 2,
        SENDERKEY_MESSAGE = 7,
        PLAINTEXT_CONTENT = 8,
      }

      /** ContentHint enum. */
      enum ContentHint {
        DEFAULT = 0,
        RESENDABLE = 1,
        IMPLICIT = 2,
      }
    }
  }
}

/** Namespace signal. */
export namespace signal {
  /** Namespace proto. */
  namespace proto {
    /** Namespace storage. */
    namespace storage {
      /** Properties of a SessionStructure. */
      interface ISessionStructure {
        /** SessionStructure sessionVersion */
        sessionVersion?: number | null;

        /** SessionStructure localIdentityPublic */
        localIdentityPublic?: Uint8Array | null;

        /** SessionStructure remoteIdentityPublic */
        remoteIdentityPublic?: Uint8Array | null;

        /** SessionStructure rootKey */
        rootKey?: Uint8Array | null;

        /** SessionStructure previousCounter */
        previousCounter?: number | null;

        /** SessionStructure senderChain */
        senderChain?: signal.proto.storage.SessionStructure.IChain | null;

        /** SessionStructure receiverChains */
        receiverChains?: signal.proto.storage.SessionStructure.IChain[] | null;

        /** SessionStructure pendingPreKey */
        pendingPreKey?: signal.proto.storage.SessionStructure.IPendingPreKey | null;

        /** SessionStructure remoteRegistrationId */
        remoteRegistrationId?: number | null;

        /** SessionStructure localRegistrationId */
        localRegistrationId?: number | null;

        /** SessionStructure needsRefresh */
        needsRefresh?: boolean | null;

        /** SessionStructure aliceBaseKey */
        aliceBaseKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a SessionStructure. */
      class SessionStructure implements ISessionStructure {
        /**
         * Constructs a new SessionStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.proto.storage.ISessionStructure);

        /** SessionStructure sessionVersion. */
        public sessionVersion: number;

        /** SessionStructure localIdentityPublic. */
        public localIdentityPublic: Uint8Array;

        /** SessionStructure remoteIdentityPublic. */
        public remoteIdentityPublic: Uint8Array;

        /** SessionStructure rootKey. */
        public rootKey: Uint8Array;

        /** SessionStructure previousCounter. */
        public previousCounter: number;

        /** SessionStructure senderChain. */
        public senderChain?: signal.proto.storage.SessionStructure.IChain | null;

        /** SessionStructure receiverChains. */
        public receiverChains: signal.proto.storage.SessionStructure.IChain[];

        /** SessionStructure pendingPreKey. */
        public pendingPreKey?: signal.proto.storage.SessionStructure.IPendingPreKey | null;

        /** SessionStructure remoteRegistrationId. */
        public remoteRegistrationId: number;

        /** SessionStructure localRegistrationId. */
        public localRegistrationId: number;

        /** SessionStructure needsRefresh. */
        public needsRefresh: boolean;

        /** SessionStructure aliceBaseKey. */
        public aliceBaseKey: Uint8Array;

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link signal.proto.storage.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.ISessionStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link signal.proto.storage.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.ISessionStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SessionStructure;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SessionStructure;

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.SessionStructure;

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @param message SessionStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.SessionStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SessionStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace SessionStructure {
        /** Properties of a Chain. */
        interface IChain {
          /** Chain senderRatchetKey */
          senderRatchetKey?: Uint8Array | null;

          /** Chain senderRatchetKeyPrivate */
          senderRatchetKeyPrivate?: Uint8Array | null;

          /** Chain chainKey */
          chainKey?: signal.proto.storage.SessionStructure.Chain.IChainKey | null;

          /** Chain messageKeys */
          messageKeys?:
            | signal.proto.storage.SessionStructure.Chain.IMessageKey[]
            | null;

          __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Represents a Chain. */
        class Chain implements IChain {
          /**
           * Constructs a new Chain.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: signal.proto.storage.SessionStructure.IChain
          );

          /** Chain senderRatchetKey. */
          public senderRatchetKey: Uint8Array;

          /** Chain senderRatchetKeyPrivate. */
          public senderRatchetKeyPrivate: Uint8Array;

          /** Chain chainKey. */
          public chainKey?: signal.proto.storage.SessionStructure.Chain.IChainKey | null;

          /** Chain messageKeys. */
          public messageKeys: signal.proto.storage.SessionStructure.Chain.IMessageKey[];

          /**
           * Encodes the specified Chain message. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.verify|verify} messages.
           * @param message Chain message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: signal.proto.storage.SessionStructure.IChain,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified Chain message, length delimited. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.verify|verify} messages.
           * @param message Chain message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: signal.proto.storage.SessionStructure.IChain,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Chain message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Chain
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SessionStructure.Chain;

          /**
           * Decodes a Chain message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Chain
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SessionStructure.Chain;

          /**
           * Creates a Chain message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Chain
           */
          public static fromObject(object: {
            [k: string]: any;
          }): signal.proto.storage.SessionStructure.Chain;

          /**
           * Creates a plain object from a Chain message. Also converts values to other types if specified.
           * @param message Chain
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: signal.proto.storage.SessionStructure.Chain,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Chain to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };

          public __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        namespace Chain {
          /** Properties of a ChainKey. */
          interface IChainKey {
            /** ChainKey index */
            index?: number | null;

            /** ChainKey key */
            key?: Uint8Array | null;

            __unknownFields?: ReadonlyArray<Uint8Array>;
          }

          /** Represents a ChainKey. */
          class ChainKey implements IChainKey {
            /**
             * Constructs a new ChainKey.
             * @param [properties] Properties to set
             */
            constructor(
              properties?: signal.proto.storage.SessionStructure.Chain.IChainKey
            );

            /** ChainKey index. */
            public index: number;

            /** ChainKey key. */
            public key: Uint8Array;

            /**
             * Encodes the specified ChainKey message. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.ChainKey.verify|verify} messages.
             * @param message ChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
              message: signal.proto.storage.SessionStructure.Chain.IChainKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.ChainKey.verify|verify} messages.
             * @param message ChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(
              message: signal.proto.storage.SessionStructure.Chain.IChainKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Decodes a ChainKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): signal.proto.storage.SessionStructure.Chain.ChainKey;

            /**
             * Decodes a ChainKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): signal.proto.storage.SessionStructure.Chain.ChainKey;

            /**
             * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChainKey
             */
            public static fromObject(object: {
              [k: string]: any;
            }): signal.proto.storage.SessionStructure.Chain.ChainKey;

            /**
             * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
             * @param message ChainKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
              message: signal.proto.storage.SessionStructure.Chain.ChainKey,
              options?: $protobuf.IConversionOptions
            ): { [k: string]: any };

            /**
             * Converts this ChainKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            public __unknownFields?: ReadonlyArray<Uint8Array>;
          }

          /** Properties of a MessageKey. */
          interface IMessageKey {
            /** MessageKey index */
            index?: number | null;

            /** MessageKey cipherKey */
            cipherKey?: Uint8Array | null;

            /** MessageKey macKey */
            macKey?: Uint8Array | null;

            /** MessageKey iv */
            iv?: Uint8Array | null;

            __unknownFields?: ReadonlyArray<Uint8Array>;
          }

          /** Represents a MessageKey. */
          class MessageKey implements IMessageKey {
            /**
             * Constructs a new MessageKey.
             * @param [properties] Properties to set
             */
            constructor(
              properties?: signal.proto.storage.SessionStructure.Chain.IMessageKey
            );

            /** MessageKey index. */
            public index: number;

            /** MessageKey cipherKey. */
            public cipherKey: Uint8Array;

            /** MessageKey macKey. */
            public macKey: Uint8Array;

            /** MessageKey iv. */
            public iv: Uint8Array;

            /**
             * Encodes the specified MessageKey message. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.MessageKey.verify|verify} messages.
             * @param message MessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
              message: signal.proto.storage.SessionStructure.Chain.IMessageKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link signal.proto.storage.SessionStructure.Chain.MessageKey.verify|verify} messages.
             * @param message MessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(
              message: signal.proto.storage.SessionStructure.Chain.IMessageKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Decodes a MessageKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): signal.proto.storage.SessionStructure.Chain.MessageKey;

            /**
             * Decodes a MessageKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): signal.proto.storage.SessionStructure.Chain.MessageKey;

            /**
             * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageKey
             */
            public static fromObject(object: {
              [k: string]: any;
            }): signal.proto.storage.SessionStructure.Chain.MessageKey;

            /**
             * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
             * @param message MessageKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
              message: signal.proto.storage.SessionStructure.Chain.MessageKey,
              options?: $protobuf.IConversionOptions
            ): { [k: string]: any };

            /**
             * Converts this MessageKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            public __unknownFields?: ReadonlyArray<Uint8Array>;
          }
        }

        /** Properties of a PendingPreKey. */
        interface IPendingPreKey {
          /** PendingPreKey preKeyId */
          preKeyId?: number | null;

          /** PendingPreKey signedPreKeyId */
          signedPreKeyId?: number | null;

          /** PendingPreKey baseKey */
          baseKey?: Uint8Array | null;

          __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Represents a PendingPreKey. */
        class PendingPreKey implements IPendingPreKey {
          /**
           * Constructs a new PendingPreKey.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: signal.proto.storage.SessionStructure.IPendingPreKey
          );

          /** PendingPreKey preKeyId. */
          public preKeyId: number;

          /** PendingPreKey signedPreKeyId. */
          public signedPreKeyId: number;

          /** PendingPreKey baseKey. */
          public baseKey: Uint8Array;

          /**
           * Encodes the specified PendingPreKey message. Does not implicitly {@link signal.proto.storage.SessionStructure.PendingPreKey.verify|verify} messages.
           * @param message PendingPreKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: signal.proto.storage.SessionStructure.IPendingPreKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link signal.proto.storage.SessionStructure.PendingPreKey.verify|verify} messages.
           * @param message PendingPreKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: signal.proto.storage.SessionStructure.IPendingPreKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a PendingPreKey message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns PendingPreKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SessionStructure.PendingPreKey;

          /**
           * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns PendingPreKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SessionStructure.PendingPreKey;

          /**
           * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns PendingPreKey
           */
          public static fromObject(object: {
            [k: string]: any;
          }): signal.proto.storage.SessionStructure.PendingPreKey;

          /**
           * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
           * @param message PendingPreKey
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: signal.proto.storage.SessionStructure.PendingPreKey,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this PendingPreKey to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };

          public __unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      /** Properties of a RecordStructure. */
      interface IRecordStructure {
        /** RecordStructure currentSession */
        currentSession?: signal.proto.storage.ISessionStructure | null;

        /** RecordStructure previousSessions */
        previousSessions?: signal.proto.storage.ISessionStructure[] | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a RecordStructure. */
      class RecordStructure implements IRecordStructure {
        /**
         * Constructs a new RecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.proto.storage.IRecordStructure);

        /** RecordStructure currentSession. */
        public currentSession?: signal.proto.storage.ISessionStructure | null;

        /** RecordStructure previousSessions. */
        public previousSessions: signal.proto.storage.ISessionStructure[];

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link signal.proto.storage.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.IRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link signal.proto.storage.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.IRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.RecordStructure;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.RecordStructure;

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.RecordStructure;

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @param message RecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.RecordStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this RecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a PreKeyRecordStructure. */
      interface IPreKeyRecordStructure {
        /** PreKeyRecordStructure id */
        id?: number | null;

        /** PreKeyRecordStructure publicKey */
        publicKey?: Uint8Array | null;

        /** PreKeyRecordStructure privateKey */
        privateKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a PreKeyRecordStructure. */
      class PreKeyRecordStructure implements IPreKeyRecordStructure {
        /**
         * Constructs a new PreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.proto.storage.IPreKeyRecordStructure);

        /** PreKeyRecordStructure id. */
        public id: number;

        /** PreKeyRecordStructure publicKey. */
        public publicKey: Uint8Array;

        /** PreKeyRecordStructure privateKey. */
        public privateKey: Uint8Array;

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link signal.proto.storage.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.IPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link signal.proto.storage.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.IPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.PreKeyRecordStructure;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.PreKeyRecordStructure;

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeyRecordStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.PreKeyRecordStructure;

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message PreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.PreKeyRecordStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a SignedPreKeyRecordStructure. */
      interface ISignedPreKeyRecordStructure {
        /** SignedPreKeyRecordStructure id */
        id?: number | null;

        /** SignedPreKeyRecordStructure publicKey */
        publicKey?: Uint8Array | null;

        /** SignedPreKeyRecordStructure privateKey */
        privateKey?: Uint8Array | null;

        /** SignedPreKeyRecordStructure signature */
        signature?: Uint8Array | null;

        /** SignedPreKeyRecordStructure timestamp */
        timestamp?: Long | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a SignedPreKeyRecordStructure. */
      class SignedPreKeyRecordStructure
        implements ISignedPreKeyRecordStructure
      {
        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signal.proto.storage.ISignedPreKeyRecordStructure
        );

        /** SignedPreKeyRecordStructure id. */
        public id: number;

        /** SignedPreKeyRecordStructure publicKey. */
        public publicKey: Uint8Array;

        /** SignedPreKeyRecordStructure privateKey. */
        public privateKey: Uint8Array;

        /** SignedPreKeyRecordStructure signature. */
        public signature: Uint8Array;

        /** SignedPreKeyRecordStructure timestamp. */
        public timestamp: Long;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link signal.proto.storage.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.ISignedPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link signal.proto.storage.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.ISignedPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SignedPreKeyRecordStructure;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SignedPreKeyRecordStructure;

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedPreKeyRecordStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.SignedPreKeyRecordStructure;

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SignedPreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.SignedPreKeyRecordStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of an IdentityKeyPairStructure. */
      interface IIdentityKeyPairStructure {
        /** IdentityKeyPairStructure publicKey */
        publicKey?: Uint8Array | null;

        /** IdentityKeyPairStructure privateKey */
        privateKey?: Uint8Array | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents an IdentityKeyPairStructure. */
      class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
        /**
         * Constructs a new IdentityKeyPairStructure.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signal.proto.storage.IIdentityKeyPairStructure
        );

        /** IdentityKeyPairStructure publicKey. */
        public publicKey: Uint8Array;

        /** IdentityKeyPairStructure privateKey. */
        public privateKey: Uint8Array;

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link signal.proto.storage.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.IIdentityKeyPairStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link signal.proto.storage.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.IIdentityKeyPairStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.IdentityKeyPairStructure;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.IdentityKeyPairStructure;

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdentityKeyPairStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.IdentityKeyPairStructure;

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @param message IdentityKeyPairStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.IdentityKeyPairStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Properties of a SenderKeyStateStructure. */
      interface ISenderKeyStateStructure {
        /** SenderKeyStateStructure senderKeyId */
        senderKeyId?: number | null;

        /** SenderKeyStateStructure senderChainKey */
        senderChainKey?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey | null;

        /** SenderKeyStateStructure senderSigningKey */
        senderSigningKey?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey | null;

        /** SenderKeyStateStructure senderMessageKeys */
        senderMessageKeys?:
          | signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey[]
          | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a SenderKeyStateStructure. */
      class SenderKeyStateStructure implements ISenderKeyStateStructure {
        /**
         * Constructs a new SenderKeyStateStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.proto.storage.ISenderKeyStateStructure);

        /** SenderKeyStateStructure senderKeyId. */
        public senderKeyId: number;

        /** SenderKeyStateStructure senderChainKey. */
        public senderChainKey?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey | null;

        /** SenderKeyStateStructure senderSigningKey. */
        public senderSigningKey?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey | null;

        /** SenderKeyStateStructure senderMessageKeys. */
        public senderMessageKeys: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey[];

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.ISenderKeyStateStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.ISenderKeyStateStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SenderKeyStateStructure;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SenderKeyStateStructure;

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyStateStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.SenderKeyStateStructure;

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @param message SenderKeyStateStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.SenderKeyStateStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace SenderKeyStateStructure {
        /** Properties of a SenderChainKey. */
        interface ISenderChainKey {
          /** SenderChainKey iteration */
          iteration?: number | null;

          /** SenderChainKey seed */
          seed?: Uint8Array | null;

          __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Represents a SenderChainKey. */
        class SenderChainKey implements ISenderChainKey {
          /**
           * Constructs a new SenderChainKey.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey
          );

          /** SenderChainKey iteration. */
          public iteration: number;

          /** SenderChainKey seed. */
          public seed: Uint8Array;

          /**
           * Encodes the specified SenderChainKey message. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
           * @param message SenderChainKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
           * @param message SenderChainKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SenderChainKey message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SenderChainKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderChainKey;

          /**
           * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SenderChainKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderChainKey;

          /**
           * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SenderChainKey
           */
          public static fromObject(object: {
            [k: string]: any;
          }): signal.proto.storage.SenderKeyStateStructure.SenderChainKey;

          /**
           * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
           * @param message SenderChainKey
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: signal.proto.storage.SenderKeyStateStructure.SenderChainKey,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SenderChainKey to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };

          public __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Properties of a SenderMessageKey. */
        interface ISenderMessageKey {
          /** SenderMessageKey iteration */
          iteration?: number | null;

          /** SenderMessageKey seed */
          seed?: Uint8Array | null;

          __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Represents a SenderMessageKey. */
        class SenderMessageKey implements ISenderMessageKey {
          /**
           * Constructs a new SenderMessageKey.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey
          );

          /** SenderMessageKey iteration. */
          public iteration: number;

          /** SenderMessageKey seed. */
          public seed: Uint8Array;

          /**
           * Encodes the specified SenderMessageKey message. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
           * @param message SenderMessageKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
           * @param message SenderMessageKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SenderMessageKey message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SenderMessageKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderMessageKey;

          /**
           * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SenderMessageKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderMessageKey;

          /**
           * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SenderMessageKey
           */
          public static fromObject(object: {
            [k: string]: any;
          }): signal.proto.storage.SenderKeyStateStructure.SenderMessageKey;

          /**
           * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
           * @param message SenderMessageKey
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: signal.proto.storage.SenderKeyStateStructure.SenderMessageKey,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SenderMessageKey to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };

          public __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Properties of a SenderSigningKey. */
        interface ISenderSigningKey {
          /** SenderSigningKey public */
          public?: Uint8Array | null;

          /** SenderSigningKey private */
          private?: Uint8Array | null;

          __unknownFields?: ReadonlyArray<Uint8Array>;
        }

        /** Represents a SenderSigningKey. */
        class SenderSigningKey implements ISenderSigningKey {
          /**
           * Constructs a new SenderSigningKey.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey
          );

          /** SenderSigningKey public. */
          public public: Uint8Array;

          /** SenderSigningKey private. */
          public private: Uint8Array;

          /**
           * Encodes the specified SenderSigningKey message. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
           * @param message SenderSigningKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link signal.proto.storage.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
           * @param message SenderSigningKey message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SenderSigningKey message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SenderSigningKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderSigningKey;

          /**
           * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SenderSigningKey
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderSigningKey;

          /**
           * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SenderSigningKey
           */
          public static fromObject(object: {
            [k: string]: any;
          }): signal.proto.storage.SenderKeyStateStructure.SenderSigningKey;

          /**
           * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
           * @param message SenderSigningKey
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: signal.proto.storage.SenderKeyStateStructure.SenderSigningKey,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SenderSigningKey to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };

          public __unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      /** Properties of a SenderKeyRecordStructure. */
      interface ISenderKeyRecordStructure {
        /** SenderKeyRecordStructure senderKeyStates */
        senderKeyStates?:
          | signal.proto.storage.ISenderKeyStateStructure[]
          | null;

        __unknownFields?: ReadonlyArray<Uint8Array>;
      }

      /** Represents a SenderKeyRecordStructure. */
      class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
        /**
         * Constructs a new SenderKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: signal.proto.storage.ISenderKeyRecordStructure
        );

        /** SenderKeyRecordStructure senderKeyStates. */
        public senderKeyStates: signal.proto.storage.ISenderKeyStateStructure[];

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link signal.proto.storage.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: signal.proto.storage.ISenderKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link signal.proto.storage.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: signal.proto.storage.ISenderKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SenderKeyRecordStructure;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SenderKeyRecordStructure;

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyRecordStructure
         */
        public static fromObject(object: {
          [k: string]: any;
        }): signal.proto.storage.SenderKeyRecordStructure;

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SenderKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: signal.proto.storage.SenderKeyRecordStructure,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        public __unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }
  }
}
