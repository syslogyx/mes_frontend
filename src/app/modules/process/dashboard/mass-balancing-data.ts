export let settings = {
  actions: false,
  hideSubHeader: true,
  noDataMessage: "No data found",
  columns: {
    sr_no: {
      title: "Sr. No.",
      filter: false,
    },
    hr_coil_no: {
      title: "HR Coil No.",
      filter: false,
      editable: false,
    },
    cpl_coil_no: {
      title: "CPL Coil No.",
      filter: false,
      editable: false,
    },
    hr_coil_wt: {
      title: "HR Coil Wt (MT)",
      filter: false,
      editable: false,
    },
    picked_coil_wt: {
      title: "Picked Coil Wt (MT)",
      filter: false,
      editable: false,
    },
    mass_bal_ratio: {
      title: "Mass Balancing Ratio",
      filter: false,
      editable: false,
    },
  },
};
export let data = [
  {
    sr_no: "1",
    hr_coil_no: "13467789",
    cpl_coil_no: "KP1A9C788",
    hr_coil_wt: "23",
    picked_coil_wt: "21",
    mass_bal_ratio: "23/21 = 1.09",
  },
  {
    sr_no: "2",
    hr_coil_no: "13467789",
    cpl_coil_no: "KP1A9C788",
    hr_coil_wt: "23",
    picked_coil_wt: "21",
    mass_bal_ratio: "23/21 = 1.09",
  },
  {
    sr_no: "3",
    hr_coil_no: "13467789",
    cpl_coil_no: "KP1A9C788",
    hr_coil_wt: "23",
    picked_coil_wt: "21",
    mass_bal_ratio: "23/21 = 1.09",
  },
];
