export let settings = {
  add: {
    confirmCreate: true,
    addButtonContent : 'Add New',
    createButtonContent: '<i title="Save" class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i title="Remove" class="ti-close text-danger"></i>',
  },
  actions: {
    position: "right",
    add: true,
  },
  hideSubHeader: false,
  noDataMessage: "No data found",
  columns: {
    sr_no: {
      title: "Sr. No.",
      filter: false,
      editable: false,
    },
    type_of_delay: {
      title: "Type Of Delay",
      filter: false,
    },
    start_time: {
      title: "Start Time",
      filter: false,
    },
    finish_time: {
      title: "Finish Time",
      filter: false,
    },
    duration: {
      title: "Duration",
      filter: false,
    },
    reason: {
      title: "Reason",
      filter: false,
    },
    agency: {
      title: "Agency",
      filter: false,
    },
    action_taken: {
      title: "Action Taken",
      filter: false,
    },
    remark: {
      title: "Remark",
      filter: false,
    },
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i title="Update" class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i title="Save" class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i title="Cancel" class="ti-close text-danger"></i>',
  },
  delete: {
    deleteButtonContent: '<i title="Remove" class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i title="Save" class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i title="Cancel" class="ti-close text-danger"></i>',
  },
};
export let data = [
  // {
  //   sr_no: 1,
  //   type_of_delay: "type 1",
  //   start_time: "10 : 00 AM",
  //   finish_time: "11 : 00 AM",
  //   duration: "1:00 HR",
  //   reason: "1:00 HR",
  //   agency: "Agency 1",
  //   action_taken: "test",
  //   remark: "test remark",
  // }
];
