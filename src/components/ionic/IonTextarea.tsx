import type { QRL, Signal } from "@builder.io/qwik";
import { component$, useOn, $, Slot } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonTextareaCustomEvent,
  StyleEventDetail,
  TextareaChangeEventDetail,
  TextareaInputEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonTextareaCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonTextareaElement,
  {
    "onIonInput$"?: EventArgument<TextareaInputEventDetail>;
    "onIonChange$"?: EventArgument<TextareaChangeEventDetail>;
    "onIonBlur$"?: EventArgument<FocusEvent>;
    "onIonFocus$"?: EventArgument<FocusEvent>;
    "onIonStyle$"?: EventArgument<StyleEventDetail>;

    "bind:value"?: Signal<ElementProps<HTMLIonTextareaElement>["value"]>;
  }
>;

export const IonTextarea = component$(
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
      <ion-textarea {...transferdProps}>
        <Slot />
      </ion-textarea>
    );
  },
);
