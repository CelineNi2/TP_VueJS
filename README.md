# Automacorp frontend - Erwin MARTIN & Céline NI

This Git repository contains the Automacorp frontend developped for a programming course.
The goal was to implement the frontend of an application managing buildings, rooms, windows, heaters and temperature sensors.
All of this can, for example, serve as a simulation to understand how to efficiently use energy during winters.

This frontend is powered by :
- Vue.js
- Vite
- Bootstrap
- Axios

## Requirements

This frontend has been developped using Node.js v18.17.1 and Vite v.4.5.0, so be sure to have them installed if it doesn't work at first.

This frontend works using an already deployed backend on CleverCloud [here](http://automacorp-erwin-martin.cleverapps.io/).

If you want to, you can also download the backend [here](http://github.com/erwinmartin06/automacorp), run it locally and updating your frontend src/config.js document to connect your backend (for example http://localhost:8080 if your application is running on the 8080 port).


## Installation

Start by cloning the current repository in your terminal
```sh
git clone http://github.com/CelineNi2/Automacorp_frontend.git
```

Then install the necessary dependencies
```sh
npm install
```

Finally, to compile and hot-reload for development, use
```sh
npm run dev
```

And to compile and minify for production, use
```sh
npm run build
```

## Additionnal information

The logins to access the data and the H2 console (for example http://localhost:8080/console; this can be access only locally) are:
<br>Username: <b>user</b> ; Password: <b>theSecurePassword</b> -> Can access anything except the console and the path api/admin
<br>Username: <b>Erwin</b> ; Password: <b>theSecurePassword</b> -> Can access anything