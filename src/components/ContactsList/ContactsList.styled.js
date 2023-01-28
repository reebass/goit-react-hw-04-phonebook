import styled from "styled-components";

export const List = styled.ul`
    width: 100%;

    list-style: none;
    margin: 0;
    padding: 20px 0 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    gap: 7px;

    background: #202329;
    border-radius: 50px 50px 0 0;
`

export const Item = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;

    padding: 10px 50px 10px 20px;

    :not(:last-child) {
        border-bottom: 1px solid #54585D;
    }

`