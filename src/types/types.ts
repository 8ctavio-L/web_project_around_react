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
}