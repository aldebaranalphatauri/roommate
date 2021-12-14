import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Privacy() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div>
      <Typography variant="h5" gutterBottom component="p">
        INFORMATIVA AI SENSI DEL REGOLAMENTO UE 2016/679 SULLA PROTEZIONE DEI DATI
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        In ottemperanza agli adempimenti richiesti dagli art. 13 e 14 del Regolamento UE 2016/679
        per la protezione dei dati personali le comunichiamo le modalità di raccolta ed utilizzo
        dei dati di Roommate
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Finalità della raccolta dati: I dati personali, comuni e dove richiesti “particolari”,
        sono raccolti per la gestione organizzativa, amministrativa del servizio socio-assistenziale
        da lei richiesto. Sono inseriti nel nostro sistema informativo e vengono trattati da personale autorizzato.
        Il loro trattamento è legittimo e verrà fatto in modo trasparente e responsabile.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Obbligatorietà e trattamenti previsti. Il conferimento dei suoi dati personali
        è obbligatorio. Una sua eventuale rinuncia al conferimento dei dati, renderebbe
        impossibile la gestione delle procedure organizzative, amministrative
        e fiscali del servizio da lei richiesto.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Soggetti a cui verranno comunicati i dati. I suoi dati personali non saranno
        da noi diffusi; potranno essere comunicati ad eventuali enti pubblici,
        come strutture sanitarie, solo qualora vi siano degli obblighi di legge,
        od alle organizzazioni che collaborano con noi nella realizzazione del servizio richiesto.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Periodo di conservazione, diffusione extra-UE. I suoi dati verranno
        conservati per il periodo richiesto per l’erogazione del servizio
        ed in ogni caso non superiore a 5 anni. I suoi dati non verranno diffusi
        in paesi extra-Unione Europea.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Altri trattamenti connessi alla finalità principale. I suoi dati di
        reperibilità potranno altresì essere utilizzati da Roommate,
        in quanto soggetto senza scopo di lucro, esclusivamente per informarla
        sui nostri servizi ed iniziative sociali.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Diritti della persona che conferisce i dati. Nella gestione dei suoi
        dati personali si terrà conto dei suoi diritti (articoli da 15 a 22 del Regolamento 2016/679),
        e cioè il diritto all’accesso, alla rettifica ed alla cancellazione
        (diritto all’oblio), alla limitazione del trattamento, all ’opposizione
        al trattamento, il diritto di proporre un reclamo al Garante Privacy.
        Le richieste di applicazione dei suoi diritti vanno indirizzate
        al titolare del trattamento, utilizzando i recapiti sotto-riportati.
      </Typography>
      <Typography variant="body1" gutterBottom component="p">
        Titolare del trattamento e suoi recapiti.
        Titolare del trattamento dei dati è Roommate, Via …………… – ………………. (…..);
        Telefono ……………..; E-mail: ………………….
      </Typography>
      <Box sx={{ '& > button': { m: 1 } }}>
        <FormControlLabel
          sx={{
            display: 'block',
          }}
          control={
            <Switch
              checked={!loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Accosento"
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button disabled={loading} href="/seeyou" >Salva</Button>
            <Button href="https://mui.com/" >Non proseguire </Button>
          </Box>
      </Box>
    </div>
  )
}