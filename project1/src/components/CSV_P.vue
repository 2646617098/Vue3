<template>
  <div>
    <button class="btn btn-primary" @click="loadData">Load Data</button>
    <button class="btn btn-success" @click="saveData">Save Data</button>
    <table border="1">
      <tr v-for="row in data" :key="row.id">
        <td v-for="cell in row" :key="cell">{{ cell }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// 引入PapaParse库来解析CSV文件
import Papa from 'papaparse';

export default {
  data() {
    return {
      data: [], // 存储CSV数据
    };
  },
  methods: {
    loadData() {
      fetch('/data.csv')
        .then(response => response.text())
        .then(csvData => {
          this.data = Papa.parse(csvData, { header: true }).data;
        })
        .catch(error => console.error('Error loading the CSV file:', error));
    },
    saveData() {
      const csv = Papa.unparse(this.data);
      // 为了简单起见，这里使用prompt来模拟保存文件的过程
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'data.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
};
</script>

<style scoped>
table
{
  border-collapse: collapse;
  margin: 20px auto;
}
.btn:hover {
    background: #333; 
    }
</style>