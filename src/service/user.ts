import UserModel from '../model/user'
import { md5password } from '../util/passwordHandel';


export async function getUserByName(name: string) {
    return UserModel.getUserName(name);
}

export async function updateUser(user: any) {
    const id = user.id;
    const userName = user.userName;
    delete user.id;
    delete user.updatedAt;
    delete user.createdAt;

    user.password = md5password(user.password);

    const where: { id?: number; userName?: string } = {}
    if (id) where.id = id
    if (userName) where.userName = userName

    return UserModel.update(user, where);
}

export async function create(user: any) {
    return UserModel.insert(user);
}

