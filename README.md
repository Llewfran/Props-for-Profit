# Props for Profit

Companion app for the **Props for Profit** board game. It builds the island map, moves the Cloud and does the flight arithmetic. The game itself, including all money, stays on the table.

**Play:** https://llewfran.github.io/Props-for-Profit/

## Install on a phone or tablet
1. Open the address above in Safari (iPhone/iPad) or Chrome (Android).
2. iPhone/iPad: Share, then Add to Home Screen. Android: menu, then Install app.
3. Open it once while online. After that it also works offline.

## Starting a game
- One player taps **New Game** and reads out the 6-character **Game Code**.
- Everyone else taps **Join Game** and types the same code. Every phone then shows the same map and the same Cloud path.
- Each player chooses their airline. The airline's office becomes the phone's background and its Special Ability stays on screen.
- Lay out the map cards as shown: Map Compass, Aurelia City, Breakwater Bay and the Turn Counter (white marker on 1) in the left column.

## What the app does
- **Turn helper:** the seven steps, ability reminders, maintenance when the marker is on 4, **Move the Cloud** in Step 6, the final-turn button and the turn-marker reminder in Step 7.
- **Flight calculator:** choose the plane (card image shown), High Maintenance, Pax or Freight for Combi planes, Departure, Arrival and printed Demand. Shows the Charter Distance, the cheapest legal route with hops, the operating expense and the income for 0–4 rival airlines, with the Pax comfort bonuses. Warns about landing icons, the Cloud, Range and Impossible Directs.
- **Reposition calculator:** route and expense only.
- **Connecting flight:** lists every connecting airport where both planes can land, cheapest first, and applies the Impossible Direct rule (Charter Distance = distance actually flown).
- **Fleet:** record the planes on your three Tarmac cards, see your maintenance bill, and review the last 20 calculations.
- **Rule book:** the full illustrated rule book, page by page.

The app keeps no money totals. Game data is stored on each device only.

## Inviting players
The start page, the Game Code page and the Turn page (Invite players) show the app address and the Game Code, with **Share invite** and **Copy invite** buttons, so whoever opens the app first can bring everyone else in.

## Releasing an update
Change `VERSION` in `sw.js`, upload the changed files, then open the app online twice on each device.

## Version 1 (21 Nov 2026)
Rules: Rules v2 with the rulings of 21 Nov 2026 ($100 start, Charter 6 = Pax 4, Charter 7 = Cargo 1, Connecting Flights, Impossible Direct = actual distance flown, Combi Planes #32–#36, draw 2 / may buy 1 / all unbought to the bottom).

## Version 2 (21 Nov 2026)
- Invite panel with the app address, install steps and the Game Code, plus Share / Copy buttons.
