// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getDownloadURL, getStorage, ref} from 'firebase/storage'


type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {imageName} = req.query

  const storage = getStorage();
  const pathReference = ref(storage, `images/${imageName}`);

 await getDownloadURL(pathReference).then((url)=>{
    res.status(200).json({ url: url})
  })
  .catch((error)=>{
    switch(error.code){
      case 'storage/object-not-found':
        //TODO:write a response
        break;
      case 'storage/unauthorized':
        //TODO:write a response
        break;
        case 'storage/unknown':
        //TODO:write a response
        break;
    }
  })
  
}
