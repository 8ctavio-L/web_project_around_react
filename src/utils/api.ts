
import type { ApiOptions, UserData, CardData, UserFormData, CardFormData } from '../types/types'

export class Api {
    private baseUrl: string;
    private headers: { authorization: string; "Content-Type": string };

    constructor(options: ApiOptions) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }


    async getUserInfo(): Promise<UserData> {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        });
        if (res.ok) {
            return await res.json();
        }

        throw new Error(`Error: ${res.status}`);
    }

    async getInitialCards(): Promise<CardData[]> {
        const res = await fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        })
        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`);
    }

    async editProfile(data: UserFormData): Promise<UserData> {
        const res = await fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`)

    }

    async addCard(data: CardFormData): Promise<CardData> {
        const res = await fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`)

    }

    async likeCard(cardId: string): Promise<CardData> {
        const res = await fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            headers: this.headers,
            method: "PUT",
        })
        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`)
    }

    async unlikeCard(cardId: string): Promise<CardData> {
        const res = await fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            headers: this.headers,
            method: "DELETE",
        })
        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`)
    }

    async deleteCard(cardId: string): Promise<void> {
        const res = await fetch(`${this.baseUrl}/cards/${cardId}`, {
            headers: this.headers,
            method: "DELETE",
        })
        if (res.ok) {
            return;
        }
        throw new Error(`Error: ${res.status}`)
    }

    async updateAvatar(avatarURL: string): Promise<UserData> {
        const res = await fetch(`${this.baseUrl}/users/me/avatar`, {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify({ avatar: avatarURL })
        })

        if (res.ok) {
            return await res.json();
        }
        throw new Error(`Error: ${res.status}`)
    }



}

const api = new Api( { baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: "a5c7133e-816a-485e-a557-edd1890928bb",
        "Content-Type": "application/json",

} });
export default api;