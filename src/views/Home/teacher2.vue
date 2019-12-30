<template>
  <div class="teacher2">
    <div class="teacher2__header">
      <h1 class="header__text">生涯設計師</h1>
      <hr class="header__line" />
    </div>
    <div class="teacher2__body">
      <div class="teacher2__col">
        <div class="teacher2__teacher">
          <img class="teacher__portrait" src="@/assets/home/teacher1.jpg" />
          <div class="teacher__title teacher__title--1">
            <h1 class="title__primary">Radha 小米</h1>
            <span class="title__secondary">藝術家 / 教練</span>
          </div>
          <div class="teacher__description teacher__description--1">
            <p class="description__line">Vision Creation & Minifestation</p>
            <p class="description__line">引導人們發現自己熱愛與擅長的</p>
            <p class="description__line">創造設計自己的願景生活</p>
            <p class="description__line">以顯化與實際計畫落實成真</p>
            <br />
            <p class="description__line">服務時數已達3300小時以上</p>
            <p class="description__line">以教練方式引導學員一步一腳印</p>
            <p class="description__line">以顯化與計畫實作</p>
            <p class="description__line">落實創業 轉職 債務清償 買房 圓夢與轉化生活方式</p>
          </div>
        </div>
        <div class="teacher2__teacher mt-2">
          <img class="teacher__portrait" src="@/assets/home/teacher2.jpg" />
          <div class="teacher__title teacher__title--2">
            <h1 class="title__primary">張蘊心</h1>
            <span class="title__secondary">長照督導員</span>
          </div>
          <div class="teacher__description teacher__description--2">
            <p class="description__line">在助人工作的行業已有12年經驗</p>
            <p class="description__line">相信生命影響生命</p>
            <p class="description__line">人生與夢想不設限</p>
            <p class="description__line">每個人與生俱來都是有價值的</p>
          </div>
        </div>
      </div>
      <div class="teacher2__col">
        <div class="teacher2__teacher">
          <img class="teacher__portrait" src="@/assets/home/teacher3.jpg" />
          <div class="teacher__title teacher__title--3">
            <h1 class="title__primary">Sean 郭晏瑜</h1>
            <span class="title__secondary">教育創新 / 第N大道 創辦人</span>
          </div>
          <div class="teacher__description teacher__description--3">
            <p class="description__line">我相信在這多元的世界裡</p>
            <p class="description__line">該有多元的教育樣態</p>
            <p class="description__line">不期待自己能撼動這個體制</p>
            <p class="description__line">更希望讓很多人能倘佯於</p>
            <p class="description__line">築夢的世界</p>
          </div>
        </div>
        <div class="teacher2__teacher mt-2">
          <img class="teacher__portrait" src="@/assets/home/teacher4.jpg" />
          <div class="teacher__title teacher__title--4">
            <h1 class="title__primary">Jane 李盈臻</h1>
            <span class="title__secondary">行銷企劃 / 社會行銷</span>
          </div>
          <div class="teacher__description teacher__description--4">
            <p class="description__line">喜歡關注行銷、社福、生涯</p>
            <p class="description__line">心理學等相關議題、閱讀、</p>
            <p class="description__line">慢跑、爬山、音樂、志工活動</p>
            <p class="description__line">是餵飽心靈的糧食，期許自己的</p>
            <p class="description__line">能力能讓這世界越來越好</p>
          </div>
        </div>
        <div class="teacher2__teacher mt-2">
          <img class="teacher__portrait" src="@/assets/home/teacher5.jpg" />
          <div class="teacher__title teacher__title--5">
            <h1 class="title__primary">Syuan 陳怡璇</h1>
            <span class="title__secondary">教育工作者</span>
          </div>
          <div class="teacher__description teacher__description--5">
            <p class="description__line">座右銘：平衡來自於矛盾</p>
            <p class="description__line">邊走邊整隊</p>
            <p class="description__line">透明色的圓形人</p>
            <p class="description__line">熱愛唱歌和大自然</p>
            <p class="description__line">多數時柔軟</p>
            <p class="description__line">與自己相處得很自由</p>
            <p class="description__line">少數時搞怪</p>
            <p class="description__line">創造一種平凡的快樂</p>
            <p class="description__line">喜歡把生活當成專案玩耍</p>
            <p class="description__line">因為相信一輩子</p>
            <p class="description__line">也能體驗幾輩子的人生</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.teacher2 {
  .teacher2__header {
    position: relative;
    display: flex;
    justify-content: center;
    height: 40px;
    .header__text {
      width: 8em;
      text-align: center;
      font-size: 20px;
      height: 20px;
      position: absolute;
      top: 4px;
      background-color: white;
      color: #4aa9c4;
      font-weight: bold;
    }
    .header__line {
      border: 1px solid black;
      width: 100%;
    }
  }
  .teacher2__body {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
  }
  .teacher2__slogan {
    display: flex;
    justify-content: space-between;
  }
  .teacher2__teacher {
    position: relative;
    .teacher__portrait {
      width: 100%;
    }
    .teacher__title {
      position: absolute;

      .title__primary {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }
      .title__secondary {
        font-size: 12px;
      }
    }
    .teacher__title--1 {
      top: 64px;
      right: 24px;
    }
    .teacher__title--2 {
      top: 12px;
      left: 120px;
    }
    .teacher__title--3 {
      top: 8px;
      left: 16px;
    }
    .teacher__title--4 {
      top: 12px;
      left: 120px;
    }
    .teacher__title--5 {
      top: 24px;
      left: 16px;
    }
    .teacher__description {
      position: absolute;
      font-size: 10px;
      color: white;
      .description__line {
        margin: 0;
        font-size: 10px;
        line-height: 1.4;
      }
    }
    .teacher__description--1 {
      left: 24px;
      bottom: 24px;
      text-shadow: 0.1em 0.1em 0.2em black;
    }
    .teacher__description--2 {
      left: 120px;
      bottom: 8px;
      color: black;
    }
    .teacher__description--3 {
      left: 16px;
      bottom: 12px;
      color: black;
    }
    .teacher__description--4 {
      left: 120px;
      bottom: 8px;
      color: black;
    }
    .teacher__description--5 {
      left: 16px;
      bottom: 24px;
      color: black;
    }
  }
}
@media screen and (min-width: 768px) {
  .teacher2 {
    max-width: 640px;
    margin: 95px auto auto auto;
  }
}
</style>
