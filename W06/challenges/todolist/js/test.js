$("input[name=time]").clockpicker({       
    placement: 'bottom',
    align: 'left',
    autoclose: true,
    default: 'now',
    donetext: "Select",
    init: function() { 
                              console.log("colorpicker initiated");
                          },
                          beforeShow: function() {
                              console.log("before show");
                          },
                          afterShow: function() {
                              console.log("after show");
                          },
                          beforeHide: function() {
                              console.log("before hide");
                          },
                          afterHide: function() {
                              console.log("after hide");
                          },
                          beforeHourSelect: function() {
                              console.log("before hour selected");
                          },
                          afterHourSelect: function() {
                              console.log("after hour selected");
                          },
                          beforeDone: function() {
                              console.log("before done");
                          },
                          afterDone: function() {
                              console.log("after done");
                          }
  });
  