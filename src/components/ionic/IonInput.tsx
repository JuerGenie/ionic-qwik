import type { QRL, Signal } from "@builder.io/qwik";
import { component$, useOn, $, Slot } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  InputChangeEventDetail,
  InputInputEventDetail,
  IonInputCustomEvent,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonInputCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonInputElement,
  {
    "onIonInput$"?: EventArgument<InputInputEventDetail>;
    "onIonChange$"?: EventArgument<InputChangeEventDetail>;
    "onIonBlur$"?: EventArgument<FocusEvent>;
    "onIonFocus$"?: EventArgument<FocusEvent>;
    "onIonStyle$"?: EventArgument<StyleEventDetail>;

    "bind:value"?: Signal<ElementProps<HTMLIonInputElement>["value"]>;
  }
>;

export const IonInput = component$(
  ({
    onIonInput$,
    onIonBlur$,
    onIonChange$,
    onIonFocus$,
    onIonStyle$,
    "bind:value": value,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionInput",
      $((evt: any) => {
        if (value) {
          value.value = evt.detail.value;
        }

        onIonInput$?.(evt);
      }),
    );
    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );

    return (
      <ion-input {...transferdProps}>
        <Slot />
      </ion-input>
    );
  },
);
