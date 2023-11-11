import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonChipElement>;

export const IonChip = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-chip {...transferdProps}>
      <Slot />
    </ion-chip>
  );
});
