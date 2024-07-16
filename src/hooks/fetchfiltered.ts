interface props{
    company: string;
    category: string;
    minPrice: number;
    maxPrice: number;
    rating: number;
}
export const getFiltered = async ({ company, category, minPrice, maxPrice, rating } : props) => {
    try {
      const res = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMTE1MzYzLCJpYXQiOjE3MjExMTUwNjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhiNmE4OTczLWEyMTEtNDcyZS05MjA2LTdlZTRkMmQ0M2YzMyIsInN1YiI6Im1va3NoYXNhaTkxMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJBSVRTUiIsImNsaWVudElEIjoiOGI2YTg5NzMtYTIxMS00NzJlLTkyMDYtN2VlNGQyZDQzZjMzIiwiY2xpZW50U2VjcmV0IjoiU0d2eWJBVUpJTmpGTVR3SSIsIm93bmVyTmFtZSI6Ik1va3NoYU5pcnVndXR0aSIsIm93bmVyRW1haWwiOiJtb2tzaGFzYWk5MTBAZ21haWwuY29tIiwicm9sbE5vIjoiMjE3MDFBMDU5MSJ9.GpjngNpTfuPm_HTJs1xpE8q1tb24mmswl2i4LZxOJe0',
        },
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.log(`Error: ${errorData.message}`);
        return [];
      }
  
      const fetchedData = await res.json();
      return fetchedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };