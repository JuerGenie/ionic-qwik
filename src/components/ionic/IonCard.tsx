import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonCardElement>;

export const IonCard = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-card {...transferdProps}>
      <Slot />
    </ion-card>
  );
});
