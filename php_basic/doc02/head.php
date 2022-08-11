<? include 'head.sub.php' ?>
<div class="SubPage">
            <div class="SubMain">
               <div class="container">
                  <div class="sub_slogan">
                     <?= $e_slogan ?>
                  </div>
                  <div class="sub_title">
                     <?= $sub_title ?>
                  </div>
               </div>
            </div>
            <style>
               .SubMain {
                  background: url(./img/main0<?= $subnum % 2 + 1 ?>.jpg) no-repeat center center/cover;
               } 
            </style>
            <div class="SubContent">
                <aside>
                  <div class="Lnb">
                     <? include 'nav.php' ?>
                  </div>
                </aside>
                <article>

                