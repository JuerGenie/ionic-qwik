import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonBackButtonElement>;

export const IonBackButton = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-back-button {...transferdProps}>
      <Slot />
    </ion-back-button>
  );
});
