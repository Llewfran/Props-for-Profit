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
- **Impossible Direct (designer ruling, 22 Nov):** still judged on the standard planes only (#1–#36); #37 does not cancel it. If #37 can reach such a charter direct (hops allowed), it flies it as a normal charter at the Charter Distance; other airlines may still connect and earn the distance they fly.

**Flying Boat (#38)**
- **Pax 8 and/or Freight 2**, Twin, Range 6, **$165** (final, 22 Nov). Earlier versions tested: Freight 4 / 4 engines / Range 14 / $330; Pax 6 / Freight 2 / Range 8 / $200; Pax 10 / Freight 3 / Range 6 / $225 (none bought); Pax 10 / Freight 2 / $185 and $205 with no competition penalty (too strong).
- **Favoured seaplane transport:** on Pax, its Demand Factor ignores **one** rival airline. Freight competition is normal. In a Connecting Flight the normal rules apply.
- **Pax and Freight together:** on a charter that has both a Pax and a Freight Demand card, the Clipper carries both in the same flight and earns both incomes. Expenses are paid **once** for the flight. Pax and Freight demand are each calculated as usual from their own demand card and rate; the one-rival buffer applies **only** to the Pax calculation, never to Freight. It counts as a rival on both services.
- **Open-water hop (land and refuel):** see below.
- Classes: Float, Twin, Cargo Plane. Discounts that can apply: Hope Floats, Against All Odds, Rust Bucket.
- #38 is a normal card in the Plane deck (the Clipper Auction card was not selected).

---

## 2. Headline Demand cards (Demand deck, triggered in Step 6)

Card art: A1–A7. A Headline card is placed in its column like a normal Demand card, with its Pax or Freight value. Its event starts when it is placed and lasts **while the card is displayed**: until its column is removed, because the charter was fulfilled or expired.

**Deck:** build the Demand deck at the size chosen for the game (55, 65 or 75), then **remove 7 random cards** from it and **shuffle in the 7 Headlines**. The deck size stays the same; which standard cards are missing is unknown.

**No compass:** Headline cards have no compass. Without the app, if a Headline is the **first** new Demand card drawn in Step 6, the Cloud **does not move** that turn. (With the app, the Cloud follows the Game Code path as usual.)

| Card | Art | Printed demand | Effect while displayed |
|---|---|---|---|
| **Coronation Festival** | A1 | Pax 3 | All Pax Demand Factors increase by 1, including this charter (still limited by the plane's capacity). |
| **Customs Crackdown** | A2 | Freight 2 | Landings on Freight flights cost $3. |
| **Government Mail Contract** | A3 | Freight 2 | Every airline that flies this charter with Freight 2 collects a flat **$30** (no Demand Factor, no competition penalty). Flight costs still apply. |
| **Fuel Price Spike** | A4 | Freight 2 | The Maintenance Factor of **every plane** (fixed wing and helicopter, High Maintenance included) increases by 1 on every flight: FW 1 → 2, Helo 2 → 3, High Maintenance FW 2 → 3, High Maintenance Helo 3 → 4. |
| **Fuel Subsidy** | A5 | Pax 6 | The Maintenance Factor of **every plane** (fixed wing and helicopter, High Maintenance included) decreases by 1 on every flight, minimum 0: FW 1 → 0 (only the landing fee is paid), Helo 2 → 1, High Maintenance FW 2 → 1, High Maintenance Helo 3 → 2. |
| **Royal Visit to Crown Island** | A6 | Pax 10 | Charter 6 (A → C) is Pax 8. |
| **Strike!** | A7 | Pax 2 | Planes cannot reposition: skip Step 3. |

**Fuel cards and Step 5:** the Fuel cards change only the Maintenance Factor used in flight costs (charters and repositioning). Scheduled Maintenance in Step 5 is unchanged: $10 per engine ($5 for On a Wing and a Prayer).

**Effects combine:** Fuel Price Spike and Fuel Subsidy together cancel out. Customs Crackdown changes the landing fee; the Fuel cards change the Maintenance Factor, so they apply together.

---

## 3. Opportunity cards (Plane deck, triggered in Step 1)

Card art: O-1–O-5. In Step 1 an Opportunity card is **drawn into your hand instead of procuring a plane that turn**; otherwise it goes to the bottom of the deck with the other unbought cards. Pay Out and Exclusive Contract are kept until used; the others are played immediately. A used card leaves the game.

**ERI:** a player holding an ERI still draws in Step 1. They cannot buy a plane, but may take an Opportunity card (this is how Bank Promotion helps).

**Turn 1 draft:** if an Opportunity card is dealt into a draft hand, set it aside and draw a replacement. After the draft, the set-aside cards and the returned draft cards are shuffled back into the Plane deck.

| Card | Art | Badge | Effect |
|---|---|---|---|
| **Pay Out** | O-1 | +$30 | Keep until you want to dispose of a High Maintenance plane. When you "sell" it in Step 7 (normally scrapped for $0), receive **$30**. Not in the final turn (no sales). |
| **Spare Part Sale** | O-2 | $20 | Play immediately. Pay $20 to remove the High Maintenance card from a plane. The plane is "as new": normal costs, and it can be sold to the 50% pool again. |
| **Exclusive Contract** | O-3 | $0 | Keep until needed. Play with your Charter Accepted card to counter all competition on one charter, Pax or Freight: your Demand Factor is not reduced by rivals (still limited by capacity). |
| **Bank Promotion** | O-4 | $100 | Play immediately. Repay any ERI for only $100. |
| **Retired Pilot Plane** | O-5 | $0 | Play immediately. Buy any plane from the 50% Second Hand pool at its pool price **without** taking a High Maintenance card. It is "as new". No company discount. |

---

## 4. Rulings
1. Mail Contract pays a flat $30 to every airline that flies it with Freight 2 (22 Nov).
2. Exclusive Contract is limited by plane capacity (22 Nov).
3. Opportunity cards dealt in the Turn 1 draft are set aside and replaced; the Plane deck is reshuffled after the draft (22 Nov).
4. **Card values are as printed on the final art (22 Nov, afternoon):** all Headline effects last while the card is displayed; Fuel cards change the Maintenance Factor, not the landing fee; Coronation Festival is Pax 3; Fuel Price Spike is Freight 2; Pay Out is kept and used when scrapping a High Maintenance plane; Bank Promotion is played immediately.
5. Headlines join the deck in place of 7 random cards, and have no compass (22 Nov).

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

### Re-run with the card values as printed (22 Nov, afternoon)
Settings: everything as printed on the final art (sections 1–3), Headlines in place of 7 random cards, no compass on Headlines. 2,000 six-player, 75-card games per bot type.

| | Base (competitive / random) | Expansion (competitive / random) |
|---|---|---|
| Winner's final cash | $618 / $644 | $584 / $607 |
| Average peak total cash | $1,868 / $1,844 | $1,793 / $1,750 |
| Highest peak total cash | $3,612 / $3,791 | $3,976 / $4,160 |
| Games with an ERI | 27.5% / 23.7% | 30.4% / 28.2% |
| Bankruptcies | 0 / 0 | 0 / 0 |
| Turn-8 leader wins | 60.0% / 61.9% | 56.2% / 59.5% |

- The expansion now takes a little money out of the game (winner about $35 lower, about 3–4 more games in 100 need an ERI). The main cause is Fuel Price Spike doubling fixed-wing flight costs while it is displayed.
- Each Headline stays displayed for about 1.2–1.5 turns per game.
- Amphibian #37: bought in 3–5% of games, owners win 50–52%. Flying Boat #38: bought in 9–12%, owners win 56–64%.
- Opportunity cards: Exclusive Contract played in 72–80% of games; Retired Pilot Plane used in 76–87%; Pay Out cashed in 30–36%; Spare Part Sale used in 27–34%; Bank Promotion used in only 4–5% (it only helps a player who holds an ERI when they draw it).
- Companies: all within about 2 points of the base game; Plane Lucky stays lowest (~10–11%).
