import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonFooterElement>;

export const IonFooter = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-footer {...transferdProps}>
      <Slot />
    </ion-footer>
  );
});
