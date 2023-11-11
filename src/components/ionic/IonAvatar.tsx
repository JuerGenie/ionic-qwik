import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonAvatarElement>;

export const IonAvatar = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-avatar {...transferdProps}>
      <Slot />
    </ion-avatar>
  );
});
