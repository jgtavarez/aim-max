export const getGuideByGame = async (game: string) => {
    const url = `https://aim-max-backend.herokuapp.com/api/guide/${game}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if(resp.ok){
        return data
    }else{
        return false
    }
}