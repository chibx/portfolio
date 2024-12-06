import { toastKey, type Toast } from "~/utils/utils";

    export function useObserver(
        el: MaybeRef<HTMLElement[] | HTMLElement | undefined | null>,
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit
      ) {
        let observer: IntersectionObserver | null;
        onMounted(() => {
          const els = unref(el);
          const targets = Array.isArray(els) ? els : [els];
          observer = new IntersectionObserver(callback, options);
          targets.forEach((target) => {
            if (!target) return;
            observer?.observe(target);
          });
        });
        onBeforeUnmount(() => observer?.disconnect());
        return {
          add: (el: Element) => observer?.observe(el),
          remove: (el: Element) => observer?.unobserve(el),
          stop: () => {
            observer?.disconnect();
            observer = null;
          },
        };
      }


export function useToast(){
    const toastsArr = inject(toastKey);
    const toastId = inject<Ref<number>>('toastId');
    if(!toastsArr || !toastId){
        throw new Error('Toast is not provided');
    }
    return {
      add(data: Omit<Toast, 'id'>){
        const curID = toastId.value++
         toastsArr.push({
            id: curID,
            ...data
         })
         if(import.meta.client){
          // I could have tracked the timer by mapping it to the ID of the toast so i could dispose of it when the toast is removed,
          // but this is simpler as regardless of the timeouts, the method is kinda indempotent
           setTimeout(() => {
             this.remove(curID)    
          }, data.duration || 3000)
        }
         return 
      },
      remove(id: number){
        toastsArr.splice(toastsArr.findIndex(t => t.id === id), 1);
      }
    }
}