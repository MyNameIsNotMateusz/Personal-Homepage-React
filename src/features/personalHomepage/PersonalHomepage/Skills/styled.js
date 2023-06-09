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
    margin-top: 25px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px 32px;
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

export const Item = styled.li`
    display: flex;
    line-height: 3.5;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 4;
    }
`;

export const Bullet = styled(BulletImage)`
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0px;
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 50px;
        margin-right: 1px;
    }
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 12px;
    }
`;