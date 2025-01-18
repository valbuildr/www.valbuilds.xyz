<script lang="ts">
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };

  interface BaseProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
  }

  interface CtxType extends BaseProps {}
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

  const ctx: CtxType = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  export let size: Props["size"] = ctx.size || "md";
  export let role: Props["role"] = ctx.role || "img";
  export let color: Props["color"] = ctx.color || "currentColor";
  export let withEvents: Props["withEvents"] = ctx.withEvents || false;
  export let title: TitleType = {};
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  export let ariaLabel = "pronouns.page solid";
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...$$restProps}
    class={twMerge("shrink-0", sizes[size ?? "md"], $$props.class)}
    {role}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <g clip-path="url(#clip0_13_2)">
      <path
        d="M14.6407 6.43753C14.6905 6.34892 14.6484 6.27692 14.5469 6.27692L12.7672 6.27802C12.6656 6.27802 12.5401 6.34965 12.4888 6.43716L8.12816 13.8133C7.51967 14.8157 6.67044 15.0373 5.85444 14.9383C4.45358 14.7685 3.70035 13.7402 3.70035 12.3707C3.70035 10.9953 4.81949 9.87618 6.19487 9.87618H8.9641C9.06564 9.87618 9.19007 9.80418 9.24029 9.71593L10.2383 7.97316C10.2889 7.88492 10.2468 7.81292 10.1453 7.81292H6.1945C3.68152 7.81292 1.63672 9.85735 1.63672 12.3707C1.63672 13.5851 2.11118 14.8948 2.97407 15.7506C3.82441 16.594 4.96053 16.903 6.17309 16.9281C6.85764 16.9359 8.73776 16.9204 9.61912 15.3522C10.6061 13.5958 14.6407 6.43753 14.6407 6.43753ZM21.1177 9.02547C20.2674 8.18215 19.1312 7.8731 17.9187 7.84799C17.2341 7.84024 15.354 7.85575 14.4727 9.42387C13.4861 11.1796 9.45112 18.3378 9.45112 18.3378C9.40127 18.4265 9.44337 18.4985 9.5449 18.4985L11.3246 18.4973C11.4261 18.4973 11.5517 18.4257 11.603 18.3382L15.9636 10.9621C16.5721 9.95962 17.4213 9.73809 18.2373 9.83704C19.6382 10.0069 20.3914 11.0352 20.3914 12.4047C20.3914 13.7801 19.2723 14.8992 17.8969 14.8992H15.1277C15.0261 14.8992 14.9017 14.9712 14.8515 15.0594L13.8535 16.8022C13.8029 16.8905 13.845 16.9625 13.9465 16.9625H17.8973C20.4103 16.9625 22.4551 14.918 22.4551 12.4047C22.4551 11.191 21.9806 9.88135 21.1177 9.02547Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_13_2">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...$$restProps}
    class={twMerge("shrink-0", sizes[size ?? "md"], $$props.class)}
    {role}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <g clip-path="url(#clip0_13_2)">
      <path
        d="M14.6407 6.43753C14.6905 6.34892 14.6484 6.27692 14.5469 6.27692L12.7672 6.27802C12.6656 6.27802 12.5401 6.34965 12.4888 6.43716L8.12816 13.8133C7.51967 14.8157 6.67044 15.0373 5.85444 14.9383C4.45358 14.7685 3.70035 13.7402 3.70035 12.3707C3.70035 10.9953 4.81949 9.87618 6.19487 9.87618H8.9641C9.06564 9.87618 9.19007 9.80418 9.24029 9.71593L10.2383 7.97316C10.2889 7.88492 10.2468 7.81292 10.1453 7.81292H6.1945C3.68152 7.81292 1.63672 9.85735 1.63672 12.3707C1.63672 13.5851 2.11118 14.8948 2.97407 15.7506C3.82441 16.594 4.96053 16.903 6.17309 16.9281C6.85764 16.9359 8.73776 16.9204 9.61912 15.3522C10.6061 13.5958 14.6407 6.43753 14.6407 6.43753ZM21.1177 9.02547C20.2674 8.18215 19.1312 7.8731 17.9187 7.84799C17.2341 7.84024 15.354 7.85575 14.4727 9.42387C13.4861 11.1796 9.45112 18.3378 9.45112 18.3378C9.40127 18.4265 9.44337 18.4985 9.5449 18.4985L11.3246 18.4973C11.4261 18.4973 11.5517 18.4257 11.603 18.3382L15.9636 10.9621C16.5721 9.95962 17.4213 9.73809 18.2373 9.83704C19.6382 10.0069 20.3914 11.0352 20.3914 12.4047C20.3914 13.7801 19.2723 14.8992 17.8969 14.8992H15.1277C15.0261 14.8992 14.9017 14.9712 14.8515 15.0594L13.8535 16.8022C13.8029 16.8905 13.845 16.9625 13.9465 16.9625H17.8973C20.4103 16.9625 22.4551 14.918 22.4551 12.4047C22.4551 11.191 21.9806 9.88135 21.1177 9.02547Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_13_2">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
{/if}

<!--
  @component
  [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
  ## Props
  @prop export let size: Props['size'] = ctx.size || 'md';
  @prop export let role: Props['role'] = ctx.role || 'img';
  @prop export let color: Props['color'] = ctx.color || 'currentColor';
  @prop export let withEvents: Props['withEvents'] = ctx.withEvents || false;
  @prop export let title: TitleType = {};
  @prop export let desc: DescType = {};
  @prop export let ariaLabel = 'pronouns.page solid';
  -->
