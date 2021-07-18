import { defineComponent, ref, reactive } from '@vue/composition-api'
const opitons = [
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
]
export default defineComponent({
  setup() {
    // const value = ref('')
    const map = reactive({
      sel: '',
    })
    const handleChange = (value: string) => {
      map.sel = value
    }
    return () => {
      return (
        <div>
          <p>
            <el-select
              placeholder='请选择'
              value={map.sel}
              onChange={handleChange}>
              {opitons.map(({ value, label }) => {
                return (
                  <el-option
                    key={value}
                    label={label}
                    value={value}></el-option>
                )
              })}
            </el-select>
          </p>
          <div>324234242</div>
        </div>
      )
    }
  },
})
