# The Day in World News — Wednesday 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/prosky1/news-image-20261118-entry-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/prosky1/news-image-20261118-entry-v2/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for the make.fun competition **news-image-20261118**: one image summing
up the world news of Wednesday 18 November 2026 — 35 stories from 6 continents
on a single page.

The front page leads with the widening US–Iran war in the Gulf (US jets strike
an IRGC missile site on Qeshm Island; Iranian drones hit a radar in Bahrain; a
tanker hit twice in the Strait of Hormuz, one sailor missing), Xi defending open
trade as APEC opens in Shenzhen ahead of Thursday's Trump–Xi–Putin talks, and a
span of the Crimea bridge falling into the Kerch Strait. Eight more stories
follow — Nvidia's $115.8bn quarter, the Quad reuniting in Manila, Cyclone Akvan
bearing down on India's east coast, Category 5 Cyclone Xavier, Ebola passing
11,000 cases in DR Congo, the EU's €45bn loan for Ukraine, Voyager 1 crossing
one light-day, and GTA VI going on sale — plus a by-the-numbers strip, a dotted
world map with numbered pins, and 24 more briefs. Every story happened, or was
first reported, on 18 November 2026; every figure was verified against live
sources. All illustrations are flat vector drawings made in code.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) gates `entry.png` (PNG magic bytes,
1024×1024, under 1 MiB) and copies it to the output directory, verifying the
copy byte for byte. The image is a 1024×1024 PNG, 200,946 bytes — within the
1 MiB and 1024×1024 limits.
