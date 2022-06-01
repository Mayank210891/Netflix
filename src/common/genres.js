import { Chip } from "@material-ui/core";
import { useEffect } from "react";
import axios from 'axios';

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage }) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id != genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id != genre.id));
        setGenres([...genres.filter, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        console.log(type);
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };
    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, []);

    return (
        <div>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    color="primary"
                    onDelete={() => handleRemove(genre)} />
            ))}
            {genres && genres.map((genre) => (
                <Chip style={{ margin: 2 }}
                    label={genre.name}
                    onClick={() => handleAdd(genre)}
                    key={genre.id}
                    clickable
                    size="small" />
            ))}
        </div>

    )
}

export default Genres;