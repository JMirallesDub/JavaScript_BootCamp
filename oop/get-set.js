const data = {
    get location(){
        return this._location;
    },

    set location(value){        
        this._location = value.trim();
    }
};


data.location = '      Philadelphia         ';

console.log(data.location);