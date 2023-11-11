import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonCardContentElement>;

export const IonCardContent = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-card-content {...transferdProps}>
      <Slot />
    </ion-card-content>
  );
});
