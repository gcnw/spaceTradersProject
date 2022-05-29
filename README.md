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
- get account information

```
https://api.spacetraders.io/my/account
```

[REQUIRES AUTH TOKEN]

- determine server status

```
https://api.spacetraders.io/game/status
```

- see current net worth of top players

```
https://api.spacetraders.io/game/leaderboard/net-worth
```

[REQUIRES AUTH TOKEN]

## CREDIT MANAGEMENT

- get a list of your loans

```
https://api.spacetraders.io/my/loans
```
[REQUIRES AUTH TOKEN]

- get available loans

```
https://api.spacetraders.io/types/loans
```
[REQUIRES AUTH TOKEN]

- take out a new loan

```
https://api.spacetraders.io/my/loans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|type|String|The type of loan you wish to take out|

[REQURIES AUTH TOKEN]

- pay off a loan

```
https://api.spacetraders.io/my/loans/:loanId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|loanId|String|The ID of the loan you wish to pay off|

[REQUIRES AUTH TOKEN]

- place a new purchase order

```
https://api.spacetraders.io/my/purchase-orders
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will purchase the goods|
|good|String|The ID of the good you wish to purchase|
|quantity|Number|The amount of goods to purchase|

[REQUIRES AUTH TOKEN]

- place a new sell order

```
https://api.spacetraders.io/my/sell-orders
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will sell the goods|
|good|String|The ID of the good you wish to sell|
|quantity|Number|The amount of goods to sell|

[REQUIRES AUTH TOKEN]

- buy a new ship

```
https://api.spacetraders.io/my/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the ship|
|type|String|The symbol of the ship to purchase|

[REQUIRES AUTH TOKEN]

- scrap ship for credits

```
https://api.spacetraders.io/my/ships/:shipId/
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to scrap|

[REQUIRES AUTH TOKEN]

## MY SHIPS

- get info on an existing flight plan (what does existing mean in this context)

```
https://api.spacetraders.io/my/flight-plans/:flightPlanId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|flightPlanId|String|ID of the flight plan|

[REQUIRES AUTH TOKEN]

- submit a new flight plan

```
https://api.spacetraders.io/my/flight-plans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|
|destination|String|Symbol of the location you want to send the ship

[REQUIRES AUTH TOKEN]

- get info on a specific owned ship

```
https://api.spacetraders.io/my/ships/:shipId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to return|

[REQUIRES AUTH TOKEN]

- get list of owned ships

```
https://api.spacetraders.io/my/ships
```

[REQUIRES AUTH TOKEN]

- jettison cargo

```
https://api.spacetraders.io/my/ships/:shipId/jettison
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to jettison from|
|good|String|The SYMBOL of the good you wish to jettison|
|quantity|Number|The amount of goods to jettison|

[REQUIRES AUTH TOKEN]

- transfer cargo between ships

```
https://api.spacetraders.io/my/ships/:fromShipId/transfer
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|fromShipId|String|The ID of the ship you want to transfer from|
|toShipId|String|The ID of the ship you want to transfer to|
good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

[REQUIRES AUTH TOKEN]

- attempt a warp jump

```
https://api.spacetraders.io/my/warp-jumps
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|

[REQUIRES AUTH TOKEN]

## STRUCTURES
- create a new structure

```
https://api.spacetraders.io/my/structures
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the structure|
|type|String|The symbol of the stucture to purchase|

[REQUIRES AUTH TOKEN]

- deposit goods to an owned structure

```
https://api.spacetraders.io/my/structures/:structureId/deposit
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

[REQUIRES AUTH TOKEN]

- deposit goods to a structure

```
https://api.spacetraders.io/structures/:structureId/deposit
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

[REQUIRES AUTH TOKEN]

- see a specific structure

```
https://api.spacetraders.io/structures/:structureId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

[REQUIRES AUTH TOKEN]

- transfer goods from an owned structure to a ship

```
https://api.spacetraders.io/my/structures/:structureId/transfer
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to transfer goods from|
|shipId|String|The ship ID you wish to deposit goods to|
|good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

[REQUIRES AUTH TOKEN]

- use to see a specific structure

```
https://api.spacetraders.io/my/structures/:structureId
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

[REQUIRES AUTH TOKEN]

- use to see all owned structures
```
https://api.spacetraders.io/my/structures
```

## SYSTEM INFO
- get location info
```
https://api.spacetraders.io/locations/:locationSymbol
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get info for|

[REQUIRES AUTH TOKEN]

- get a location's marketplace info
```
https://api.spacetraders.io/locations/:locationSymbol/marketplace
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get marketplace info for|

[REQUIRES AUTH TOKEN]

- get a list of ships at a location
```
https://api.spacetraders.io/locations/:locationSymbol/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get ship info for|

[REQUIRES AUTH TOKEN]

- list all available ships in the system
```
https://api.spacetraders.io/systems/:systemSymbol/ship-listings
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of ships for|

[REQUIRES AUTH TOKEN]

- get all active flight plans in the system
```
https://api.spacetraders.io/systems/:systemSymbol/flight-plans
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of flight plans for|

[REQUIRES AUTH TOKEN]

- get info on a systems docked ships
```
https://api.spacetraders.io/systems/:systemSymbol/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of docked ships for|

[REQUIRES AUTH TOKEN]

- get location info for a system
```
https://api.spacetraders.io/systems/:systemSymbol/locations
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get info for|

[REQUIRES AUTH TOKEN]

- get systems info
```
https://api.spacetraders.io/systems/:systemSymbol
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want info for|

[REQUIRES AUTH TOKEN]

- get available goods
```
https://api.spacetraders.io/types/goods
```

[REQUIRES AUTH TOKEN]

- get available structures
```
https://api.spacetraders.io/types/structures
```

[REQUIRES AUTH TOKEN]

- get info on available ships
```
https://api.spacetraders.io/types/ships
```

|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|class[optional]|String|Filter available ships on class|

[REQUIRES AUTH TOKEN]

