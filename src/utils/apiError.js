class ApiError extends Error {
   


    constructor(
        message = 'API Error',
        statuscode ,
        errors=[],
        stack = '',
    ){
        super(message);
        this.statuscode = statuscode
        this.message = message
        this.stack = new Error().stack;
        this.success=false;
        this.errors=errors

        if(stack){
            this.stack = stack;
       }else{
           Error.captureStackTrace(this,this.constructor);
       }
    }

}

export { ApiError}