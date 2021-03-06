import Pagination from '@material-ui/lab/Pagination';
import { createTheme, ThemeProvider } from "@material-ui/core";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    const darkTheme = createTheme({
        palette: {
            type: "dark",
        },
    });

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination;