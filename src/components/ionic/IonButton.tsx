import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonButtonCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonButtonElement,
  {
    onIonBlur$?: QRL<(evt: IonButtonCustomEvent<void>) => any>;
    onIonFocus$?: QRL<(evt: IonButtonCustomEvent<void>) => any>;
  }
>;

export const IonButton = component$(
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
      <ion-button {...transferdProps}>
        <Slot />
      </ion-button>
    );
  },
);
