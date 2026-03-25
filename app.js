// 二维码分享功能
function generateQRCode() {
    if (!gameState.roomCode) return;
    
    // 获取本地IP地址 - 使用window.location.hostname
    const ipAddress = window.location.hostname;
    const port = window.location.port || '8000';
    const shareUrl = `http://${ipAddress}:${port}?room=${gameState.roomCode}`;
    
    // 生成二维码
    const qrCodeContainer = document.createElement('div');
    qrCodeContainer.id = 'qr-code';
    qrCodeContainer.style.marginTop = '20px';
    qrCodeContainer.style.textAlign = 'center';
    
    const qrCodeTitle = document.createElement('p');
    qrCodeTitle.textContent = '扫描二维码加入房间';
    qrCodeContainer.appendChild(qrCodeTitle);
    
    const qrCodeImg = document.createElement('canvas');
    qrCodeImg.id = 'qrcode';
    qrCodeContainer.appendChild(qrCodeImg);
    
    const roomCodeText = document.createElement('p');
    roomCodeText.textContent = `房间代码：${gameState.roomCode}`;
    roomCodeText.style.marginTop = '10px';
    qrCodeContainer.appendChild(roomCodeText);
    
    // 添加手动访问提示
    const manualAccessText = document.createElement('p');
    manualAccessText.textContent = `或在浏览器中输入：${shareUrl}`;
    manualAccessText.style.marginTop = '10px';
    manualAccessText.style.fontSize = '14px';
    manualAccessText.style.color = '#666';
    qrCodeContainer.appendChild(manualAccessText);
    
    // 插入到房间准备界面
    const gamePrepSection = document.getElementById('game-prep-section');
    const existingQRCode = document.getElementById('qr-code');
    if (existingQRCode) {
        existingQRCode.remove();
    }
    gamePrepSection.appendChild(qrCodeContainer);
    
    // 生成二维码
    QRCode.toCanvas(qrCodeImg, shareUrl, {
        width: 200,
        margin: 1
    }, function (error) {
        if (error) console.error(error);
    });
}

// 从URL获取房间代码
function getRoomCodeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('room');
}

