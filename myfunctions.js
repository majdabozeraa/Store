// دالة لعرض تفاصيل العقار
function showDetails(propertyId) {
    var propertyImage = "الصورة";
    var propertyArea = "المنطقة";
    var propertyFloor = "الطابق";

 
    document.getElementById("propertyImage").src = propertyImage;
    document.getElementById("propertyArea").textContent = propertyArea;
    document.getElementById("propertyFloor").textContent = propertyFloor;

    var modal = document.getElementById('detailsModal');
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById('detailsModal');
    modal.style.display = "none";
}

