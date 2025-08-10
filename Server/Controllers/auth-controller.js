 const home = ()=>{
    try {
        return {
            status: 200,
            message: "Welcome to the home page"
        };
    } catch (error) {  
         
        return {
            status: 500,
            message: "Internal Server Error"
        };
    }
 }

 module.exports = {home};