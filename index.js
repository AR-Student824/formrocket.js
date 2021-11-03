async function SendResponse({userId, formName, formId, data}) {
	return new Promise(resolve => {
	require('axios').post(`https://www.formrocket.me/api/forms/${encodeURIComponent(userId)}/${encodeURIComponent(formName)}/${encodeURIComponent(formId)}/post`, data).then(r => {
		resolve(r.data)
	}).catch(e => {
		throw Error('failed to send response')
	})
	})
}

async function GetFormData({userId, formName, formId, formSecret}) {
	return new Promise(resolve => {
	require('axios').get(`https://www.formrocket.me/api/forms/${encodeURIComponent(userId)}/${encodeURIComponent(formName)}/${encodeURIComponent(formId)}/${encodeURIComponent(formSecret)}/get`).then(r => {
		resolve(r.data)
	}).catch(e => {
		throw Error('failed to get data')
	})
	})
}

exports.SendResponse = SendResponse
exports.GetFormData = GetFormData