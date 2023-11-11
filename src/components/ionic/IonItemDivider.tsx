import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonItemDividerElement>;

export const IonItemDivider = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-item-divider {...transferdProps}>
      <Slot />
    </ion-item-divider>
  );
});
