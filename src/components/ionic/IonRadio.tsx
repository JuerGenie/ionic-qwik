import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonRadioCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonRadioElement,
  {
    onIonBlur$?: QRL<(evt: IonRadioCustomEvent<void>) => any>;
    onIonFocus$?: QRL<(evt: IonRadioCustomEvent<void>) => any>;
  }
>;

export const IonRadio = component$(
  ({ onIonBlur$, onIonFocus$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );

    return (
      <ion-radio {...transferdProps}>
        <Slot />
      </ion-radio>
    );
  },
);
