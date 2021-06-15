// hooks.js
import { createTypedHooks } from 'easy-peasy'
import { Model } from '../../model'

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<Model>()

export default {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
}
