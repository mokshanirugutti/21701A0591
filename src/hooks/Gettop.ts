import { useState } from "react";

const [data, setData] = useState('');

export const  handle = async () => {
    try {
      const res = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMTExMDg3LCJpYXQiOjE3MjExMTA3ODcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhiNmE4OTczLWEyMTEtNDcyZS05MjA2LTdlZTRkMmQ0M2YzMyIsInN1YiI6Im1va3NoYXNhaTkxMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJBSVRTUiIsImNsaWVudElEIjoiOGI2YTg5NzMtYTIxMS00NzJlLTkyMDYtN2VlNGQyZDQzZjMzIiwiY2xpZW50U2VjcmV0IjoiU0d2eWJBVUpJTmpGTVR3SSIsIm93bmVyTmFtZSI6Ik1va3NoYU5pcnVndXR0aSIsIm93bmVyRW1haWwiOiJtb2tzaGFzYWk5MTBAZ21haWwuY29tIiwicm9sbE5vIjoiMjE3MDFBMDU5MSJ9.3WgGREsyMSMUUJ3dPYWMk9fFYhY7-mXBbYistxVLiAk'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(`Error: ${errorData.message}`);
        return;
      }

      const fetchedData = await res.json();
      setData(fetchedData);
      return data
    } catch (error) {
      // setError(`Error: ${error.message}`);
    }
  };
