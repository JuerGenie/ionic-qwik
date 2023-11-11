import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import { IonBackdropCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonBackdropElement,
  {
    onIonBackdropTap$?: QRL<(evt: IonBackdropCustomEvent<void>) => void>;
  }
>;

export const IonBackdrop = component$(
  ({ onIonBackdropTap$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBackdropTap",
      $((evt: any) => onIonBackdropTap$?.(evt)),
    );

    return (
      <ion-backdrop {...transferdProps}>
        <Slot />
      </ion-backdrop>
    );
  },
);
