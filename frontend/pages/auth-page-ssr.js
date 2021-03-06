import nookies from 'nookies';
import {tokenService} from "../src/services/auth/tokenService";

function AuthPageSsr(props) {
  return (
    <div>
      <h1>
        Auth Page SSR
      </h1>
      <pre>
        {JSON.stringify(props,null,2)}
      </pre>
    </div>
  )
}

export default AuthPageSsr;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  console.log('cookies', cookies);
  return {
    props: {
      token: tokenService.get(),
    },
  }
}
