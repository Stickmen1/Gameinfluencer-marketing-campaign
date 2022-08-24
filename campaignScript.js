function textRequirement() {
    document.getElementById("textRequirementOne").style.display="block";
    let text=document.forms["campaignForm"]["campaignName"].value;
    if (text.length<21 && text.length>0)
    {
        document.getElementById("textRequirementOne").style.color="green";
    }
    else
    {
        document.getElementById("textRequirementOne").style.color="red";
    }
}

function descriptionRequirement() {
    document.getElementById("descriptionRequirementOne").style.display="block";
    let text=document.forms["campaignForm"]["campaignDescription"].value;
    if (text.length<201 && text.length>0)
    {
        document.getElementById("descriptionRequirementOne").style.color="green";
    }
    else
    {
        document.getElementById("descriptionRequirementOne").style.color="red";
    }
}