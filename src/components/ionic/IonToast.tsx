import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonToastCustomEvent, OverlayEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonToastCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonToastElement,
  {
    onIonToastDidPresent$?: EventArgument<void>;
    onIonToastWillPresent$?: EventArgument<void>;
    onIonToastWillDismiss$?: EventArgument<OverlayEventDetail>;
    onIonToastDidDismiss$?: EventArgument<OverlayEventDetail>;
    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;
    onDidDismiss$?: EventArgument<OverlayEventDetail>;
  }
>;

export const IonToast = component$(
  ({
    onIonToastDidDismiss$,
    onIonToastDidPresent$,
    onIonToastWillDismiss$,
    onIonToastWillPresent$,
    onDidDismiss$,
    onDidPresent$,
    onWillDismiss$,
    onWillPresent$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionToastDidDismiss",
      $((evt: any) => onIonToastDidDismiss$?.(evt)),
    );
    useOn(
      "ionToastDidPresent",
      $((evt: any) => onIonToastDidPresent$?.(evt)),
    );
    useOn(
      "ionToastWillDismiss",
      $((evt: any) => onIonToastWillDismiss$?.(evt)),
    );
    useOn(
      "ionToastWillPresent",
      $((evt: any) => onIonToastWillPresent$?.(evt)),
    );
    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );
    useOn(
      "didPresent",
      $((evt: any) => onDidPresent$?.(evt)),
    );
    useOn(
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "willPresent",
      $((evt: any) => onWillPresent$?.(evt)),
    );

    return (
      <ion-toast {...transferdProps}>
        <Slot />
      </ion-toast>
    );
  },
);
