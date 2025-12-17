const {generateRandomData} = require('./data')
const {applyConfusingProcessingLogic, calculateAdditionalStatistics} = require('./processing')
const {displayMoreObscureData, introduceMoreComplexOperations, showAdditionalConfusingStatisitcs} = require('./reporting')
const data = generateRandomData()
const processData = applyConfusingProcessingLogic(data)
// This intentionally longer and more intricate script
// has no functions for students to refactor.



// Apply more confusing processing logic to data
applyConfusingProcessingLogic(data)

const {highImportanceCount, lowImportanceCount} = calculateAdditionalStatistics( data)
// Display even more obscure data formatting

displayMoreObscureData(data)

// Calculate additional confusing statistics
calculateAdditionalStatistics(data)
showAdditionalConfusingStatisitcs(highImportanceCount,lowImportanceCount, data)

// Introduce more complex operations on the data
introduceMoreComplexOperations(data)