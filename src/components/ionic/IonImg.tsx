import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import { IonImgCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonImgElement,
  {
    onIonError$?: QRL<(evt: IonImgCustomEvent<void>) => any>;
    onIonImgDidLoad$?: QRL<(evt: IonImgCustomEvent<void>) => any>;
    onIonImgWillLoad$?: QRL<(evt: IonImgCustomEvent<void>) => any>;
  }
>;

export const IonImg = component$(
  ({ onIonError$, onIonImgDidLoad$, onIonImgWillLoad$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionError",
      $((evt: any) => onIonError$?.(evt)),
    );
    useOn(
      "ionImgDidLoad",
      $((evt: any) => onIonImgDidLoad$?.(evt)),
    );
    useOn(
      "ionImgWillLoad",
      $((evt: any) => onIonImgWillLoad$?.(evt)),
    );

    return (
      <ion-img {...transferdProps}>
        <Slot />
      </ion-img>
    );
  },
);
