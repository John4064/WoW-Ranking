export const fetchdata = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  };
  
  /**
   * mytheme: {
  "primary": "#1a9e60",
  "secondary": "#6cfc53", 
  "accent": "#4957ed",          
  "neutral": "#1D151E",
  "base-100": "#433C49",
  "info": "#3EA1DA",
  "success": "#1ADB97",
  "warning": "#E2A918",
  "error": "#FA6B8F",
            },
   */