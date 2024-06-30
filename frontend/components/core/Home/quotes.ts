import { useEffect, useState } from "react";
import axios from "axios";


export function Quotes() {
    let url = "https://stoic.tekloon.net/stoic-quote";
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);

    const method = {
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    async function fetchQuotes() {
        setLoading(true);
        try {
            const response = await axios.request(method);
            setQuote(response.data.quote);
            setAuthor(response.data.author);
            // console.log(response.data.content);
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchQuotes();
    }, [])


    return {quote, author, loading};

}