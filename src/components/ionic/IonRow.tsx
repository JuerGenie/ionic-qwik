import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonRowElement>;

export const IonRow = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-row {...transferdProps}>
      <Slot />
    </ion-row>
  );
});
