import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonGridElement>;

export const IonGrid = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-grid {...transferdProps}>
      <Slot />
    </ion-grid>
  );
});
