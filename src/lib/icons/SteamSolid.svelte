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
  export let ariaLabel = "steam solid";
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
    <g clip-path="url(#clip0_11_2)">
      <g clip-path="url(#clip1_11_2)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.518426 15.5C2.01629 20.4204 6.59012 24 12.0001 24C18.6274 24 24.0001 18.6273 24.0001 12C24.0001 5.3726 18.6274 0 12.0001 0C5.64054 0 0.436866 4.94719 0.0258789 11.2027C0.0275787 11.2056 0.0292762 11.2085 0.0309715 11.2113C0.0309914 11.211 0.0310076 11.2107 0.0310199 11.2105L0.0310486 11.21L6.47901 13.8644C6.65443 13.749 6.84138 13.6491 7.0409 13.5677C7.4935 13.3813 7.97082 13.2979 8.4465 13.3195L11.3829 9.05389C11.3819 9.03493 11.3819 9.01474 11.3819 8.99456C11.3819 6.47713 13.4265 4.4292 15.9399 4.4292C18.4542 4.4292 20.4978 6.47713 20.4978 8.99456C20.4978 11.5118 18.4542 13.5616 15.9399 13.5616C15.9059 13.5616 15.8708 13.5605 15.8369 13.5595L11.6353 16.5621C11.6477 17.0256 11.5622 17.4901 11.3788 17.9331C10.6743 19.6275 8.72142 20.434 7.02772 19.7264C5.99252 19.2948 5.29086 18.3976 5.06198 17.3748L0.518426 15.5ZM7.31984 19.0239C8.62758 19.5688 10.1321 18.9477 10.6774 17.6385C10.9411 17.006 10.9421 16.3056 10.6815 15.6711C10.4209 15.0366 9.92914 14.5401 9.29536 14.2764C8.66672 14.0148 7.9939 14.023 7.40203 14.2476L8.93587 14.8831C9.89979 15.2848 10.356 16.3931 9.95386 17.3583C9.55297 18.3224 8.4465 18.7798 7.48207 18.378L5.99829 17.7631C6.26106 18.3121 6.71654 18.7725 7.31984 19.0239ZM12.9033 8.99456C12.9033 10.6723 14.266 12.0371 15.9399 12.0371C17.6147 12.0371 18.9775 10.6723 18.9775 8.99456C18.9775 7.31816 17.6147 5.95294 15.9399 5.95294C14.266 5.95294 12.9033 7.31816 12.9033 8.99456ZM15.945 6.70415C14.6863 6.70415 13.6645 7.72781 13.6645 8.98992C13.6645 10.2521 14.6863 11.2749 15.945 11.2749C17.2047 11.2749 18.2265 10.2521 18.2265 8.98992C18.2265 7.72781 17.2047 6.70415 15.945 6.70415Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_11_2">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_11_2">
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
    <g clip-path="url(#clip0_11_2)">
      <g clip-path="url(#clip1_11_2)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.518426 15.5C2.01629 20.4204 6.59012 24 12.0001 24C18.6274 24 24.0001 18.6273 24.0001 12C24.0001 5.3726 18.6274 0 12.0001 0C5.64054 0 0.436866 4.94719 0.0258789 11.2027C0.0275787 11.2056 0.0292762 11.2085 0.0309715 11.2113C0.0309914 11.211 0.0310076 11.2107 0.0310199 11.2105L0.0310486 11.21L6.47901 13.8644C6.65443 13.749 6.84138 13.6491 7.0409 13.5677C7.4935 13.3813 7.97082 13.2979 8.4465 13.3195L11.3829 9.05389C11.3819 9.03493 11.3819 9.01474 11.3819 8.99456C11.3819 6.47713 13.4265 4.4292 15.9399 4.4292C18.4542 4.4292 20.4978 6.47713 20.4978 8.99456C20.4978 11.5118 18.4542 13.5616 15.9399 13.5616C15.9059 13.5616 15.8708 13.5605 15.8369 13.5595L11.6353 16.5621C11.6477 17.0256 11.5622 17.4901 11.3788 17.9331C10.6743 19.6275 8.72142 20.434 7.02772 19.7264C5.99252 19.2948 5.29086 18.3976 5.06198 17.3748L0.518426 15.5ZM7.31984 19.0239C8.62758 19.5688 10.1321 18.9477 10.6774 17.6385C10.9411 17.006 10.9421 16.3056 10.6815 15.6711C10.4209 15.0366 9.92914 14.5401 9.29536 14.2764C8.66672 14.0148 7.9939 14.023 7.40203 14.2476L8.93587 14.8831C9.89979 15.2848 10.356 16.3931 9.95386 17.3583C9.55297 18.3224 8.4465 18.7798 7.48207 18.378L5.99829 17.7631C6.26106 18.3121 6.71654 18.7725 7.31984 19.0239ZM12.9033 8.99456C12.9033 10.6723 14.266 12.0371 15.9399 12.0371C17.6147 12.0371 18.9775 10.6723 18.9775 8.99456C18.9775 7.31816 17.6147 5.95294 15.9399 5.95294C14.266 5.95294 12.9033 7.31816 12.9033 8.99456ZM15.945 6.70415C14.6863 6.70415 13.6645 7.72781 13.6645 8.98992C13.6645 10.2521 14.6863 11.2749 15.945 11.2749C17.2047 11.2749 18.2265 10.2521 18.2265 8.98992C18.2265 7.72781 17.2047 6.70415 15.945 6.70415Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_11_2">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_11_2">
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
  @prop export let ariaLabel = 'steam solid';
  -->
