# Props for Profit — Advanced Game Options (Expansion)

**Status:** Draft. Kept separate from the core rules (Rules v2), the rule book and the app until approved as advanced options. Simulated 22 Nov 2026 (see section 6).

**Design principle:** No new draw action. Every event is triggered by a card players already draw: Headline cards come with the Demand deck (Step 6), and Opportunity cards come with the Plane deck (Step 1).

---

## 1. New planes

| Ref # | Name | Type / icon | Pax | Freight | Range | Engines | Price |
|---|---|---|---|---|---|---|---|
| 37 | Amphibian "Goose" | FW-L + FW-F (both icons) | 8 | — | 5 | 2 | $165 |
| 38 | Flying Boat "Pacific Clipper" | FW-F only, Combi+ | 8 | 2 | 6 | 2 | $165 |

**Amphibian (#37)**
- Pax only (not a Combi).
- It can land at any airport with an FW-L or FW-F icon (the card shows both icons). It can't land at helicopter-only locations. Range 5, as printed on the card: its strength is where it can land and hop, not distance.
- Classes: Twin, Float. It is **not** a Cargo Plane (no Freight value), so Rust Bucket does not apply.
- Discounts that can apply: Hope Floats (first Float), Against All Odds (first Twin).

**Flying Boat (#38)**
- **Pax 8 and/or Freight 2**, Twin, Range 6, **$165** (final, 22 Nov). Earlier versions tested: Freight 4 / 4 engines / Range 14 / $330; Pax 6 / Freight 2 / Range 8 / $200; Pax 10 / Freight 3 / Range 6 / $225 (none bought); Pax 10 / Freight 2 / $185 and $205 with no competition penalty (too strong).
- **Favoured seaplane transport:** on Pax, its Demand Factor ignores **one** rival airline. Freight competition is normal. In a Connecting Flight the normal rules apply.
- **Pax and Freight together:** on a charter that has both a Pax and a Freight Demand card, the Clipper carries both in the same flight and earns both incomes. Expenses are paid **once** for the flight. Pax and Freight demand are each calculated as usual from their own demand card and rate; the one-rival buffer applies **only** to the Pax calculation, never to Freight. It counts as a rival on both services.
- **Open-water hop (land and refuel):** see below.
- Classes: Float, Twin, Cargo Plane. Discounts that can apply: Hope Floats, Against All Odds, Rust Bucket.
- #38 is a normal card in the Plane deck (the Clipper Auction card was not selected).

---

## 2. Headline Demand cards (Demand deck, triggered in Step 6)

A Headline card is a normal Demand card (Pax or Freight value and compass) with a headline banner. It's placed in its column as usual, and its event starts when it is placed.

Two durations are used:
- **"Next turn":** the event applies during the following turn only.
- **"While this column stands":** the event lasts until the card's column is removed, either because the charter is fulfilled or because it expires.

| Card | Printed demand | Duration | Effect |
|---|---|---|---|
| **Coronation Festival** | Pax 4 | While this column stands | Every Pax charter gets **+1 Pax** printed demand. |
| **Customs Crackdown** | Freight 2 | While this column stands | Landings on **Freight** flights cost **$3** instead of $1. |
| **Fuel Price Spike** | Freight 1 | Next turn | Every landing costs $2 instead of $1. |
| **Fuel Subsidy** | Pax 6 | Next turn | Landings are free. |
| **Royal Visit to Crown Island** | Pax 10 | Next turn | Charter 6 is Pax 8. |
| **Government Mail Contract** | Freight 2 | This charter | **Every** successful airline whose plane can carry Freight 2 collects a flat **$30** (no Demand Factor, no competition penalty, no income calculation; flight costs are still paid). |
| **Mechanics' Strike** | Pax 2 | Next turn | No repositioning (Step 3 is skipped). |

**Deck size:** each Headline card replaces a normal Demand card of the same value (values spread across the standard Pax and Freight range), so the deck stays at 75 cards with an unchanged demand mix.

**Landing-cost effects combine:** Fuel Spike +$1, Fuel Subsidy −$1, Customs Crackdown +$2 on Freight landings; add them up, minimum $0. Spike and Subsidy together cancel out.

---

## 3. Opportunity cards (Plane deck, triggered in Step 1)

When drawn in Step 1, a player may **use** an Opportunity card **instead of buying a plane** that turn, or put it on the bottom of the deck with the other unbought cards. Exclusive Contract and Bank of Pacifica Promotion are kept until used. A used card leaves the game.

**Turn 1 draft:** if an Opportunity card is dealt into a draft hand, set it aside and draw a replacement. After the draft, the set-aside cards and the returned draft cards are shuffled back into the Plane deck.

| Card | Effect |
|---|---|
| **Insurance Payout** | Collect $30 from the Bank for one of your High Maintenance planes. |
| **Spare Parts Sale** | Pay $20 to remove the High Maintenance card from one of your planes. The plane is considered **"as new"**: normal maintenance, and it can be sold again to the 50% pool. |
| **Exclusive Contract** | Keep this card. Play it once, in a later turn, with your Charter Accepted card. On that charter your Demand Factor is **unadjusted**: the printed demand shown, still limited by your plane's capacity and abilities. Discard it after use. |
| **Bank of Pacifica Promotion** | Repay your ERI for $100 instead of $120 (any Step 7). Keep it until used. |
| **Retired Pilot's Plane** | Buy any plane from the 50% pool at its pool price **without** the High Maintenance card. The plane is considered **"as new"**. |

---

## 4. Rulings (22 Nov 2026)
1. Headline demand values spread across the standard Pax and Freight range (table above).
2. Mail Contract is Freight 2 and pays a flat $30 to every successful airline that can carry it.
3. Exclusive Contract is limited by plane capacity and abilities.
4. Fuel and Customs effects combine and can cancel each other.
5. Opportunity cards dealt in the Turn 1 draft are set aside and replaced; the Plane deck is reshuffled after the draft.
6. Players with an ERI skip Step 1, so they can't take Opportunity cards (simulator assumption).

## 5. Later impacts (not done yet)
- **Simulator:** add #37, #38, sea-hop routing, the Headline and Opportunity cards; run 2,000 six-player, 75-card games to check plane dominance, money supply ($4,000 box) and catch-up.
- **App:** advanced-options toggle; plane data for #37/#38; sea-hop routing; calculator toggles for landing cost ($0/$1/$2/$3/$4), Coronation +1 Pax and Exclusive Contract.
- **Components:** 2 plane cards (done: card art in the Aircraft folder), 7 Headline Demand cards, 5 Opportunity cards. No FW-A icon needed.

---

## 6. Simulation results (22 Nov 2026)
2,000 six-player, 75-card games per run, competitive bots and random-strategy bots, compared with the current base rules.

| | Base | Expansion |
|---|---|---|
| Game length | 15.0 turns | 15.0 turns |
| Winner's final cash | $618 | $615 |
| Peak total cash (max) | $3,612 | $3,696 |
| Games with an ERI | 27.5% | 27.3% |
| Bankruptcies | 0 | 0 |
| Turn-8 leader wins | 60.0% | 55.9% |

- **Money supply and failures:** unchanged; the $4,000 box still covers every game.
- **Catch-up:** slightly better (leader at turn 8 wins about 4 points less).
- **Companies:** Hope Floats about −3 points (17.6% → 14.8%), Against All Odds about +2. Plane Lucky stays weakest (~10%).
- **Amphibian #37 ($145):** bought in ~26% of games, ~$54 net per flight, owners win 46%. Comparison: owners of the $125 Pax 8 twins (#18–20) win 37–39%; owners of the $185–200 Pax 10 twins (#25–28) win 49–51%. It performs like a $185–200 plane at $145: strong, not broken.
- **Flying Boat #38 (2 engines, $200, Range 8, Pax 6 / Freight 2):** bought by only 0.1–0.2% of airlines. It earns about the same as Combi #32 (Pax 6 / Freight 2, $90), so at $200 it is overpriced; break-even value is about $110–130. The open-water hop was used on 0 flights.
- **Events:** each Headline card appears about once per game. Mail Contract flown in ~25% of games. Exclusive Contract played in ~80% of games. Bank of Pacifica Promotion used in only ~5% of games (low impact).

### Re-run: Amphibian $165, Clipper Pax 10 / Freight 3, Range 6, $225
| | Base | Expansion |
|---|---|---|
| Winner's final cash | $618 | $617 |
| Games with an ERI | 27.5% | 26.8% |
| Bankruptcies | 0 | 0 |
| Turn-8 leader wins | 60.0% | 55.0% |

- **Amphibian at $165:** bought in ~14% of games (was ~26% at $145), ~$53 net per flight, owners win ~51%. Owners of #18 ($125 Pax 8 twin) win 41%.
- **Clipper:** bought by only 0.1% of airlines. Its expected earnings are about the same as #21/#24 (Pax 10, $115), and it can reach fewer airports (FW-F only). At Range 6 the open-water hop helps on about 14% of possible routes.
- **Bot limit:** the bots also almost never buy the base game's planes over ~$170 (#25–28 bought in 0.3–1.5% of games, #31 never). So the bots understate the appeal of expensive planes, and the earlier #25–28 comparison was based on very few games.
- Companies: Hope Floats still about −3 points (17.6% → 14.9%), Against All Odds about +2.

### Re-run: Clipper $185, Pax 10 / Freight 2, Range 6, no competition penalty
| | Base | Expansion |
|---|---|---|
| Winner's final cash | $618 | $626 |
| Peak total cash (max) | $3,612 | $3,823 |
| Games with an ERI | 27.5% | 27.4% |
| Bankruptcies | 0 | 0 |
| Turn-8 leader wins | 60.0% | 54.8% |

- **Clipper:** bought in 6–9% of games, ~$66 net per flight (~$480 over a game), owners win 72–74%. Owners of the $185–200 Pax 10 twins (#25–28) win 46–53%, and Amphibian owners 48–59%. The Clipper now looks too strong. About a quarter of its flights use a sea hop.
- **Amphibian ($165):** bought in 10–14% of games, owners win 48–59%.
- **Companies:** Hope Floats recovers to ~16% (base 17.6–18.0%). Against All Odds is ~17.5%; Plane Lucky ~10–11%.
- Money supply unchanged; the $4,000 box still covers every game.

### Re-run: Clipper at $205 (rest unchanged)
- Bought in only ~3% of games (was 6–9% at $185). Net per flight unchanged (~$68); owners win 71–89% (about 65 owners per 2,000 games, so roughly ±6 points).
- A higher price makes it a plane that only the leading airline can afford; it doesn't make it weaker. Pricing is the wrong lever. Making the no-competition rule Pax only would weaken the plane itself.
- Everything else unchanged: winner $621 (base $618), ERI games 27.5%, no bankruptcies, turn-8 leader wins 54.8% (base 60.0%), Hope Floats 15.4–16.1%.

### Final run: Clipper $165, Pax 8 / Freight 2, ignores one Pax rival, carries both, Range 6, sea hop
| | Base | Expansion |
|---|---|---|
| Winner's final cash | $618 | $622 |
| Peak total cash (max) | $3,612 | $3,810 |
| Games with an ERI | 27.5% | 27.4% |
| Bankruptcies | 0 | 0 |
| Turn-8 leader wins | 60.0% | 54.9% |

- **Clipper:** bought in 9–12% of games, ~$55–58 net per flight, owners win 56–61%. In line with the Amphibian (owners win 49–59%) and the $185–200 Pax 10 twins #25–28 (48–54%). **Balanced.**
- About 1 flight in 5 uses a sea hop. Carrying Pax and Freight together happens in about 1 game in 10, because mixed charters are uncommon.
- Companies: Hope Floats 15.6–15.8% (base 17.6–18.0%), Against All Odds 17.4% (base 15.1–15.4%); others within 1 point of base. Plane Lucky ~10–11%.
- Money supply unchanged; the $4,000 box still covers every game.

### Re-run: Amphibian Range 5 (as printed on the card)
- **Amphibian:** bought in ~4% of games (was 10–14% at Range 7), ~$45–48 net per flight, owners win 53–60%. Weaker and rarer, still a sound buy.
- **Clipper:** bought in 9–14% of games, owners win 59–60%.
- Everything else unchanged: winner $619–640, ERI games 23.5–27.6%, no bankruptcies, turn-8 leader wins 55.5–58.1% (base 60.0–61.9%). One game of 4,000 peaked at $5,175 total cash; the "Bank never runs out" rule covers it.
