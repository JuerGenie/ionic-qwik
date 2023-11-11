import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonSegmentButtonElement>;

export const IonSegmentButton = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-segment-button {...transferdProps}>
      <Slot />
    </ion-segment-button>
  );
});
