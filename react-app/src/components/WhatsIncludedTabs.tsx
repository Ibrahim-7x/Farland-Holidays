import { useEffect, useMemo, useState } from "react";
import type { Destination } from "../data/destinations";
import "./WhatsIncludedTabs.css";

type SectionItem = {
  label?: string;
  primary?: string;
  pills?: string[];
  lines?: string[];
};

type Section = {
  icon: string;
  title: string;
  items: SectionItem[];
};

type Tab = {
  id: string;
  label: string;
  flag: string;
  sections: Section[];
};

type Props = {
  destination: Destination;
  selectedPackageIndex?: number;
  onPackageChange?: (index: number) => void;
};

function buildTabs(dest: Destination, pkgIdx: number): Tab[] {
  switch (dest.slug) {
    case "singapore-bali":
      return [
        {
          id: "sg",
          label: "Singapore",
          flag: "🇸🇬",
          sections: [
            {
              icon: "✈️",
              title: "Flights",
              items: [
                {
                  label: "To Singapore",
                  pills: ["Economy Class", "1 Piece Luggage", "From Perth"],
                },
                {
                  label: "Internal (SIN)",
                  pills: ["Economy Class", "20kg PP", "From SIN"],
                },
              ],
            },
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Furama Riverfront",
                  pills: ["Superior Room", "Room Only", "04 Nights"],
                },
              ],
            },
            {
              icon: "🎯",
              title: "Excursions",
              items: [
                {
                  lines: [
                    "Marina Bay Sands SkyPark Deck Tickets",
                    "Gardens by the Bay",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "bali",
          label: "Bali",
          flag: "🇮🇩",
          sections: [
            {
              icon: "🏨",
              title: "Hotel — Seminyak",
              items: [
                {
                  primary: "FuramaXclusive Ocean Beach",
                  pills: ["Studio Room", "Breakfast", "07 Nights"],
                },
              ],
            },
            {
              icon: "🎯",
              title: "Excursions",
              items: [
                {
                  lines: [
                    "Snorkelling to the Blue Lagoon — Full Day Tour",
                    "Ubud Highlights Private Tour",
                  ],
                  pills: ["Private guide + transfers included"],
                },
              ],
            },
            {
              icon: "🚌",
              title: "Transfers",
              items: [{ primary: "All ground transfers included" }],
            },
          ],
        },
      ];

    case "dubai-bali":
      return [
        {
          id: "dubai",
          label: "Dubai",
          flag: "🇦🇪",
          sections: [
            {
              icon: "✈️",
              title: "Flights",
              items: [
                {
                  pills: ["Economy Class", "1 Piece Luggage", "From Perth"],
                },
              ],
            },
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Four Points Sheraton Bur Dubai",
                  pills: ["Classic Room", "Breakfast", "03 Nights"],
                },
              ],
            },
          ],
        },
        {
          id: "bali",
          label: "Bali",
          flag: "🇮🇩",
          sections: [
            {
              icon: "🎯",
              title: "Tour",
              items: [
                {
                  primary: "Bali & Gili Highlight Private Tour",
                  pills: [
                    "Standard Room",
                    "Daily Meals",
                    "12 Days / 11 Nights",
                  ],
                },
              ],
            },
            {
              icon: "🚌",
              title: "Transfers",
              items: [{ primary: "Not Included" }],
            },
          ],
        },
      ];

    case "bali-long-stay":
      return [
        {
          id: "ubud",
          label: "Ubud",
          flag: "🛕",
          sections: [
            {
              icon: "✈️",
              title: "Flights",
              items: [
                {
                  pills: ["Economy Class", "1 Piece Luggage", "From Perth"],
                },
              ],
            },
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Ashoka Tree Resort",
                  pills: ["Superior Room", "Breakfast", "05 Nights"],
                },
              ],
            },
          ],
        },
        {
          id: "nusadua",
          label: "Nusa Dua",
          flag: "🏖",
          sections: [
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Mercure Bali Nusa Dua",
                  pills: ["Superior Garden View", "Breakfast", "05 Nights"],
                },
              ],
            },
          ],
        },
        {
          id: "canggu",
          label: "Canggu",
          flag: "🏄",
          sections: [
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Hotel Sages",
                  pills: ["Superior Suite", "Breakfast", "03 Nights"],
                },
              ],
            },
          ],
        },
        {
          id: "seminyak",
          label: "Seminyak",
          flag: "🍹",
          sections: [
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: "Paragon Hotel Seminyak",
                  pills: ["Deluxe Balcony Room", "Breakfast", "07 Nights"],
                },
              ],
            },
            {
              icon: "🚌",
              title: "Transfers",
              items: [{ primary: "All ground return transfers included" }],
            },
          ],
        },
      ];

    case "makkah-madinah": {
      const makkahHotels = [
        { name: "Anjum Hotel 5★", nights: "04 Nights" },
        { name: "Swissotel Al Maqam 5★", nights: "06 Nights" },
        { name: "Swissotel Al Maqam 5★", nights: "06 Nights" },
      ];
      const madinahHotels = [
        { name: "Emaar Royal 5★", nights: "03 Nights" },
        { name: "Saja Al Madinah 4★", nights: "04 Nights" },
        { name: "Taiba Madinah 5★", nights: "06 Nights" },
      ];
      const i = Math.max(0, Math.min(2, pkgIdx));
      return [
        {
          id: "makkah",
          label: "Makkah",
          flag: "🕋",
          sections: [
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: makkahHotels[i].name,
                  pills: ["Quad Room", makkahHotels[i].nights],
                },
              ],
            },
          ],
        },
        {
          id: "madinah",
          label: "Madinah",
          flag: "🕌",
          sections: [
            {
              icon: "🏨",
              title: "Hotel",
              items: [
                {
                  primary: madinahHotels[i].name,
                  pills: ["Quad Room", madinahHotels[i].nights],
                },
              ],
            },
          ],
        },
      ];
    }

    default:
      return [];
  }
}

