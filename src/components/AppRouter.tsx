import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path} />
                )}
                <Route path='/*' element={<Navigate replace to={RouteNames.EVENT} />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path} />
                    )}
                <Route path='/*' element={<Navigate replace to={RouteNames.LOGIN} />} />
            </Routes>
    );
};

export default AppRouter;