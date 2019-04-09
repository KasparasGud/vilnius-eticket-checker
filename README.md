# Vilnius E.ticket card checker

No official api exists to access and check the status of the vilnius city card (Vilniečio kortelė).
Hopefully this will be helpful to someone or can be used in your future projects. 
The card info is fetched from here: https://mano.vilniustransport.lt/login

## Installation

```bash
npm install vilniuseticket
```

## Usage

```javascript
const VilniusCardChecker = require('vilniuseticket')

VilniusCardChecker.checkCard('0157912457').then(res => console.log(res))
```

## Todo

- [x] Get HTML information about the card
- [ ] Parse the reponse and categorize into different ticket types
- [ ] Find ways to check for bike sharing passes on the card
## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
