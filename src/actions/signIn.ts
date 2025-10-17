'use server';

import * as auth from "@/utils/auth";

export const signIn = async () => {
    return auth.signIn('github')
}
