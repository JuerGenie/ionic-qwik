import type { QRL, Signal } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import {
  DatetimeChangeEventDetail,
  IonDatetimeCustomEvent,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonDatetimeCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonDatetimeElement,
  {
    "onIonCancel$"?: EventArgument<void>;
    "onIonChange$"?: EventArgument<DatetimeChangeEventDetail>;
    "onIonValueChange$"?: EventArgument<DatetimeChangeEventDetail>;
    "onIonFocus$"?: EventArgument<void>;
    "onIonBlur$"?: EventArgument<void>;
    "onIonStyle$"?: EventArgument<StyleEventDetail>;
    "onIonRender$"?: EventArgument<void>;

    "bind:value"?: Signal<ElementProps<HTMLIonDatetimeElement>["value"]>;
  }
>;

export const IonDatetime = component$(
  ({
    onIonBlur$,
    onIonCancel$,
    onIonChange$,
    onIonFocus$,
    onIonRender$,
    onIonStyle$,
    onIonValueChange$,
    "bind:value": value,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionCancel",
      $((evt: any) => onIonCancel$?.(evt)),
    );
    useOn(
      "ionChange",
      $((evt: any) => {
        console.log("inner ionChange", evt);

        onIonChange$?.(evt);
      }),
    );
    useOn(
      "ionFocus",
      $((evt: any) => {
        console.log("inner ionFocus", evt);

        onIonFocus$?.(evt);
      }),
    );
    useOn(
      "ionRender",
      $((evt: any) => onIonRender$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );
    useOn(
      "ionValueChange",
      $((evt: any) => {
        console.log("inner ionValueChange", evt);

        if (value) {
          value.value = (
            evt as IonDatetimeCustomEvent<DatetimeChangeEventDetail>
          ).detail.value;
        }

        onIonValueChange$?.(evt);
      }),
    );

    return (
      <ion-datetime {...transferdProps}>
        <Slot />
      </ion-datetime>
    );
  },
);
