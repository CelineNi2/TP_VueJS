# Automacorp frontend

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

This frontend works using an already deployed backend on CleverCloud [here](https://automacorp-erwin-martin.cleverapps.io/).

## Installation

Start by cloning the current repository in your terminal
```sh
git clone https://github.com/CelineNi2/Automacorp_frontend.git
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