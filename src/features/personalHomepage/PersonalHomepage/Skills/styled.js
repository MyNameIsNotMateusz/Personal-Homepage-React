import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.boxBackground};
    padding: 32px;
    margin-top: 72px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const List = styled.ul`
    margin-top: 32px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.tableHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tableVerticalMax}px) {
        font-size: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px
    }
`;