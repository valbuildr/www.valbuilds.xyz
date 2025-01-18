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
  export let ariaLabel = "twitch solid";
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
    <g clip-path="url(#clip0_22_2)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.453 0V11.9313L14.7831 19.6007H11.3746L7.11322 23.8621V19.6007H2V4.26122L6.26087 0H22.453ZM20.7487 1.70452H7.11322V14.4877H10.9482V17.4703L13.9313 14.4877H17.3402L20.7487 11.0788V1.70452ZM18.192 4.68727V9.80031H16.4877V4.68727H18.192ZM13.5049 4.68727V9.80031H11.8006V4.68727H13.5049Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_22_2">
        <rect
          width="20.5217"
          height="24"
          fill="white"
          transform="translate(2)"
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
    <g clip-path="url(#clip0_22_2)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.453 0V11.9313L14.7831 19.6007H11.3746L7.11322 23.8621V19.6007H2V4.26122L6.26087 0H22.453ZM20.7487 1.70452H7.11322V14.4877H10.9482V17.4703L13.9313 14.4877H17.3402L20.7487 11.0788V1.70452ZM18.192 4.68727V9.80031H16.4877V4.68727H18.192ZM13.5049 4.68727V9.80031H11.8006V4.68727H13.5049Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_22_2">
        <rect
          width="20.5217"
          height="24"
          fill="white"
          transform="translate(2)"
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
  @prop export let ariaLabel = 'twitch solid';
  -->