// 游戏状态管理
const gameState = {
    roomCode: '',
    playerName: '',
    isHost: false,
    players: [],
    // 头像列表 - 可以替换为自己的图片路径
    avatars: [
        'avatars/1.jpg',
        'avatars/2.jpg',
        'avatars/3.jpg',
        'avatars/4.jpg',
        'avatars/5.jpg',
        'avatars/6.jpg',
        'avatars/7.jpg',
        'avatars/8.jpg',
        'avatars/9.jpg',
        'avatars/10.jpg'
    ],
    wordPairs: [
  { normal: '枕头', spy: '抱枕' },
  { normal: '奖牌', spy: '金牌' },
  { normal: '蝴蝶', spy: '蜜蜂' },
  { normal: '气泡', spy: '水泡' },
  { normal: '葡萄', spy: '提子' },
  { normal: '小品', spy: '话剧' },
  { normal: '唇膏', spy: '口红' },
  { normal: '胡子', spy: '眉毛' },
  { normal: '纸巾', spy: '手帕' },
  { normal: '面包', spy: '蛋糕' },
  { normal: '婚纱', spy: '喜服' },
  { normal: '烤肉', spy: '涮肉' },
  { normal: '童话', spy: '神话' },
  { normal: '裸婚', spy: '闪婚' },
  { normal: '作家', spy: '编剧' },
  { normal: '壁纸', spy: '贴画' },
  { normal: '首尔', spy: '东京' },
  { normal: '同学', spy: '同桌' },
  { normal: '橙子', spy: '橘子' },
  { normal: '油条', spy: '麻花' },
  { normal: '作文', spy: '论文' },
  { normal: '杭州', spy: '苏州' },
  { normal: '水盆', spy: '水桶' },
  { normal: '结婚', spy: '订婚' },
  { normal: '孟飞', spy: '乐嘉' },
  { normal: '手机', spy: '座机' },
  { normal: '警察', spy: '捕快' },
  { normal: '蜘蛛侠', spy: '蝙蝠侠' },
  { normal: '过山车', spy: '碰碰车' },
  { normal: '菠萝蜜', spy: '榴莲' },
  { normal: '班主任', spy: '辅导员' },
  { normal: '沐浴露', spy: '沐浴乳' },
  { normal: '泡泡糖', spy: '棒棒糖' },
  { normal: '薰衣草', spy: '满天星' },
  { normal: '酸菜鱼', spy: '水煮鱼' },
  { normal: '情人节', spy: '光棍节' },
  { normal: '洗发露', spy: '护发素' },
  { normal: '口香糖', spy: '木糖醇' },
  { normal: '小沈阳', spy: '宋小宝' },
  { normal: '甄嬛传', spy: '红楼梦' },
  { normal: '图书馆', spy: '图书店' },
  { normal: '男朋友', spy: '前男友' },
  { normal: '铁观音', spy: '碧螺春' },
  { normal: '自行车', spy: '电动车' },
  { normal: '生活费', spy: '零花钱' },
  { normal: '鸭舌帽', spy: '遮阳帽' },
  { normal: '魔术师', spy: '魔法师' },
  { normal: '牛肉干', spy: '猪肉脯' },
  { normal: '大白兔', spy: '金丝猴' },
  { normal: '富二代', spy: '高富帅' },
  { normal: '双胞胎', spy: '龙凤胎' },
  { normal: '丑小鸭', spy: '灰姑娘' },
  { normal: '小笼包', spy: '灌汤包' },
  { normal: '土豆粉', spy: '酸辣粉' },
  { normal: '果粒橙', spy: '鲜橙多' },
  { normal: '洗衣粉', spy: '皂角粉' },
  { normal: '麦克风', spy: '扩音器' },
  { normal: '红烧牛肉面', spy: '香辣牛肉面' },
  { normal: '美人心计', spy: '倾世皇妃' },
  { normal: '神雕侠侣', spy: '天龙八部' },
  { normal: '夏家三千金', spy: '感情睡醒了' },
  { normal: '近视眼镜', spy: '隐形眼镜' },
  { normal: '福尔摩斯', spy: '工藤新一' },
  { normal: '流星花园', spy: '花样男子' },
  { normal: '鼠目寸光', spy: '井底之蛙' },
  { normal: '贵妃醉酒', spy: '黛玉葬花' },
  { normal: '勇往直前', spy: '全力以赴' },
  { normal: '语无伦次', spy: '词不达意' },
  { normal: '天天向上', spy: '非诚勿扰' },
  { normal: '鱼香肉丝', spy: '四喜丸子' },
  { normal: '降龙十八掌', spy: '九阴白骨爪' },
  { normal: '十面埋伏', spy: '四面楚歌' },
  { normal: '麻婆豆腐', spy: '皮蛋豆腐' },
  { normal: '两小无猜', spy: '青梅竹马' },
  { normal: '宫锁心玉', spy: '宫锁珠帘' },
  { normal: '公交', spy: '地铁' },
  { normal: '饭桶', spy: '饭碗' },
  { normal: '海豚', spy: '海狮' },
  { normal: '钢笔', spy: '中性笔' },
  { normal: '干洗机', spy: '甩干机' },
  { normal: '冠军', spy: '第一' },
  { normal: '哈密瓜', spy: '西瓜' },
  { normal: '金丝猴', spy: '大白兔(奶糖)' },
  { normal: '高跟鞋', spy: '增高鞋' },
  { normal: '汉堡包', spy: '肉夹馍' },
  { normal: '脚踏车', spy: '自行车' },
  { normal: '反弹琵琶', spy: '乱弹棉花' },
  { normal: '龙凤呈祥', spy: '鸳鸯戏水' },
  { normal: '端午节', spy: '中秋节' },
  { normal: '梁山伯与祝英台', spy: '罗密欧与朱丽叶' },
  { normal: '楼梯', spy: '电梯' },
  { normal: '脸盆', spy: '水桶' },
  { normal: '鹅毛', spy: '鸡毛' },
  { normal: '鸡蛋', spy: '鸭蛋' },
  { normal: '皇帝', spy: '太子' },
  { normal: '饺子', spy: '包子' },
  { normal: '妈妈', spy: '娘' },
  { normal: '绿茶', spy: '苦茶' },
  { normal: '吉他', spy: '琵琶' },
  { normal: '盒子', spy: '箱子' },
  { normal: '辣椒', spy: '芥末' },
  { normal: '蝴蝶', spy: '飞蛾' },
  { normal: '卷发', spy: '直发' },
  { normal: '玻璃', spy: '镜子' },
  { normal: '纸巾', spy: '湿巾' },
  { normal: '晨光', spy: '真彩' },
  { normal: '电脑', spy: 'ipad' },
  { normal: '白菜', spy: '生菜' },
  { normal: '包子', spy: '饺子' },
  { normal: '被子', spy: '床单' },
  { normal: '风扇', spy: '空调' },
  { normal: '饼干', spy: '薯片' },
  { normal: '玫瑰', spy: '月季' },
  { normal: '董永', spy: '许仙' },
  { normal: '若曦', spy: '晴川' },
  { normal: '孟非', spy: '乐嘉' },
  { normal: '牛奶', spy: '豆浆' },
  { normal: '保安', spy: '保镖' },
  { normal: '金庸', spy: '古龙' },
  { normal: '动物', spy: '植物' },
  { normal: '豆浆', spy: '牛奶' },
  { normal: '新年', spy: '跨年' },
  { normal: '剩女', spy: '御姐' },
  { normal: '赵敏', spy: '黄蓉' },
  { normal: '谢娜', spy: '李湘' },
  { normal: '步步惊心', spy: '宫锁心玉' },
  { normal: '包子', spy: '水饺' },
  { normal: '汤圆', spy: '丸子' },
  { normal: '沐浴露', spy: '护肤水' },
  { normal: '夏家三千金', spy: '爱情睡醒了' },
  { normal: '江南style', spy: '最炫民族风' },
  { normal: '谢娜张杰', spy: '邓超孙俪' },
  { normal: '福尔摩斯', spy: '工藤新' },
  { normal: '金丝猴', spy: '大白兔（奶糖）' },
  { normal: '麻雀', spy: '乌鸦' },
  { normal: '眉毛', spy: '胡须' },
  { normal: '状元', spy: '冠军' },
  { normal: '螺蛳粉', spy: '臭豆腐' },
  { normal: '买一送一', spy: '再来一瓶' },
  { normal: '口罩', spy: '面具' },
  { normal: '宝可梦', spy: '数码宝贝' },
  { normal: '第五人格', spy: '堡垒之夜' },
  { normal: '荒野行动', spy: '绝地求生' },
  { normal: '魂斗罗', spy: '马里奥' },
  { normal: '甄嬛传', spy: '芈月传' },
  { normal: '老友记', spy: '武林外传' },
  { normal: '摩托车', spy: '电动车' },
  { normal: '熏衣草', spy: '满天星' },
  { normal: '王菲', spy: '那英' },
  { normal: '元芳', spy: '展昭' },
  { normal: '何炅', spy: '维嘉' },
  { normal: '班主任', spy: '班长' },
  { normal: '餐巾纸', spy: '湿巾' },
  { normal: '电风扇', spy: '空调' },
  { normal: '福尔摩斯', spy: '柯南' },
  { normal: '麻婆豆腐', spy: '皮蛋豆' },
  { normal: '积累', spy: '积存' },
  { normal: '镜子', spy: '玻璃' },
  { normal: '玉米', spy: '小米' },
  { normal: '反射', spy: '折射' },
  { normal: '穿衣', spy: '试衣' },
  { normal: '梦境', spy: '幻想' },
  { normal: '推销', spy: '销售' },
  { normal: '淘宝', spy: '拍拍' },
  { normal: '盒饭', spy: '外卖' },
  { normal: '叉烧包', spy: '灌汤包' },
  { normal: '散热器', spy: '电风扇' },
  { normal: '伐木工', spy: '木匠工' },
  { normal: '点烟器', spy: '打火机' },
  { normal: '热的快', spy: '热水器' },
  { normal: '榨菜丝', spy: '萝卜头' },
  { normal: '老朋友', spy: '老男孩' },
  { normal: '干洗机', spy: '甩干机' },
  { normal: '春节', spy: '元旦' },
  { normal: '圣诞节', spy: '平安夜' },
  { normal: '儿童节', spy: '青年节' },
  { normal: '妇女节', spy: '教师节' },
  { normal: '母亲节', spy: '情人节' },
  { normal: '复活节', spy: '万圣节' },
  { normal: '重阳节', spy: '中秋节' },
  { normal: '爱慕', spy: '喜爱' },
  { normal: '安然', spy: '安稳' },
  { normal: '解释', spy: '讲解' },
  { normal: '遨游', spy: '游览' },
  { normal: '奥秘', spy: '神秘' },
  { normal: '决心', spy: '决定' },
  { normal: '懊悔', spy: '后悔' },
  { normal: '偶然', spy: '偶尔' },
  { normal: '森马', spy: '以纯' },
  { normal: '香港', spy: '台湾' },
  { normal: '太监', spy: '人妖' },
  { normal: '那英', spy: '韩红' },
  { normal: '老佛爷', spy: '老天爷' },
  { normal: '郭德纲', spy: '周立波' },
  { normal: '张韶涵', spy: '王心凌' },
  { normal: '刘诗诗', spy: '刘亦菲' },
  { normal: '甄子丹', spy: '李连杰' },
  { normal: '包青天', spy: '狄仁杰' },
  { normal: '纠正', spy: '改正' },
  { normal: '成吉思汗', spy: '努尔哈赤' },
  { normal: '何炅', spy: '李维嘉' },
  { normal: '菠萝蜜', spy: '榴莲' },
  { normal: '老佛爷', spy: '老天爷' },
  { normal: '魔术师', spy: '魔法师' },
  { normal: '鸭舌帽', spy: '遮阳帽' },
  { normal: '双胞胎', spy: '龙凤胎' },
  { normal: '情人节', spy: '光棍节' },
  { normal: '丑小鸭', spy: '灰姑娘' },
  { normal: '土豆粉', spy: '酸辣粉' },
  { normal: '蜘蛛侠', spy: '蝙蝠侠' },
  { normal: '口香糖', spy: '木糖醇' },
  { normal: '酸菜鱼', spy: '水煮鱼' },
  { normal: '小笼包', spy: '灌汤包' },
  { normal: '薰衣草', spy: '满天星' },
  { normal: '富二代', spy: '高富帅' },
  { normal: '生活费', spy: '零花钱' },
  { normal: '麦克风', spy: '扩音器' },
  { normal: '郭德纲', spy: '周立波' },
  { normal: '图书馆', spy: '图书店' },
  { normal: '男朋友', spy: '前男友' },
  { normal: '洗衣粉', spy: '皂角粉' },
  { normal: '牛肉干', spy: '猪肉脯' },
  { normal: '泡泡糖', spy: '棒棒糖' },
  { normal: '小沈阳', spy: '宋小宝' },
  { normal: '张韶涵', spy: '王心凌' },
  { normal: '刘诗诗', spy: '刘亦菲' },
  { normal: '甄嬛传', spy: '红楼梦' },
  { normal: '甄子丹', spy: '李连杰' },
  { normal: '包青天', spy: '狄仁杰' },
  { normal: '大白兔', spy: '金丝猴' },
  { normal: '果粒橙', spy: '鲜橙多' },
  { normal: '洗发露', spy: '护发素' },
  { normal: '自行车', spy: '电动车' },
  { normal: '班主任', spy: '辅导员' },
  { normal: '过山车', spy: '碰碰车' },
  { normal: '铁观音', spy: '碧螺春' },
  { normal: '丑小鸭', spy: '灰姑娘' },
  { normal: '十面埋伏', spy: '四面楚歌' },
  { normal: '成吉思汗', spy: '努尔哈赤' },
  { normal: '谢娜张杰', spy: '邓超孙俪' },
  { normal: '福尔摩斯', spy: '工藤新一' },
  { normal: '贵妃醉酒', spy: '黛玉葬花' },
  { normal: '流星花园', spy: '花样男子' },
  { normal: '神雕侠侣', spy: '天龙八部' },
  { normal: '天天向上', spy: '非诚勿扰' },
  { normal: '勇往直前', spy: '全力以赴' },
  { normal: '白菜', spy: '生菜' },
  { normal: '包子', spy: '饺子' },
  { normal: '被子', spy: '床单' },
  { normal: '壁纸', spy: '贴画' },
  { normal: '风扇', spy: '空调' },
  { normal: '饼干', spy: '薯片' },
  { normal: '玻璃', spy: '镜子' },
  { normal: '纸巾', spy: '湿巾' },
  { normal: '晨光', spy: '真彩' },
  { normal: '橙子', spy: '橘子' },
  { normal: '唇膏', spy: '口红' },
  { normal: '电脑', spy: 'ipad' },
  { normal: '动物', spy: '植物' },
  { normal: '豆浆', spy: '牛奶' },
  { normal: '新年', spy: '跨年' },
  { normal: '吉他', spy: '琵琶' },
  { normal: '公交', spy: '地铁' },
  { normal: '剩女', spy: '御姐' },
  { normal: '玫瑰', spy: '月季' },
  { normal: '董永', spy: '许仙' },
  { normal: '若曦', spy: '晴川' },
  { normal: '谢娜', spy: '李湘' },
  { normal: '孟非', spy: '乐嘉' },
  { normal: '牛奶', spy: '豆浆' },
  { normal: '保安', spy: '保镖' },
  { normal: '白菜', spy: '生菜' },
  { normal: '辣椒', spy: '芥末' },
  { normal: '金庸', spy: '古龙' },
  { normal: '赵敏', spy: '黄蓉' },
  { normal: '海豚', spy: '海狮' },
  { normal: '水盆', spy: '水桶' },
  { normal: '唇膏', spy: '口红' },
  { normal: '森马', spy: '以纯' },
  { normal: '烤肉', spy: '涮肉' },
  { normal: '气泡', spy: '水泡' },
  { normal: '纸巾', spy: '手帕' },
  { normal: '杭州', spy: '苏州' },
  { normal: '香港', spy: '台湾' },
  { normal: '首尔', spy: '东京' },
  { normal: '橙子', spy: '橘子' },
  { normal: '葡萄', spy: '提子' },
  { normal: '太监', spy: '人妖' },
  { normal: '蝴蝶', spy: '蜜蜂' },
  { normal: '小品', spy: '话剧' },
  { normal: '裸婚', spy: '闪婚' },
  { normal: '胡子', spy: '眉毛' },
  { normal: '童话', spy: '神话' },
  { normal: '作家', spy: '编剧' },
  { normal: '警察', spy: '捕快' },
  { normal: '结婚', spy: '订婚' },
  { normal: '奖牌', spy: '金牌' },
  { normal: '孟飞', spy: '乐嘉' },
  { normal: '那英', spy: '韩红' },
  { normal: '面包', spy: '蛋糕' },
  { normal: '作文', spy: '论文' },
  { normal: '油条', spy: '麻花' },
  { normal: '壁纸', spy: '贴画' },
  { normal: '枕头', spy: '抱枕' },
  { normal: '手机', spy: '座机' },
  { normal: '同学', spy: '同桌' },
  { normal: '婚纱', spy: '喜服' },
  { normal: '麻雀', spy: '乌鸦' },
  { normal: '玫瑰', spy: '月季' },
  { normal: '海豹', spy: '海狮' },
  { normal: '鲸鱼', spy: '鲨鱼' },
  { normal: '老虎', spy: '狮子' },
  { normal: '蝴蝶', spy: '蜜蜂' },
  { normal: '鹦鹉', spy: '鸽子' },
  { normal: '哈士奇', spy: '吉娃娃' },
  { normal: '大胸猫', spy: '小熊猫' },
  { normal: '大白兔', spy: '金丝猴' },
  { normal: '饺子', spy: '包子' },
  { normal: '烤肉', spy: '涮肉' },
  { normal: '牛奶', spy: '豆浆' },
  { normal: '白菜', spy: '生菜' },
  { normal: '辣椒', spy: '芥末' },
  { normal: '面包', spy: '蛋糕' },
  { normal: '油条', spy: '麻花' },
  { normal: '葡萄', spy: '提子' },
  { normal: '橙子', spy: '橘子' },
  { normal: '雪糕', spy: '冰棍' },
  { normal: '汉堡包', spy: '肉夹馍' },
  { normal: '土豆粉', spy: '酸辣粉' },
  { normal: '酸菜鱼', spy: '水煮鱼' },
  { normal: '泡泡糖', spy: '口香糖' },
  { normal: '牛肉干', spy: '猪肉脯' },
  { normal: '小笼包', spy: '灌汤包' },
  { normal: '果粒橙', spy: '鲜橙多' },
  { normal: '鱼香肉丝', spy: '四喜丸子' },
  { normal: '气泡', spy: '水泡' },
  { normal: '唇膏', spy: '口红' },
  { normal: '水盆', spy: '水桶' },
  { normal: '纸巾', spy: '手帕' },
  { normal: '吉他', spy: '琵琶' },
  { normal: '公交', spy: '地铁' },
  { normal: '奖牌', spy: '金牌' },
  { normal: '作文', spy: '论文' },
  { normal: '壁纸', spy: '贴画' },
  { normal: '枕头', spy: '抱枕' },
  { normal: '手机', spy: '座机' },
  { normal: '婚纱', spy: '喜服' },
  { normal: '摩托车', spy: '电动车' },
  { normal: '高跟鞋', spy: '增高鞋' },
  { normal: '鸭舌帽', spy: '遮阳帽' },
  { normal: '麦克风', spy: '扩音器' },
  { normal: '洗衣粉', spy: '皂角粉' },
  { normal: '洗发露', spy: '护发素' },
  { normal: '自行车', spy: '电动车' },
  { normal: '过山车', spy: '碰碰车' },
  { normal: '近视眼镜', spy: '隐形眼镜' },
  { normal: '杭州', spy: '苏州' },
  { normal: '香港', spy: '台湾' },
  { normal: '首尔', spy: '东京' },
  { normal: '乐山', spy: '佛山' },
  { normal: '北京', spy: '上海' },
  { normal: '泰山', spy: '衡山' },
  { normal: '天山', spy: '珠峰' },
  { normal: '内蒙古', spy: '黑龙江' },
  { normal: '江苏省', spy: '安徽省' },
  { normal: '青藏高原', spy: '黄土高原' },
  { normal: '黄河流域', spy: '长江流域' },
  { normal: '横断山脉', spy: '长白山脉' },
  { normal: '新年', spy: '跨年' },
  { normal: '春节', spy: '元旦' },
  { normal: '圣诞节', spy: '平安夜' },
  { normal: '儿童节', spy: '青年节' },
  { normal: '妇女节', spy: '教师节' },
  { normal: '端午节', spy: '清明节' },
  { normal: '母亲节', spy: '情人节' },
  { normal: '复活节', spy: '万圣节' },
  { normal: '重阳节', spy: '中秋节' },
  { normal: '情人节', spy: '光棍节' },
  { normal: '节节高升', spy: '票房大卖' },
  { normal: '反弹琵琶', spy: '乱弹棉花' },
  { normal: '十面埋伏', spy: '四面楚歌' },
  { normal: '五光十色', spy: '五颜六色' },
  { normal: '贵妃醉酒', spy: '黛玉葬花' },
  { normal: '流星花园', spy: '花样男子' },
  { normal: '神雕侠侣', spy: '天龙八部' },
  { normal: '天天向上', spy: '非诚勿扰' },
  { normal: '勇往直前', spy: '全力以赴' },
  { normal: '语无伦次', spy: '词不达意' },
  { normal: '鼠目寸光', spy: '井底之蛙' },
  { normal: '美人心计', spy: '倾世皇妃' },
  { normal: '懊悔', spy: '后悔' },
  { normal: '偶然', spy: '偶尔' },
  { normal: '聚拢', spy: '聚集' },
  { normal: '爱护', spy: '爱惜' },
  { normal: '遨游', spy: '漫游' },
  { normal: '机灵', spy: '机敏' },
  { normal: '安心', spy: '静心' },
  { normal: '奥秘', spy: '奥妙' },
  { normal: '俊俏', spy: '漂亮' },
  { normal: '偶尔', spy: '间或' },
  { normal: '安慰', spy: '宽慰' },
  { normal: '纠正', spy: '改正' },
  { normal: '安慰', spy: '抚慰' },
  { normal: '壮美', spy: '壮丽' },
  { normal: '秀丽', spy: '秀美' },
  { normal: '著名', spy: '闻名' },
  { normal: '专心', spy: '认真' },
  { normal: '美丽', spy: '漂亮' },
  { normal: '好像', spy: '仿佛' },
  { normal: '勤劳', spy: '勤快' },
  { normal: '仔细', spy: '认真' },
  { normal: '神奇', spy: '奇特' },
  { normal: '告别', spy: '离别' },
  { normal: '秀丽', spy: '美丽' },
  { normal: '告别', spy: '离别' },
  { normal: '幽径', spy: '僻径' },
  { normal: '唱和', spy: '应和' },
  { normal: '吟诵', spy: '吟咏' },
  { normal: '陡峭', spy: '峻峭' },
  { normal: '津津乐道', spy: '侃侃而谈' },
  { normal: '轻盈', spy: '轻快' },
  { normal: '欢悦', spy: '喜悦' },
  { normal: '蕴含', spy: '蕴藏' },
  { normal: '奥秘', spy: '奥妙' },
  { normal: '静谧', spy: '宁静' },
  { normal: '俏丽', spy: '美丽' },
  { normal: '探索', spy: '探寻' },
  { normal: '勤勉', spy: '勤劳' },
  { normal: '猜测', spy: '推测' },
  { normal: '才干', spy: '才能' },
  { normal: '采用', spy: '采纳' },
  { normal: '诧异', spy: '惊诧' },
  { normal: '颤动', spy: '抖动' },
  { normal: '沉浸', spy: '沉醉' },
  { normal: '惩罚', spy: '惩处' },
  { normal: '迟延', spy: '拖延' },
  { normal: '勉励', spy: '鼓励' },
  { normal: '勉强', spy: '牵强' },
  { normal: '藐视', spy: '轻视' },
  { normal: '泯灭', spy: '消灭' },
  { normal: '明丽', spy: '明媚' },
  { normal: '明艳', spy: '鲜艳' },
  { normal: '摹仿', spy: '模仿' },
  { normal: '蓦地', spy: '突然' },
  { normal: '模范', spy: '榜样' },
  { normal: '鸟瞰', spy: '俯视' },
  { normal: '凝结', spy: '凝聚' },
  { normal: '凝视', spy: '注视' },
  { normal: '挪移', spy: '移动' },
  { normal: '偶尔', spy: '间或' },
  { normal: '判断', spy: '推断' },
  { normal: '批评', spy: '批判' },
  { normal: '疲惫', spy: '疲乏' },
  { normal: '僻静', spy: '偏僻' },
  { normal: '漂亮', spy: '美丽' },
  { normal: '飘荡', spy: '漂浮' },
  { normal: '飘拂', spy: '漂动' },
  { normal: '品格', spy: '品行' },
  { normal: '平生', spy: '终生' },
  { normal: '平庸', spy: '平凡' }
    ],
    currentWords: { normal: '', spy: '' },
    playerWords: {},
    gameStarted: false
};

