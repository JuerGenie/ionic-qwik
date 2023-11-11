import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonCardTitleElement>;

export const IonCardTitle = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-card-title {...transferdProps}>
      <Slot />
    </ion-card-title>
  );
});
