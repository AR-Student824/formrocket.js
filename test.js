const FormRocket = require('./index.js')
FormRocket.SendResponse({
	userId: "74219764",
	formName: "python demo",
	formId: "90506204742590100",
	data: {"hello": "there"}
}).then(data => {
	console.log("Just posted " + JSON.stringify(data.postedData, null, "\t"))
})

FormRocket.GetFormData({
	userId: "74219764",
	formName: "python demo",
	formId: "90506204742590100",
	formSecret: "63879440314804300"
}).then(data => {
	console.log(`${data.data.form.name} was created on ${new Date(data.data.form.createdAt).toLocaleDateString()} ${new Date(data.data.form.createdAt).toLocaleTimeString()}, by user ${data.data.form.ownerId}, with ${data.data.form.responses.all.length} responses. first response is: ${JSON.stringify(data.data.form.responses.all[0].data, null, '\t')}`)
})