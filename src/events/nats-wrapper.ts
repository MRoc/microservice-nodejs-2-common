import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  connect(clusterId: string, clientId: string, url: string): Promise<void> {
    this._client = nats.connect(clusterId, clientId, { url });
    return new Promise((resolve, reject) => {
      this._client!.on("connect", () => {
        resolve();
      });
      this._client!.on("error", (err) => {
        reject(err);
      });
    });
  }

  client() {
    if (!this._client) {
      throw new Error("Call connect() before calling client()!");
    }
    return this._client;
  }
}

export const natsWrapper = new NatsWrapper();
