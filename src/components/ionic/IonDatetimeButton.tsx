import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonDatetimeButtonElement>;

export const IonDatetimeButton = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-datetime-button {...transferdProps}>
      <Slot />
    </ion-datetime-button>
  );
});