// 生成随机房间代码
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// 从本地存储加载游戏状态
function loadGameState() {
    const savedState = localStorage.getItem('whoIsSpyGame');
    if (savedState) {
        const loadedState = JSON.parse(savedState);
        // 保留预设词库和头像列表
        loadedState.wordPairs = gameState.wordPairs;
        loadedState.avatars = gameState.avatars;
        Object.assign(gameState, loadedState);
    }
}

// 保存游戏状态到本地存储
function saveGameState() {
    localStorage.setItem('whoIsSpyGame', JSON.stringify(gameState));
}

// 显示指定 section，隐藏其他
function showSection(sectionId) {
    document.querySelectorAll('div[id$="-section"]').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// 初始化页面
function init() {
    loadGameState();
    
    // 清除缓存按钮
    document.getElementById('clear-storage').addEventListener('click', () => {
        localStorage.removeItem('whoIsSpyGame');
        alert('缓存已清除，请刷新页面');
    });
    
    // 房间创建/加入按钮
    document.getElementById('join-button').addEventListener('click', () => {
        let roomCode = document.getElementById('room-code').value.trim();
        const playerName = document.getElementById('player-name').value.trim();
        
        if (!playerName) {
            alert('请输入玩家名称');
            return;
        }
        
        // 从URL获取房间代码
        const urlRoomCode = getRoomCodeFromUrl();
        if (urlRoomCode) {
            roomCode = urlRoomCode;
        }
        
        if (!roomCode) {
            // 创建新房间
            gameState.roomCode = generateRoomCode();
            gameState.playerName = playerName;
            gameState.isHost = true;
            // 为房主分配随机头像
            const randomAvatar = gameState.avatars[Math.floor(Math.random() * gameState.avatars.length)];
            gameState.players = [{ name: playerName, isHost: true, avatar: randomAvatar }];
            gameState.gameStarted = false;
            gameState.currentWords = { normal: '', spy: '' };
            gameState.playerWords = {};
            
            saveGameState();
            showSection('game-prep-section');
            updateRoomPlayerList();
            generateQRCode();
        } else {
            // 加入房间
            gameState.roomCode = roomCode;
            gameState.playerName = playerName;
            gameState.isHost = false;
            
            // 这里简化处理，实际应该从服务器获取房间信息
            // 这里只是模拟加入
            // 确保头像不重复
            const availableAvatars = [...gameState.avatars];
            const hostAvatar = availableAvatars.splice(Math.floor(Math.random() * availableAvatars.length), 1)[0];
            const randomAvatar = availableAvatars.splice(Math.floor(Math.random() * availableAvatars.length), 1)[0];
            
            gameState.players = [
                { name: '房主', isHost: true, avatar: hostAvatar },
                { name: playerName, isHost: false, avatar: randomAvatar }
            ];
            saveGameState();
            showSection('game-section');
            updatePlayerList();
            // 模拟获取词语
            document.getElementById('player-word').textContent = '苹果';
        }
    });
    
    // 开始游戏按钮
    document.getElementById('start-game').addEventListener('click', () => {
        const playerCount = parseInt(document.getElementById('player-count').value);
        
        if (gameState.wordPairs.length === 0) {
            alert('词库为空');
            return;
        }
        
        // 随机选择词语对
        const randomIndex = Math.floor(Math.random() * gameState.wordPairs.length);
        gameState.currentWords = gameState.wordPairs[randomIndex];
        
        // 分配词语和头像
        gameState.playerWords = {};
        const spyIndex = Math.floor(Math.random() * playerCount);
        
        // 为所有玩家分配头像（不重复）
        gameState.players = [];
        // 复制头像列表
        const availableAvatars = [...gameState.avatars];
        
        for (let i = 0; i < playerCount; i++) {
            const playerName = i === 0 ? gameState.playerName : `玩家${i+1}`;
            // 随机选择头像并从可用列表中移除
            const randomIndex = Math.floor(Math.random() * availableAvatars.length);
            const selectedAvatar = availableAvatars.splice(randomIndex, 1)[0];
            
            gameState.players.push({
                name: playerName,
                isHost: i === 0,
                avatar: selectedAvatar
            });
            gameState.playerWords[playerName] = i === spyIndex ? gameState.currentWords.spy : gameState.currentWords.normal;
        }
        
        gameState.gameStarted = true;
        saveGameState();
        showSection('game-section');
        updatePlayerList();
        document.getElementById('player-word').textContent = gameState.playerWords[gameState.playerName];
        
        // 显示房主控制
        if (gameState.isHost) {
            document.getElementById('host-controls').classList.remove('hidden');
        }
    });
    
    // 更换词语按钮 - 检查元素是否存在
    const changeWordButton = document.getElementById('change-word');
    if (changeWordButton) {
        changeWordButton.addEventListener('click', () => {
            console.log('更换词语按钮被点击');
            console.log('词库长度:', gameState.wordPairs.length);
            console.log('当前玩家词语:', gameState.playerWords);
            
            if (gameState.wordPairs.length > 0) {
                const randomIndex = Math.floor(Math.random() * gameState.wordPairs.length);
                gameState.currentWords = gameState.wordPairs[randomIndex];
                console.log('新词语对:', gameState.currentWords);
                
                // 重新分配词语
                const playerCount = Object.keys(gameState.playerWords).length;
                console.log('玩家数量:', playerCount);
                
                if (playerCount > 0) {
                    const spyIndex = Math.floor(Math.random() * playerCount);
                    console.log('卧底索引:', spyIndex);
                    
                    let i = 0;
                    for (const playerName in gameState.playerWords) {
                        gameState.playerWords[playerName] = i === spyIndex ? gameState.currentWords.spy : gameState.currentWords.normal;
                        console.log(`${playerName}的新词语:`, gameState.playerWords[playerName]);
                        i++;
                    }
                    
                    saveGameState();
                    const playerWordElement = document.getElementById('player-word');
                    if (playerWordElement) {
                        playerWordElement.textContent = gameState.playerWords[gameState.playerName];
                        console.log('房主新词语:', gameState.playerWords[gameState.playerName]);
                    }
                    alert('词语已更换');
                } else {
                    console.log('没有玩家，无法分配词语');
                    alert('没有玩家，无法更换词语');
                }
            } else {
                console.log('词库为空');
                alert('词库为空，无法更换词语');
            }
        });
    } else {
        console.log('更换词语按钮不存在');
    }
    
    // 退出房间按钮 - 检查元素是否存在
    const exitRoomButton = document.getElementById('exit-room');
    if (exitRoomButton) {
        exitRoomButton.addEventListener('click', () => {
            console.log('退出房间按钮被点击');
            
            // 删除缓存
            localStorage.removeItem('whoIsSpyGame');
            console.log('缓存已删除');
            
            // 重置游戏状态
            gameState.roomCode = '';
            gameState.playerName = '';
            gameState.isHost = false;
            gameState.players = [];
            gameState.currentWords = { normal: '', spy: '' };
            gameState.playerWords = {};
            gameState.gameStarted = false;
            
            // 跳转到房间创建/加入页面
            showSection('room-section');
            alert('已退出房间');
        });
    } else {
        console.log('退出房间按钮不存在');
    }
}

// 更新房间成员列表
function updateRoomPlayerList() {
    const playerList = document.getElementById('room-player-list');
    playerList.innerHTML = '';
    
    gameState.players.forEach(player => {
        const li = document.createElement('li');
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'player-avatar';
        avatarDiv.style.backgroundImage = `url(${player.avatar})`;
        li.appendChild(avatarDiv);
        const nameSpan = document.createElement('div');
        nameSpan.textContent = player.name + (player.isHost ? ' (房主)' : '');
        li.appendChild(nameSpan);
        playerList.appendChild(li);
    });
}

// 更新玩家列表
function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    
    gameState.players.forEach(player => {
        const li = document.createElement('li');
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'player-avatar';
        avatarDiv.style.backgroundImage = `url(${player.avatar})`;
        
        // 为房主添加点击事件
        if (gameState.isHost) {
            avatarDiv.style.cursor = 'pointer';
            avatarDiv.addEventListener('click', () => {
                const playerWord = gameState.playerWords[player.name];
                const isSpy = playerWord === gameState.currentWords.spy;
                alert(`${player.name}的词语是：${playerWord}\n${isSpy ? '他是卧底！' : '他不是卧底'}`);
            });
        }
        
        li.appendChild(avatarDiv);
        const nameSpan = document.createElement('div');
        nameSpan.textContent = player.name + (player.isHost ? ' (房主)' : '');
        li.appendChild(nameSpan);
        playerList.appendChild(li);
    });
}

// 初始化应用
init();