import { PrismaClient } from "@prisma/client";

export type PrismaDataNameExcluded =
  | "$connect"
  | "$disconnect"
  | "$executeRaw"
  | "$executeRawUnsafe"
  | "$on"
  | "$queryRaw"
  | "$queryRawUnsafe"
  | "$transaction"
  | "$use";
export type PrismaMethodeNameStatic =
  | "aggregate"
  | "count"
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "findFirst"
  | "findFirstOrThrow"
  | "findMany"
  | "findUnique"
  | "findUniqueOrThrow"
  | "groupBy"
  | "update"
  | "updateMany"
  | "upsert";
type GetMM<
  PClient extends PrismaClientTemplate,
  x extends PrismaModelName<PClient> = PrismaModelName<PClient>,
  y extends keyof PClient[x] = keyof PClient[x]
> = {
  model: x;
  methode: y;
};
export type PrismaMethodeName<PClient extends PrismaClientTemplate> =
  GetMM<PClient>["methode"];

export type PrismaModelName<PClient> = Exclude<
  keyof PClient,
  PrismaDataNameExcluded
>;
export type PrismaClientQuery<PClient> = Pick<
  PClient,
  PrismaModelName<PClient>
>;
export type PrismaClientQueryPostBodyAuth = {
  userId?: number;
  emailId?: number;
  permission?: any;
};
export type PrismaClientQueryPostBodyNotification = {
  emailId: number;
  name: string;
  title: string;
  description: string;
  parametreJson: string;
};
export type PrismaClientQueryPostBodyHistory = {
  emailId: number;
  methodeName: string;
  modelName: string;
  title: string;
  description: string;
  parametre: string;
  thumbnail: string;
};
export type PrismaClientQueryRequestBody<
  PClient extends PrismaClientTemplate,
  XX = GetMM<PClient>["model"],
  YY = GetMM<PClient>["methode"]
> = {
  modelName: (XX & string) | string;
  methodeName: (YY & string) | string;
  args: any;
  auth?: PrismaClientQueryPostBodyAuth;
  notification?: PrismaClientQueryPostBodyNotification;
  history?: PrismaClientQueryPostBodyHistory;
  authorisation?: string;
};
export type PrismaRequestInit = {};
export type PrismaClientQueryResponseBody<
  PClient extends PrismaClientTemplate,
  XX = GetMM<PClient>["model"],
  YY = GetMM<PClient>["methode"]
