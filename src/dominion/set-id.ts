export enum SetId {
  ADVENTURES = "adventures",
  ALCHEMY = "alchemy",
  ALLIES = "allies",
  BASE_SET = "baseset",
  BASE_SET_2 = "baseset2",
  CORNUCOPIA = "cornucopia",
  DARK_AGES = "darkages",
  EMPIRES = "empires",
  GUILDS = "guilds",
  GUILDSCONUCOPIA = "guildscornucopia",
  HINTERLANDS = "hinterlands",
  HINTERLANDS_2 = "hinterlands2",
  INTRIGUE = "intrigue",
  INTRIGUE_2 = "intrigue2",
  MENAGERIE = "menagerie",
  NOCTURNE = "nocturne",
  PLUNDER = "plunder",
  PROMOS = "promos",
  PROSPERITY = "prosperity",
  PROSPERITY_2 = "prosperity2",
  RENAISSANCE = "renaissance",
  SEASIDE = "seaside",
  SEASIDE_2 = "seaside2",
}
export interface VersionOfSet {
    readonly id: SetId,
    readonly idv2: SetId
};

// I don't own multiple versions of ANY set
// This list tells the server which sets are copies of each other
// So we just call it empty -- this will then treat all sets as distinct
// (not copies of each other)

// export const MultipleVersionSets:VersionOfSet[]= [
// { id: SetId.BASE_SET,    idv2: SetId.BASE_SET_2 },
// { id: SetId.INTRIGUE_2,    idv2: SetId.INTRIGUE },
// { id: SetId.SEASIDE,     idv2: SetId.SEASIDE_2 },
// { id: SetId.PROSPERITY,  idv2: SetId.PROSPERITY_2 },
// { id: SetId.HINTERLANDS, idv2: SetId.HINTERLANDS_2 }
// ];
export const MultipleVersionSets:VersionOfSet[]= [];

// I want Intrigue 1 hidden, so I tell it to NOT hide INTRIGUE_2
// Then, INTRIGUE will be filtered by getRicksSets in dominion-sets.ts
export const HideMultipleVersionSets = [
      SetId.BASE_SET_2, 
      SetId.SEASIDE_2,
      SetId.PROSPERITY_2,
      SetId.HINTERLANDS_2,
];