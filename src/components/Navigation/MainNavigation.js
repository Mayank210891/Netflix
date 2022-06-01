
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import WhstshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
        backgroundColor: '#2d313a'
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0)
            navigate('/');
        else if (value === 1)
            navigate('/movies');
        else if (value === 2)
            navigate('/series');
        else if (value === 3)
            navigate('/search');
    }, [value]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Trending" icon={<WhstshotIcon />} />
            <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
