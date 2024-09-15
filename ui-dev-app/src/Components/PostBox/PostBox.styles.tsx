import { styled } from '@mui/system'
import { Typography } from '@mui/material'

export const StyledPostMetadata = styled('div')`
    display: flex;
    flex-direction: row;
`;

export const StyledPostContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const EllipsisText = styled(Typography)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  display: 'block',
});
