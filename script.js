
/**
 * Get a server-side file list of the directory
 * @param {String} dir chosen directory
 * @returns {Array} JSON filename array
 */
function getFileList(dir) {
    let files
    $.getJSON(dir, data => {
        console.log(`found ${data.length} element${(data.length > 1) ? 's' : ''} : `)
        console.log(data)
        files = data
    })

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(files)
        }, 1000)
    })
}

/**
 * Create divs associated to each file in a directory (async call)
 * @param {String} dir chosen directory
 * @param {String} parentId parent div id
 */
async function CreateFileDivs(dir, parentId) {
    console.log('calling')
    let fileJSON
    fileJSON = await getFileList(dir)
    
    if (fileJSON == undefined) {
        console.log('failed to load file list')
        const header = document.getElementById(parentId + "-header")
        header.appendChild(document.createTextNode(`Failed to load files`))
        return
    }
    console.log('got file list')

    const icons = {
        "png":"fas fa-image",
        "jpg":"fas fa-image",
        "jpeg":"fas fa-image",
        "gif":"fas fa-image",
        "zip":"far fa-file-archive",
        "rar":"far fa-file-archive",
        "gz":"far fa-file-archive",
        "tar":"far fa-file-archive",
        "mp4":"fas fa-film",
        "webm":"fas fa-film",
        "mkv":"fas fa-film",
        "wmv":"fas fa-film",
        "flv":"fas fa-film",
        "mp3":"fas fa-file-audio",
        "ogg":"fas fa-file-audio",
        "m4a":"fas fa-file-audio",
        "json":"fas fa-file-code",
        "c":"fas fa-file-code",
        "py":"fas fa-file-code",
        "java":"fas fa-file-code",
        "bat":"fas fa-file-code",
        "other":"far fa-file"
    }

    const header = document.getElementById(parentId + "-header")
    header.appendChild(document.createTextNode(`${fileJSON.length} files located :`))
    let filedivs = []
    for (let i = 0; i < fileJSON.length; i++) {
        const Repo_element = document.createElement("div")
        Repo_element.className = "file"

        let ext = fileJSON[i].split(".").pop()
        const icon = document.createElement("em")
        icon.className = Object.keys(icons).includes(ext) ? icons[ext] : icons["other"]
        icon.style.fontSize = "30px"
        icon.style.marginRight = "20px"
        Repo_element.appendChild(icon)

        const textContent = document.createTextNode(fileJSON[i])
        Repo_element.appendChild(textContent)

        const parentDiv = document.getElementById(parentId)

        parentDiv.appendChild(Repo_element)
        filedivs.push(Repo_element)
    }
}


function RetrieveRepos(parentId) {

    var Reporequest = new XMLHttpRequest()

    Reporequest.open('GET', 'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=l3alr0g', true)
    Reporequest.onload = function () {
        var data = JSON.parse(Reporequest.response)

        const header = document.getElementById(parentId)
        console.log(`${data.length} repositories located`)
        let filedivs = []

        // console.log(data)
        data.forEach((repo) => {
            const Repo_element = document.createElement("div")
            Repo_element.className = "news-box"

            const title = document.createElement("span")
            title.innerHTML = repo.repo

            const content = document.createElement("p")
            content.innerHTML = repo.description

            const info = document.createElement("div")
            info.className = "info"

            const repo_link = document.createElement("a")
            repo_link.href = repo.link
            repo_link.target = "_blank"
            repo_link.innerHTML = '<i class="fab fa-github"></i> Display on github'

            const language = document.createElement("div")
            language.className = "langlabel"
            language.innerHTML = repo.language

            const stars = document.createElement("div")
            stars.className = "stats"
            stars.innerHTML = '<i class="fas fa-star"></i>  ' + repo.stars

            const forks = document.createElement("div")
            forks.className = "stats"
            forks.innerHTML = '<i class="fas fa-code-branch"></i>  ' + repo.forks

            const owner = document.createElement("div")
            owner.className = "ownlabel"
            owner.innerHTML = "Owned by " + repo.owner

            let Readme_request = new XMLHttpRequest()
            let readme_link = ParseReadmeLink(repo.link, "master")

            const readme_title = document.createElement("div")
            readme_title.className = "readme-title"
            readme_title.innerHTML = "Readme"
            const readme = document.createElement("div")
            readme.className = "readme"
            Readme_request.open('GET', readme_link, true)
            Readme_request.onload = function () {
                let readme_content = Readme_request.response
                readme.innerHTML = `<div class="code-block">
<pre><code class="language-markdown" id="clipboard-element">
${readme_content}</code>
</pre></div>`
            }
            Readme_request.send()

            info.appendChild(repo_link)
            info.appendChild(language)
            info.appendChild(owner)
            info.appendChild(stars)
            info.appendChild(forks)

            Repo_element.appendChild(title)
            Repo_element.appendChild(content)
            Repo_element.appendChild(readme_title)
            Repo_element.appendChild(readme)
            Repo_element.appendChild(info)

            const parentDiv = document.getElementById(parentId)
            parentDiv.appendChild(Repo_element)
            filedivs.push(Repo_element)

        })
    }

    Reporequest.send()

}

function ParseReadmeLink(link, MainBranch) {
    
    let token = "https://github.com/"
    let readmetoken = "https://raw.githubusercontent.com/"
    if (token.substring(0, token.length) != token) {
        console.log("invalid github repository link")
        return null
    }
    return readmetoken + link.substring(token.length, link.length) + `/${MainBranch}/README.md`
}
