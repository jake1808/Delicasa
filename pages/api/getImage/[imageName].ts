// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getDownloadURL, getStorage, ref} from 'firebase/storage'


type Data = {
  url: string,
  error:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {imageName} = req.query

  const storage = getStorage();
  const pathReference = ref(storage, `images/${imageName}`);

 await getDownloadURL(pathReference).then((url)=>{
    res.status(200).json({ url: url, error:''})
  })
  .catch((error)=>{
    switch(error.code){
      case 'storage/object-not-found':
        //TODO:write a response
        return res.status(300).json({error:'Storage/object-not-found', url:''});
      case 'storage/unauthorized':
        //TODO:write a response
        return res.status(404).json({error:'storage/unauthorized', url:''});
        case 'storage/unknown':
        //TODO:write a response
        return res.status(500);
    }
  })
  
}
