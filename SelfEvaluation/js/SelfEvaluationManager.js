

function getActivities(pilotSite, responseHandler) {
    if (pilotSite == null || pilotSite == undefined) {
        window.sessionStorage.setItem("errorStatus", "fail");
        return;
    }


    var formData = new FormData();
    formData.append("func", "getActivities");
    formData.append("pilotSite", pilotSite);

    makeAjaxCall(formData, responseHandler);
}


function getActivityCategories(activityId, responseHandler) {
    var formData = new FormData();

    formData.append("func", "getActivityCategories");
    formData.append("activity", activityId);
    formData.append("pilotSite", window.sessionStorage.getItem('pilotsite'));

    makeAjaxCall(formData, responseHandler);

}

function ping(handler) {
    var formData = new FormData();
    formData.append("func", "ping");

    makeAjaxCall(formData, handler);
}

var url = "http://localhost/php/selfEvaluationManager.php"; //'https://cs.uef.fi/~ec2l/WebDocs/SelfEvaluationManger.php'
function makeAjaxCall(formData, handler, async = true) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'post',
        async: async,
        success: function (php_script_response) {
            handler(php_script_response);
        }
    });
}