> = {
  error?: string;
  modelName: (XX & string) | string;
  methodeName: (YY & string) | string;
  data: any;
};
function getModelProxy<PClient extends PrismaClientTemplate>(
  prismaClientQueryArgs: PrismaClientQueryArgs<PClient>,
  modelName: string | symbol
) {
  if (prismaClientQueryArgs.onGetModel instanceof Function) {
    prismaClientQueryArgs.onGetModel(modelName as PrismaModelName<PClient>);
  }
  return new Proxy<Partial<PrismaClientQuery<PClient>>>(
    {},
    {
      get(target, methodeName, receiver) {
        if (prismaClientQueryArgs.onGetMethode instanceof Function) {
          prismaClientQueryArgs.onGetMethode(
            methodeName as PrismaMethodeName<PClient>
          );
        }
        const prismaFetch = async (modelArgs: any) => {
          const fetchData = async () => {
            let history;
            if (prismaClientQueryArgs.history) {
              if (
                prismaClientQueryArgs.history.methodeNames.includes(
                  methodeName
                ) &&
                prismaClientQueryArgs.history.modelNames.includes(
                  modelName as PrismaModelName<PClient>
                ) &&
                prismaClientQueryArgs.history.setValue instanceof Function
              ) {
                history = prismaClientQueryArgs.history.setValue({
                  methodeName,
                  modelName: modelName as PrismaModelName<PClient>,
                  getArgs(_modelName, _methodeName) {
                    if (
                      modelName === _modelName &&
                      methodeName === _methodeName
                    ) {
                      return modelArgs;
                    } else {
                      return null;
                    }
                  },
                });
              }
            }
            let notification;
            if (prismaClientQueryArgs.notification) {
              if (
                prismaClientQueryArgs.notification.methodeNames.includes(
                  methodeName
                ) &&
                prismaClientQueryArgs.notification.modelNames.includes(
                  modelName as PrismaModelName<PClient>
                ) &&
                prismaClientQueryArgs.notification.setValue instanceof Function
              ) {
                notification = prismaClientQueryArgs.notification.setValue({
                  methodeName,
                  modelName: modelName as PrismaModelName<PClient>,
                  getArgs(_modelName, _methodeName) {
                    if (
                      modelName === _modelName &&
                      methodeName === _methodeName
                    ) {
                      return modelArgs;
                    } else {
                      return null;
                    }
                  },
                });
              }
            }
            const requestBody: PrismaClientQueryRequestBody<PClient> = {
              args: modelArgs,
              methodeName: methodeName as string,
              modelName: modelName as string,
              auth:
                prismaClientQueryArgs.auth instanceof Function
                  ? prismaClientQueryArgs.auth(modelArgs)
                  : typeof prismaClientQueryArgs.auth == "object"
                    ? prismaClientQueryArgs.auth
                    : undefined,
              authorisation:
                prismaClientQueryArgs.authorisation instanceof Function
                  ? prismaClientQueryArgs.authorisation(modelArgs)
                  : String(prismaClientQueryArgs.authorisation || null),
              history,
              notification,
            };
            const FnAC =
              prismaClientQueryArgs.setAbortController instanceof Function
                ? prismaClientQueryArgs.setAbortController
                : () => new AbortController();
            const AC = await FnAC(requestBody);
            const abortController =
              AC instanceof AbortController ? AC : new AbortController();
            const requestInit: PrismaRequestInit = {
              signal: abortController.signal,
              method: "POST",
              body: JSON.stringify(requestBody),
            };

            // console.log(JSON.stringify(requestBody));

            const responseBody = fetch(prismaClientQueryArgs.url, requestInit);
            if (prismaClientQueryArgs.onSendRequest instanceof Function) {
              prismaClientQueryArgs.onSendRequest({
                abortController,
                requestBody: requestBody,
                responseBody: responseBody,
              });
            }
            const responseBodyJson = await (await responseBody).json();
            if (prismaClientQueryArgs.onReceiveResponse instanceof Function) {
              prismaClientQueryArgs.onReceiveResponse({
                requestBody: requestBody,
                responseBody: responseBodyJson,
              });
            }
            return responseBodyJson.data;
          };
          const getData = async () => {
            if (
              prismaClientQueryArgs.timeOutBeforeFetching &&
              prismaClientQueryArgs.timeOutBeforeFetching > 0
            ) {
              return new Promise((resolve) => {
                setTimeout(async () => {
                  resolve(await fetchData());
                }, prismaClientQueryArgs.timeOutBeforeFetching);
              });
            }
            return await fetchData();
          };
          if (prismaClientQueryArgs.lazy) {
            return getData;
          }
          return await getData();
        };
        return prismaFetch;
      },
    }
  );
}
function initPrismaClientQueryProxy<PClient extends PrismaClientTemplate>(
  prismaClientQueryArgs: PrismaClientQueryArgs<PClient>
) {
  return new Proxy<Partial<PrismaClientQuery<PClient>>>(
    {},
    {
      get(target, p, receiver) {
        return getModelProxy<PClient>(prismaClientQueryArgs, p);
      },
    }
  );
}
export type PrismaClientTemplate = {
  $connect: any;
  $disconnect: any;
  $executeRaw: any;
  $executeRawUnsafe: any;
  $queryRaw: any;
  $queryRawUnsafe: any;
  $transaction: any;
  [x: PropertyKey]: any;
};

export type SetNotificationValue<PClient extends PrismaClientTemplate> =
  (option: {
    modelName: PrismaModelName<PClient>;
    methodeName: PrismaMethodeName<PClient>;
    getArgs: <T extends PrismaModelName<PClient>, U extends keyof PClient[T]>(
      modelName: T,
      methodeName: U
    ) => Parameters<PClient[T][U]>[0];
  }) => PrismaClientQueryPostBodyNotification;
export type SetHistoryValue<PClient extends PrismaClientTemplate> = (option: {
  modelName: PrismaModelName<PClient>;
  methodeName: PrismaMethodeName<PClient>;
  getArgs: <T extends PrismaModelName<PClient>, U extends keyof PClient[T]>(
    modelName: T,
    methodeName: U
  ) => Parameters<PClient[T][U]>[0];
}) => PrismaClientQueryPostBodyHistory;

export type PrismaClientQueryArgs<
  PClient extends PrismaClientTemplate,
  XX = GetMM<PClient>["model"],
  YY = GetMM<PClient>["methode"]
