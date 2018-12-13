import { mapGetters, mapActions} from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName',
      'setSettingVisible'
    ]),
    hideTitleAndMenu() {
     this.setMenuVisible(false)
     this.setSettingVisible(-1)
     // this.setFontFamilyVisible(false)
   },
  }
}
