import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonSearchbarCustomEvent,
  SearchbarInputEventDetail,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonSearchbarCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonSearchbarElement,
  {
    onIonInput$?: EventArgument<SearchbarInputEventDetail>;
    onIonChange$?: EventArgument<SearchbarInputEventDetail>;
    onIonCancel$?: EventArgument<void>;
    onIonClear$?: EventArgument<void>;
    onIonBlur$?: EventArgument<void>;
    onIonFocus$?: EventArgument<void>;
    onIonStyle$?: EventArgument<StyleEventDetail>;
  }
>;

export const IonSearchbar = component$(
  ({
    onIonBlur$,
    onIonCancel$,
    onIonChange$,
    onIonClear$,
    onIonFocus$,
    onIonInput$,
    onIonStyle$,
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
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionClear",
      $((evt: any) => onIonClear$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );
    useOn(
      "ionInput",
      $((evt: any) => onIonInput$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );

    return (
      <ion-searchbar {...transferdProps}>
        <Slot />
      </ion-searchbar>
    );
  },
);
