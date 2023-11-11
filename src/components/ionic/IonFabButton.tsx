import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonFabButtonCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonFabButtonElement,
  {
    onIonBlur$?: QRL<(evt: IonFabButtonCustomEvent<void>) => any>;
    onIonFocus$?: QRL<(evt: IonFabButtonCustomEvent<void>) => any>;
  }
>;

export const IonFabButton = component$(
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
      <ion-fab-button {...transferdProps}>
        <Slot />
      </ion-fab-button>
    );
  },
);
