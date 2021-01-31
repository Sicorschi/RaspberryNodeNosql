### Using pm2 to run process in raspberry pi.

To install it :

__$ npm install -g pm2__

To attach one process to pm2:

__$ pm2 start src/index.js --name xxxx__

But when the raspberry turn off and turn on again the process wont start up at the booting, so we need to configure the nature of the process pm2:

__$ pm2 startup systemd__

The previous command will give us back a large command we have to copy and paste in the terminal, after that run the following command to save configuration:

__$ pm2 save__

After saving the configuration the process will start up at booting the raspberry.

Interesting commands about pm2:

__$ pm2 list__

__$ pm2 show name of process__

Asi que la tactica es mediante pm2 tener varios procesos identificados en la RPi y arrancarlos al iniciar.

