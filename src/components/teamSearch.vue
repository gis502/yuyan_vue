<template>
  <div class="team-search-container">
    <!-- 标题区域 -->
    <div class="title">
      <div class="title-content">
        <span class="title-span">机制队伍<span class="title-blue">查询</span></span>
      </div>
    </div>

    <!-- 搜索框区域 -->
    <div class="search-box-container">
      <el-input
        v-model="searchKey"
        placeholder="请输入单位名称关键词搜索..."
        class="search-input"
        @input="handleSearch"
        clearable
        prefix-icon="el-icon-search"
      />
    </div>

    <!-- 队伍列表显示区域 -->
    <div class="team-list-container">
      <!-- 搜索结果显示（静态） -->
      <div v-if="searchKey && searchResult.length > 0" class="search-result">
        <div class="result-header">
          <span>搜索结果（共 {{ searchResult.length }} 条）</span>
        </div>
        <div class="result-content">
          <div 
            class="team-item" 
            v-for="(item, index) in searchResult" 
            :key="index"
          >
            <span class="team-name">{{ item.name }}</span>
            <span class="team-region">{{ item.region }}</span>
          </div>
        </div>
      </div>

      <!-- 无搜索结果提示 -->
      <div v-if="searchKey && searchResult.length === 0" class="no-result">
        <el-empty description="暂无匹配的队伍信息" />
      </div>

      <!-- 动态滚动列表（搜索框为空时显示） -->
      <div v-else class="scroll-list">
        <div 
          class="team-item" 
          v-for="(item, index) in allTeams" 
          :key="index"
        >
          <span class="team-name">{{ item.name }}</span>
          <span class="team-region">{{ item.region }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { ElInput, ElEmpty } from 'element-plus';

// 定义所有队伍数据（按行政区划整理，包含单位名称和所属地区）
const allTeams = ref([
  // 北京
  { name: '北京飞马航遥科技有限公司', region: '北京' },
  { name: '北京神州数码有限公司', region: '北京' },
  { name: '北京未来智能科技有限公司', region: '北京' },
  { name: '北京中科浩电科技有限公司', region: '北京' },
  { name: '北京蓝天飞扬科技有限公司', region: '北京' },
  { name: '北京东进航空科技股份有限公司', region: '北京' },
  { name: '华盈信通技术有限公司', region: '北京' },
  { name: '航天宏图信息技术股份有限公司', region: '北京' },
  { name: '北京根越科技有限公司', region: '北京' },
  { name: '北京凌空远航科技有限公司', region: '北京' },
  { name: '北京云圣智能科技有限公司', region: '北京' },
  { name: '北京京东乾石科技有限公司', region: '北京' },
  { name: '北京帝信科技有限公司', region: '北京' },
  { name: '北京捷翔天地信息技术有限公司', region: '北京' },
  { name: '中测新图（北京）遥感技术有限责任公司', region: '北京' },
  { name: '中建材信息技术股份有限公司', region: '北京' },

  // 天津
  { name: '天津津准工程勘测有限公司', region: '天津' },
  { name: '天津众恒地信科技有限公司', region: '天津' },
  { name: '中水北方勘测设计研究有限责任公司', region: '天津' },

  // 河北
  { name: '河北福诺航空科技股份有限公司', region: '河北' },
  { name: '河北零佰科技有限公司', region: '河北' },
  { name: '河北惠得低空科技发展有限公司', region: '河北' },
  { name: '河北风航无人机科技有限公司', region: '河北' },
  { name: '石家庄铁路职业技术学院', region: '河北' },
  { name: '中国地质调查局廊坊自然资源综合调查中心', region: '河北' },

  // 山西
  { name: '山西火鸟航空科技有限公司', region: '山西' },
  { name: '山西翼锦未来科技有限责任公司', region: '山西' },
  { name: '山西元图测绘有限公司', region: '山西' },
  { name: '山西昊天视界航空科技有限公司', region: '山西' },
  { name: '山西如虹盛达科技股份有限公司', region: '山西' },
  { name: '山西文达通信息技术有限公司', region: '山西' },

  // 内蒙古
  { name: '呼和浩特市富迈商贸有限责任公司', region: '内蒙古' },
  { name: '呼伦贝尔市楠木科技发展有限公司', region: '内蒙古' },
  { name: '内蒙古云航智能设备有限公司', region: '内蒙古' },
  { name: '内蒙古国讯富通科技有限公司', region: '内蒙古' },

  // 辽宁
  { name: '辽宁省化工地质勘查院有限责任公司', region: '辽宁' },
  { name: '辽宁众云图测绘科技有限公司', region: '辽宁' },
  { name: '辽宁川云智能科技集团有限公司', region: '辽宁' },
  { name: '鞍钢工程技术勘测设计研究院（鞍山）有限公司', region: '辽宁' },
  { name: '沈阳九州飞翔科技有限公司', region: '辽宁' },

  // 吉林
  { name: '吉林市测绘院', region: '吉林' },
  { name: '吉林省元吉土地勘测规划设计有限公司', region: '吉林' },
  { name: '吉林云信空间科技有限公司', region: '吉林' },
  { name: '敦化市城乡规划设计院', region: '吉林' },
  { name: '前郭县远大测绘有限公司', region: '吉林' },

  // 黑龙江
  { name: '黑龙江精臻科技发展有限公司', region: '黑龙江' },
  { name: '黑龙江几何测绘地理信息有限公司', region: '黑龙江' },
  { name: '黑龙江省第六地质勘查院', region: '黑龙江' },
  { name: '黑龙江齐伦瀚科技有限公司', region: '黑龙江' },
  { name: '哈尔滨市国土资源勘测规划院', region: '黑龙江' },
  { name: '东北工程技术学校', region: '黑龙江' },
  { name: '黑龙江省地质测绘地理信息院', region: '黑龙江' },
  { name: '黑龙江省第五地质勘查院', region: '黑龙江' },
  { name: '黑龙江省第九地质勘查院', region: '黑龙江' },
  { name: '黑龙江省物探测量勘查院', region: '黑龙江' },
  { name: '黑龙江省自然资源调查院', region: '黑龙江' },

  // 上海
  { name: '上海畅突智能科技有限公司', region: '上海' },
  { name: '必胜航空科技集团有限公司', region: '上海' },
  { name: '上海锋则航空科技有限公司', region: '上海' },
  { name: '上海翰萨智能科技有限公司', region: '上海' },
  { name: '上海双瀛航空科技有限公司', region: '上海' },
  { name: '上海华测导航技术股份有限公司', region: '上海' },

  // 江苏
  { name: '江苏丰东信息科技有限公司', region: '江苏' },
  { name: '江苏嗨森网络科技有限公司', region: '江苏' },
  { name: '南京渊湛信息科技有限公司', region: '江苏' },
  { name: '泰州鸿鹄信息科技有限公司', region: '江苏' },
  { name: '苏州游鹰无人机技术有限公司', region: '江苏' },
  { name: '南通亿思特机器人科技有限公司', region: '江苏' },
  { name: '华软科技股份有限公司', region: '江苏' },
  { name: '宿迁智在疆宇航空科技有限公司', region: '江苏' },
  { name: '南京青年蓝天救援队', region: '江苏' },
  { name: '淮安云翼无人机科技有限公司', region: '江苏' },
  { name: '江苏佰易信息科技有限公司', region: '江苏' },
  { name: '常州市赛思网络科技有限公司', region: '江苏' },
  { name: '江苏飞睿得科技有限公司', region: '江苏' },
  { name: '江苏三益航空发展有限公司', region: '江苏' },
  { name: '江苏嗨森无人机智能科技有限公司', region: '江苏' },
  { name: '南京大翼航空科技有限公司', region: '江苏' },
  { name: '南京模幻天空航空科技有限公司', region: '江苏' },
  { name: '苏州嗨森无人机科技有限公司', region: '江苏' },
  { name: '小天无人机科技（盐城）有限公司', region: '江苏' },

  // 浙江
  { name: '浙江空时吾智能科技有限公司', region: '浙江' },
  { name: '浙江威航智能科技有限公司', region: '浙江' },
  { name: '浙江天拓航空科技有限公司', region: '浙江' },
  { name: '浙江守正数智空间技术有限公司', region: '浙江' },
  { name: '杭州明智时空科技有限公司', region: '浙江' },
  { name: '安邦通航智能科技（衢州）有限公司', region: '浙江' },
  { name: '嘉兴天旭航空技术有限公司', region: '浙江' },
  { name: '杭州时尚科技有限公司', region: '浙江' },
  { name: '浙江点创信息科技有限公司', region: '浙江' },
  { name: '浙江科比特创新科技有限公司', region: '浙江' },

  // 安徽
  { name: '安徽北斗智航科技有限公司', region: '安徽' },
  { name: '安徽福海电子技术有限公司', region: '安徽' },
  { name: '安徽中测空间信息技术有限公司', region: '安徽' },

  // 福建
  { name: '福建拓佳天地信息科技有限公司', region: '福建' },
  { name: '福建省121地质大队', region: '福建' },
  { name: '福建省测绘院', region: '福建' },
  { name: '福建福莱航空科技有限公司', region: '福建' },
  { name: '硕威工程科技股份有限公司', region: '福建' },
  { name: '伟志股份公司', region: '福建' },

  // 江西
  { name: '江西省天安泰科技有限公司', region: '江西' },
  { name: '江西空中未来科技创新集团有限公司', region: '江西' },

  // 山东
  { name: '山东鹰视角智能科技有限公司', region: '山东' },
  { name: '东营竹蜻蜓智能科技有限公司', region: '山东' },
  { name: '东营市博时智能科技有限责任公司', region: '山东' },
  { name: '济南泓特商贸有限公司', region: '山东' },
  { name: '济南智航时空地理信息科技有限公司', region: '山东' },
  { name: '烟台云都海鹰无人机应用技术有限公司', region: '山东' },
  { name: '山东科享云信息科技有限公司', region: '山东' },
  { name: '山东省鲁南地质工程勘察院（山东省地勘局第二地质大队）', region: '山东' },
  { name: '山东省地质测绘院', region: '山东' },

  // 河南
  { name: '河南顺优通实业有限公司', region: '河南' },
  { name: '河南省拓普北斗科技有限公司', region: '河南' },
  { name: '郑州飞米电子科技有限公司', region: '河南' },
  { name: '河南省地质局矿产资源勘查中心', region: '河南' },

  // 湖北
  { name: '武汉拓普新科无人机科技有限公司', region: '湖北' },
  { name: '武汉恒梵科技有限公司', region: '湖北' },
  { name: '武汉纵横天地空间信息技术有限公司', region: '湖北' },
  { name: '电鹰科技集团有限公司', region: '湖北' },
  { name: '武汉九州飞翔科技有限公司', region: '湖北' },
  { name: '武汉乐星图科技有限公司', region: '湖北' },
  { name: '普宙科技有限公司', region: '湖北' },
  { name: '中冶武勘工程技术有限公司', region: '湖北' },

  // 湖南
  { name: '湖南省自由飞电子科技有限公司', region: '湖南' },
  { name: '湖南中电金骏科技集团有限公司', region: '湖南' },
  { name: '岳阳云端通讯有限公司', region: '湖南' },
  { name: '长沙市岳麓区蓝天应急救援队', region: '湖南' },
  { name: '长沙群力测绘科技有限公司', region: '湖南' },
  { name: '湖南林科达信息科技有限公司', region: '湖南' },
  { name: '湖南省皓宇电子科技有限公司', region: '湖南' },

  // 广东
  { name: '广东诚进科技股份有限公司', region: '广东' },
  { name: '广东睿旗地理信息技术有限公司', region: '广东' },
  { name: '汕头市新飞龙航空科技有限公司', region: '广东' },
  { name: '珠海金华威科技数码有限公司', region: '广东' },
  { name: '广州市天河区成至无人机应急救援中心', region: '广东' },
  { name: '深圳市天空领域实业发展有限公司', region: '广东' },
  { name: '深圳市鹏锦科技有限公司', region: '广东' },
  { name: '深圳市翼志博科技有限公司', region: '广东' },
  { name: '深圳头名科技有限公司', region: '广东' },
  { name: '深圳高度创新技术有限公司', region: '广东' },
  { name: '深圳市恒唯信科技有限公司', region: '广东' },
  { name: '梅州市晟邦科技有限公司', region: '广东' },
  { name: '广东省国土资源测绘院', region: '广东' },
  { name: '蓝疆创新（深圳）科技有限公司', region: '广东' },

  // 广西
  { name: '广西视像通安全技术服务有限公司', region: '广西' },
  { name: '广西能飞无人机科技有限公司', region: '广西' },
  { name: '广西大雄鹰科技有限公司', region: '广西' },

  // 海南
  { name: '海南展飞信息科技有限公司', region: '海南' },
  { name: '海南华诚测绘科技有限公司', region: '海南' },
  { name: '海南中农航服科技有限公司', region: '海南' },
  { name: '海南马斯克科技有限公司', region: '海南' },
  { name: '海南星飞帆科技有限公司', region: '海南' },

  // 重庆
  { name: '重庆同汇勘测规划有限公司', region: '重庆' },
  { name: '睿宇时空科技（重庆）股份有限公司', region: '重庆' },
  { name: '重庆万航星空信息技术有限公司', region: '重庆' },

  // 四川
  { name: '四川测绘地理信息局测绘技术服务中心', region: '四川' },
  { name: '四川省第二地质大队', region: '四川' },
  { name: '四川携恩数创科技有限责任公司', region: '四川' },
  { name: '四川星辰测绘仪器有限公司', region: '四川' },
  { name: '四川立巢航空科技有限公司', region: '四川' },
  { name: '成都威尔奇空间信息技术有限公司', region: '四川' },
  { name: '成都辰宇智航科技有限公司', region: '四川' },
  { name: '成都徕拓测绘工程有限公司', region: '四川' },
  { name: '自贡市水利电力勘测设计院有限公司', region: '四川' },
  { name: '成都特旺科技有限责任公司', region: '四川' },
  { name: '成都纵横自动化技术股份有限公司', region: '四川' },
  { name: '四川众智鸿图信息科技有限公司', region: '四川' },
  { name: '柒零叁信息科技有限公司', region: '四川' },

  // 贵州
  { name: '贵州天地通科技有限公司', region: '贵州' },
  { name: '贵州省有色金属和核工业地质勘查局五总队', region: '贵州' },
  { name: '贵州地矿一一三地质工程有限公司', region: '贵州' },
  { name: '贵州遥感科技有限公司', region: '贵州' },
  { name: '贵州星测科技有限公司', region: '贵州' },
  { name: '贵州点云测绘服务有限公司', region: '贵州' },
  { name: '贵州鑫疆基业科技有限责任公司', region: '贵州' },
  { name: '贵州云图瞰景地理信息技术有限公司', region: '贵州' },
  { name: '黔东南富源测绘有限公司', region: '贵州' },
  { name: '都匀市南方地理信息科技有限公司', region: '贵州' },
  { name: '黔西南州兴源水利电力勘察设计有限公司', region: '贵州' },
  { name: '兴义市点云测绘仪器有限公司', region: '贵州' },
  { name: '贵州省水利水电勘测设计研究院有限公司', region: '贵州' },

  // 云南
  { name: '寸度智慧空间科技（云南）有限公司', region: '云南' },
  { name: '云南振蓝信息科技有限公司', region: '云南' },
  { name: '云南近达信息技术有限公司', region: '云南' },
  { name: '云南省基础测绘技术中心', region: '云南' },
  { name: '云南新坐标智能技术有限公司', region: '云南' },
  { name: '临沧市水利水电勘测设计研究院有限公司', region: '云南' },
  { name: '昆明佳尼潮科技有限公司', region: '云南' },

  // 西藏
  { name: '西藏大学', region: '西藏' },
  { name: '西藏德众地理信息有限公司', region: '西藏' },
  { name: '西藏攀索实业有限公司', region: '西藏' },

  // 陕西
  { name: '蛐蛐（西安）科技有限公司', region: '陕西' },
  { name: '陕西凌越航空科技有限公司', region: '陕西' },
  { name: '陕西皇朝航空科技有限公司', region: '陕西' },
  { name: '陕西星辰时代科技发展有限公司', region: '陕西' },
  { name: '西安大地测绘股份有限公司', region: '陕西' },

  // 甘肃
  { name: '甘肃省地质矿产勘查开发局测绘勘查院', region: '甘肃' },
  { name: '甘肃煤田地质局庆阳资源勘查院', region: '甘肃' },
  { name: '甘肃汇智岚图信息科技有限责任公司', region: '甘肃' },
  { name: '甘肃省水利水电勘测设计研究院有限责任公司', region: '甘肃' },
  { name: '甘肃苍穹无人机应急救援服务中心', region: '甘肃' },
  { name: '甘肃启远智能科技有限责任公司', region: '甘肃' },
  { name: '武威市基础地理勘测技术服务中心', region: '甘肃' },
  { name: '张掖指南针测绘有限责任公司', region: '甘肃' },

  // 青海
  { name: '青海九零六工程勘察设计院有限责任公司', region: '青海' },
  { name: '青海智勘科技有限公司', region: '青海' },
  { name: '青海众飞电子科技有限公司', region: '青海' },
  { name: '青海省自然资源遥感中心', region: '青海' },
  { name: '青海省柴达木综合地质矿产勘查院（青海省盐湖地质调查院）', region: '青海' },
  { name: '青海省交通规划设计研究院有限公司', region: '青海' },
  { name: '青海有色测绘勘察院有限责任公司', region: '青海' },
  { name: '中国水利水电第四工程局有限公司', region: '青海' },
  { name: '青海华疆电子科技有限公司', region: '青海' },
  { name: '青海华谨信息技术有限公司', region: '青海' },

  // 宁夏
  { name: '银川天之源测绘仪器有限公司', region: '宁夏' },
  { name: '宁夏隆合科技有限公司', region: '宁夏' },
  { name: '宁夏天司创新科技有限公司', region: '宁夏' },

  // 新疆
  { name: '新疆疆海测绘科技有限公司', region: '新疆' },
  { name: '新疆国源测绘规划设计院有限公司', region: '新疆' },
  { name: '中国科学院新疆生态与地理研究所', region: '新疆' },
  { name: '阿克苏市时代规划设计院有限责任公司', region: '新疆' },
  { name: '克拉玛依天地图有限公司', region: '新疆' },
]);

// 搜索相关响应式数据
const searchKey = ref(''); // 搜索关键词
const searchResult = ref([]); // 搜索结果
const scrollInterval = ref(null); // 滚动定时器

// 模糊搜索处理函数
const handleSearch = () => {
  if (!searchKey.value.trim()) {
    searchResult.value = [];
    return;
  }
  // 模糊匹配：不区分大小写，匹配单位名称或所属地区
  const key = searchKey.value.trim().toLowerCase();
  searchResult.value = allTeams.value.filter(
    item => 
      item.name.toLowerCase().includes(key) || 
      item.region.toLowerCase().includes(key)
  );
};

// 自动滚动功能实现
const startScroll = () => {
  // 清除已有定时器，避免重复
  if (scrollInterval.value) clearInterval(scrollInterval.value);
  
  const listEl = document.querySelector('.scroll-list');
  if (!listEl) return;

  let scrollTop = 0;
  const scrollSpeed = 1; // 滚动速度（像素/帧）
  const listHeight = listEl.scrollHeight; // 列表总高度
  const containerHeight = listEl.clientHeight; // 容器可视高度

  scrollInterval.value = setInterval(() => {
    scrollTop += scrollSpeed;
    // 滚动到顶部后重新开始（无缝滚动）
    if (scrollTop >= listHeight - containerHeight) {
      scrollTop = 0;
    }
    listEl.scrollTop = scrollTop;
  }, 30); // 滚动帧率（30ms/帧，约33帧/秒）
};

// 生命周期钩子：初始化滚动和销毁定时器
onMounted(() => {
  // 初始时搜索框为空，启动滚动
  if (!searchKey.value) {
    startScroll();
  }
});

onUnmounted(() => {
  // 组件卸载时清除定时器，避免内存泄漏
  if (scrollInterval.value) {
    clearInterval(scrollInterval.value);
  }
});

// 监听搜索关键词变化，控制滚动状态
watch(searchKey, (newVal) => {
  if (newVal) {
    // 有搜索关键词：停止滚动
    if (scrollInterval.value) {
      clearInterval(scrollInterval.value);
    }
  } else {
    // 无搜索关键词：启动滚动
    startScroll();
  }
});
</script>

<style scoped>
/* 页面容器 */
.team-search-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 标题样式（保留原有） */
.title {
  width: 100%;
  max-width: 1200px;
  height: 50px;
  margin: 40px auto;
  font-size: 36px;
  color: #333;
  line-height: 50px;
  text-align: center;
  position: relative;
}

.title-content {
  width: 100%;
  margin: 0 auto;
}

.title-content .title-span {
  font-family: PingFangSC, PingFang SC;
  font-weight: 600;
  margin: 0 50px;
}

.title-blue {
  color: #3F93DA;
}

/* 搜索框样式 */
.search-box-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px;
}

