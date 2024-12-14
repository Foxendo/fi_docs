import fs from 'fs-extra';

import MarkdownIt from 'markdown-it/dist/markdown-it.js';
import {getHtmlByLanguage} from './__assets__/html.js'


(async function () {

    const generatorData = [
        {
            language: "en",
            pageTitle: "Fi docs!"
        },
        {
            language: "ru",
            pageTitle: "Фи документация!"
        }
    ]

    const md = MarkdownIt({
        html: true
    })

    const isDocsExists = await fs.exists("./__docs__")

    if (!isDocsExists){
        fs.mkdir("./__docs__")
    }
    
    const generateAll = generatorData.map(async ({language, pageTitle}) => {

        const content = await fs.readFile(`../../locales/${language}/README.md`, "utf-8");

        const isLanguageFolderDocsExists = await fs.exists(`./__docs__/${language}`)

        if(!isLanguageFolderDocsExists){
            fs.mkdir(`./__docs__/${language}`)
        }

        await fs.copy(`../../locales/${language}/assets`, `./__docs__/${language}/assets`)

        await fs.copy("./__assets__/styles", `./__docs__/${language}/styles`)

        const htmlPage = md.render(content)

        const removeNote = (str) =>{
            const noteReg = /<blockquote>\s*<p>\[!NOTE\][\s\S]*?<\/p>\s*<\/blockquote>/ig

            return str.replace(noteReg, (match) =>{
                return match.replace(/\[!NOTE\]/ig, "")
            })
        }

        const titleAnchor = (str) =>{
            const titleReg = /\<h[1-6]>.+\<\/h[1-6]>/ig
            return str.replace(titleReg, (match) =>{
                const [tag, text] = match.split(/\>|\<\//)
                const id = text.split(" ").map(i => i.toLowerCase()).join("-")
                return `${tag} id="${id}">${text}</${tag.slice(1)}>`
            })
        }

        const result = getHtmlByLanguage({
            content: titleAnchor(removeNote(htmlPage)),
            pageTitle,
            language
        })
        
        await fs.writeFile(`./__docs__/${language}/index.html`, result)
    })

    await Promise.all(generateAll)
    
})()