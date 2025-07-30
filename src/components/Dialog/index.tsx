import { useRef, useState } from "react";
import { CloseButton, Content, DialogContainer, Header, OpenButton, Overlay, Title } from "./styled";

export interface PropsInterface{
    children: React.ReactNode;
    variant?:"light" | "dark";
    title: string;
    triggerText: string;
}

const Dialog = (props: PropsInterface) =>{
    const {children, variant = "light", title, triggerText} = props;
    const[isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggleDialog = () => setIsOpen(prev => !prev);
    const renderTrigger = () =>{
        return(
            <OpenButton onClick={toggleDialog}>{triggerText}</OpenButton>
        )
    }
    return(
        <>
        {renderTrigger()}
        {isOpen && (
            <Overlay>
                <DialogContainer ref={ref} variant={variant} data-testid="dialogContainer">
                    <Header>
                        <Title data-testid="dialogTitle">{title}</Title>
                        <CloseButton onClick={toggleDialog} data-testid="dialogCloseButton">x</CloseButton>
                    </Header>
                    <Content data-testid="dialogContent">{children}</Content>
                </DialogContainer>
            </Overlay>
        )}
        </>
    )

}
export default Dialog;