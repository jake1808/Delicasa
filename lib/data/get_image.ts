import { FirebaseStorage, getDownloadURL, getStorage, ref, StorageReference } from 'firebase/storage'
import { type } from 'os';

type args = {
  imageName:string
}

function GetImage({imageName}:args) {
    const storage = getStorage();
    const pathReference = ref(storage, `images/${imageName}`);
    return getDownloadURL(pathReference).then((url) => {
      return url;
    }).catch((error) => {
      console.log(error);
      return error;
    })
  }

  export default GetImage;