import type { HTMLAttributes, QRL, Signal } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import type { HTMLStencilElement } from "@ionic/core";
// import { kebab } from "case";
import { kebabCase } from "change-case";

type Ref<T extends Element = Element> = Signal<T | undefined> | RefFnInterface;

interface RefFnInterface {
  (el: Element): void;
}

export type ElementProps<
  T extends HTMLStencilElement,
  EV extends {} = {},
> = JSX.IntrinsicAttributes &
  Partial<Omit<T, keyof HTMLStencilElement>> &
  HTMLAttributes<T> &
  EV;

export interface ThemeProperties {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "medium"
    | "dark";
}

export const transform = (obj: object) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.endsWith("$") ? key : kebabCase(key),
      value,
    ]),
  );
};

export const tryBindEvent = (
  el: HTMLElement,
  eventName: string,
  cb?: QRL<any>,
) => {
  if (cb) {
    el.addEventListener(eventName, (ev) => cb(ev));
  }
};

export const createRefHandler = <T extends Element>(
  callback: (el: T) => any,
  ref?: Ref<T>,
) => {
  return (el: T) => {
    callback(el);
    if (ref) {
      if (typeof ref === "function") {
        ref(el);
      } else {
        ref.value = el;
      }
    }
  };
};
