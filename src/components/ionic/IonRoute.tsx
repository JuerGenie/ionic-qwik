import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonRouteCustomEvent } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonRouteCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonRouteElement,
  {
    onIonRouteDataChanged$?: EventArgument<any>;
  }
>;

export const IonRoute = component$(
  ({ onIonRouteDataChanged$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionRouteDataChanged",
      $((evt: any) => onIonRouteDataChanged$?.(evt)),
    );

    return (
      <ion-route {...transferdProps}>
        <Slot />
      </ion-route>
    );
  },
);
