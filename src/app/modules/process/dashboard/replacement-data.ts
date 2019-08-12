export let settings = {
  actions: false,
  hideSubHeader: true,
  noDataMessage: "No data found",
  columns: {
    sr_no: {
      title: "Sr. No.",
      filter: false,
    },
    blade_id: {
      title: "Blade ID",
      filter: false,
      editable: false,
    },
    last_change_date: {
      title: "Last Change Date",
      filter: false,
    },
    length_cut: {
      title: "Length Cut (Meters)",
      filter: false,
    },
    maximum_capacity: {
      title: "Maximum Capacity (Meters)",
      filter: false,
    },
  },
};
export let data = [
  {
    sr_no: "1",
    blade_id: "B 1",
    last_change_date: "19/06/19",
    length_cut: "5000",
    maximum_capacity: "10000",
  },
  {
    sr_no: "2",
    blade_id: "B 2",
    last_change_date: "19/06/19",
    length_cut: "5000",
    maximum_capacity: "10000",
  },
  {
    sr_no: "3",
    blade_id: "B 3",
    last_change_date: "19/06/19",
    length_cut: "5000",
    maximum_capacity: "10000",
  },
];
