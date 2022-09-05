import { FirebaseStorage, getDownloadURL, getStorage, ref, StorageReference } from 'firebase/storage'

function GetHeroImage() {
    const storage = getStorage();
    const pathReference = ref(storage, `images/hero1.JPG`);
    return getDownloadURL(pathReference).then((url) => {
      return url;
    }).catch((error) => {
      console.log(error);
      return error;
    })
  }

  export default GetHeroImage;