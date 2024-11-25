export type CardType = {
  id: string;
  title: string;
  text: string;
};

type Category = {
  title: string;
  value: string;
}

export type CardTypeB = {
  id: string;
  title: string;
  category: Category; 
  text: string;
  lastModified: Date;
}

// For the full cardType - we're gonna use Title, Category, Id, text. -> If we have a need for last edited date (e.g. sorting)
