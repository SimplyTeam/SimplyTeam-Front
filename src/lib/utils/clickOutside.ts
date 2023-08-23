import type { Action } from "svelte/types/runtime/action"

/** Dispatch event on click outside of node */
export const clickOutside: Action<HTMLElement, undefined> = (node: HTMLElement) => {

  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as Node) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click-outside'))
    }
  }

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  }
}