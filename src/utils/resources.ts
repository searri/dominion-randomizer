import { Language } from "../i18n/language";

const IMAGE_PREFEX = "/dominion-randomizer/img/cards";
const BOXES_IMAGE_PREFEX = "/dominion-randomizer/img/boxes";
const RULE_PDF_PREFEX = "/dominion-randomizer/rules";
const PNG_SET_IMAGES = new Set(["alchemy", "cornucopia", "guilds"]);


export function getCardImageUrl(cardId: string, language: Language) {
  switch (language) {
    case Language.FRENCH:
      return `${IMAGE_PREFEX}/${language}/${cardId}.jpg`;
    default:
      return `${IMAGE_PREFEX}/${cardId}.jpg`;
  }
}

export function getSetImageUrl(setId: string) {
  const ext = PNG_SET_IMAGES.has(setId) ? "png" : "jpg";
  return `${BOXES_IMAGE_PREFEX}/${setId}.${ext}`;
}

export function getRulebookUrl(setId: string) {
  return `${RULE_PDF_PREFEX}/${setId}.pdf`;
}