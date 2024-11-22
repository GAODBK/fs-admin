import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

export const useBookStore = defineStore('bookStore', () => {
  const BookData = reactive([
    {
      book_id: 1,
      name: '推荐系统实践入门',
      author: '风间正宏',
      publish: '欧莱礼',
      ISBN: '6263247800',
      introduction: '推荐系统实用入门——工作中可以使用的入门指南',
      language: '繁体中文',
      price: 680.0,
      pub_date: '2024-11-04',
      class_id: 1,
      number: 30,
    },
    {
      book_id: 2,
      name: '云端/ DevOps / SRE 工程师转职必杀技',
      author: '謝明宏',
      publish: '博碩文化',
      ISBN: '6263339772',
      introduction:
        '翻转职涯！云端/ DevOps / SRE 工程师转职必杀技：四大步骤带你找出职能优势、成功精准转职的规划指南（iThome铁人赛系列书）',
      language: '繁体中文',
      price: 650.0,
      pub_date: '2024-11-06',
      class_id: 1,
      number: 0,
    },
    {
      book_id: 3,
      name: 'Coding Video',
      author: 'Richardson, Iain E',
      publish: 'Wiley',
      ISBN: '1118711785',
      introduction: 'Coding Video: A Practical Guide to Hevc and Beyond',
      language: '英文',
      price: 3600.0,
      pub_date: '2024-11-01',
      class_id: 2,
      number: 30,
    },
    {
      book_id: 4,
      name: 'Practical Lakehouse Architecture',
      author: 'Thalpati, Gaurav Ashok',
      publish: 'O Reilly',
      ISBN: '1098153014',
      introduction:
        'Designing and Implementing Modern Data Platforms at Scale (Paperback)',
      language: '英文',
      price: 2450.0,
      pub_date: '2024-08-27',
      class_id: 2,
      number: 0,
    },
    {
      book_id: 5,
      name: 'Azure AI 人工智慧基础能力',
      author: 'MCF',
      publish: 'Microsoft',
      ISBN: '1111',
      introduction:
        'Microsoft MCF 微軟核心能力原廠國際認證-AI-900 Azure AI 人工智慧基礎能力',
      language: '英文',
      price: 3200.0,
      pub_date: '2024-11-01',
      class_id: 3,
      number: 30,
    },
    {
      book_id: 6,
      name: 'VR Developer',
      author: 'UCU',
      publish: 'Unity',
      ISBN: '1111',
      introduction: 'Unity UCU 游戏设计开发原厂国际认证',
      language: '英文',
      price: 4200.0,
      pub_date: '2024-11-01',
      class_id: 3,
      number: 0,
    },
    {
      book_id: 7,
      name: 'LLM 大型语言模型的绝世秘笈',
      author: '陈威廷（Penut Chen）',
      publish: '博碩文化',
      ISBN: '6263339292',
      introduction:
        '27路独步剑法，带你闯荡生成式AI 的五湖四海（iThome铁人赛系列书）',
      language: '繁体中文',
      price: 507.0,
      pub_date: '2024-08-12',
      class_id: 4,
      number: 30,
    },
    {
      book_id: 8,
      name: 'SRE 工作现场直击',
      author: '叶承彦(Ia̍p Sêng Gān)(Sean Ia̍p)',
      publish: '博碩文化',
      ISBN: '6263339349',
      introduction: '维运起点x 实战经验x 职涯规划面面观（iThome铁人赛系列书）',
      language: '繁體中文',
      price: 468.0,
      pub_date: '2024-09-03',
      class_id: 4,
      number: 0,
    },

    {
      book_id: 9,
      name: '双城记',
      author: '狄更斯',
      publish: '中国对外翻译出版公司',
      ISBN: 'B09MQBW6QG',
      introduction:
        '以18世纪的法国大革命为背景，故事中将巴黎、伦敦两个大城市连结起来，叙述梅尼特医生一家充满了爱与冒险的遭遇，中间穿插了贵族的残暴、人民的愤怒、审判间谍……',
      language: '英语',
      price: 714.0,
      pub_date: '2009/5/1',
      class_id: '/foreignNovels',
      number: 0,
    },
    {
      book_id: 10,
      name: '忏悔录',
      author: '[法]卢梭 (著) ',
      publish: '重庆出版社',
      ISBN: '9787229109349',
      introduction: '哲学/宗教|哲学经典著作',
      language: '中文',
      price: 468.0,
      pub_date: '2016年 4月 30日',
      class_id: '/foreignNovels',
      number: 30,
    },
    {
      book_id: 11,
      name: '茶花女',
      author: '(法)亚历山大•小仲马(著)',
      publish: '外语教学与研究出版社',
      ISBN: 'B092YFZV2G',
      introduction:
        '讲述在19世纪40年代，一个叫阿尔丰西娜•普莱西的贫苦乡下姑娘来到巴黎，走进了名利场，成了上流社会的一个社交明星，开始了卖笑生涯；之后她改名为玛丽•杜普莱西，结识了小仲马，于是两人开始了一段交往的爱情故事。',
      language: '繁體中文',
      price: 783.0,
      pub_date: '2013年 2月 1日',
      class_id: '/foreignNovels',
      number: 30,
    },

    {
      book_id: 12,
      name: '活着',
      author: '余华',
      publish: '作家出版社',
      ISBN: 'B0098SGXLK',
      introduction:
        '在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命',
      language: '中文',
      price: 1430.0,
      pub_date: '2012年 8月 1日',
      class_id: '/ContemporaryChineseNovels',
      number: 0,
    },
    {
      book_id: 13,
      name: '平凡的世界',
      author: '路遥',
      publish: '北京十月文芸出版社',
      ISBN: 'B071SDP8PC',
      introduction:
        '该书以中国70年代中期到80年代中期十年间为背景，通过复杂的矛盾纠葛，以孙少安和孙少平两兄弟为中心，刻画了当时社会各阶层众多普通人的形象；',
      language: '中文',
      price: 470.0,
      pub_date: '2017年 1月 1日',
      class_id: '/ContemporaryChineseNovels',
      number: 30,
    },
    {
      book_id: 14,
      name: '黄金时代',
      author: '王小波',
      publish: 'Cypress Book Co. UK Ltd',
      ISBN: '7530220292',
      introduction: '是作品系列之“时代三部曲”中的一部作品',
      language: '中文',
      price: 468.0,
      pub_date: '2021年 6月 1日',
      class_id: '/ContemporaryChineseNovels',
      number: 30,
    },
    {
      book_id: 15,
      name: '穆斯林的葬礼',
      author: '霍达',
      publish: '博碩文化',
      ISBN: 'B0BVTZL64W',
      introduction: '是霍达创作的一部长篇小说',
      language: '中文',
      price: 684.0,
      pub_date: '2024-09-03',
      class_id: '/ContemporaryChineseNovels',
      number: 30,
    },

    {
      book_id: 16,
      name: '一半是火焰一半是海水',
      author: '王朔',
      publish: '北京十月文艺出版社',
      ISBN: 'B01FS1661M',
      introduction:
        '你能看出更深的东西你就看，你不能看出更深的东西，起码也让你乐一乐。',
      language: '中文',
      price: 258.0,
      pub_date: '2015年 2月 28日',
      class_id: '/socialFiction',
      number: 0,
    },
    {
      book_id: 17,
      name: '活着',
      author: '余华',
      publish: '作家出版社',
      ISBN: 'B0098SGXLK',
      introduction:
        '余华是我国当代著名作家，也是享誉世界的小说家，曾荣获众多国内外奖项。《活着》是其代表作，已成为中国乃至世界当代文学的经典。',
      language: '中文',
      price: 143.0,
      pub_date: '2012年 8月 1日',
      class_id: '/socialFiction',
      number: 30,
    },
    {
      book_id: 18,
      name: '人间',
      author: '蔡骏',
      publish: '中国友谊出版公司',
      ISBN: '7505745085',
      introduction:
        '神秘的读心术，古老的兰陵王面具，两个斗争千年不休的世家大族，一次关于人性和命运的传奇体验',
      language: '中文',
      price: 369.0,
      pub_date: '2019年 2月 28日',
      class_id: '/socialFiction',
      number: 30,
    },

    {
      book_id: 19,
      name: '福尔摩斯探案全集',
      author: '柯南·道尔 著',
      publish: '中华书局',
      ISBN: '9787101089110',
      introduction:
        '这部小说包含了四部长篇《血字的研究》《四签名》《奇案记》和《巴斯克维尔猎犬》和众多短篇故事，其中大部分内容都是医生华生对于好友福尔摩斯探案故事的回忆录',
      language: '中文',
      price: 176.0,
      pub_date: '2012-11',
      class_id: '/detectiveNovel',
      number: 0,
    },
    {
      book_id: 20,
      name: '马耳他黑鹰',
      author: '达希尔·哈米特 著',
      publish: '文汇出版社',
      ISBN: '9787549613946',
      introduction:
        '哈米特是“硬汉派”侦探小说的创始人和重要代表人物之一，这本书也是硬汉派小说的开山之作。由于作者本人就当过私人侦探，因而对社会现实、犯罪心理、警匪争斗的描写具体又详细',
      language: '中文',
      price: 30.0,
      pub_date: '2015-3-1',
      class_id: '/detectiveNovel',
      number: 30,
    },

    {
      book_id: 21,
      name: '跑去她的世界',
      author: '夏桑',
      publish: '新星出版社',
      ISBN: '9787513357371',
      introduction:
        '他仅存的希望，就是每当跑步时，能够看见亡妻。抑郁患者 ✖ 受难机器 ✖ 时光药丸一场马拉松引发的都市幻想，一名内耗者的自毁和自救',
      language: '中文',
      price: 30.0,
      pub_date: '2024-8',
      class_id: 9,
      number: 30,
    },
    {
      book_id: 22,
      name: '波粒二象猫',
      author: '杨卓理',
      publish: '四川科学技术出版社',
      ISBN: '9787572713224',
      introduction:
        '这篇小说试图探寻伟大的物理学家玻尔曾经提出过的“宇宙的信息本源理论”：一切都是信息，除了信息什么都没有。',
      language: '中文',
      price: 97.0,
      pub_date: '2015-3-1',
      class_id: '/scienceFiction',
      number: 30,
    },
    {
      book_id: 23,
      name: '克莱因壶',
      author: '[日] 冈岛二人',
      publish: '化学工业出版社',
      ISBN: '9787122346032',
      introduction:
        '什么时候你开始怀疑这个世界是假的？日本虚拟现实VR题材开山杰作，超前《盗梦空间》20年！',
      language: '中文',
      price: 48.0,
      pub_date: '2019-9',
      class_id: '/scienceFiction',
      number: 0,
    },

    {
      book_id: 24,
      name: '汉字书写表征与教育实践',
      author: '姜杰',
      publish: '江苏人民出版社',
      ISBN: '9787214276773',
      introduction:
        '从现有汉字字形、结构表征体系入手，对汉字书写的表征与表征语言设计做了全方位的阐述，包括笔画的表征、汉字整字与部件之间的表征、笔序笔势的表征，并对智能汉字书写软件的应用和教学系统的设计、汉字书写公正性与整体性的评价方案等做了介绍',
      language: '中文',
      price: 39.0,
      pub_date: '2024-08-13',
      class_id: '/primaryAndSecondarySchoolReading',
      number: 0,
    },
    {
      book_id: 25,
      name: '凡尔纳科幻经典：地心游记',
      author: '（法）凡尔纳',
      publish: '中国友谊出版公司',
      ISBN: '9787505728943',
      introduction:
        '讲述了里登布洛克教授受一封密码信启发，与侄子阿克赛尔和向导汉斯进行的一次地心探险的故事',
      language: '中文',
      price: 28.0,
      pub_date: '2024-03-06',
      class_id: '/primaryAndSecondarySchoolReading',
      number: 30,
    },
    {
      book_id: 26,
      name: '了不起的语文书.幻想与真实',
      author: '叶开',
      publish: '四川天地出版社',
      ISBN: '9787545563153',
      introduction:
        '由语文教育专家叶开主编，以主题阅读的方式分为五册，选文视角独特，文体多样，导读分析独到，能有效帮助青少年打开语文学习的不二法门。',
      language: '中文',
      price: 9.9,
      pub_date: '2023-03-30',
      class_id: '/primaryAndSecondarySchoolReading',
      number: 30,
    },
    {
      book_id: 27,
      name: '新高考版600分考点700分',
      author: '理想树',
      publish: '四川天地出版社',
      ISBN: '7513149283',
      introduction:
        '2021新高考数学选考专用高考自主复习资料高中数学理科辅导书67高考理想树600分700分数学高考总复习',
      language: '中文',
      price: 79.9,
      pub_date: '2021-03-30',
      class_id: '/collegeEntranceExaminationMaterials',
      number: 30,
    },
  ])

  const routeValue = ref(null) // 用于接收路由传递的值
  const showAll = ref(false)
  const inputText = ref('')

  const filterResults = computed(() => {
    if (showAll.value) {
      return BookData
    }
    if (inputText.value) {
      return BookData.filter(
        book =>
          book.name.toLowerCase().includes(inputText.value.toLowerCase()) ||
          book.author.toLowerCase().includes(inputText.value.toLowerCase()),
      )
    }
    if (routeValue.value !== null) {
      return BookData.filter(book => book.class_id === routeValue.value)
    }
    return sendData(4)
  })

  const sendData = arrayLength => {
    const uniqueNumbers = new Set()

    while (uniqueNumbers.size < arrayLength) {
      const randomNum = Math.floor(Math.random() * BookData.length)
      uniqueNumbers.add(randomNum)
    }

    return Array.from(uniqueNumbers).map(index => BookData[index])
  }

  const setRouteValue = value => {
    routeValue.value = value
  }

  const setInputValue = value => {
    inputText.value = value
  }

  const isShowAll = () => {
    showAll.value = !showAll.value
  }

  return {
    filterResults,
    isShowAll,
    setRouteValue,
    inputText,
    setInputValue,
  }
})
