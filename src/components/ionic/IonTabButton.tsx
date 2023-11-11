import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonTabButtonElement>;

export const IonTabButton = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-tab-button {...transferdProps}>
      <Slot />
    </ion-tab-button>
  );
});
