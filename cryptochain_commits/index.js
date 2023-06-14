import { create } from "https://ipfs.infura.io:5001";

const projectId = "<2Lz4zAwoaia57Ph8nTX9c1lyyiV>";
const projectSecret = "<a35862165cb67772a617d50c928c100b>";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "https://web3x.infura-ipfs.io",
  port: 5001,
  protocol: "",
  headers: {
    authorization: auth,
  },
});

client.pin.add("QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn").then((res) => {
  console.log(res);
});