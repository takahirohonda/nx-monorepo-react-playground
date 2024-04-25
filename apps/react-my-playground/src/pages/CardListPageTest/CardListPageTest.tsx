import { Box, Container, Grid, Typography } from '@mui/material'

import {
  CardList,
  CardListContainer,
  GridItem,
} from './CardListPageTest.styled'

export const CardListPageTest = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Typography variant="h3" component="h1">
          Card List by using Material UI components
        </Typography>
        <CardListContainer>
          <CardList>
            {/* see https://mui.com/material-ui/react-grid/#basic-grid */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <GridItem>First Item</GridItem>
              </Grid>
              <Grid item xs={12} sm={2}>
                <GridItem>second Item</GridItem>
              </Grid>
              <Grid item xs={12} sm={2}>
                <GridItem>third Item</GridItem>
              </Grid>
              <Grid item xs={12} sm={2}>
                <GridItem>fourth Item</GridItem>
              </Grid>
              <Grid item xs={12} sm={2}>
                <GridItem>fifth Item</GridItem>
              </Grid>
            </Grid>
          </CardList>
        </CardListContainer>
      </Box>
    </Container>
  )
}
