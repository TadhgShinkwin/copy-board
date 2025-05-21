export type CardType = {
  id: string;
  title: string;
  text: string;
};

export type CardTag = {
  title: string;
  value: string;
  icon: string;
}

export type CardTypeB = {
  id: string;
  title: string;
  tag: CardTag; 
  text: string;
  lastModified: Date;
}

// For the full cardType - we're gonna use Title, Tag, Id, text. -> If we have a need for last edited date (e.g. sorting)
