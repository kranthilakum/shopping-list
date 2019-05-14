import "./styles.css";

new Vue({
  el: "#shopping-list",
  data: {
    header: "Shopping List",
    newItem: "",
    items: [
      { label: "2 balloon packs 🎈", purchased: false, priority: 3 },
      { label: "2 🥛 milk cartons", purchased: true, priority: 5 },
      { label: "4 ☕️ packs", purchased: false, priority: 2 },
      { label: "6 eggs 🥚", purchased: true, priority: 5 },
      { label: "2 🍷 bottles", purchased: false, priority: 1 }
    ]
  },
  methods: {
    saveItem: function() {
      this.items.push({
        label: this.newItem,
        purchased: false
      });
      this.newItem = "";
    },
    prioritize: function() {
      this.items.sort(function(a, b) {
        return a.priority - b.priority;
      });
    },
    togglePurchased: function(item) {
      item.purchased = !item.purchased;
    }
  },
  computed: {
    reverseItems() {
      return this.items.slice(0).reverse();
    }
  }
});
