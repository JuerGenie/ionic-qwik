import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonListElement>;

export const IonList = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-list {...transferdProps}>
      <Slot />
    </ion-list>
  );
});
