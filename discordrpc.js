const RPC = require("discord-rpc");

function rich() {
    const rpc = new RPC.Client({
      transport: "ipc"
  });

  rpc.on("ready",() => {
    rpc.setActivity({
      state: "version: alpha",
      startTimestamp: new Date(),
      largeImageKey: "quasar-aio",
      largeImageText: "Quasar",
    });
    //console.log("Rich presence is now active")
  });

  rpc.login({
      clientId: "809515898649051196"
  });
}
rich()