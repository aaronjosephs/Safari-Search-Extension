function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var message = msgEvent.message;
    if (message === "search") {
    }
}
safari.self.addEventListener("message", handleMessage, false);

