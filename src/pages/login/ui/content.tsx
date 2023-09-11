import { IProduct, PaginationParams } from '../../../types';
import { useSuspenseQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../lib';
import { FormEvent, Fragment, useState } from 'react';
import { Grid, ProductCard } from '../../../components';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import { Paths } from '../../../constants.ts';
import waves from "../../../assets/banner.gif";

function Content() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username, password)
        setUsername('')
        setPassword('')
    }

  return (
    <Fragment>
        <Grid cols={2}>
            <div className="v-stack gap-3 mr-3 mt-7">
                <div className="v-stack gap-1">
                    <h1 className='font-size-10 font-weight-700'>Waves</h1>
                </div>

                {/* Divider */}
                <hr className="solid" style={{ borderTop: "1px solid #dddddd"}}></hr>
                
                <div className="v-stack gap-1">
                    <h2 className='font-size-7 font-weight-500'>Login</h2>
                </div>
                <form onSubmit={ handleSubmit }>
                    <div className="v-stack gap-4">
                        <div className="v-stack gap-2">
                            <label className='text-base-400 font-size-3 font-weight-600'>USERNAME</label>
                            <input
                                type="text"
                                id="username"
                                className="username radius-1"
                                style={{height: "45px", borderColor: "#bbbbbb"}}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </div>
                        <div className="v-stack gap-2">
                            <label className='text-base-400 font-size-3 font-weight-600'>PASSWORD</label>
                            <input
                                type="text"
                                id="password"
                                className="password radius-1"
                                style={{height: "45px", borderColor: "#bbbbbb"}}
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <div className="h-stack gap-1 text-base-400 font-size-3 justify-content-end">
                            <a>Forgot Password</a>
                        </div>
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
            <div
                className="v-stack justify-content-center ml-3 mt-7"
            >
                <img className="h-100 w-100" src={waves} alt="waves gif" />
            </div>
        </Grid>
    </Fragment>
  );
}
Content.displayName = 'Login Content';

export default Content;
