const TUTORS = [
  {
    id: 1, name: "李明", gender: "男", age: 28,
    school: "云南师范大学 · 数学研究生",
    subject: "数学", tags: ["初中数学", "高中数学", "中考冲刺"],
    grades: ["初中", "高中"], category: "学科",
    price: 180, rating: 4.9, reviews: 127,
    district: "五华区", city: "昆明",
    years: 5, students: 80,
    bio: "云南师范大学数学专业研究生，5年一线教学经验。擅长用思维导图帮助学生建立知识体系，累计帮助80+名学生提升成绩。去年带的8名初三学生中7人考入昆一中。",
    style: "思维引导型 · 因材施教",
    verified: ["实名认证", "学历核验", "教师资格证"],
    color: "linear-gradient(135deg,#C8102E,#a00d25)"
  },
  {
    id: 2, name: "王芳", gender: "女", age: 26,
    school: "云南大学 · 外国语学院",
    subject: "英语", tags: ["小学英语", "初中英语", "雅思口语"],
    grades: ["小学", "初中"], category: "学科",
    price: 150, rating: 4.8, reviews: 98,
    district: "盘龙区", city: "昆明",
    years: 3, students: 60,
    bio: "云南大学英语专业，雅思8.0。擅长小初衔接，让孩子从'哑巴英语'转为敢说敢用。课堂生动有趣，家长反馈孩子学习兴趣明显提升。",
    style: "沉浸式口语 · 兴趣导向",
    verified: ["实名认证", "学历核验", "雅思证书"],
    color: "linear-gradient(135deg,#E91E63,#AD1457)"
  },
  {
    id: 3, name: "张伟", gender: "男", age: 32,
    school: "昆明理工大学 · 物理系",
    subject: "物理", tags: ["高中物理", "高考冲刺"],
    grades: ["高中"], category: "学科",
    price: 220, rating: 4.9, reviews: 156,
    district: "呈贡区", city: "昆明",
    years: 8, students: 150,
    bio: "昆工物理系硕士，8年高中物理教学经验。曾在昆明一中实习任教，深谙云南高考物理命题规律。带过的学生高考物理平均提分25分。",
    style: "题型分类 · 高考专项",
    verified: ["实名认证", "学历核验", "教师资格证"],
    color: "linear-gradient(135deg,#1976D2,#0D47A1)"
  },
  {
    id: 4, name: "赵娟", gender: "女", age: 35,
    school: "云南师范大学 · 汉语言文学",
    subject: "语文", tags: ["小学语文", "作文专项", "阅读理解"],
    grades: ["小学"], category: "学科",
    price: 160, rating: 5.0, reviews: 210,
    district: "西山区", city: "昆明",
    years: 10, students: 200,
    bio: "云师大汉语言文学专业，10年小学语文教学经验。在职小学一级教师，擅长阅读与作文，学生作文多次在省市级比赛获奖。",
    style: "情景教学 · 循序渐进",
    verified: ["实名认证", "学历核验", "教师资格证", "一级教师"],
    color: "linear-gradient(135deg,#689F38,#33691E)"
  },
  {
    id: 5, name: "陈刚", gender: "男", age: 30,
    school: "中央音乐学院 · 钢琴系",
    subject: "钢琴", tags: ["钢琴启蒙", "考级辅导", "中央音乐学院"],
    grades: ["小学", "初中"], category: "艺术",
    price: 300, rating: 4.9, reviews: 87,
    district: "五华区", city: "昆明",
    years: 6, students: 45,
    bio: "中央音乐学院钢琴演奏硕士毕业，回昆明发展6年。带出多名央院、上音附中考生。注重基本功与音乐表现力并重。",
    style: "古典系统 · 严谨扎实",
    verified: ["实名认证", "学历核验", "演出履历"],
    color: "linear-gradient(135deg,#5E35B1,#311B92)"
  },
  {
    id: 6, name: "刘静", gender: "女", age: 40,
    school: "云南省书法家协会会员",
    subject: "书法", tags: ["软笔书法", "硬笔书法", "素质教育"],
    grades: ["小学", "初中"], category: "艺术",
    price: 120, rating: 4.8, reviews: 64,
    district: "官渡区", city: "昆明",
    years: 12, students: 180,
    bio: "云南省书法家协会会员，从事青少年书法教学12年。作品多次入选省级展览。认为书法不仅是写字，更是修身养性。",
    style: "传统临帖 · 品格培养",
    verified: ["实名认证", "协会会员", "作品集"],
    color: "linear-gradient(135deg,#8D6E63,#4E342E)"
  },
  {
    id: 7, name: "杨帆", gender: "男", age: 29,
    school: "华为前工程师 · 昆工计算机",
    subject: "编程", tags: ["少儿Python", "Scratch", "信息学奥赛"],
    grades: ["小学", "初中"], category: "素质",
    price: 200, rating: 4.9, reviews: 72,
    district: "呈贡区", city: "昆明",
    years: 4, students: 55,
    bio: "昆工计算机硕士，华为前端工程师，2年前回昆明专注少儿编程教育。带的学生多名获全国青少年信息学奥赛省级奖项。",
    style: "项目驱动 · 兴趣养成",
    verified: ["实名认证", "学历核验", "大厂背景"],
    color: "linear-gradient(135deg,#00897B,#004D40)"
  },
  {
    id: 8, name: "孙悦", gender: "女", age: 27,
    school: "云南艺术学院 · 国画专业",
    subject: "美术", tags: ["儿童画", "国画", "素描入门"],
    grades: ["小学"], category: "艺术",
    price: 130, rating: 4.7, reviews: 53,
    district: "盘龙区", city: "昆明",
    years: 3, students: 40,
    bio: "云艺国画专业毕业，擅长引导孩子从涂鸦到系统学习。课堂氛围轻松，让孩子在快乐中建立审美与创造力。",
    style: "启发式 · 快乐绘画",
    verified: ["实名认证", "学历核验"],
    color: "linear-gradient(135deg,#FF7043,#D84315)"
  }
];

const REVIEWS = [
  { tutorId: 1, parent: "张**妈妈", rating: 5, date: "2026-03-28", text: "李老师讲题很有耐心，孩子这次月考数学从78分提到了92分，非常感谢！" },
  { tutorId: 1, parent: "王**爸爸", rating: 5, date: "2026-02-14", text: "沟通顺畅，定价透明，平台不抽成这点很加分。老师真实有水平。" },
  { tutorId: 1, parent: "李**妈妈", rating: 5, date: "2026-01-09", text: "备课认真，每次都有针对性的练习。孩子原来不爱数学，现在会主动做题了。" }
];
