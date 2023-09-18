import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NavBar } from './styledComponents';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';


const handleLogout = () => {
    console.log("Logout");
};

export default function Navbar() {
    return (
        <NavBar position="static">
            <MenuIcon sx={{ height: "3rem", width: "3rem" }} />
            <Box sx={{ width: '3rem' }}></Box>

            <Link href={'/'} >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                    }}
                >
                    CuidaCan
                </Typography>
            </Link>

            <div style={{ flexGrow: 1 }}></div>

            {/* {isLoggedIn && <SearchBar sx={{ flexGrow: 10 }} />} */}
            <div style={{ flexGrow: 1 }}></div>
            {/* {!isLoggedIn ? ( */}
            <>
                <Link href={''} >
                    Iniciar sesión
                </Link>
                <Box sx={{
                    width: '2px',
                    height: '40px',

                    backgroundColor: 'white',
                    margin: '0 1rem',


                }}></Box>


                <Link href={'/registrate'} >
                    Regístrate
                </Link>

            </>
            {/* ) : (  */}
            {/* <>
                        <Button color="inherit" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>{" "}
                    </> */}
            {/* )} */}
        </NavBar>
    )
}