import express, { Router } from 'express';
import axios from 'axios';

const route = express.Router();

export interface AccountMetadata {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

const apiKey = process.env.RIOT_API_KEY;

route.get('/api/account/basicinfo/:realm/:summonerName', async (req, res) => {
  console.log('/api/account/basicinfo/:realm/:summonerName called');
  let basicInfo: any;
  try {
    basicInfo = await axios.get(
      `https://${req.params.realm}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.summonerName}`,
      {
        headers: {
          'X-Riot-Token': apiKey
        }
      }
    );
  } catch (err) {
    return res.status(404).send({ error: { message: 'Invalid Request' } });
  }

  if (basicInfo.status?.status_code === 404) {
    return res
      .status(404)
      .send({ error: { message: 'Invalid Summoner Name' } });
  }

  const accountMetadata: AccountMetadata = basicInfo.data;

  const rankedInfo = await axios.get(
    `https://${req.params.realm}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountMetadata.id}`,
    {
      headers: {
        'X-Riot-Token': apiKey
      }
    }
  );

  const summonerInfo: [AccountMetadata, object] = [
    accountMetadata,
    rankedInfo.data
  ];
  res.status(201).send(summonerInfo);
});

route.get(
  '/api/account/basicinfo/matchhistory/:realm/:accountId',
  async (req, res) => {
    const matchHistory = await axios.get(
      `https://${req.params.realm}.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.params.accountId}`,
      {
        headers: {
          'X-Riot-Token': apiKey
        }
      }
    );

    res.status(201).send(matchHistory.data);
  }
);

export { route as basicAccountInfoRouter };