> = {
  url: string;
  notification?: {
    modelNames: PrismaModelName<PClient>[];
    methodeNames: PrismaMethodeName<PClient>[];
    setValue: SetNotificationValue<PClient>;
  };
  history?: {
    modelNames: PrismaModelName<PClient>[];
    methodeNames: PrismaMethodeName<PClient>[];
    setValue: SetHistoryValue<PClient>;
  };
  setAbortController?: (
    requestBody: PrismaClientQueryRequestBody<PClient>
  ) => AbortController | Promise<AbortController>;
  onQuery?: Partial<{
    [x in `${XX & string}.${YY & string}`]: <
      Mo extends x extends `${infer Mo}.${YY & string}` ? Mo & string : never,
      Me extends x extends `${XX & string}.${infer Me}` ? Me & string : never
    >(option: {
      modelName: Mo;
      methodeName: Me;
      getArgsValue: <
        Mo extends x extends `${infer Mo}.${YY & string}` ? Mo & string : never,
        Me extends x extends `${XX & string}.${infer Me}` ? Me & string : never
      >(
        modelName: Mo,
        methodeName: Me
      ) => Parameters<PClient[Mo][Me]>[0];
    }) => void;
  }>;
  onModelQuery?: Partial<{
    [x in XX & string]: (option: {
      modelName: x;
      methodeName: YY;
      getArgsValue: <Me extends YY | string>(
        modelName: x,
        methodeName: Me extends YY ? Me : string
      ) => Me extends YY ? Parameters<PClient[x][Me & string]>[0] : any;
    }) => void;
  }>;
  onMethodeQuery?: Partial<{
    [y in YY & string]: (option: {
      modelName: XX & string;
      methodeName: y;
      getArgsValue: <Mo extends XX | string>(
        modelName: Mo extends YY ? Mo : string,
        methodeName: y
      ) => Parameters<PClient[Mo & string][y]>[0];
    }) => void;
  }>;
  auth?:
  | PrismaClientQueryPostBodyAuth
  | ((
    requestBody: PrismaClientQueryRequestBody<PClient>
  ) => PrismaClientQueryPostBodyAuth);
  authorisation?:
  | string
  | ((requestBody: PrismaClientQueryRequestBody<PClient>) => string);
  onSendRequest?: (requestOption: {
    requestBody: PrismaClientQueryRequestBody<PClient>;
    responseBody: Promise<Response>;
    abortController: AbortController;
  }) => void;
  onReceiveResponse?: (responseOption: {
    requestBody: PrismaClientQueryRequestBody<PClient>;
    responseBody: PrismaClientQueryResponseBody<PClient>;
  }) => void;
  onGetMethode?: (methodeName: PrismaMethodeName<PClient>) => void;
  onGetModel?: (modelName: PrismaModelName<PClient>) => void;
  timeOutBeforeFetching?: number;
  lazy?: boolean;
};
export function createPrismaClientQuery<PClient extends PrismaClientTemplate>(
  args: PrismaClientQueryArgs<PClient>
) {
  if (typeof args !== "object") {
    throw new Error("args must be an object");
  }
  const prismaClient = initPrismaClientQueryProxy(
    args
  ) as PrismaClientQuery<PClient>;
  return {
    prismaClient,
  };
}
export function createPrismaClientServer<PClient extends PrismaClientTemplate>(
  pClient: PClient,
  handler: Partial<{
    beforeQuery: (
      requestBody: PrismaClientQueryRequestBody<PClient>
    ) => boolean;
    fnQuery: (
      requestBody: PrismaClientQueryRequestBody<PClient>
    ) => Promise<PrismaClientQueryResponseBody<PClient>>;
    history: (
      requestBody: PrismaClientQueryRequestBody<PClient>,
      responseData: any
    ) => void;
    notification: (
      requestBody: PrismaClientQueryRequestBody<PClient>
    ) => Promise<(responseData: any) => void> | void;
  }> = {}
) {
  return async (requestBody: PrismaClientQueryRequestBody<PClient>) => {
    if (!handler || typeof handler !== "object") {
      handler = {};
    }
    const responseBody: PrismaClientQueryResponseBody<PClient> = {
      data: null,
      methodeName: requestBody.methodeName,
      modelName: requestBody.modelName,
    };

    const pClientModel = pClient[requestBody.modelName];

    if (!pClientModel) {
      responseBody.error = `le modelName '${requestBody.modelName}' n'existe pas dans prismaClient`;
      return responseBody;
    }

    const pClientMethode = pClientModel[requestBody.methodeName];
    if (!pClientMethode || !((pClientMethode as any) instanceof Function)) {
      responseBody.error = `le methodeName'${requestBody.methodeName}' n'existe pas dans prismaClient`;
      return responseBody;
    }
    const canQuery = (await handler?.beforeQuery?.(requestBody)) || true;
    if (!canQuery) {
      return null;
    }
    try {
      let notificationAfter: ((responseData: any) => void) | undefined;
      if (handler.notification instanceof Function) {
        notificationAfter =
          (await handler.notification(requestBody)) || undefined;
      }
      const responseData = await pClientMethode(requestBody.args || {});
      responseBody.error = undefined;
      responseBody.data = responseData;
      if (handler.history instanceof Function) {
        await handler.history(requestBody, responseData);
      }
      if (notificationAfter instanceof Function) {
        await notificationAfter(responseData);
      }
    } catch (error) {
      console.error(error)
      responseBody.error = String(error);
    } finally {
      return responseBody;
    }
  };
}