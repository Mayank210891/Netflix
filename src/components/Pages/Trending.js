import { useEffect, useState } from "react";
import axios from 'axios';
import Tile from '../Tile/Tile';
import './Trending.css';
import CommonLayout from "../../common/common-layout";

const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    //const [totalPages, setTotalPages] = useState
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending();
    }, [page]);

    return (
        <CommonLayout type={'trending'} title={'Trending'} setPage={setPage} data={content}></CommonLayout>
    );
}
export default Trending;