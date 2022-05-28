DRAFT OF README FOR SPACETRADERS GUI PROJECT

##List of Calls [from Spacetraders.io](https://api.spacetraders.io)

**ACCOUNT**
- get account information
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

**GAME**
- determine server status
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|none|none|none|

**FLIGHT PLANS**
- get info on an existing flight plan (what does existing mean in this context)
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|flightPlanId|String|ID of the flight plan|


- submit a new flight plan
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|
|destination|String|Symbol of the location you want to send the ship

**LEADERBOARD**
- see current net worth of top players
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

**LOANS**
- get a list of your loans
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|


- take out a new loan
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|type|String|The type of loan you wish to take out|

- pay off a loan
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|loanId|String|The ID of the loan you wish to pay off|


**LOCATIONS**
- get location info
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get info for|

- get a location's marketplace info
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get marketplace info for|

- get a list of ships at a location
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|locationSymbol|String|Symbol of the location you want to get ship info for|


**PURCHASE ORDERS**
- place a new purchase order
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will purchase the goods|
|good|String|The ID of the good you wish to purchase|
|quantity|Number|The amount of goods to purchase|


**SELL ORDERS**
- place a new sell order
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship which will sell the goods|
|good|String|The ID of the good you wish to sell|
|quantity|Number|The amount of goods to sell|


**SHIPS**
- buy a new ship
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the ship|
|type|String|The symbol of the ship to purchase|

- get info on a specific owned ship
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to return|


- get list of owned ships
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

- jettison cargo
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to jettison from|
|good|String|The SYMBOL of the good you wish to jettison|
|quantity|Number|The amount of goods to jettison|

- scrap ship for credits
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The ID of the ship you want to scrap|


- transfer cargo between ships
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|fromShipId|String|The ID of the ship you want to transfer from|
|toShipId|String|The ID of the ship you want to transfer to|
good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

**STRUCTURES**
- create a new structure
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|location|String|The symbol of the location to purchase the structure|
|type|String|The symbol of the stucture to purchase|

- deposit goods to an owned structure
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

- deposit goods to a structure
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to deposit goods into|
|shipId|String|The ship ID you wish to deposit goods from|
|good|String|The SYMBOL of the good you wish to deposit|
|quantity|Number|The amount of goods to deposit|

- see a specific structure
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

- transfer goods from an owned structure to a ship
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|The ID of the structure you want to transfer goods from|
|shipId|String|The ship ID you wish to deposit goods to|
|good|String|The SYMBOL of the good you wish to transfer|
|quantity|Number|The amount of goods to transfer|

- use to see a specific structure
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|structureId|String|Symbol of the structure you want to get info for|

- use to see all owned structures
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

**SYSTEMS**
- list all available ships in the system
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of ships for|

- get all active flight plans in the system
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of flight plans for|

- get info on a systems docked ships
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get a list of docked ships for|

- get location info for a system
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want to get info for|

- get systems info
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|systemSymbol|String|Symbol of the system you want info for|

**TYPES**
- get available goods
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

- get available loans
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

- get available structures
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|

- get info on available ships
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|class[optional]|String|Filter available ships on class|

**WARP JUMP**
- attempt a warp jump
|FIELD|TYPE|DESCRIPTION|
|:--|:--|:--|
|shipId|String|The target ship|
