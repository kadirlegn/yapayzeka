const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`)
    client.user.setActivity(`Athena Code V13 Boş Altyapı`)
});
