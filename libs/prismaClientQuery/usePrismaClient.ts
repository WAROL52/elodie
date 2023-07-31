import { PrismaClient } from "@prisma/client";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import {
  createPrismaClientQuery,
  PrismaClientQuery,
} from "./prismaClientQuery";
export function usePrismaClient<
  F extends (prismaQuery: PrismaClientQuery<PrismaClient>) => unknown,
  R = Awaited<ReturnType<F>>
>(fnPrismaQuery: F, queryKey: QueryKey = []): UseQueryResult<R> {
  let methodeName;
  let modelName;
  const hasQueryKey = Array.isArray(queryKey) && queryKey.length;
  const { prismaClient } = createPrismaClientQuery<PrismaClient>({
    url: "/api/database/prismaClientServer",
    onGetModel(modelN) {
      if (!hasQueryKey) {
        modelName = modelN;
      }
    },
    onGetMethode(methodeN) {
      if (!hasQueryKey) {
        methodeName = methodeN;
      }
    },
  });
  if (!(fnPrismaQuery instanceof Function)) {
    // @ts-ignore
    fnPrismaQuery = () => undefined;
  }
  const fetchData = fnPrismaQuery(prismaClient);

  const queryClient = useQuery<R>({
    queryKey: hasQueryKey ? queryKey : [modelName, methodeName],
    queryFn: async () => {
      const data = await fetchData;
      if (data instanceof Function) {
        return await data();
      }
      return data;
    },
  });
  return queryClient;
}
export function usePrismaQuery() {
  const abortControllers = useMemo<AbortController[]>(() => [], []);
  const { prismaClient } = createPrismaClientQuery<PrismaClient>({
    url: "/api/database",
    setAbortController(requestBody) {
      const abortController = new AbortController();
      abortControllers.push(abortController);
      return abortController;
    },
  });
  // useEffect(() => {
  //   return () => {
  //     abortControllers
  //       .splice(0, abortControllers.length)
  //       .map((abortController) => abortController.abort());
  //   };
  // });
  return prismaClient;
}
