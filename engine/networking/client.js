export class NetworkClient {

  constructor(url) {

    this.socket =
    new WebSocket(url);

    this.connected = false;

    this.handlers = {};

    this.socket.onopen = () => {

      this.connected = true;

      console.log(
        "Connected to server"
      );

    };

    this.socket.onmessage = event => {

      const packet =
      JSON.parse(event.data);

      this.handle(packet);

    };

  }

  send(type, data) {

    this.socket.send(

      JSON.stringify({

        type,
        data

      })

    );

  }

  on(type, callback) {

    this.handlers[type] =
    callback;

  }

  handle(packet) {

    const handler =
    this.handlers[
      packet.type
    ];

    if (handler) {

      handler(packet.data);

    }

  }

}