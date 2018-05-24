import xml2js from 'xml2js'
export function parseXML (xml) {
    return new Promise ((resolve, reject) => {
        xml2js.parseString(xml, {trim: true},(error, content) => {
            if (error) {
                reject(error)
            }else resolve(content)
        })
    })
}