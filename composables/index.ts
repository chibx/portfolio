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