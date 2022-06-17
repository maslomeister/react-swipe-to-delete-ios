import React from "react";
import "./styles.css";
export interface Props {
    onDelete: Function;
    onDeleteConfirm?: Function;
    deleteComponent?: React.ReactNode;
    disabled?: boolean;
    height?: number;
    transitionDuration?: number;
    deleteWidth?: number;
    deleteThreshold?: number;
    showDeleteAction?: boolean;
    deleteColor?: string;
    deleteText?: string;
    className?: string;
    id?: string;
    rtl?: boolean;
    children?: React.ReactNode;
}
declare const SwipeToDelete: ({ onDelete, onDeleteConfirm, deleteComponent, disabled, height, transitionDuration, deleteWidth, deleteThreshold, showDeleteAction, deleteColor, deleteText, className, id, rtl, children, }: Props) => JSX.Element;
export default SwipeToDelete;
