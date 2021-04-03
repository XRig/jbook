import React from 'react';

interface ActionButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({icon, onClick}) => {
    return (
        <button className="button is-primary is-small" onClick={onClick}>
            <span className="icon">
                <i className={icon} />
            </span>
        </button>
    );
};

export default ActionButton;