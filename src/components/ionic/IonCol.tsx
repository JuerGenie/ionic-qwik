import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonColElement>;

export const IonCol = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-col {...transferdProps}>
      <Slot />
    </ion-col>
  );
});
