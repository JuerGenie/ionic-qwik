import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonTextElement>;

export const IonText = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-text {...transferdProps}>
      <Slot />
    </ion-text>
  );
});
