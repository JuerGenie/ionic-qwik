import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonRouteRedirectCustomEvent } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonRouteRedirectCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonRouteRedirectElement,
  {
    onIonRouteRedirectChanged$?: EventArgument<any>;
  }
>;

export const IonRouteRedirect = component$(
  ({ onIonRouteRedirectChanged$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionRouteRedirectChanged",
      $((evt: any) => onIonRouteRedirectChanged$?.(evt)),
    );

    return (
      <ion-route-redirect {...transferdProps}>
        <Slot />
      </ion-route-redirect>
    );
  },
);
