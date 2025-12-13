
"use server";

// import { revalidateTag } from "next/cache";

// export async function updateProfileAction(formData: FormData) {
//   try {
//     const res = await fetch(`${process.env.BACKEND_URL}/users/update-profile`, {
//       method: "PATCH",
//       body: formData,
//       headers: {
//         // ❌ don't set content-type (FormData handles it)
//         Authorization: `Bearer ${process.env.SERVER_TOKEN}`,
//       },
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Profile update failed");
//     }

//     revalidateTag("my-profile");

//     return { success: true, message: "Profile updated successfully" };
//   } catch (error: any) {
//     return { success: false, message: error.message };
//   }
// }