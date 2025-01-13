import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
        const randomMoive = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json({ sucess:true, content: randomMoive });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Internal Sever Error" });
    }
}


export async function getMovieTrailers(req, res){ 
    const {id} = req.params;

    try {
       const data = await fetchFromTMDB('https://api.themoviedb.org/3/movie/${id}/videos?language=en-US')
       res.json({sucess:true, trailers: data.results})
        } catch (error) {
         if(error.message.includes("404")) {
           return res.status(404).send(null);
         }

         res.status(500).json({ sucess: false, message: "Internal Server Error" });
    }
}

export async function getMovieDetails (req, res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/movie/${id}?language=en-US')
        res.status(200).json({success:true, content: data})
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}

