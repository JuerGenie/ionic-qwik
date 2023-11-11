import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonRouterCustomEvent, RouterEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonRouterCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonRouterElement,
  {
    onIonRouteWillChange$?: EventArgument<RouterEventDetail>;
    onIonRouteDidChange$?: EventArgument<RouterEventDetail>;
  }
>;

export const IonRouter = component$(
  ({ onIonRouteDidChange$, onIonRouteWillChange$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionRouteDidChange",
      $((evt: any) => onIonRouteDidChange$?.(evt)),
    );
    useOn(
      "ionRouteWillChange",
      $((evt: any) => onIonRouteWillChange$?.(evt)),
    );

    return (
      <ion-router {...transferdProps}>
        <Slot />
      </ion-router>
    );
  },
);
