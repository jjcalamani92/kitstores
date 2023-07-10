import { getContext, setContext } from "svelte";
import { writable } from "svelte/store";

export function setMenu(){
  let menu = writable(false)
  setContext('menu', menu)
}

export function getMenu() {
  return getContext('menu')
}