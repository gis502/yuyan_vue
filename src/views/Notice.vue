<template>
  <div class="notice-page">
    <div class="notice-wrapper">
      <div class="notice-container">
        <div class="notice-header">
          “雨燕应急·重大灾害无人机应急合作机制”<br />
          成员招募公告
        </div>

        <div class="notice-content">
          <p class="notice-desc">
            “雨燕应急·重大灾害无人机应急合作机制”自2010年成立以来，以社会参与救灾理念为核心，组织社会力量无人机单位，在历次重大自然灾害防灾减灾救灾工作中发挥了重要的决策支撑作用。为进一步增强机制应急能力，现面向社会各单位招募机制成员。有关事项通知如下：
          </p>

          <div class="notice-item">
            <span class="item-bullet"></span>
            <div class="item-info">
              <div class="item-title">一、截止时间</div>
              <div class="item-text">2025年12月5日。</div>
            </div>
          </div>

          <div class="notice-item">
            <span class="item-bullet"></span>
            <div class="item-info">
              <div class="item-title">二、面向单位</div>
              <div class="item-text">各社会单位。</div>
            </div>
          </div>

          <div class="notice-item">
            <span class="item-bullet"></span>
            <div class="item-info">
              <div class="item-title">三、基本能力要求</div>
              <div class="item-text sub-list">
                <div class="sub-item">（一）具有较强的社会责任感。</div>
                <div class="sub-item">（二）有3名及以上持有效无人机飞行执照的专业人员。</div>
                <div class="sub-item">（三）具备应急监测、辅助救援或应急通信等一项或多项应急实战能力。</div>
                <div class="sub-item">（四）有参与过涉灾行业单位组织的训练、演练或实战应急任务经验。</div>
                <div class="sub-item">（五）拥有无人机应急工作相关制度与安全保障措施，能够为执行应急任务的人员、装备等安全负责。</div>
                <div class="sub-item">（六）自愿加入，并承诺接受国家减灾中心“重大灾害无人机应急合作机制”统一调度、管理和考核。</div>
              </div>
            </div>
          </div>

          <div class="notice-item">
            <span class="item-bullet"></span>
            <div class="item-info">
              <div class="item-title">四、提供材料清单</div>
              <div class="item-text sub-list">
                <div class="sub-item">（一）单位营业执照。</div>
                <div class="sub-item">（二）单位资质。</div>
                <div class="sub-item">（三）申请表（模板见附件）。</div>
                <div class="sub-item">（四）能力调研表（模板见附件）。</div>
                <div class="sub-item">（五）参与过涉灾单位组织的训练演练等任务证明。</div>
              </div>
            </div>
          </div>

          <div class="notice-item">
            <span class="item-bullet"></span>
            <div class="item-info">
              <div class="item-title">五、联系方式</div>
              <div class="item-text contact-list">
                <div class="contact-item">联系人：李苓苓</div>
                <div class="contact-item">联系邮箱：lilingling@ndrcc.org.cn</div>
                <div class="contact-item">联系电话：010-52811195</div>
              </div>
            </div>
          </div>

          <div class="notice-footer">
            应急管理部国家减灾中心<br />
            2025年11月5日
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script setup>
import Foot from "@/components/foot.vue";
</script>

<style scoped>
.notice-page {
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: "Microsoft Yahei", sans-serif;
}

.page-header {
  background-color: #165dff;
  color: #fff;
  padding: 16px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.notice-wrapper {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
}

.notice-container {
  width: 100%;
  max-width: 1000px; /* 页面版心宽度，可根据需要调整 */
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 4px; /* 轻微圆角提升美观度 */
  margin: 0 auto;
  padding: 0 0 20px 0;
}

.notice-header {
  background-color: #e6f3ff;
  text-align: center;
  padding: 25px 20px;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.8;
  margin-bottom: 10px;
}

.notice-content {
  border-top: none;
  padding: 0 40px;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
}

.notice-desc {
  margin: 0 0 20px 0;
  text-indent: 2em;
}

/* 公告条目 */
.notice-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.item-bullet {
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #ff0000;
  margin-right: 15px;
  margin-top: 6px;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
}

.item-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.item-text {
  color: #444;
}

/* 二级列表样式 */
.sub-list {
  margin-left: 15px;
}

.sub-item {
  margin-bottom: 8px;
  text-indent: 0;
}

/* 联系方式列表样式 */
.contact-list {
  margin-left: 15px;
}

.contact-item {
  margin-bottom: 8px;
}

/* 落款样式 */
.notice-footer {
  margin-top: 40px;
  text-align: right;
  font-size: 15px;
  color: #555;
  padding-right: 20px;
}

/* 页面底部样式 */
.page-footer {
  margin-top: 60px;
  background-color: #f0f2f5;
  color: #666;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .notice-wrapper {
    padding: 20px 10px;
  }

  .notice-container {
    max-width: 100%;
  }

  .notice-header {
    font-size: 18px;
    padding: 20px 15px;
  }

  .notice-content {
    font-size: 14px;
    padding: 0 20px;
  }

  .notice-footer {
    font-size: 14px;
    margin-top: 30px;
    padding-right: 10px;
  }

  .page-header {
    font-size: 16px;
    padding: 12px 0;
  }
}
</style>
