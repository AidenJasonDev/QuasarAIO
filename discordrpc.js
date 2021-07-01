const RPC = require("discord-rpc");

function rich() {
    const rpc = new RPC.Client({
      transport: "ipc"
  });

  rpc.on("ready",() => {
    rpc.setActivity({
      details: "GUI",
      state: "[V0.0.01]",
      startTimestamp: new Date(),
      largeImageKey: "quasar-aio",
      largeImageText: "Project : Sirius",
    });
    //console.log("Rich presence is now active")
  });

  rpc.login({
      clientId: "809515898649051196"
  });
}
rich()