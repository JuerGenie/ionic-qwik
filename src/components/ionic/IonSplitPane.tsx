import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import { IonSplitPaneCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonSplitPaneElement,
  {
    onIonSplitPaneVisible$: QRL<
      (evt: IonSplitPaneCustomEvent<{ visible: boolean }>) => any
    >;
  }
>;

export const IonSplitPane = component$(
  ({ onIonSplitPaneVisible$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionSplitPaneVisible",
      $((evt: any) => onIonSplitPaneVisible$(evt)),
    );

    return (
      <ion-menu-toggle {...transferdProps}>
        <Slot />
      </ion-menu-toggle>
    );
  },
);
