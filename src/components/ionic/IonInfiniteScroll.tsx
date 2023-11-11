import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonInfiniteScrollCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonInfiniteScrollElement,
  {
    onIonInfinite$?: QRL<(event: IonInfiniteScrollCustomEvent<void>) => void>;
  }
>;

export const IonInfiniteScroll = component$(
  ({ onIonInfinite$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionInfinite",
      $((evt: any) => onIonInfinite$?.(evt)),
    );

    return (
      <ion-infinite-scroll {...transferdProps}>
        <Slot />
      </ion-infinite-scroll>
    );
  },
);
