"use server";

import { postUpdateSchema } from "@/lib/validation/post";
import type { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import * as z from "zod";

export async function UpdateUserPoint(id,voteNum) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    // const post = postUpdateSchema.parse(context);

    const { data, error } = await supabase
      .from("profiles")
      .update({
        point: voteNum,
      })
      .match({ id: id })
      .select()
      .single();

    if (error) {
      console.log(error);
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
