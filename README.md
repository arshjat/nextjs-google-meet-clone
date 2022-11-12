# NextJS Google Meet Clone

## Setup signalling server

### Setup ngrok
Ref: https://ngrok.com/docs/getting-started

```
  git clone https://github.com/arshjat/google-meet-clone-server.git
  cd google-meet-clone-server
  npm i  --registry=https://registry.npmjs.org/ && npm i  -- registry=https://registry.npmjs.org/  --only=dev
  node index.js
  
  open another terminal and execute this command
  ngrok http 8081
```

once ngrok is setup, copy the URL and paste in 'client/components/room/config.ts' in SOCKET_URL param

### Setup Client
```
cd ..
git clone https://github.com/arshjat/nextjs-google-meet-clone.git
cd nextjs-google-meet-clone
npm i  --registry=https://registry.npmjs.org/ && npm i  --registry=https://registry.npmjs.org/  --only=dev 

npm run dev
```
go to localhost:3000 
and the app will be running

## Open Issues
- [ ] Sometimes the socket does not connect when opening localhost:3000 in that case, duplicate the tab and stream will be coming, close previous tab
- [ ] Recording is saved for previous action, for eg lets say we start and stop recording call this sess1, then again do that and call that sess2, so the recording saved for sess2 will be what was recorded in sess1
- [ ] when using getDisplayMedia, a popup is shown asking the user to share the screen, have to hide this using js and use tab for recording by default
