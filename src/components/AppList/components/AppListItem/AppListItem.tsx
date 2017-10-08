import * as React from 'react';
import { App } from '../../../../models/App';
import * as style from './style.css';

export interface AppListItemProps {
    app: App;
    onClick?(): void;
}

export const AppListItem: React.StatelessComponent<AppListItemProps> = (props) => {
    const { app, onClick } = props;

    return (
        <li className={style.item} key={app.name} onClick={onClick}>
            <img className={style.appImage} src={app.smallIcon} />
            <span>{app.name}</span>
        </li>
    );
};