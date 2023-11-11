import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import { IonMenuCustomEvent, MenuChangeEventDetail } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonMenuElement,
  {
    onIonDidClose$?: QRL<(evt: IonMenuCustomEvent<void>) => any>;
    onIonDidOpen$?: QRL<(evt: IonMenuCustomEvent<void>) => any>;
    onIonMenuChange$?: QRL<
      (evt: IonMenuCustomEvent<MenuChangeEventDetail>) => any
    >;
    onIonWillClose$?: QRL<(evt: IonMenuCustomEvent<void>) => any>;
    onIonWillOpen$?: QRL<(evt: IonMenuCustomEvent<void>) => any>;
  }
>;

export const IonMenu = component$(
  ({
    onIonDidClose$,
    onIonDidOpen$,
    onIonMenuChange$,
    onIonWillClose$,
    onIonWillOpen$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionDidClose",
      $((evt: any) => onIonDidClose$?.(evt)),
    );
    useOn(
      "ionDidOpen",
      $((evt: any) => onIonDidOpen$?.(evt)),
    );
    useOn(
      "ionMenuChange",
      $((evt: any) => onIonMenuChange$?.(evt)),
    );
    useOn(
      "ionWillClose",
      $((evt: any) => onIonWillClose$?.(evt)),
    );
    useOn(
      "ionWillOpen",
      $((evt: any) => onIonWillOpen$?.(evt)),
    );

    return (
      <ion-menu {...transferdProps}>
        <Slot />
      </ion-menu>
    );
  },
);
