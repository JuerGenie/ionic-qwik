import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonLoadingCustomEvent, OverlayEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonLoadingCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonLoadingElement,
  {
    onIonLoadingDidPresent$?: EventArgument<void>;
    onIonLoadingWillPresent$?: EventArgument<void>;
    onIonLoadingWillDismiss$?: EventArgument<OverlayEventDetail>;
    onIonLoadingDidDismiss$?: EventArgument<OverlayEventDetail>;
    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;
    onDidDismiss$?: EventArgument<OverlayEventDetail>;
  }
>;

export const IonLoading = component$(
  ({
    onIonLoadingDidPresent$,
    onIonLoadingWillPresent$,
    onIonLoadingWillDismiss$,
    onIonLoadingDidDismiss$,
    onDidPresent$,
    onWillPresent$,
    onWillDismiss$,
    onDidDismiss$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionLoadingDidPresent",
      $((evt: any) => onIonLoadingDidPresent$?.(evt)),
    );
    useOn(
      "ionLoadingWillPresent",
      $((evt: any) => onIonLoadingWillPresent$?.(evt)),
    );
    useOn(
      "ionLoadingWillDismiss",
      $((evt: any) => onIonLoadingWillDismiss$?.(evt)),
    );
    useOn(
      "ionLoadingDidDismiss",
      $((evt: any) => onIonLoadingDidDismiss$?.(evt)),
    );
    useOn(
      "didPresent",
      $((evt: any) => onDidPresent$?.(evt)),
    );
    useOn(
      "willPresent",
      $((evt: any) => onWillPresent$?.(evt)),
    );
    useOn(
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );

    return (
      <ion-loading {...transferdProps}>
        <Slot />
      </ion-loading>
    );
  },
);
