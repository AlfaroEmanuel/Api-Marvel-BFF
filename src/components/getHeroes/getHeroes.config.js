module.exports = {
    operation: "getHeroes",
    path: "getHeroes",
    methods: {
        GET: {
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