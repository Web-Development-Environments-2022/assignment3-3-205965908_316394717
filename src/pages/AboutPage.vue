<template>
      <div class="container About">
      <h1 style="color:black;">About page</h1>
       <h4 class="titles">Developers Team </h4>
          <div class="row my-row">
            <div class="match-card favoriteMatches backElran card">
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body-back">
                  
                  <p class="card-text">  
                   Elran Oren<br>                   
                  id:205965908
                  <br>Email:Elranor@post.bgu.ac.il
                  linkdin:<a href="//www.linkedin.com/in/elran-oren-191b071b4/">Elran Oren</a><br>

                  </p>
                </div>
              </div>
            </div>

            <div class="match-card favoriteMatches elran card ">
              <div class="card-img-overlay d-flex flex-column">
              </div>
            </div>

            

            <div class="match-card favoriteMatches card orel  " >
                <div class="card-img-overlay d-flex flex-column">

                </div>
              </div>

              <div class="match-card favoriteMatches backElran card ">
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body-back">
                  
                  <p class="card-text">   
                      Orel Fadlon<br>                     
                      id:316394717
                      <br>Email:Fadlonor@post.bgu.ac.il
                      linkdin:<a href="https://www.linkedin.com/in/fadlon/">Orel Fadlon</a><br>
                    </p>
                </div>
              </div>
            </div>
      </div>
      <div class="row my-row">
      <div class="match-card favoriteMatches backOne one card" style="width: 50rem;">
      <div class =letter>
               <h2 class="titles">About The recipes of Grandma and others website</h2>
        <p>
          <ul>
            This Website developed by Elran Oren & Orel Fadlon for Web development enviourments course that belongs to Software and
            Information Systems Engineering department.<br>
            The site allow users a variety of services that relative to recipes. the site provides are:<br>
            <b>For all:</b><br>
            <li>View main page and see 3 random recipes (if user log in - see last 3 viewed recipes). </li>
            <li>Serach for a recipes by filtering the searching first, and than look at the retrieve recipes.</li>
            <li>Click on about and read about us and our coolest website.</li>
            <b>For a guest  :</b><br>
            <li>Login or Register to the website.</li>
            <b>For login user :</b><br>
            <li>Logout from the website.</li>
            <li>Create new recipes and watch them on my recipes page.</li>
            <li>Add recipes to favorite recipes and watch them on my favorite recipes page. </li>
            <li>Create new family recipes and watch them my family recipes page.</li>
          </ul>
        </p>
            </div>
            </div>
      <div class="match-card favoriteMatches backOne card  ">
      <div class =letter2>
               <br>
        <h2 class="titles">Previous assignments</h2>

          <a href="https://github.com/Web-Development-Environments-2022/205965908"> Web-Ass-1</a><br>
          <a href="https://github.com/Or-Fadlon/PAC-MAN-Game"> PAC-MAN - Web-Ass-2</a><br>
          <!-- <a href="https://app.swaggerhub.com/apis/Daniel-And-Moshe/Web-Ass-3/1.0.0">swaggerhub API Web-Ass-3.1</a><br> -->
          <a href="https://github.com/Web-Development-Environments-2022/assignment3_2-205965908_316394717">Web-Ass-3.2</a><br>
            </div>
            </div>
            </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.About {
    min-width:214vh;
    min-height: 95vh;
    background: #a1a2a57a;
    margin: auto;
    text-align: center;
    background-image:url('../assets/aboutBackground.jpeg');
    background-size: cover;
    
}
.letter{
  color: rgb(0, 0, 0);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.letter2{
  font-size: 15px;
  color: rgb(0, 0, 0);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
.match-card.abo.card{
    min-height: 210px !important;
    min-width: 330px !important;
    font-size: 17px;
}
h1{
  padding-top: 10px;
  color: aliceblue;
  font-weight: bold;
  font-size: 60px;
}
p{
  text-align: left;
}
.card-body{
  position: relative;
  top: 250px;
  
}

.card-body-back{
  position: relative;
  top: 160px;
  color: black;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 15px;
}

.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.my-row{
  position: relative;
  left: 300px;
  padding: 10px;
  margin-left: 13%;
}
.match-card.favoriteMatches.card{
    width: 15rem;
    height: 13rem;
    left: -350px;
    font-size: 17px;
    margin-inline: 50px;
    
}
.match-card.favoriteMatches.card.one{
    height: 23rem;
    left: -350px;
    font-size: 15px;
    margin-inline: 50px;
    
}
.elran{
    background-image:url('../assets/Elran.jpg');
    background-size:cover;
}

.backElran{
    background-image:url('../assets/aboutBackground.jpeg');
    background-size:cover;
    font-size: 22px;
    border-radius: 10px;
    padding: 10px;
    left: 8%;
    top: 50%;
    background-color: #293241f3;
    max-width: 1000px;
    max-height: 550px;
    color: rgb(0, 0, 0);
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    background-image:url('../assets/aboutBackground.jpeg');
    background-size:cover;
}

.backOne{
  background-image:url('../assets/aboutBackground.jpeg');
    background-size:cover;
    color: rgb(0, 0, 0);
}
.orel{
    background-image:url('../assets/Orel.jpg');
    background-size:cover;
}
.match-title{
  font-size: 25px!important;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  position: absolute;
  top:30px;
  left: 75px;
  margin: auto;
  color: rgb(32, 32, 32);
}
.card-text{
  text-align: center;
  position: relative;
  top:-120px;
}
.website{
  font-size: 22px;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  left: 8%;
  top: 50%;
  background-color: #293241f3;
  max-width: 1000px;
  max-height: 550px;
  color: rgb(0, 0, 0);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background-image:url('../assets/aboutBackground.jpeg');
  background-size:cover;
}
.previous {
    font-size: 22px;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  left: 62%;
  top: 50%;
  background-color: #293241f3;
  min-width: 500px;
  min-height: 370px;
  color: rgb(0, 0, 0);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
    background-image:url('../assets/aboutBackground.jpeg');
    background-size:cover;
}


</style>