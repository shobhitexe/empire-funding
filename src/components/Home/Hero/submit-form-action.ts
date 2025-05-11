"use server";

export async function SubmitForm(data: FormData) {
  try {
    const name = data.get("name");
    const email = data.get("email");

    const formBody = new URLSearchParams({
      api_key: process.env.CONVERTKIT_API_KEY!,
      email: String(email),
      first_name: String(name),
    });

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("ConvertKit error:", err);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Submit error:", error);
    return false;
  }
}
