import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonMenuToggleElement>;

export const IonMenuToggle = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-menu-toggle {...transferdProps}>
      <Slot />
    </ion-menu-toggle>
  );
});
