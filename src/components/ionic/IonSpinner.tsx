import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonSpinnerElement>;

export const IonSpinner = component$(({ ...props }: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-spinner {...transferdProps}>
      <Slot />
    </ion-spinner>
  );
});
