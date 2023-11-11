import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonNavCustomEvent } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonNavCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonNavElement,
  {
    onIonNavWillLoad$?: EventArgument<void>;
    onIonNavDidChange$?: EventArgument<void>;
    onIonNavWillChange$?: EventArgument<void>;
  }
>;

export const IonNav = component$(
  ({
    onIonNavWillLoad$,
    onIonNavDidChange$,
    onIonNavWillChange$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionNavWillLoad",
      $((evt: any) => onIonNavWillLoad$?.(evt)),
    );
    useOn(
      "ionNavDidChange",
      $((evt: any) => onIonNavDidChange$?.(evt)),
    );
    useOn(
      "ionNavWillChange",
      $((evt: any) => onIonNavWillChange$?.(evt)),
    );

    return (
      <ion-nav {...transferdProps}>
        <Slot />
      </ion-nav>
    );
  },
);
