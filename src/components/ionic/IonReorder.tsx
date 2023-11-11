import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonReorderElement>;

export const IonReorder = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-reorder {...transferdProps}>
      <Slot />
    </ion-reorder>
  );
});
