import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0B2B33',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    display:'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }));

const StyledCard = styled(Card)(({theme})=>({
    marginRight: 60,
    color: 'green',
    minWidth: 270,
    backgroundColor: theme.palette.primary.light,

}));


const testData ={
  "_links": {
      "self": {
          "href": "https://us.api.blizzard.com/profile/wow/character/sargeras/slimwind/pvp-bracket/rbg?namespace=profile-us"
      }
  },
  "character": {
      "key": {
          "href": "https://us.api.blizzard.com/profile/wow/character/sargeras/slimwind?namespace=profile-us"
      },
      "name": "Slimwind",
      "id": 194226160,
      "realm": {
          "key": {
              "href": "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us"
          },
          "name": "Sargeras",
          "id": 76,
          "slug": "sargeras"
      }
  },
  "faction": {
      "type": "ALLIANCE",
      "name": "Alliance"
  },
  "bracket": {
      "id": 3,
      "type": "BATTLEGROUNDS"
  },
  "rating": 1490,
  "season": {
      "key": {
          "href": "https://us.api.blizzard.com/data/wow/pvp-season/34?namespace=dynamic-us"
      },
      "id": 34
  },
  "tier": {
      "key": {
          "href": "https://us.api.blizzard.com/data/wow/pvp-tier/18?namespace=static-10.0.5_47621-us"
      },
      "id": 18
  },
  "season_match_statistics": {
      "played": 33,
      "won": 15,
      "lost": 18
  },
  "weekly_match_statistics": {
      "played": 0,
      "won": 0,
      "lost": 0
  }
};
const StyledTypo = styled(Typography)(({theme})=>({
  display:'flex',
  alignItems:'flex-start',
  justifyContent:'flex-start',
}));

export function PvpTable(props){
    return(
        <Item>
        <StyledCard>
      <CardActionArea>
      <Typography variant="h4" color="text.secondary" gutterBottom>
          2v2
        </Typography>
        <CardContent>
          <StyledTypo sx={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}} gutterBottom variant="h5" component="div">
            Rating: {testData.rating}
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Season Wins: {testData.season_match_statistics.won}
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Season Loses: {testData.season_match_statistics.lost}
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Season W/L: {Math.round((testData.season_match_statistics.won/testData.season_match_statistics.lost)*100)/100}%
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Weekly Wins: {testData.weekly_match_statistics.won}
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Weekly Loses: {testData.weekly_match_statistics.lost}
          </StyledTypo>
          <StyledTypo gutterBottom variant="h5" component="div">
            Weekly W/L%: {Math.round((testData.weekly_match_statistics.won/testData.weekly_match_statistics.lost)*100)/100}%
          </StyledTypo>
        </CardContent>
      </CardActionArea>
    </StyledCard>

    <StyledCard>
      <CardActionArea>
      <StyledTypo sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          3v3
        </StyledTypo>
        <CardContent>
          <StyledTypo gutterBottom variant="h5" component="div">
            Lizard
          </StyledTypo>
          <StyledTypo variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </StyledTypo>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </StyledCard>
    <StyledCard>
      <CardActionArea>
      <StyledTypo sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          RBG
        </StyledTypo>
        <CardContent>
          <StyledTypo gutterBottom variant="h5" component="div">
            Lizard
          </StyledTypo>
          <StyledTypo variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </StyledTypo>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </StyledCard>

            </Item>
    );
}