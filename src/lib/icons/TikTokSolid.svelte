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
  export let ariaLabel = "tiktok solid";
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
    <g clip-path="url(#clip0_3_5)">
      <g clip-path="url(#clip1_3_5)">
        <path
          d="M12.1531 -0.0538607V16.353C12.1463 18.2657 10.5933 19.8146 8.67807 19.8146C7.54948 19.8146 6.54673 19.2767 5.91173 18.4438C5.77004 18.3723 5.63411 18.2915 5.50436 18.202C5.63415 18.2915 5.77032 18.3723 5.91207 18.4438C5.45116 17.8398 5.20211 17.101 5.20322 16.3412C5.20322 14.4233 6.75892 12.8681 8.67824 12.8681C9.03593 12.868 9.39141 12.9228 9.73229 13.0309V8.83133C9.33393 8.77676 8.93198 8.75363 8.53011 8.76212V12.0309C8.53019 12.0309 8.53005 12.0308 8.53011 12.0309V8.76212C4.40842 8.84723 1.09326 12.2133 1.09326 16.3531C1.09326 18.4196 1.91881 20.2929 3.25851 21.6618C3.25848 21.6618 3.25854 21.6618 3.25851 21.6618C3.25868 21.6618 3.25874 21.6622 3.2592 21.6622C4.63863 23.0716 6.56208 23.946 8.69015 23.946C12.8858 23.946 16.2874 20.5467 16.2874 16.353V7.97055C17.9015 9.12377 19.8789 9.80232 22.0146 9.80232V5.69454C21.6104 5.69463 21.2072 5.65261 20.8117 5.56886C19.6196 5.31507 18.5644 4.69229 17.7709 3.82624C16.9459 2.92544 16.4044 1.76137 16.2872 0.474392V-0.0539551H15.1473L12.1531 -0.0538607Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_5">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_3_5">
        <rect
          width="20.9213"
          height="24"
          fill="white"
          transform="translate(1.09326 -0.0539551)"
        />
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
    <g clip-path="url(#clip0_3_5)">
      <g clip-path="url(#clip1_3_5)">
        <path
          d="M12.1531 -0.0538607V16.353C12.1463 18.2657 10.5933 19.8146 8.67807 19.8146C7.54948 19.8146 6.54673 19.2767 5.91173 18.4438C5.77004 18.3723 5.63411 18.2915 5.50436 18.202C5.63415 18.2915 5.77032 18.3723 5.91207 18.4438C5.45116 17.8398 5.20211 17.101 5.20322 16.3412C5.20322 14.4233 6.75892 12.8681 8.67824 12.8681C9.03593 12.868 9.39141 12.9228 9.73229 13.0309V8.83133C9.33393 8.77676 8.93198 8.75363 8.53011 8.76212V12.0309C8.53019 12.0309 8.53005 12.0308 8.53011 12.0309V8.76212C4.40842 8.84723 1.09326 12.2133 1.09326 16.3531C1.09326 18.4196 1.91881 20.2929 3.25851 21.6618C3.25848 21.6618 3.25854 21.6618 3.25851 21.6618C3.25868 21.6618 3.25874 21.6622 3.2592 21.6622C4.63863 23.0716 6.56208 23.946 8.69015 23.946C12.8858 23.946 16.2874 20.5467 16.2874 16.353V7.97055C17.9015 9.12377 19.8789 9.80232 22.0146 9.80232V5.69454C21.6104 5.69463 21.2072 5.65261 20.8117 5.56886C19.6196 5.31507 18.5644 4.69229 17.7709 3.82624C16.9459 2.92544 16.4044 1.76137 16.2872 0.474392V-0.0539551H15.1473L12.1531 -0.0538607Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_5">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_3_5">
        <rect
          width="20.9213"
          height="24"
          fill="white"
          transform="translate(1.09326 -0.0539551)"
        />
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
  @prop export let ariaLabel = 'tiktok solid';
  -->
