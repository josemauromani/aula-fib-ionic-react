import React from 'react'
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonBackButton } from '@ionic/react'
import ContextualNameSetter from '../components/ContextualNameSetter'

const InsertPage: React.FC = () => {
    return (
        <IonPage id="insert">
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Cadastro</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameSetter 
                    initialValue="Nome da Pessoa"
                    placeholder="Digite o nome"
                    buttonTitle="Cadastrar"                
                />
            </IonContent>
        </IonPage>
    )
}

export default InsertPage