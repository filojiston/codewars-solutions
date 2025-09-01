const wikidataScraper = async (url) => {
  const data = await getDataLocal(url)

  const entityId = Object.keys(data.entities)[0];
  const entity = data.entities[entityId];

  return {
    id: entityId,
    label: entity.labels?.en?.value || "No Label",
    description: entity.descriptions?.en?.value || "No Description"
  };
}


const https = require('https')

const getDataLocal = async (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(JSON.parse(data))
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

const testPage = async (id, expectedData) => {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${id}.json`
  const actualData = await wikidataScraper(url)
  console.log(JSON.stringify(actualData) === JSON.stringify(expectedData))
}

// Run the tests
testPage("Q42", {
  id: "Q42",
  label: "Douglas Adams",
  description: "English science fiction writer and humorist (1952–2001)"
})

testPage("Q2", {
  id: "Q2",
  label: "Earth",
  description: "third planet from the Sun in the Solar System",
})

testPage("Q513", {
  id: "Q513",
  label: "Mount Everest",
  description: "Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas",
})

testPage("Q26013179", {
  id: "Q26013179",
  label: "No Label",
  description: "Wikimedia template",
})

testPage("Q62849465", {
  id: "Q62849465",
  label: "BC1G_15416",
  description: "No Description",
})

testPage("Q88627685", {
  id: "Q88627685",
  label: "No Label",
  description: "No Description",
})
