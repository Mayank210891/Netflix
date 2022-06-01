import axios from "axios";
import { useEffect, useState } from "react";
import CommonLayout from "../../common/common-layout";
import useGenre from "../../hooks/useGenre";

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genreforURL = useGenre(selectedGenres);

    const fetchSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchSeries();
    }, [page, genreforURL]);

    return (
        <CommonLayout
            type={'tv'}
            title={'TV Series'} 
            setPage={setPage}
            data={content}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}></CommonLayout>
    )
}

export default Series;