<template>
  <div class="tabview">
    <div class="tabview__nav-container">
      <div ref="content" class="tabview__nav-content">
        <ul ref="nav" class="tabview__nav" role="tablist">
          <li
            v-for="(tab, i) of tabs"
            :key="getKey(tab, i)"
            :class="getTabHeaderClass(tab, i)"
            role="presentation"
            :data-index="i"
          >
            <a
              :id="getTabHeaderActionId(i)"
              class="tabview__nav-link tabview__header-action"
              :tabindex="!isTabActive(i) ? -1 : tabindex"
              role="tab"
              :aria-selected="isTabActive(i)"
              :aria-controls="getTabContentId(i)"
              @click="onTabClick($event, tab, i)"
            >
              <span
                v-if="tab.props && tab.props.header"
                class="tabview__title"
                >{{ tab.props.header }}</span
              >
              <component
                v-if="tab.children && tab.children.header"
                :is="tab.children.header"
              ></component>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabview__panels">
      <template v-for="(tab, i) of tabs" :key="getKey(tab, i)">
        <div
          v-if="lazy ? isTabActive(i) : true"
          v-show="lazy ? true : isTabActive(i)"
          class="tabview__panel"
          role="tabpanel"
          :aria-labelledby="getTabHeaderActionId(i)"
        >
          <component :is="tab"></component>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabView",
  emits: ["update:activeIndex", "tab-change", "tab-click"],
  props: {
    activeIndex: {
      type: Number,
      default: 0,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      id: this.$attrs.id,
      d_activeIndex: this.activeIndex,
    };
  },
  watch: {
    "$attrs.id": function (newValue) {
      this.id = newValue;
    },
    activeIndex(newValue) {
      this.d_activeIndex = newValue;
    },
  },
  methods: {
    isTabPanel(child) {
      return child.type.name === "TabPanel";
    },
    isTabActive(index) {
      return this.d_activeIndex === index;
    },
    getTabProp(tab, name) {
      return tab.props ? tab.props[name] : undefined;
    },
    getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getTabHeaderActionId(index) {
      return `${this.id}_${index}_header_action`;
    },
    getTabContentId(index) {
      return `${this.id}_${index}_content`;
    },
    onTabClick(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      this.$emit("tab-click", { originalEvent: event, index });
    },
    changeActiveIndex(event, tab, index) {
      if (this.d_activeIndex !== index) {
        this.d_activeIndex = index;
        this.$emit("update:activeIndex", index);
        this.$emit("tab-change", { originalEvent: event, index });
      }
    },
    getTabHeaderClass(tab, i) {
      return [
        "tabview__header",
        this.getTabProp(tab, "headerClass"),
        {
          "p-highlight": this.d_activeIndex === i,
        },
      ];
    },
  },
  computed: {
    tabs() {
      return this.$slots.default().reduce((tabs, child) => {
        if (this.isTabPanel(child)) {
          tabs.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach((nestedChild) => {
            if (this.isTabPanel(nestedChild)) {
              tabs.push(nestedChild);
            }
          });
        }
        return tabs;
      }, []);
    },
  },
};
</script>

<style lang="scss"></style>
