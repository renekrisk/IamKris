// F1 Museum Asset Registry
// All assets sourced directly from the local archival folder

import kimiUSGP from '../f1images/2017 F1 Pilot Kimi Raikkonen ahead of the USGP COTA.jpg';
import lewisHamiltonPort from '../f1images/@f1 _ Lewis Hamilton.jpg';
import danielRicciardoPort from '../f1images/Daniel Ricciardo.jpg';
import monzaCircuitMap from '../f1images/F1 Monza circuit map - Motorsports for your Office _ Displate.jpg';
import donutsAbuDhabi2018 from '../f1images/Fernando Alonso, Lewis Hamilton and Sebatian Vettel doing donuts in Abu Dhabi 2018.jpg';
import kimiCarFire from '../f1images/Kimi Raikkonen car fire _ Luisxz.jpg';
import kimiPortrait from '../f1images/Kimi Raikkonen.jpg';
import laudaPortrait from '../f1images/Lauda.jpg';
import lewisMaxImola2021 from '../f1images/Lewis Hamilton & Max Verstappen first lap battle, 2021 Imola GP.jpg';
import sebVettelHelmetSuit from '../f1images/Sebastian Vettel (1).jpg';
import sebVettelPortrait from '../f1images/Sebastian Vettel.jpg';
import sennaVsProstFace from '../f1images/artonvsprost.jpg';
const prostSenna1989 = sennaVsProstFace;
import interlagosTrackMap from '../f1images/circuito de interlagos para o automobilismo e automobilismo_.jpg';
import ricciardoTrophy from '../f1images/danielricardoholdingtrophy.jpg';
import ricciardoOnCar from '../f1images/danielricardooncar.jpg';
import monacoPoster from '../f1images/f1 monaco grand prix poster.jpg';
import hamiltonFerrariAura from '../f1images/hamiltongetting in ferrari aura.jpg';
import kimiYoungRedSuit from '../f1images/kimiraikonnenyoungredsuit.jpg';
import lewisFerrariSmiling from '../f1images/lewisferrarismiling.jpg';
import lewisMaxHandshake from '../f1images/lewisvsmax handshake afterace.jpg';
import maxHelmetPortrait from '../f1images/macverstappeninhelmet.jpg';
import maxAttackEyes from '../f1images/maxversattackeyes.jpg';
import maxFourFingers from '../f1images/maxverstappen4fingersup.jpg';
import laudaDrivingFerrari from '../f1images/nikilaudadrivingf1.jpg';
import sebKneelingCar from '../f1images/sebkneelinginfrontofcar.jpg';
import suzukaStartingLine from '../f1images/suzukastartingline.jpg';
import vettelInHelmet from '../f1images/vettelinhelmet.jpg';

// New George Russell Collection (from src/f1images/russel/)
import russellWallpaper from '../f1images/russel/Mercedes-AMG PETRONAS F1 Team WallPaper.jpg';
import russellAuraHelmet from '../f1images/russel/aurainhelmet.jpg';
import russellTPose from '../f1images/russel/austriangptpose.jpg';
import russell63FistPump from '../f1images/russel/fistupinhelmetandwhitebackgroundwith63intheback.jpg';
import russellBaku from '../f1images/russel/george russell, baku gp 2026.jpg';
import russellPhoto from '../f1images/russel/georgerusselphoto.jpg';
import russellInCar from '../f1images/russel/incarcloseup.jpg';
import russellHelmet from '../f1images/russel/inhelmet.jpg';
import russellPodiumChampagne from '../f1images/russel/podiumchampagne.jpg';
import russellFacePortrait from '../f1images/russel/russelwithouthehelmetvisibleface.jpg';

export const f1Assets = {
  // George Russell Curated Collection
  russell: {
    wallpaper: russellWallpaper,
    auraHelmet: russellAuraHelmet,
    tPose: russellTPose,
    fistPump63: russell63FistPump,
    baku: russellBaku,
    photo: russellPhoto,
    inCar: russellInCar,
    helmet: russellHelmet,
    podiumChampagne: russellPodiumChampagne,
    facePortrait: russellFacePortrait,
  },

  // Backward-compatible aliases
  russellInCarAura: russellInCar,
  russellTPoseIntro: russellTPose,
  russellAustriaPodium: russellPodiumChampagne,
  russellPortrait: russellFacePortrait,

  // Niki Lauda
  laudaPortrait,
  laudaDrivingFerrari,

  // Lewis Hamilton
  lewisHamiltonPort,
  hamiltonFerrariAura,
  lewisFerrariSmiling,

  // Max Verstappen
  maxHelmetPortrait,
  maxAttackEyes,
  maxFourFingers,

  // Sebastian Vettel
  sebVettelPortrait,
  sebVettelHelmetSuit,
  sebKneelingCar,
  vettelInHelmet,

  // Kimi Raikkonen
  kimiPortrait,
  kimiYoungRedSuit,
  kimiUSGP,
  kimiCarFire,

  // Daniel Ricciardo
  danielRicciardoPort,
  ricciardoTrophy,
  ricciardoOnCar,

  // Historic Moments / Group
  donutsAbuDhabi2018,

  // Rivalries
  prostSenna1989,
  sennaVsProstFace,
  lewisMaxImola2021,
  lewisMaxHandshake,

  // Circuits
  monzaCircuitMap,
  interlagosTrackMap,
  monacoPoster,
  suzukaStartingLine,
};
