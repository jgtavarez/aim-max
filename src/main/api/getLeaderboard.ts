export const getLeaderboard = async (exercise: string) => {
    const url = `https://aim-max-backend.herokuapp.com/api/leaderboard/${exercise}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if(resp.ok){
        return data
    }else{
        return false
    }
}