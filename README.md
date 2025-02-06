Stellar Explorer
===========================

![GitHub repo size](https://img.shields.io/github/repo-size/Luan-Web3/stellar-explorer?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Luan-Web3/stellar-explorer?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Luan-Web3/stellar-explorer?style=for-the-badge)

The project is an explorer for the Stellar network, running in a Docker container on a virtual machine in Oracle Cloud. It allows for the viewing and querying of information from the Stellar blockchain, with features including listing the latest ledgers and transactions. Additionally, it enables searching for a ledger by its sequence and accessing a specific transaction by its hash.

[Live Demo](https://stellar-explorer-sable.vercel.app/)

## Prerequisites

Before you begin, make sure you meet the following requirements:

- [Docker](https://docs.docker.com/engine/install/)

## Instructions to Run Using Docker

```
git clone https://github.com/Luan-Web3/stellar-explorer.git
```

```
cd stellar-explorer
```
- Duplicate the `.env.template` file and rename it to `.env`
```
docker compose up -d
```
The application will be available at http://localhost:5173

## License

<sup>
Licensed under either of <a href="LICENSE-APACHE">Apache License, Version
2.0</a> or <a href="LICENSE-MIT">MIT license</a> at your option.
</sup>

<br>

<sub>
Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in this crate by you, as defined in the Apache-2.0 license, shall
be dual licensed as above, without any additional terms or conditions.
</sub>