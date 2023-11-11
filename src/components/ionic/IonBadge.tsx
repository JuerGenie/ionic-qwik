import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonBadgeElement>;

export const IonBadge = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-badge {...transferdProps}>
      <Slot />
    </ion-badge>
  );
});
