export type CardType = {
  id: string;
  title: string;
  text: string;
  tag: string; 
};

export type CardTypeB = {
  id: string;
  title: string;
  text: string;
  //lastModified: Date; TODO: Decide on if needed or not
}

// For the full cardType - we're gonna use Title, Tag, Id, text. -> If we have a need for last edited date (e.g. sorting)
