#!/usr/bin/node
const $ = window.$;
let selNames = [];
const updateH4 = (selNames) => {
  const finalStr = selNames.length > 30 ? `${selNames.substr(0, 30)}...` : selNames;
  $('#amenityh4').text(finalStr);
};
$(document).ready(function () {
  $('.amenitycheck').change(
    function () {
      const checkDataName = $(this).data().name;
      if ($(this).prop('checked') && !selNames.includes(checkDataName)) {
        selNames.push(checkDataName);
        updateH4(selNames.join(', '));
      }
      if (!$(this).prop('checked') && selNames.includes(checkDataName)) {
        selNames = selNames.filter(sN => sN !== checkDataName);
        updateH4(selNames.join(', '));
      }
    }
  );
});