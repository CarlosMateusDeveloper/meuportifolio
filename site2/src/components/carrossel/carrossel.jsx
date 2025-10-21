// Use o componente React-Bootstrap (se você o tiver)
import { Carousel } from 'react-bootstrap'; 


<Carousel indicators={false}>
  {/* PRIMEIRO SLIDE (com 3 cards) */}
  <Carousel.Item>
    <div className="row">
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
    </div>
  </Carousel.Item>

  {/* SEGUNDO SLIDE (com os próximos 3 cards) */}
  <Carousel.Item>
    <div className="row">
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
      <div className="col-md-4">
        <SeuCardDeServico />
      </div>
    </div>
  </Carousel.Item>
</Carousel>