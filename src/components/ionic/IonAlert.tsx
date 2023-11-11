import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonAlertCustomEvent, OverlayEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonAlertCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonAlertElement,
  {
    onIonAlertDidPresent$?: EventArgument<void>;
    onIonAlertWillPresent$?: EventArgument<void>;
    onIonAlertWillDismiss$?: EventArgument<OverlayEventDetail>;
    onIonAlertDidDismiss$?: EventArgument<OverlayEventDetail>;
    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;
    onDidDismiss$?: EventArgument<OverlayEventDetail>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;
  }
>;

export const IonAlert = component$(
  ({
    onIonAlertDidPresent$,
    onIonAlertDidDismiss$,
    onIonAlertWillDismiss$,
    onIonAlertWillPresent$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionAlertDidPresent",
      $((evt: any) => onIonAlertDidPresent$?.(evt)),
    );
    useOn(
      "ionAlertWillPresent",
      $((evt: any) => onIonAlertWillPresent$?.(evt)),
    );
    useOn(
      "ionAlertWillDismiss",
      $((evt: any) => onIonAlertWillDismiss$?.(evt)),
    );
    useOn(
      "ionAlertDidDismiss",
      $((evt: any) => onIonAlertDidDismiss$?.(evt)),
    );

    return (
      <ion-alert {...transferdProps}>
        <Slot />
      </ion-alert>
    );
  },
);
