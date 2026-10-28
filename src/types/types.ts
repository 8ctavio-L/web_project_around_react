export type PopupConfig = {
    title?: string;
    children: React.ReactNode;
};

export interface CardData {
    _id: string;
    name: string;
    link: string;
    owner: string;
    createdAt: string;
    isLiked: boolean;
}


export interface UserData {
    name: string;
    about: string;
    avatar: string;
    _id: string;
}

export interface UserFormData {
    name: string;
    about: string;
}

export interface ApiOptions {
    baseUrl: string;
    headers: {
        authorization: string;
        "Content-Type": string;
    };
}

export interface CardFormData{
    name: string;
    link: string;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (data: UserFormData ) => void;
  handleUpdateAvatar: (data:AvatarFormData) => void;
  handleAddPlaceSubmit: (data:CardFormData) => void;

}

export interface MainProps {
    cards: CardData[];
    popup: PopupConfig|null;
    handleOpenPopup: (popup:PopupConfig)=> void;
    handleClosePopup: () => void;
    handleCardLike: (card:CardData) => void;
    handleCardDelete: (card:CardData) => void;

}

export interface AvatarFormData{
    avatar:string;
}




