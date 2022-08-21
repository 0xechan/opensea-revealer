# opensea-revealer
A script for automatically refreshing the metadata of a collection

# Environment
An OpenSea API Key is required. You can either add environment variables to your global shell, or create a `.env` file in the root of the project (which is gitignored for security) with the contents:
```bash
OPENSEA_KEY=1234567890abcdef
COLLECTION_ADDRESS=0x1234567890abcdef1234567890abcdef01234567
COLLECTION_LENGTH=3000
```
# Run
```bash
npm start
```
