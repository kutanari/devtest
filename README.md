## How to run this
1. Using Docker

from main directory run 
```
docker-compose up --build
```

after all process from docker is done, then run bellow command:
```
docker exec devtest-backend-1 php artisan migrate
```

you can check the data after migration from
http://localhost:8443/
using root:root
that default password used in the .env, make sure backend/.env and .env file contain the same value for each config

then run http://localhost:4137/


2. Using laragon on windows
clone the main porject in the www folder of docker
by default will be this directory
```
C:\laragon\www\devtest
```
then go to backend directory and from terminal run
```
composer install

php artisan migrate
```

then go to frontend directory, and from terminal run
```
npm install

npm run build

npm run preview
```

then access the page from http://localhost:4137/

