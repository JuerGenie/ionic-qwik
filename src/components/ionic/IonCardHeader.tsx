import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonCardHeaderElement>;

export const IonCardHeader = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-card-header {...transferdProps}>
      <Slot />
    </ion-card-header>
  );
});
