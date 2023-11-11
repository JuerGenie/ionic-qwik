import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonProgressBarElement>;

export const IonProgressBar = component$(({ ...props }: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-progress-bar {...transferdProps}>
      <Slot />
    </ion-progress-bar>
  );
});
