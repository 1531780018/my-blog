declare module "*.vue" {
  import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider"
  declare global {
    interface Window { $message: MessageApiInjection }
    interface Window { $dialog: any }
  }
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module '@packy-tang/vue-tinymce'

