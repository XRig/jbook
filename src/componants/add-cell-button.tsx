import React from 'react';

interface AddCellButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({onClick, children}) => {
    return (
        <button className="button is-rounded is-primary is-small" onClick={onClick}>
                    <span className="icon is-small">
                    <i className="fas fa-plus" />
                    </span>
                    <span>{children}</span>

                </button>
    );
};

export default AddCellButton;