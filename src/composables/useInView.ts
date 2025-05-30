import { ref, onMounted, onUnmounted, watch } from 'vue';

export function useInView(options: IntersectionObserverInit = {}) {
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  let observer: IntersectionObserver | null = null;

  const cleanup = () => {
    if (observer && target.value instanceof HTMLElement) {
      observer.unobserve(target.value);
    }
  };

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting;
    }, options);

    watch(
      target,
      (el) => {
        cleanup();
        if (el instanceof HTMLElement) {
          observer!.observe(el);
        }
      },
      { immediate: true }
    );
  });

  onUnmounted(() => {
    cleanup();
    observer?.disconnect();
  });

  return {
    target,
    isVisible,
  };
}
