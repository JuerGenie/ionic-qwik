import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonSkeletonTextElement>;

export const IonSkeletonText = component$(({ ...props }: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-skeleton-text {...transferdProps}>
      <Slot />
    </ion-skeleton-text>
  );
});
