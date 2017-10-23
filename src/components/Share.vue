<template>
  <div id="share">
    <div class="status-panel"></div>
    <div class="title"></div>
    <div class="tabs">
      <ul>
        <li>买入</li>
        <li>卖出</li>
        <li>撤单</li>
        <li class="active">持仓</li>
        <li class="last-li">查询</li>
      </ul>
    </div>

    <div class="money-type"></div>
    <div class="panel">
        <div class="row">
          <div class="total-money">
            <span>总资产</span>
            <span> {{ nowTotal }}</span>
          </div>
          <div class="total-get-lose">
            <span>总盈亏</span>
            <span> {{ totalLose }}</span>
          </div>
          <div class="today-get-lose">
            <span>当日参考盈亏</span>
            <span> {{ todayLose }}</span>
          </div>
      </div>
      <!-- <div>
        <span>totalSharesVal {{ totalSharesVal }}</span>
        <span>avaliabe {{ avaliabe }}</span>
        <span>canGet {{ canGet }}</span>
      </div>-->
    </div>
    <div class="shares">
     <!-- <div class="share-title">
        <span>市值</span>
        <span>盈亏</span>
        <span>持仓/可用</span>
        <span>成本/现价</span>
        <span>当日盈亏</span>
      </div>
      <ul>
        <li>
          <div class="share-total-info"></div>
          <div class="share-today-info"></div>
        </li>
      </ul>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      beginTotal: 200000,  //in
      nowTotal: 199988.17, //beginTotal - totalLose
      avaliabe: 196271.17,// = nowTotal - totalSharesVal
      totalLose: -11.83, // =sum[todayLose]
      // todayLose: -8.00, // = sum[(nowPrice - buyPrice) * buyTotalItem]
      // totalSharesVal: 3717.00,
      canGet: 0.00,
      shares: [
        {
          name: '艾艾精工',
          buyPrice: 37.25,
          buyTotalItem: 100,
          getOrLose: -11.830,
          yesterdayHaveItems: 100,
          spendPrice: 37.288,
          nowShareVal: 2717.000,
          nowglRate: "-0.320%", //how to calc
          nowPrice: 37.170,
          nowHaveItems: 100,
        }
      ]
    }
  },
  computed: {
    todayLose: function() {
      let sum = 0.000
      for (let share of this.shares)
        sum += share.nowPrice * share.nowHaveItems - share.buyPrice * share.buyTotalItem
      console.log(sum)
      return sum.toFixed(2)
    },
    totalSharesVal: function() {
      let sum = 0.000
      for (let share of this.shares)
        sum += share.nowPrice * share.nowHaveItems
      return sum.toFixed(2)
    }
  },
  mounted() {
    let vm = this
    let time = setInterval(function() {
        vm.shares[0].nowPrice += 0.001
        // console.log(vm.shares[0].nowPrice)
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="less">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
      margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#share {
  background-image: url(../assets/have-tempalte1.jpg);
  background-size: cover;
  height: 667px;
      background-color: #252429;
}

.status-panel{
  height: 20px;
}

.title {
  height: 44px;
}

.tabs {
}

.tabs ul {
  display: flex;
  justify-content: space-around;
   height: 40px;
    line-height: 40px;
        border-bottom: 1px solid #2a292e;
}

.tabs ul li {
  display: inline-block;
  margin: 0;
  padding-top: 1px;
  text-align: center;
  font-size: 15px;
   margin-left: 6px;
}

.tabs ul li.active {
      color: #c54441;
    border-bottom: 1px solid #c54441;
}
.last-li {
      margin-right: 9px !important;
}
.money-type {
    height: 30px;
    border-bottom: 1px solid  #2a292e;
}
.panel {
  color: green;
}

.panel .row div {
      display: inline-block;
    float: left;
    margin-right: 36px;
    font-size: 13px;
    margin-left: 15px;
    margin-top: 11px;
}

.panel .row span {
       margin-bottom: 7px;
}

.today-get-lose {
     margin-left: 43px !important;
}

span {
  display: block;
  text-align: left;
}
</style>
