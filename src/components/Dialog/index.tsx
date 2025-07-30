import { useRef, useState } from "react";
import { CloseButton, Content, DialogContainer, Header, OpenButton, Overlay, Title } from "./styled";

export interface PropsInterface{
    children: React.ReactNode;
    variant?:"light" | "dark";
    title: string;
}

const Dialog = (props: PropsInterface) =>{
    const {children, variant = "light", title} = props;
    const[isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggleDialog = () => setIsOpen(prev => !prev)
    return(
        <>
        <OpenButton onClick={toggleDialog}>Open Dialog</OpenButton>
        {isOpen && (
            <Overlay>
                <DialogContainer ref={ref} variant={variant}>
                    <Header>
                        <Title>{title}</Title>
                        <CloseButton onClick={toggleDialog}>x</CloseButton>
                    </Header>
                    <Content>{children}</Content>
                </DialogContainer>
            </Overlay>
        )}
        </>
    )

}
export default Dialog;