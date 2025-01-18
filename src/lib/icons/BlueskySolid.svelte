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
  export let ariaLabel = "bluesky solid";
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
    <g clip-path="url(#clip0_3_9)">
      <g clip-path="url(#clip1_3_9)">
        <path
          d="M7.95666 22.1073C6.46218 22.2749 5.40823 21.4592 4.36006 20.5493C2.86186 19.2488 1.93861 17.3114 3.18787 15.7937C4.39794 14.3236 6.80533 13.9638 6.80533 13.9638C6.80533 13.9638 3.86977 14.3496 2.04226 12.7234C1.11028 11.8942 0.58753 10.8097 0.457939 9.55515C0.29124 7.94134 0.0193753 4.63936 0.000621266 3.4203C-0.0205796 2.04214 0.501846 1.12085 1.4122 1.01946C3.59055 0.776844 6.14948 2.82642 8.63617 5.85725C11.0531 8.80304 12 10.8868 12 10.8868C12 10.8868 12.9469 8.80304 15.3638 5.85725C17.8505 2.82642 20.4095 0.776844 22.5878 1.01946C23.4982 1.12085 24.0206 2.04214 23.9994 3.4203C23.9806 4.63936 23.7088 7.94134 23.5421 9.55515C23.4125 10.8097 22.8897 11.8942 21.9577 12.7234C20.1302 14.3496 17.1947 13.9638 17.1947 13.9638C17.1947 13.9638 19.6021 14.3236 20.8121 15.7937C22.0614 17.3114 21.1381 19.2488 19.6399 20.5493C18.5918 21.4592 17.5378 22.2749 16.0433 22.1073C13.325 21.8025 12 16.7367 12 16.7367C12 16.7367 10.675 21.8025 7.95666 22.1073Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_9">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_3_9">
        <rect
          width="24"
          height="21.1293"
          fill="white"
          transform="translate(0 1)"
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
    <g clip-path="url(#clip0_3_9)">
      <g clip-path="url(#clip1_3_9)">
        <path
          d="M7.95666 22.1073C6.46218 22.2749 5.40823 21.4592 4.36006 20.5493C2.86186 19.2488 1.93861 17.3114 3.18787 15.7937C4.39794 14.3236 6.80533 13.9638 6.80533 13.9638C6.80533 13.9638 3.86977 14.3496 2.04226 12.7234C1.11028 11.8942 0.58753 10.8097 0.457939 9.55515C0.29124 7.94134 0.0193753 4.63936 0.000621266 3.4203C-0.0205796 2.04214 0.501846 1.12085 1.4122 1.01946C3.59055 0.776844 6.14948 2.82642 8.63617 5.85725C11.0531 8.80304 12 10.8868 12 10.8868C12 10.8868 12.9469 8.80304 15.3638 5.85725C17.8505 2.82642 20.4095 0.776844 22.5878 1.01946C23.4982 1.12085 24.0206 2.04214 23.9994 3.4203C23.9806 4.63936 23.7088 7.94134 23.5421 9.55515C23.4125 10.8097 22.8897 11.8942 21.9577 12.7234C20.1302 14.3496 17.1947 13.9638 17.1947 13.9638C17.1947 13.9638 19.6021 14.3236 20.8121 15.7937C22.0614 17.3114 21.1381 19.2488 19.6399 20.5493C18.5918 21.4592 17.5378 22.2749 16.0433 22.1073C13.325 21.8025 12 16.7367 12 16.7367C12 16.7367 10.675 21.8025 7.95666 22.1073Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_9">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_3_9">
        <rect
          width="24"
          height="21.1293"
          fill="white"
          transform="translate(0 1)"
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
  @prop export let ariaLabel = 'bluesky solid';
  -->
