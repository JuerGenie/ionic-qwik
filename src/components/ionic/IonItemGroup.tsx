import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonItemGroupElement>;

export const IonItemGroup = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-item-group {...transferdProps}>
      <Slot />
    </ion-item-group>
  );
});
