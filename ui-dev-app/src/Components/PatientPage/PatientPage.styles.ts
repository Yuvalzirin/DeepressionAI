import { styled } from '@mui/system'
import { Box, Paper, Typography } from '@mui/material'

export const StyledEmptyListMessage = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`

export const StyledStatusBox = styled(Box)`
    width: 100%;
    height: 200px; /* Ensure a fixed height for the chart */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledAverageStatusBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledStatusBoxInnerImg = styled('img')`
    padding-left: 10px;
    width: 24px;
    height: 24px;
`

export const StyledUserDataBox = styled('div')`
    display: flex;
    flex-direction: column;
    width: 450px;
`
export const StyledUserHeadline = styled(Typography)`
    padding-bottom: 20px;
`

export const StyledUserPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: black;
    border-radius: 20px;
`

export const StyledButtonsWrapper = styled('div')`
    margin-top: 20px;
    display: flex;
    gap: 10px;
`

export const UserHeaderWrapper = styled('div')`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
