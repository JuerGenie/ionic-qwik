import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
} from "../components/ionic";
import styles from "./layout.css?inline";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(styles);

  const menus = [
    {
      title: "Home",
      subtitle: "Home Page.",
      items: [
        {
          label: "Home",
          href: "/",
        },
      ],
    },
    {
      title: "Application",
      subtitle: "Application Examples.",
      items: [
        {
          label: "Tabbar",
          href: "/application/tabbar/",
        },
      ],
    },
  ];
  const navigate = useNavigate();

  return (
    <div class="layout">
      <div class="application-list">
        {menus.map((menu) => (
          <IonCard key={menu.title}>
            <IonCardHeader>
              <IonCardTitle>{menu.title}</IonCardTitle>
              <IonCardSubtitle>{menu.subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
                {menu.items.map((item) => (
                  <IonItem
                    key={item.href}
                    button
                    onClick$={() => navigate(item.href)}
                  >
                    <IonLabel>{item.label}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
      <div class="driver-container">
        <div class="mobile-simulator">
          <Slot />
        </div>
      </div>
    </div>
  );
});
