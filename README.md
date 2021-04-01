<p align="center">
  <img src="https://img.shields.io/badge/staging%20branch-develop-%23E35F61.svg" alt="staging">
  <img src="https://img.shields.io/badge/production%20branch-main-%23566573.svg" alt="production">
</p>

# CoPlant Server
API in development to serve [CoPlant APP](https://github.com/), with the purpose of bringing to practice a new format model for renting beach chairs.

### Used technologies
- Node.js ([documentation](https://nodejs.org/en/docs/))
- Express ([documentation](https://expressjs.com/en/5x/api.html))

&nbsp;
## Getting started
To run the project for the first time, you need to follow the steps below. Run the following commands in your terminal:

### Requirements
You need to have `npm` and `yarn` installed on your computer

### Installing the projcet
1. Clone the repository from GitHub:
```
git clone https://github.com/js-dan/coplant-server.git
```
2. Install the project dependencies:
```
yarn
```
### Running the project
To run the project, you'll need to execute this command on terminal:
```
sudo docker-compose up
sudo docker exec -it db bash
psql -U postgres
CREATE DATABASE coplant;
yarn typeorm migration:run
yarn start

```
Then, you can see the application running at [http://localhost:3001](http://localhost:3001)

&nbsp;
## Documentation
- [General informations about the project](https://www.notion.so/Projet-o-737e9d4f215840b39088ac0a7596d9e8)
- [Issues/tasks](#)
- [Project status](#)

&nbsp;
## Development team
* **Daniel Silva** - *Project manager* - [js-dan](https://github.com/js-dan)
* **Danilo Lira** - *Front-end/Back-end* - [#](#)
* **José Tomáz** - *Front-end/Back-end* - [#](#)

&nbsp;
***
Made with **markdown** and **<3** by **CoPlant Developer Team**
