import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonNoteElement>;

export const IonNote = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-note {...transferdProps}>
      <Slot />
    </ion-note>
  );
});