export function WhatsIncludedTabs({
  destination,
  selectedPackageIndex,
  onPackageChange,
}: Props) {
  const isMakkah = destination.slug === "makkah-madinah";

  const [internalPkgIdx, setInternalPkgIdx] = useState(
    selectedPackageIndex ?? 1
  );
  const pkgIdx = selectedPackageIndex ?? internalPkgIdx;
  const setPkgIdx = (i: number) => {
    if (selectedPackageIndex === undefined) setInternalPkgIdx(i);
    onPackageChange?.(i);
  };

  const tabs = useMemo(
    () => buildTabs(destination, pkgIdx),
    [destination, pkgIdx]
  );

  const [activeId, setActiveId] = useState<string>(tabs[0]?.id ?? "");

  useEffect(() => {
    setActiveId(tabs[0]?.id ?? "");
  }, [destination.slug, tabs]);

  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  if (!active) return null;

  return (
    <div className="wit-card">
      <div className="wit-card-header">
        <h3>What's Included</h3>
        <div className="wit-from-tag">
          From <strong>{destination.fromPrice}</strong>
          <span>per person</span>
        </div>
      </div>

      {isMakkah && destination.packages && (
        <div className="wit-pkg-picker">
          <div className="wit-pkg-help">
            Choose your preferred package — all three depart in September.
          </div>
          <div className="wit-pkg-grid">
            {destination.packages.map((p, i) => {
              const isSelected = i === pkgIdx;
              return (
                <button
                  type="button"
                  key={p.id}
                  className={`wit-pkg ${isSelected ? "selected" : ""}`}
                  onClick={() => setPkgIdx(i)}
                  aria-pressed={isSelected}
                >
                  <div className="wit-pkg-head">
                    <strong>{p.name}</strong>
                    <span className="wit-pkg-stars">{p.stars}</span>
                  </div>
                  <div className="wit-pkg-duration">{p.duration}</div>
                  <div className="wit-pkg-meta">
                    <span className="wit-pkg-room">{p.roomType}</span>
                    <span className="wit-pkg-price">{p.priceDisplay}</span>
                  </div>
                  <div className="wit-pkg-select">
                    {isSelected ? "✓ Selected" : "Select"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="wit-tabs-bar">
        <div className="wit-tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={t.id === active.id}
              className={`wit-tab ${t.id === active.id ? "active" : ""}`}
              onClick={() => setActiveId(t.id)}
            >
              <span className="wit-tab-flag" aria-hidden="true">
                {t.flag}
              </span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="wit-content"
        key={`${destination.slug}-${active.id}-${pkgIdx}`}
        role="tabpanel"
      >
        {active.sections.map((s, i) => (
          <div key={i} className="wit-section">
            <div className="wit-sec-header">
              <span className="wit-sec-icon" aria-hidden="true">
                {s.icon}
              </span>
              <span className="wit-sec-title">{s.title}</span>
            </div>
            <div className="wit-sec-divider" />
            <div className="wit-sec-items">
              {s.items.map((it, j) => (
                <div key={j} className="wit-item">
                  {it.label && (
                    <div className="wit-item-label">{it.label}</div>
                  )}
                  {it.primary && (
                    <div className="wit-item-primary">{it.primary}</div>
                  )}
                  {it.lines &&
                    it.lines.map((line, k) => (
                      <div key={k} className="wit-item-line">
                        {line}
                      </div>
                    ))}
                  {it.pills && it.pills.length > 0 && (
                    <div className="wit-item-pills">
                      {it.pills.map((p, k) => (
                        <span key={k} className="wit-pill">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
