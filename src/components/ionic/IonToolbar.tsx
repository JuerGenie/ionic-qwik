import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonToolbarElement>;

export const IonToolbar = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-toolbar {...transferdProps}>
      <Slot />
    </ion-toolbar>
  );
});