.search-input {
  height: 48px;
  font-size: 16px;
  border-radius: 24px;
  border: 1px solid #E5E7EB;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #3F93DA;
  box-shadow: 0 0 0 2px rgba(63, 147, 218, 0.1);
}

/* 队伍列表容器 */
.team-list-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 400px;
  overflow: hidden;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* 滚动列表样式 */
.scroll-list {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
}

/* 搜索结果样式 */
.search-result {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.result-header {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #F3F4F6;
}

/* 无结果提示样式 */
.no-result {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 队伍项样式 */
.team-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin-bottom: 8px;
  background: #F9FAFB;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.team-item:hover {
  background: #F3F7FA;
}

.team-name {
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
}

.team-region {
  font-size: 14px;
  color: #3F93DA;
  font-weight: 500;
  background: #EBF5FF;
  padding: 4px 12px;
  border-radius: 16px;
}

/* 滚动条样式优化 */
.scroll-list::-webkit-scrollbar,
.search-result::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scroll-list::-webkit-scrollbar-track,
.search-result::-webkit-scrollbar-track {
  background: #F3F4F6;
  border-radius: 3px;
}

.scroll-list::-webkit-scrollbar-thumb,
.search-result::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 3px;
}

.scroll-list::-webkit-scrollbar-thumb:hover,
.search-result::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}
</style>