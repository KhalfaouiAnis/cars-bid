"use client";

import { useSession } from "next-auth/react";
import UserActions from "./UserActions";
import LoginButton from "./LoginButton";

export default function UserMenu() {

    const { data } = useSession();
    const user = data?.user;

    if (user) return <UserActions user={user} />

    return <LoginButton />
}