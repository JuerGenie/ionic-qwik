import type { QRL, Signal } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { component$, useOn, $, Slot } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  CheckboxChangeEventDetail,
  IonCheckboxCustomEvent,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonCheckboxCustomEvent<T>) => any>;
export type Props = JSX.IntrinsicAttributes &
  ElementProps<HTMLIonCheckboxElement> & {
    "onIonBlur$"?: EventArgument<void>;
    "onIonFocus$"?: EventArgument<void>;
    "onIonChange$"?: EventArgument<CheckboxChangeEventDetail>;
    "onIonStyle$"?: EventArgument<StyleEventDetail>;
    "bind:value"?: Signal<ElementProps<HTMLIonCheckboxElement>["value"]>;
    "bind:checked"?: Signal<ElementProps<HTMLIonCheckboxElement>["checked"]>;
  };

export const IonCheckbox = component$(
  ({
    onIonBlur$,
    onIonChange$,
    onIonFocus$,
    onIonStyle$,
    "bind:checked": checked,
    "bind:value": value,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionChange",
      $((evt: any) => {
        if (value) {
          value.value = (
            evt as IonCheckboxCustomEvent<CheckboxChangeEventDetail>
          ).detail.value;
        }
        if (checked) {
          checked.value = (
            evt as IonCheckboxCustomEvent<CheckboxChangeEventDetail>
          ).detail.checked;
        }

        onIonChange$?.(evt);
      }),
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
      <ion-checkbox {...transferdProps}>
        <Slot />
      </ion-checkbox>
    );
  },
);
