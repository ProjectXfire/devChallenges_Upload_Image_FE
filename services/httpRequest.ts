const URL_BASE = "https://dev-challenges-upload-image-be.vercel.app/api";

interface ImageCreateModel {
  name: string;
  image: string;
}

export const create = async (path: string, data: ImageCreateModel) => {
  try {
    await fetch(`${URL_BASE}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

export const list = async (path: string) => {
  try {
    const response = await fetch(`${URL_BASE}/${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (path: string, id: string) => {
  try {
    await fetch(`${URL_BASE}/${path}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
