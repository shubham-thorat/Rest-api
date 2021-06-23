# Rest-api
Free rest api for developers
https://free-restapi.herokuapp.com/

### MOVIES REST API
# movieSchema : 
{
    "movieID" : Number,
    "title" : String,
    "year":"String",
    "rating":"String",
    "overview":"String"
}
# Object Demo:
{
    "movieID" : 1,
    "title":"BloodShot",
    "image_url":"https://static.toiimg.com/photo/74590664.cms?imgsize=33192",
    "year":"2020",
    "rating":"5.7",
    "overview":"Ray Garrison, an elite soldier killed in battle, is resurrected and given superhuman       abilities. As  he sets out to get revenge, he uncovers secrets about his life and the people supposedlhelping him."
}

 GET   https://free-restapi.herokuapp.com/movies
 Response ( Array Of Object)

 GET   https://free-restapi.herokuapp.com/movies/:id
 Response ( Movie object with given id)

 POST     https://free-restapi.herokuapp.com/movies
 request body required { type : movieSchema }
 Response (Movie schema object)



### USERS REST API
# userSchema : 
{
    "userID":String, 
    "name":String,
    "username": String,
    "email": String,
    "phone_no": String,
    "address": {
        "city": String,
        "state": String,
        "country": String,
        "pinCode": String
    }
}
# Object Demo:
{
    "userID" : 1,
    "name":"Chelsey Dietrich",
    "username":"Kamren",
    "email":"Lucio_Hettinger@annie.ca",
    "phone_no":"254-954-1289",
    "address":{
        "city":"Roscoeview",
        "state":"Scotland",
        "country":"United Kingdom",
        "pinCode":"33263"
    }
}

 GET   https://free-restapi.herokuapp.com/users
 Response ( Array Of Object)

 GET   https://free-restapi.herokuapp.com/users/:id
 Response ( User object with given id)

 POST     https://free-restapi.herokuapp.com/users
 request body required { type : userSchema }
 Response (User schema object)

