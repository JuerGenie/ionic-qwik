import type { QRL } from "@builder.io/qwik";
import { Slot, $, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonPickerCustomEvent, OverlayEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(event: IonPickerCustomEvent<T>) => void>;

export type Props = ElementProps<HTMLIonPickerElement> & {
  onIonPickerDidPresent$?: EventArgument<void>;
  onIonPickerWillPresent$?: EventArgument<void>;
  onIonPickerWillDismiss$?: EventArgument<OverlayEventDetail>;
  onIonPickerDidDismiss$?: EventArgument<OverlayEventDetail>;
  onDidPresent$?: EventArgument<void>;
  onWillPresent$?: EventArgument<void>;
  onWillDismiss$?: EventArgument<OverlayEventDetail>;
  onDidDismiss$?: EventArgument<OverlayEventDetail>;
};

export const IonPicker = component$(
  ({
    onIonPickerDidPresent$,
    onIonPickerWillPresent$,
    onIonPickerWillDismiss$,
    onIonPickerDidDismiss$,
    onDidDismiss$,
    onWillDismiss$,
    onDidPresent$,
    onWillPresent$,
    ...props
  }: Props) => {
    useOn(
      "ionPickerDidPresent",
      $((evt: any) => onIonPickerDidPresent$?.(evt)),
    );
    useOn(
      "ionPickerWillPresent",
      $((evt: any) => onIonPickerWillPresent$?.(evt)),
    );
    useOn(
      "ionPickerWillDismiss",
      $((evt: any) => onIonPickerWillDismiss$?.(evt)),
    );
    useOn(
      "ionPickerDidDismiss",
      $((evt: any) => onIonPickerDidDismiss$?.(evt)),
    );
    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );
    useOn(
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "didPresent",
      $((evt: any) => onDidPresent$?.(evt)),
    );
    useOn(
      "willPresent",
      $((evt: any) => onWillPresent$?.(evt)),
    );

    return (
      <ion-picker {...transform(props)}>
        <Slot />
      </ion-picker>
    );
  },
);
