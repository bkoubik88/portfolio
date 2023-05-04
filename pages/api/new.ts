// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";


const headers = {
    'Content-Type': 'application/json',
  
  }


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 

    const options : RequestInit= {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
        mode: 'cors', // allows cross-domain requests
        credentials: 'include', // includes cookies in cross-domain requests
      };
  


      let data = JSON.stringify(req.body);


      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://node-express-vercel-eta.vercel.app/server/user/new',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };



      
    try {
     await axios.request(config)
      .then((result) => {
        res.end(result.data)
 
      })
      .catch((error) => {
        console.log(error);
      });


      } catch (error) {
        console.log(error);
      }

}
