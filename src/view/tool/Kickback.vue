<template>
  <div class="kickback">
    <Header :title="title"></Header>
    <div class="table_wrap">
      <div>
        <h2>返还率计算</h2>
        <table>
          <tr>
            <td class="tit"><span>赔率</span></td>
            <td><mu-text-field @change="changeOdd()" type="number" fullWidth v-model="odd.win" label="胜" hintText="" labelFloat/></td>
            <td><mu-text-field @change="changeOdd()" type="number" fullWidth v-model="odd.draw" label="平" hintText="" labelFloat/></td>
            <td><mu-text-field @change="changeOdd()" type="number" fullWidth v-model="odd.lose" label="负" hintText="" labelFloat/></td>
            <td class="last"><span>{{(odd.kickback*100).toFixed(2)}}</span></td>
          </tr>
          <tr>
            <td class="tit"><span>概率</span></td>
            <td><span>{{(prob.win*100).toFixed(2)}}</span></td>
            <td><span>{{(prob.draw*100).toFixed(2)}}</span></td>
            <td><span>{{(prob.lose*100).toFixed(2)}}</span></td>
            <td class="last"></td>
          </tr>
        </table>
      </div>
      <div>
        <h2>赔率转换</h2>

        <div class="btn_wrap">
          <mu-radio v-click="oddTransfer()" label="89" name="kickback" nativeValue="89" v-model="odd_c.kickback"/>
          <mu-radio label="92" name="kickback" nativeValue="92" v-model="odd_c.kickback"/>
          <mu-radio label="94" name="kickback" nativeValue="94" v-model="odd_c.kickback"/>
          <mu-radio label="96" name="kickback" nativeValue="96" v-model="odd_c.kickback"/>
          <div class="other">
            <mu-text-field fullWidth v-model="odd_c.kickback" label="返还率" hintText="" labelFloat/>
          </div>
          <span style="display: inline-block;width: 100%"></span>
        </div>
        <table style="text-align: center;">
          <tr>
            <th class="tit"></th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th class="last">返还率</th>
          </tr>
          <tr>
            <td class="tit"><span>普通转换</span></td>
            <td><span>{{(odd_c.win)}}</span></td>
            <td><span>{{(odd_c.draw)}}</span></td>
            <td><span>{{(odd_c.lose) }}</span></td>
            <td class="last">{{(odd_c.kickback)}}</td>
          </tr>
          <tr>
            <td class="tit"><span>智能转换</span></td>
            <td><span>{{odd_s.win}}</span></td>
            <td><span>{{odd_s.draw}}</span></td>
            <td><span>{{odd_s.lose}}</span></td>
            <td class="last">{{odd_s.kickback*100}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from '@components/Header';
  const normalOdd = [
    1.07, 1.08, 1.09,
    1.10, 1.11, 1.12, 1.14, 1.17, 1.18,
    1.20, 1.22, 1.25, 1.28,
    1.30, 1.33, 1.35, 1.36,
    1.40, 1.44, 1.50, 1.53, 1.55, 1.57, 1.60,
    1.61, 1.62, 1.65, 1.67, 1.73, 1.75,
    1.80, 1.83, 1.85, 1.90, 1.91, 1.95,
    2.00, 2.05, 2.10, 2.15, 2.20, 2.25,
    2.30, 2.37, 2.40, 2.45, 2.50, 2.62, 2.70, 2.75, 2.80, 2.88, 2.9,
    3.00, 3.10, 3.20, 3.25, 3.30, 3.40, 3.50, 3.60, 3.75, 3.80,
    4.00, 4.10, 4.20, 4.33, 4.40, 4.50, 4.60, 4.75, 4.80,
    5.00, 5.50, 6.00, 6.50,
    7.00, 7.50, 8.00, 8.50,
    9.00, 9.50, 10.0, 10.50,
    11, 12, 13, 15, 17, 19, 21, 23, 26
  ];
  // 匹配最接近的赔率
  function getSmartOdd(odd) {
    let sortArr;
    let _arr = normalOdd.map(function (item) {
      return Math.abs(item - parseFloat(odd));
    });
    sortArr = _arr.concat().sort(function (a, b) {
      return a - b;
    });

    let _index = _arr.indexOf(sortArr[0]);

    return normalOdd[_index];
  }
  // 检测合法性
  function checkVal(val) {
    return (val !== null && typeof val !== "undefined" && val !== "");
  }
  function getRepayRate(a, b, c) {
    return a * b * c / (a * b + a * c + b * c);
  }
  let Data = function () {
    return {
      win: '',
      draw: '',
      lose: '',
      kickback: ''
    };
  };

export default {
  components: {
    Header: Header
  },
  data() {
    return {
      title: '推荐单一',
      odd: new Data(),
      prob: new Data(),
      odd_c: new Data(),
      odd_s: new Data()
    };
  },
  async mounted() {
    this.$store.commit("setTab", false);
  },
  methods: {
    changeOdd () {
      let odd = this.odd;
      let a = odd.win;
      let b = odd.draw;
      let c = odd.lose;
      let curve;

      if (checkVal(a) && checkVal(b) && checkVal(c)) {
        curve = getRepayRate(a, b, c);
        odd.kickback = curve;

        this.prob.win = curve / a;
        this.prob.draw = curve / b;
        this.prob.lose = curve / c;
      }
    },
    oddTransfer () {
      let oddC = this.odd_c;
      let oddS = this.odd_s;
      let prob = this.prob;
      let _val = oddC.kickback;
      if (checkVal(_val)) {
        _val = parseFloat(_val) / 100;
      } else {
        return;
      }
      let a = _val / prob.win;
      let b = _val / prob.draw;
      let c = _val / prob.lose;
      //  计算转换后的赔率
      oddC.win = a.toFixed(2);
      oddC.draw = b.toFixed(2);
      oddC.lose = c.toFixed(2);

      // 计算智能转换
      oddS.win = getSmartOdd(a);
      oddS.draw = getSmartOdd(b);
      oddS.lose = getSmartOdd(c);

      oddS.kickback = getRepayRate(oddS.win, oddS.draw, oddS.lose).toFixed(4);
    }
  },
  computed: {

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.kickback {
  background #ededed
}
.other {
  display inline-block
  width 18%
  position relative
  bottom 10px
}
  .btn_wrap {
    text-align justify
    button {
      width 18%
    }
  }
  .table_wrap {
    padding: 0 12px;
    margin: 0 auto;
    font-size: 14px;
    h2 {
      font-size 16px
      font-weight bold
      padding 15px 0 10px
    }
    table {
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      line-height: 1.4;
      .tit {
        width: 20%;
        text-align left
      }
      th {
        padding: 5px 0;
      }
      td {
        padding: 6px;
        width: 20%;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
</style>
