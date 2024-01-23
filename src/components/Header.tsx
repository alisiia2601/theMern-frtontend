import { Link, useFetcher } from 'react-router-dom';
import classes from './Header.module.css';
import auth from '../lib/auth';

const Header = () => {
    const isAuthenticated = auth.isSignedIn();
    const fetcher = useFetcher();

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logoLink}>
                <h1>The Mern</h1>
            </Link>
            <div className={classes.headerActions}>
                {isAuthenticated ?
                    <>
                        <Link to="/create-post" className={classes.buttonLink}>
                            <button className={classes.button}>New post</button>
                        </Link>
                        <fetcher.Form method='post' action='/sign-out'>
                            <button type='submit' className={classes.button}>Sign out</button>
                        </fetcher.Form>
                    </>
                    :
                    <>
                        <Link to="/sign-up" className={classes.buttonLink}>
                            <button className={classes.button}>Sign up</button>
                        </Link>
                        <Link to="/sign-in" className={classes.buttonLink}>
                            <button className={classes.button}>Sign in</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;
