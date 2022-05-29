DRAFT OF README FOR SPACETRADERS GUI PROJECT

## Section Groupings (?)
- ACCOUNT, GAME, LEADERBOARD //DONE
- LOANS, PURCHASE ORDERS, SELL ORDERS, PURCHASE SHIP, SCRAP SHIP, GOODS
- MY FLIGHT PLANS, SHIP INFO, CARGO JETTISON, CARGO TRANSFER, WARP JUMP
- CREATE STRUCTURE, DEPOSIT GOODS TO STRUCTURE, SEE STRUCTURE
- SYSTEM INFO (INCL. DOCKED SHIPS/ALL FLIGHT PLANS, ALL AVAILABLE SHIPS)

## List of Calls [from Spacetraders.io](https://api.spacetraders.io)

## AUTH TOKEN

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|Authorization|String|'Bearer Token'|

## GAME INFORMATION
- get account information [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/account
```

- determine server status
```
https://api.spacetraders.io/game/status
```

- see current net worth of top players [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/game/leaderboard/net-worth
```

## CREDIT MANAGEMENT

- get a list of your loans [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/loans
```

- get available loans [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/types/loans
```

- take out a new loan [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/loans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|type|String|The type of loan you wish to take out|

- pay off a loan [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/loans/:loanId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|loanId|String|The ID of the loan you wish to pay off|

- place a new purchase order [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/purchase-orders
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will purchase the goods|
|good|String|The ID of the good you wish to purchase|
|quantity|Number|The amount of goods to purchase|

- place a new sell order [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/sell-orders
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will sell the goods|
|good|String|The ID of the good you wish to sell|
|quantity|Number|The amount of goods to sell|

- buy a new ship [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the ship|
|type|String|The symbol of the ship to purchase|

- scrap ship for credits [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships/:shipId/
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to scrap|


## MY SHIPS

- get info on an existing flight plan [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/flight-plans/:flightPlanId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|flightPlanId|String|ID of the flight plan|


- submit a new flight plan [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/flight-plans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|
|destination|String|Symbol of the location you want to send the ship

- get info on a specific owned ship [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships/:shipId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to return|

- get list of owned ships [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships
```

- jettison cargo [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships/:shipId/jettison
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to jettison from|
|good|String|The SYMBOL of the good you wish to jettison|
|quantity|Number|The amount of goods to jettison|

- transfer cargo between ships [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/ships/:fromShipId/transfer
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|fromShipId|String|The ID of the ship you want to transfer from|
|toShipId|String|The ID of the ship you want to transfer to|
good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

- attempt a warp jump [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/warp-jumps
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|

## STRUCTURES
- create a new structure [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/structures
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the structure|
|type|String|The symbol of the stucture to purchase|

- deposit goods to an owned structure [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/structures/:structureId/deposit
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

- deposit goods to a structure [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/structures/:structureId/deposit
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

- see a specific structure [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/structures/:structureId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

- transfer goods from an owned structure to a ship [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/structures/:structureId/transfer
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to transfer goods from|
|shipId|String|The ship ID you wish to deposit goods to|
|good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

- use to see a specific structure [REQUIRES AUTH TOKEN]

```
https://api.spacetraders.io/my/structures/:structureId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

- use to see all owned structures [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/my/structures
```

## SYSTEM INFO
- get location info [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/locations/:locationSymbol
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get info for|

- get a location's marketplace info [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/locations/:locationSymbol/marketplace
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get marketplace info for|

- get a list of ships at a location [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/locations/:locationSymbol/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get ship info for|

- list all available ships in the system [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/systems/:systemSymbol/ship-listings
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of ships for|


- get all active flight plans in the system [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/systems/:systemSymbol/flight-plans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of flight plans for|

- get info on a systems docked ships [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/systems/:systemSymbol/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of docked ships for|

- get location info for a system [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/systems/:systemSymbol/locations
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get info for|

- get systems info [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/systems/:systemSymbol
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want info for|

- get available goods [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/types/goods
```

- get available structures [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/types/structures
```

- get info on available ships [REQUIRES AUTH TOKEN]
```
https://api.spacetraders.io/types/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|class[optional]|String|Filter available ships on class|

