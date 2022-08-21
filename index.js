import dotenv from "dotenv";
dotenv.config();

const COLLECTION_ADDRESS = process.env.COLLECTION_ADDRESS;
const COLLECTION_LENGTH = +(process.env.COLLECTION_LENGTH ?? 0);

const main = async () => {
  for (let i = 1; i <= COLLECTION_LENGTH; i++) {
    console.log(`refreshing ${i}...`);
    const res = await fetch(
      `https://api.opensea.io/api/v1/asset/${COLLECTION_ADDRESS}/${i}?force_update=true`,
      {
        headers: {
          "X-API-KEY": process.env.OPENSEA_KEY,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
    await new Promise((res) => setTimeout(() => res(), 300));
  }
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
