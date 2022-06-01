import Tile from '../components/Tile/Tile';
import './common-layout.css';
import CustomPagination from "../components/Pagination/CustomPagination";
import Genres from './genres';

const CommonLayout = ({ data,
    setPage,
    title,
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres }) => {
    return (
        <>
        {console.log(type)}
            <span className="pageTitle"> {title}</span>
            {/* {(type === 'movie' || type==='tv') &&
                <Genres
                    type={type}
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setPage={setPage} />
            } */}
            <div className="card">
                {
                    data && data.map((item) => (
                        <Tile
                            key={item.key}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type={item.media_type || 'movies'}
                            vote_average={item.vote_average} />
                    ))
                }
            </div>
            {/* // numOfPages > 1 && */}
            <CustomPagination setPage={setPage} />
        </>
    )
}

export default CommonLayout;