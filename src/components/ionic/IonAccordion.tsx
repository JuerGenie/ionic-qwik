import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonAccordionElement>;

export const IonAccordion = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-accordion {...transferdProps}>
      <Slot />
    </ion-accordion>
  );
});
