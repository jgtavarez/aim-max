export const postScore = async (exercise: string, username: string, score: number) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            exercise,
            username,
            score
        })
    };
    fetch('https://aim-max-backend.herokuapp.com/api/leaderboard', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (response.ok) {
                console.log('cd')
                return true;
            }else{
                return false;
            }
        })
        .catch(error => {
            return false;
        });
}