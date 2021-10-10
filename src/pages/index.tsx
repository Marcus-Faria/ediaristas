import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextField from 'ui/components/inputs/TextField/TextField';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"}
      />

      <TextField
        label={'Digite seu CEP'
        }
      />
      
      <UserInformation
        name={'Marcus Faria'}
        picture={'#'}
        rating={3}
        description={'São José dos Campos/SP'}
      />
    </div>
  );
};

export default Home;
