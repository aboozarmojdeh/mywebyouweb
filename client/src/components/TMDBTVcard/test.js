<div class="consensus details">
        <div class="outer_ring">
          <div class="user_score_chart" data-percent="76.0" data-track-color="#204529" data-bar-color="#21d07a">
            <div class="percent">
              
                <span class="icon icon-r76"></span>
              
            </div>
          <canvas height="60" width="60"></canvas></div>
        </div>
      </div>

div.consensus {
  width: 68px;
  height: 68px;
  display: inline-block;
  transition: transform .2s;
  transform: scale(1);
}
   
div.consensus div.outer_ring {
  display: inline-block;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  padding: 4px;
  background-color: #081c22;
}

div.consensus .user_score_chart {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
}

div.consensus .user_score_chart .percent {
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.consensus .user_score_chart .percent .icon {
  color: #fff;
}

