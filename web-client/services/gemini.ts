export const sendDataToGemini = async (data: any) => {
    try {
        const response = await fetch(`${process.env.SERVER_URL}/getItinerary`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.text();
    }
    catch (err) {
        console.log(err);
    }
}