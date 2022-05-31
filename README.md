
#Space Traders GUI

---

## SECTIONS

1. About this project
2. API Info

---

Based on:
```
https://spacetraders.stoplight.io/docs/spacetraders/YXBpOjQ0NjY0NDE3-space-traders-api
```

---

This project is directed at skill development.  

Skills Used:
- HTML
- CSS 
- JS
- React 

Note: It is desired that the initial base be developed with vanilla HTML, CSS, and JS.  React and other frameworks/technologies may be added later.

---
## API INFO

###### BASE URL
```
https://v2-0-0.alpha.spacetraders.io
```

### SHIPS

#### Jettison Cargo [POST]
```
/my/ships/{shipSymbol}/jettison
```

#### Scan [POST] / Scan CoolDown [GET]
```
/my/ships/{shipSymbol}/scan
```

#### View Ship [GET]
```
/my/ships/{shipSymbol}
```

#### List Ships
```
/my/ships
```

### MARKETS

#### Deploy Asset [POST]
```
/my/ships/{shipSymbol}/deploy
```

#### Trade Imports [GET]
```
/trade/{tradeSymbol}/imports
```

#### Trade Exports [GET]
```
/trade/{tradeSymbol}/exports
```

#### Trade Exchanges [GET]
```
/trade/{tradeSymbol}/exchange
```

#### List Markets [GET]
```
/systems/{systemSymbol}/markets
```

#### View Market [GET]
```
/systems/{systemSymbol}/markets/{waypointSymbol}
```

### TRADE

#### Purchase Cargo [POST]
```
/my/ships/{shipSymbol}/purchase
```

#### Sell Cargo [POST]
```
/my/ships/{shipSymbol}/sell
```

### NAVIGATION

#### Dock Ship [POST]
```
/my/ships/{shipSymbol}/dock
```

#### Orbit Ship [POST]
```
/my/ships/{shipSymbol}/orbit
```

#### Jump Ship [POST] / Jump Cooldown [GET]
```
/my/ships/{shipSymbol}/jump
```

#### Refuel Ship [POST]
```
/my/ships/{shipSymbol}/refuel
```

#### Navigate Ship [POST] / Navigation Status [GET]
```
/my/ships/{shipSymbol}/navigate
```

### AGENTS

#### Register New Agent [POST]
```
/agents
```

#### My Agent Details [GET]
```
/my/agent
```

### CONTRACTS

#### Deliver on Contract [POST]
```
/my/ships/{shipSymbol}/deliver
```

#### List Contracts [GET]
```
/my/contracts
```

#### Contract Details [GET]
```
/my/contracts/{contractId}
```

#### Accept Contract [POST]
```
/my/contracts/{contractId}/accept
```

### EXTRACT

#### Extract Resources [POST] / Extraction Cooldown [GET]
```
/my/ships/{shipSymbol}/extract
```

#### Survey Waypoint [POST] / Survey Cooldown [GET]
```
/my/ships/{shipSymbol}/survey
```

### SYSTEMS

#### Chart Waypoint [POST]
```
/my/ships/{shipSymbol}/chart
```

#### List Systems [GET]
```
/systems
```

#### View Systems [GET]
```
/systems/{systemSymbol}
```

#### List Waypoints
```
/systems/{systemSymbol}/waypoints
```

#### View Waypoint
```
/systems/{systemSymbol}/waypoints/{waypointSymbol}
```

### SHIPYARDS

#### Purchase Ship [POST]
```
/my/ships
```

#### List Shipyards [GET]
```
/systems/{systemSymbol}/shipyards
```

#### Shipyard Details [GET]
```
/systems/{systemSymbol}/shipyards/{waypointSymbol}
```

#### Shipyard Listings [GET]
```
/systems/{systemSymbol}/shipyards/{waypointSymbol}/ships
```