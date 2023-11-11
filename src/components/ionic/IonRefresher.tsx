import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonRefresherCustomEvent,
  RefresherEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonRefresherCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonRefresherElement,
  {
    onIonRefresh$?: EventArgument<RefresherEventDetail>;
    onIonPull$?: EventArgument<void>;
    onIonStart$?: EventArgument<void>;
  }
>;

export const IonRefresher = component$(
  ({ onIonRefresh$, onIonPull$, onIonStart$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionRefresh",
      $((evt: any) => onIonRefresh$?.(evt)),
    );
    useOn(
      "ionPull",
      $((evt: any) => onIonPull$?.(evt)),
    );
    useOn(
      "ionStart",
      $((evt: any) => onIonStart$?.(evt)),
    );

    return (
      <ion-refresher {...transferdProps}>
        <Slot />
      </ion-refresher>
    );
  },
);
