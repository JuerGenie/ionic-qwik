import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonSelectOptionElement>;

export const IonSelectOption = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-select-option {...transferdProps}>
      <Slot />
    </ion-select-option>
  );
});
