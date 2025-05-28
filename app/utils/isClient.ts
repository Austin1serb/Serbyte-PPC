import { env } from "./env"

export const isClient = !env.isServer
