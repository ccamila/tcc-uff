exports.handler = function(contextEntity, publish, query, subscribe) {
   
    if (contextEntity == null) {
        return;
    }
    if (contextEntity.attributes == null) {
        return;
    }

    var type = contextEntity.entityId.type;

    var deviceID = contextEntity.entityId.id;
    var patientId = contextEntity.metadata.patient.value;
    var location = contextEntity.metadata.location;
    // do the internal data processing
    if (type == 'Temperature') {
        var temperature = contextEntity.attributes.temperature.value;
        
        if (temperature > floor && temperature < ceilling) { 

            var now = new Date();
            var validTempeture = {};
            var updateEntity = {};
            validTempeture['when'] = now.toISOString(); 
            validTempeture['whichsensor'] = deviceID;
            validTempeture['whichpatient'] = patientId;
            validTempeture['where'] = location;
            validTempeture['temperature'] = temperature;

            updateEntity.attributes = {};

            updateEntity.attributes.when = {
                type: 'string',
                value: validTempeture['when']
            };
            updateEntity.attributes.sensor = {
                type: 'string',
                value: validTempeture['whichsensor']
            };
            updateEntity.attributes.patient = {
                type: 'string',
                value: validTempeture['whichpatient']
            };
            updateEntity.attributes.where = {
                type: 'object',
                value: validTempeture['where']
            };
            updateEntity.attributes.temperature = {
                type: 'integer',
                value: validTempeture['temperature']
            };

            updateEntity.metadata = {};
            updateEntity.metadata.patient = {
                type: 'string',
                value: validTempeture['whichpatient']
            };

            publish(updateEntity)
        } else if (type == "HeartFrequency") {
            var heartFrequency = contextEntity.attributes.heartFrequency.value;
            if (heartFrequency > floor && heartFrequency < ceilling) { 

                var now = new Date();
                var validHeartFrequency = {};
                var updateEntity = {};
                validHeartFrequency['when'] = now.toISOString(); 
                validHeartFrequency['whichsensor'] = deviceID;
                validHeartFrequency['whichpatient'] = patientId;
                validHeartFrequency['where'] = location;
                validHeartFrequency['heartFrequency'] = heartFrequency;
    
                updateEntity.attributes = {};
    
                updateEntity.attributes.when = {
                    type: 'string',
                    value: validHeartFrequency['when']
                };
                updateEntity.attributes.sensor = {
                    type: 'string',
                    value: validHeartFrequency['whichsensor']
                };
                updateEntity.attributes.patient = {
                    type: 'string',
                    value: validHeartFrequency['whichpatient']
                };
                updateEntity.attributes.where = {
                    type: 'object',
                    value: validHeartFrequency['where']
                };
                updateEntity.attributes.heartFrequency = {
                    type: 'integer',
                    value: validHeartFrequency['heartFrequency']
                };
    
                updateEntity.metadata = {};
                updateEntity.metadata.patient = {
                    type: 'string',
                    value: validHeartFrequency['whichpatient']
                };
    
                publish(updateEntity)
            }
        } else if (type == "BloodPressure") {
            var bloodPressure = contextEntity.attributes.bloodPressure.value;
            if (bloodPressure > floor && bloodPressure < ceilling) { 

                var now = new Date();
                var validBloodPressure = {};
                var updateEntity = {};
                validBloodPressure['when'] = now.toISOString(); 
                validBloodPressure['whichsensor'] = deviceID;
                validBloodPressure['whichpatient'] = patientId;
                validBloodPressure['where'] = location;
                validBloodPressure['bloodPressure'] = heartFrequency;
    
                updateEntity.attributes = {};
    
                updateEntity.attributes.when = {
                    type: 'string',
                    value: validBloodPressure['when']
                };
                updateEntity.attributes.sensor = {
                    type: 'string',
                    value: validBloodPressure['whichsensor']
                };
                updateEntity.attributes.patient = {
                    type: 'string',
                    value: validBloodPressure['whichpatient']
                };
                updateEntity.attributes.where = {
                    type: 'object',
                    value: validBloodPressure['where']
                };
                updateEntity.attributes.bloodPressure = {
                    type: 'integer',
                    value: validBloodPressure['bloodPressure']
                };
    
                updateEntity.metadata = {};
                updateEntity.metadata.patient = {
                    type: 'string',
                    value: validBloodPressure['whichpatient']
                };
    
                publish(updateEntity)
            }
        }
    } 
};