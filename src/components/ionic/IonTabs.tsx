import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonTabsCustomEvent } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonTabsCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonTabsElement,
  {
    onIonNavWillLoad$?: EventArgument<void>;
    onIonTabsWillChange$?: EventArgument<{ tab: string }>;
    onIonTabsDidChange$?: EventArgument<{ tab: string }>;
  }
>;

export const IonTabs = component$(
  ({
    onIonNavWillLoad$,
    onIonTabsWillChange$,
    onIonTabsDidChange$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionNavWillLoad",
      $((evt: any) => onIonNavWillLoad$?.(evt)),
    );
    useOn(
      "ionTabsWillChange",
      $((evt: any) => onIonTabsWillChange$?.(evt)),
    );
    useOn(
      "ionTabsDidChange",
      $((evt: any) => onIonTabsDidChange$?.(evt)),
    );

    return (
      <ion-tabs {...transferdProps}>
        <Slot />
      </ion-tabs>
    );
  },
);
