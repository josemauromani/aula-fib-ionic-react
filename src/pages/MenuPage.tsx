import React, { useState } from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonIcon,
  IonLabel,
  IonItem,
  IonAvatar,
  IonRippleEffect
} from "@ionic/react";
import { home, person } from "ionicons/icons";

import { Plugins, CameraResultType } from '@capacitor/core'
const { Camera } = Plugins

const MenuPage: React.FC = () => {

  const [ avatar, setAvatar ] = useState(``)
  const handleChangeAvatar = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      allowEditing: true
    })
    setAvatar(photo.webPath!)
  }
  return (
    <IonMenu type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Opções</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <IonAvatar className="ion-activatable" 
          onClick={handleChangeAvatar}
          style={{ overflow: 'hidden', cursor:'pointer'}}>
            <img src={avatar} alt="avatar do usuário"/>
            <IonRippleEffect/>
          </IonAvatar>
        </div>
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
