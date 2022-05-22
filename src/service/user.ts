import UserModel from '../model/user'

export async function getUserByName(name: string) {
    return UserModel.getUserName(name);
}

export async function create(user: any) {
    return UserModel.insert(user);
}

