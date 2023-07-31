"use client"
import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../prismaClientQuery/prismaService";

export const prismaClientSide =new PrismaClient().$extends({
    name:"prismaClientSide",
    query:{
        $allModels:{
            async $allOperations({args,model,operation,query}){
                
                return query(args)
            }
        }
    }
})