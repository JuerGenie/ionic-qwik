import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonFabElement>;

export const IonFab = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-fab {...transferdProps}>
      <Slot />
    </ion-fab>
  );
});
