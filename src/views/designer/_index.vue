<template>
  <div class="base-container designer">
    <img class="designer__banner" src="@/assets/designer/banner.png" />
    <!-- Designer
    designerItem-->
    <template v-for="(designer, index) in designers">
      <designerItem class="designerItem" :designer="designer" :key="index"></designerItem>
    </template>
  </div>
</template>
<script>
import designerItem from './designerItem.vue'
// Images
import doraImage from '@/assets/designer/designer1.png'
import designerImage2 from '@/assets/designer/designer2.jpg'
import designerImage3 from '@/assets/designer/designer3.jpg'
export default {
  components: {
    designerItem
  },
  data: () => ({
    designers: [
      {
        portrait: doraImage,
        name: {
          type: 'zh',
          forename: '趙',
          surname: '耘萱',
          nickname: 'Dora'
        },
        description: {
          title: '社工師/兒少婦家助人工作者/生涯設計師/天使精靈卡療癒占卜師',
          sentences: [
            '8年專業助人工作者經驗',
            '從工作中看見各年齡/領域之人皆有生命發展之任務',
            '因為重視人們自我的價值',
            '希望陪伴人透過探索和發掘',
            '建立有意義的親密關係',
            '創造理想的生活方式',
            '進而成為更喜歡的自己',
          ],
        },
        services: [
          {
            type: 'header',
            title: '一對一諮詢(生涯設計/轉職風險評估/人際、親密關係經營)',
          },
          {
            type: 'header',
            title: '天使精靈卡療癒占卜'
          },
        ],
        courses: [
          {
            type: 'header',
            title: '心靈牌卡教學',
          }
        ]
      },
      {
        portrait: designerImage2,
        name: {
          type: 'en',
          forename: 'Ruby',
          // surname: 'Chang',
        },
        description: {
          title: '生涯設計師/科技業PM/活動企劃/人物訪談',
          sentences: [
            '擅長專案管理及跨部門溝通的我，發現「人」是專案成功的關鍵',
            '所以我關注職涯/生涯相關議題，重視適才適能，讓每個人發揮優勢或潛能',
            '自己心中總有一股使命感，希望助人找到自己心之所向，創造人生舞台',
            '「追隨熱情與最愛，成為心中的自己」，這是我的座右銘',
            '也分享給大家；願我們都是一個勇於追夢的人～～～',
          ]
        },
        services: [
          {
            type: 'header',
            title: '分析個人獲利模式圖',
          },
          {
            type: 'header',
            title: '訪談PM/企劃/行銷之職涯路徑'
          },
          {
            type: 'header',
            title: '建構個人專案管理'
          }
        ],
      },
      {
        portrait: designerImage3,
        name: {
          type: 'zh',
          forename: '張',
          surname: '蘊心',
        },
        description: {
          title: '社工師/台灣薩提爾模式助人專業認證治療師/日本JPHAA和諧粉彩正指導師',
          sentences: [
            '助人工作已有14年服務經驗',
            '曾服務兒少家庭、燒燙傷、長照領域',
            '相信生命影響生命',
            '人生與夢想不設限',
            '每個人與生俱來都是有價值的',
          ]
        },
        services: [
          {
            type: 'header',
            title: '分析個人獲利模式圖',
          },
          {
            type: 'header',
            title: '訪談PM/企劃/行銷之職涯路徑'
          },
          {
            type: 'header',
            title: '建構個人專案管理'
          }
        ],
      },
      {
        portrait: designerImage3,
        name: {
          type: 'zh',
          forename: '周',
          surname: '泳恩',
          nickname: 'Michelle'
        },
        description: {
          title: '生涯設計師/科技業PM/活動企劃/人物訪談',
          sentences: [
            '熱愛參與活動與接觸人群',
            '生涯探索是一輩子的課題',
            '不管事處於人生的哪一個階段',
            '皆會有迷茫困惑的時刻',
            '希望可以陪伴、協助他人一起成長',
            '彼此分享，創造出更美好的生活'
          ]
        },
        services: [
          {
            type: 'header',
            title: '一對一諮詢(生涯設計/轉職風險評估/人際、親密關係經營)',
            descriptions: [
              {
                title: '期望因子',
                description: '找出自己對於轉職的動機, 哪些是需要哪些是想要;讓評估轉職可以變得簡單又更加貼近個人需求'
              },
              {
                title: '風險因子',
                description: '則是協助您看清在轉職時可能忽略的變數。'
              }
            ]
          },
          {
            type: 'header',
            title: '天使精靈卡療癒占卜'
          },
          {
            type: 'header',
            title: '心靈牌卡教學'
          }
        ],
        courses: [
          {
            type: 'header',
            title: '轉職說明書',
          },
          {
            type: 'list',
            title: '兩天課程將會獲得',
            items: [
              '三種生涯原型',
              '一年內免費複訓',
              '生涯設計師社群的資源整合',
              '完成任務後頒發"生涯設計工作坊結業證書"'
            ]
          },
          {
            paragraphs: [
              {
                sentences: [
                  '完成生涯工作坊結業者，將會獲得生涯設計工作坊結業證書一紙。',
                  '擁有生涯設計工作坊結業證書者，將可獲得生涯設計師培訓資格、參與學徒計畫。'
                ]
              },
            ]
          },
          {
            type: 'list',
            title: '課程特色',
            items: [
              '沒有名師，只有實戰滿滿的生涯設計師們，引導學員實際操作、輔導。',
              '不同領域的講師助教們，讓學員更容易所期有興趣領域與市場環境。',
              '協助建立生涯分享團隊，找到未來的夥伴，彼此分享討論一起前進。',
              '多一種技能，成為生涯設計師，幫助更多人設計理想的生活模式。'
            ]
          },
        ]
      },
      {
        portrait: designerImage3,
        name: {
          type: 'en',
          forename: 'Annie',
          surname: 'Chang',
        },
        description: {
          title: '生涯設計師 / 藝術專案管理',
          sentences: [
            '本身對於美的事物很感興趣',
            '在轉職說明書的服務，我將透過對話引導與陪伴聆聽',
            '協助釐清你心中真正在意的職涯問題',
            '讓每個人都能找尋到自己喜歡的工作',
            '擁有更好的生活',
          ]
        }
      },
    ]
  })
}
</script>
<style lang="scss" scoped>
.designer__banner {
  width: 100vw;
}
</style>
