export let settings = {
  actions: false,
  hideSubHeader: true,
  noDataMessage: "No data found",
  columns: {
    scrap_type: {
      title: "Scrap Type",
      filter: false,
      editable: false,
    },
    quantity: {
      title: "Quantity (Ton)",
      filter: false,
    },
  },
};
export let data = [
  {
    scrap_type: "HR Baby Coil",
    quantity: "20",
  },
  {
    scrap_type: "Side Trimming",
    quantity: "10",
  },
  {
    scrap_type: "HR Patta",
    quantity: "50",
  },
  {
    scrap_type: "Coil End",
    quantity: "50",
  },
];
