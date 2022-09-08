import { FirebaseStorage, getDownloadURL, getStorage, ref, StorageReference } from 'firebase/storage'
import { type } from 'os';

type args = {
  imageName:string
}

async function GetImage({imageName}:args) {
    const storage = getStorage();
    const pathReference = ref(storage, `images/${imageName}`);
    try {
    const url = await getDownloadURL(pathReference);
    return url;
  } catch (error) {
    console.log(error);
    return error;
  }
  }

  export default GetImage;