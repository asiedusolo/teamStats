const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Neymar",
      lastName: "Santos",
      age: 29,
    },
    {
      firstName: "Lionel",
      lastName: "Messi",
      age: 34,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Real Madrid",
      teamPoints: 32,
      opponentPoints: 55,
    },
    {
      opponent: "Athletic Bilbao",
      teamPoints: 33,
      opponentPoints: 41,
    },
  ],
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("John Cena", 45, 88);
team.addGame("The Rock", 33, 23);
team.addGame("Brock Lesnar", 44, 81);

console.log(team.games);
