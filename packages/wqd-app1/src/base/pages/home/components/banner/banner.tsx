import { Component, Vue } from 'vue-property-decorator'

import style from './banner.module.less'

const list = [
  { src: require('./images/banner2.jpg') },
  { src: require('./images/banner3.jpg') },
  { src: require('./images/banner4.jpg') },
]

@Component({})
export default class Banner extends Vue {
  private render() {
    return (
      <div class={style.box}>
        <div class={style.inner}>
          <a-carousel
            // ref='carousel'
            afterChange={this.onChange}
            autoplay={true}
            // autoplaySpeed={3000}
            pauseOnHover={false}>
            {list.map((item) => {
              return (
                <div class={style.item}>
                  <img src={item.src} class='full-w' />
                </div>
              )
            })}
          </a-carousel>
        </div>
      </div>
    )
  }
  private onChange(index: number) {
    // console.log(index)
  }
}
