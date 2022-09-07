// import {getDownloadURL, getStorage, ref} from 'firebase/storage';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { type } from 'os';

// type data = {
//     imageName: string,
//     url: string
//     res: NextApiResponse<data>
// }

// const storage = getStorage();



// export default function getImage({imageName}:data){
//     const pathReference = ref(storage, `images/${imageName}`);

//     getDownloadURL(pathReference).then((url)=>{
//     res.status(200).json({ url: url, imageName:""})
//       })
//       .catch((error)=>{
//         switch(error.code){
//           case 'storage/object-not-found':
//             //TODO:write a response
//             break;
//           case 'storage/unauthorized':
//             //TODO:write a response
//             break;
//             case 'storage/unknown':
//             //TODO:write a response
//             break;
//         }
//       })
// }