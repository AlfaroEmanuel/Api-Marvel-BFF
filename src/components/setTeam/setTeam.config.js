module.exports = {
    operation: "setTeam",
    path: "setTeam",
    methods: {
        POST: {
            description: "Descripción de la operación",
            monitoringCode: "RMS.CRM",
            messages: {
                "0000": {
                    message: "respuesta correcta",
                    httpCode: 200
                },
                "0001": {
                    statusCode: 500,
                    message: "respuesta Errónea"
                }
            }
        }
    }
};