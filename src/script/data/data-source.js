class DataSource{
    // constructor (onSuccess, onFailed) {
    // this.onSuccess = onSuccess;
    // this.onFailed = onFailed;
    // }
    // let promise = new Promise(function(onSuccess, onFailed) {
    //     resolve(onSuccess);
    //     reject(onFailed); 
    //   });
    static searchClub (keyword){
        return new Promise ((resolve, reject) =>{
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword}  is not found`);
            }     
        })
       
        
    }
}