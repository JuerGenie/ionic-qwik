import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonMenuButtonElement>;

export const IonMenuButton = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-menu-button {...transferdProps}>
      <Slot />
    </ion-menu-button>
  );
});
