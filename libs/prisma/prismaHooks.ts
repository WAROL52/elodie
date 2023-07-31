import useAuth from "@/hooks/useAuth";
import { usePrismaQuery } from "../prismaClientQuery/usePrismaClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function usePirsmaClientSide() {
    const { push, refresh } = useRouter()
    const [isLoading, setLoading] = useState(false)
    const prismaClientSide = usePrismaQuery()
    const { user } = useAuth({ required: true })
    const Tools = {
        prismaClientSide,
        user,
        isLoading,
        setLoading,
        push,
        refresh,
    }
    const queryFn = <T>(fn: (tools: typeof Tools, ...args: any) => Promise<T>): (() => Promise<T | null>) => {
        return async (...arg: any) => {
            if (isLoading) return null
            setLoading(true)
            try {
                const result = await fn(Tools, ...arg)
                setLoading(false)
                refresh()
                return result
            } catch (error) {
                setLoading(false)
                return null
            }
        }
    }
    return {
        ...Tools,
        queryFn
    }
}