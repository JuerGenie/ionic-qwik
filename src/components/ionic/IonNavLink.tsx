import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonNavLinkElement>;

export const IonNavLink = component$(({ ...props }: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-nav {...transferdProps}>
      <Slot />
    </ion-nav>
  );
});
