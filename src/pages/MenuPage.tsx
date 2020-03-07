import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonIcon,
  IonLabel,
  IonItem
} from "@ionic/react";
import { home, person } from "ionicons/icons";

const MenuPage: React.FC = () => {
  return (
    <IonMenu type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Opções</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonIcon icon={home}></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button routerLink="/tabs">
            <IonIcon icon={person}></IonIcon>
            <IonLabel>Nomes</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuPage;
