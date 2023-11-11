import type { QRL } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import {
  BreadcrumbCollapsedClickEventDetail,
  IonBreadcrumbsCustomEvent,
} from "@ionic/core";

export type Props = ElementProps<
  HTMLIonBreadcrumbsElement,
  {
    onIonCollapsedClick?: QRL<
      (
        evt: IonBreadcrumbsCustomEvent<BreadcrumbCollapsedClickEventDetail>,
      ) => any
    >;
  }
>;

export const IonBreadcrumbs = component$(({ ...props }: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-breadcrumb {...transferdProps}>
      <Slot />
    </ion-breadcrumb>
  );
});
