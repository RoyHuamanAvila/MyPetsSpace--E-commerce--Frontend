import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'
export interface productType {
    user: string,
    name: string,
    description: string,
    category: string,
    image: string,
    price: number,
}

export interface userType {
    name: string,
    direction: string,
    email: string,
    password: string,
    userType: string[],
    posts: number,
    sales: number,
    followers: number,
    imagePerfil: string,
    listProducts: productType[],
}

export interface profileType {
    _id: string,
    name: string,
    direction: string,
    email: string,
    posts: number,
    followers: number,
    sales: number,
    imagePerfil: string
}
export type RootStackParamList = {
    login: undefined;
    register: undefined;
    home: undefined;
    product: productType;
    profile: profileType;
};
export type PropsProfile = NativeStackScreenProps<RootStackParamList, 'profile'>;
export type PropsProduct = NativeStackScreenProps<RootStackParamList, 'product'>;
