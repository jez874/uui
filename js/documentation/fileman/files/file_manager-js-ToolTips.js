NDContentPage.OnToolTipsLoaded({2:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype2\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> addFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">projectId,</td></tr><tr><td class=\"PName first last\">toolId,</td></tr><tr><td class=\"PName first last\">fileInputObject,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Uploads a file to the server.</div></div>",3:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype3\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> addProject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">userId,</td></tr><tr><td class=\"PName first last\">projectName,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a new project for the given user to the database.</div></div>",4:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype4\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> addUser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">username,</td></tr><tr><td class=\"PName first last\">pilotsiteId,</td></tr><tr><td class=\"PName first last\">isGroup,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a new user to the database through a synchronous AJAX call.</div></div>",5:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype5\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> getProjectFiles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">projectId,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of all the files that belong to a specific project.</div></div>",6:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype6\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> getUserFiles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">userId,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of all the files that belong to a specific user.</div></div>",7:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype7\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> getUserProjects(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">userId,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of all the projects that belong to a givem user.</div></div>",8:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype8\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> selectUser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">username,</td></tr><tr><td class=\"PName first last\">pilotsiteId,</td></tr><tr><td class=\"PName first last\">responseHandler</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends a username and pilot site ID to the server and receives an ID, if such a user exists.</div></div>",9:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype9\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleAddFileResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>addFile</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",10:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype10\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleAddProjectResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>addProject</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",11:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleAddUserResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>addUser</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",12:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype12\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleGetProjectFilesResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>getProjectFiles</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",13:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype13\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleGetUserFilesResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>getUserFiles</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",14:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleGetUserProjectsResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>getUserProjects</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>",15:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> handleSelectUserResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">php_script_response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Handles the response from the AJAX call to the <b>selectUser</b> function. You will not be directly making calls to this function unless you want to implement your own responseHandler which improves the functionality of this function.</div></div>"});