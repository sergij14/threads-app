'use server';

import * as auth from "@/utils/auth";

export const signOut = async () => {
    return auth.signOut()
}
