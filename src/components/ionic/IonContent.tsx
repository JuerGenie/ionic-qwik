import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonContentCustomEvent,
  ScrollBaseDetail,
  ScrollDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonContentCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonContentElement,
  {
    onIonScroll$?: EventArgument<ScrollDetail>;
    onIonScrollStart$?: EventArgument<ScrollBaseDetail>;
    onIonScrollEnd$?: EventArgument<ScrollBaseDetail>;
  }
>;

export const IonContent = component$(
  ({ onIonScroll$, onIonScrollEnd$, onIonScrollStart$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionScroll",
      $((evt: any) => onIonScroll$?.(evt)),
    );
    useOn(
      "ionScrollStart",
      $((evt: any) => onIonScrollStart$?.(evt)),
    );
    useOn(
      "ionScrollEnd",
      $((evt: any) => onIonScrollEnd$?.(evt)),
    );

    return (
      <ion-content {...transferdProps}>
        <Slot />
      </ion-content>
    );
  },
);
