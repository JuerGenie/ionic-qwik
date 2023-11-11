import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonLabelElement>;

export const IonLabel = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-label {...transferdProps}>
      <Slot />
    </ion-label>
  );
});
