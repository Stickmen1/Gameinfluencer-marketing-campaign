function toggleRequirementColorName() {
    document.getElementById("errorHelperName").style.display="block";
    let text=document.forms["campaignForm"]["campaignName"].value;
    if (text.length>20 && text.length<1) {
        document.getElementById("errorHelperName").style.color="red";
    }
    else {
        document.getElementById("errorHelperName").style.color="green";
    }
}

function toggleOtherGame() {
    var campaignGame = document.getElementById("campaignGame").value;
    if (campaignGame == "Other") {
        document.getElementById("otherGameDiv").style.display="block";
        return true;
    }
    else {
        document.getElementById("otherGameDiv").style.display="none";
        return false;
    }
}

function toggleRequirementColorDescription() {
    document.getElementById("errorHelperDescription").style.display="block";
    let text=document.forms["campaignForm"]["campaignDescription"].value;
    if (text.length>200 && text.length<1) {
        document.getElementById("errorHelperDescription").style.color="red";
    }
    else {
        document.getElementById("errorHelperDescription").style.color="green";
    }
}

function toggleDateValidation() {
    let campaignStartDate = document.getElementById("campaignStartDate").value;
    let campaignEndDate = document.getElementById("campaignEndDate").value;
    return campaignStartDate > campaignEndDate;
}

function toggleSubmitInformation() {
    var campaignTable = document.getElementById("campaignTable");

    const campaignRowsInformation = ["campaignName","campaignGame","campaignStartDate",
        "campaignBudget","campaignLanguage"];

    if (toggleOtherGame()) {
        campaignRowsInformation[1] = "otherGame";
    }

    if (toggleDateValidation()) {
        alert("The start date need to be before the end date!");
    }
    else {
        var campaignTableNewRow = campaignTable.insertRow(1);
        let countCampaignRowsInformation = 0;
        for (let i=0;i<5;i++) {
            campaignTableNewRow.insertCell(i).innerHTML=document.getElementById(campaignRowsInformation[countCampaignRowsInformation]).value;
            countCampaignRowsInformation++;
        }
    }
}
