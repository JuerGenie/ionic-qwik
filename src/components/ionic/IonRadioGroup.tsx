import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonRadioGroupCustomEvent,
  RadioGroupChangeEventDetail,
} from "@ionic/core";

export type Props = ElementProps<
  HTMLIonRadioElement,
  {
    onIonChange$?: QRL<
      (evt: IonRadioGroupCustomEvent<RadioGroupChangeEventDetail>) => any
    >;
    onIonValueChange$?: QRL<
      (evt: IonRadioGroupCustomEvent<RadioGroupChangeEventDetail>) => any
    >;
  }
>;

export const IonRadioGroup = component$(
  ({ onIonChange$, onIonValueChange$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionValueChange",
      $((evt: any) => onIonValueChange$?.(evt)),
    );

    return (
      <ion-radio-group {...transferdProps}>
        <Slot />
      </ion-radio-group>
    );
  },
);
