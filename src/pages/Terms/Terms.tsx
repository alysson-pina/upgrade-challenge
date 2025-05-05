import { Button } from "@/components/Button"
import { useNavigate } from "react-router"

export default function Terms() {
  const navigate = useNavigate()

  const handleBackButtonClick = () => {
    navigate('/more-info')
  }
  
  return (
    <div>
      <h1>Terms & Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie augue quam, a faucibus dolor convallis id. Ut ultrices elit massa, ac faucibus dolor vehicula nec. Fusce rhoncus odio quis felis finibus, id tristique purus volutpat. Mauris placerat purus non volutpat luctus. Praesent ornare tempus nibh at vehicula. Nulla laoreet ut diam in sodales. Curabitur scelerisque mollis ligula. Aliquam vulputate maximus sem id egestas.

        Sed pharetra tempor egestas. Phasellus at eros eget magna facilisis posuere vitae non erat. Donec ac commodo augue, a dapibus felis. Integer pellentesque risus vel nisi rutrum, nec pellentesque nulla auctor. Mauris ac pharetra mauris. Donec consectetur ullamcorper congue. Nulla dapibus augue a elementum fermentum. Nulla facilisi. Aenean blandit feugiat magna, quis lacinia est euismod eu. Ut rutrum eleifend turpis vel ornare. Duis mollis lectus odio, eget fringilla erat vulputate id. Etiam placerat scelerisque tortor, eget ornare libero commodo et. Mauris eget laoreet lorem. Cras vitae erat diam. Suspendisse euismod porttitor massa sed fringilla. Ut malesuada, ex at tincidunt efficitur, urna nisi lobortis dolor, et faucibus libero lacus lacinia enim.

        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec lectus ipsum. Etiam at accumsan sapien. Maecenas ullamcorper quam sem, auctor laoreet dolor viverra ut. Praesent odio erat, venenatis vitae enim et, hendrerit rutrum sem. Praesent lorem orci, vulputate in augue vel, tempor auctor lorem. Phasellus sit amet egestas libero. Nunc fermentum ornare ornare.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sit amet tortor ante. Phasellus aliquam velit in laoreet placerat. Ut eu ligula lobortis, laoreet sem non, dignissim metus. Pellentesque et ipsum eget mauris dictum ullamcorper ac nec ipsum. In condimentum lectus sed sapien scelerisque commodo. Donec imperdiet arcu at nisi volutpat, a vehicula nulla dignissim. Fusce gravida nec est et sagittis.
      </p>

      <Button onClick={handleBackButtonClick} type='button'>Back</Button>
    </div>
  )
}
