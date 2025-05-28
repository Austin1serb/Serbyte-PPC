/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect, type DependencyList, type EffectCallback } from "react"
import { env } from "../app/utils/env"

// eslint-disable-next-line prefer-const
export let useIsoMorphicEffect = (effect: EffectCallback, deps?: DependencyList | undefined) => {
  if (env.isServer) {
    useEffect(effect, deps)
  } else {
    useLayoutEffect(effect, deps)
  }
}
