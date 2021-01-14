import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <section class="carousel w-100" aria-label="Gallery">
        <div class="">
            <div class="reviews-cont mb-5" style={{display: 'flex !important','overflow-x':'scroll','overflow-y':'hidden'}}>
                <div class="btn-prev text-center"><i class="fa fa-chevron-left"></i></div>
                <div class="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:'540px'}}>
                    <div class="w-100" style={{height:'100%'}}>
                        <img src="./comma@2x.png" class="comma-bg" alt="" />
                        <div class="content text-light text-md">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                molestiae, explicabo tenetur? Molestias, repellat?</h4>
                        </div>
                        <div class="user-sec d-flex">
                            <img src="./Eleanor-Galtie-black-and-white-circle-headshot.png" alt="" />
                            <div class="user-name text-light">
                                <h5>Elizabeth Jones</h5>
                                <h6 class="font-weight-bold">Carbonix</h6>
                            </div>
                        </div>
                        <img src="./comma@2x.png" class="comma-bg-btm" alt="" />
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:'540px'}}>
                    <div class="w-100" style={{height:'100%'}}>
                        <img src="./comma@2x.png" class="comma-bg" alt="" />
                        <div class="content text-light text-md">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                molestiae, explicabo tenetur? Molestias, repellat?</h4>
                        </div>
                        <div class="user-sec d-flex">
                            <img src="./Eleanor-Galtie-black-and-white-circle-headshot.png" alt="" />
                            <div class="user-name text-light">
                                <h5>Elizabeth Jones</h5>
                                <h6 class="font-weight-bold">Carbonix</h6>
                            </div>
                        </div>
                        <img src="./comma@2x.png" class="comma-bg-btm" alt="" />
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-xs-12 p-4 user-reviews" style={{height:'540px'}}>
                    <div class="w-100" style={{height:'100%'}}>
                        <img src="./comma@2x.png" class="comma-bg" alt="" />
                        <div class="content text-light text-md">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quod reprehenderit.
                                Fugit, qui dolor? Modi, sunt hic. Quia at nam ratione accusamus doloremque culpa quidem
                                molestiae, explicabo tenetur? Molestias, repellat?</h4>
                        </div>
                        <div class="user-sec d-flex">
                            <img src="./Eleanor-Galtie-black-and-white-circle-headshot.png" alt="" />
                            <div class="user-name text-light">
                                <h5>Elizabeth Jones</h5>
                                <h6 class="font-weight-bold">Carbonix</h6>
                            </div>
                        </div>
                        <img src="./comma@2x.png" class="comma-bg-btm" alt="" />
                    </div>
                </div>
                <div class="btn-next text-center"><i class="fa fa-chevron-right"></i></div>
            </div>
        </div>
    </section>
  );
}

export default App;
