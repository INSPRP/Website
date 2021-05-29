const fivem = require("fivem-api");

window.onload = function() {
    var api = new Vue({
        el: '#server-stats',
        data: {
            //API Information
            requestAvailable: false,

            //FiveM API Information
            serverIP: "104.153.105.75",
            serverPort: "30120",
            fivemServer: fivem.getServerInfo(serverIP + ':' + serverPort),
            serverStatus: fivemServer.then("Online", "Offline"),
            playerCount: fivemServer.then(fivemServer.players.length, 0),

            //Discord API Information
            discordUserCount: 0
        },
        methods: {

        }
    })
}