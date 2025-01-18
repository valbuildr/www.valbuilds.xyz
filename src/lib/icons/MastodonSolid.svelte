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
  export let ariaLabel = "mastodon solid";
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
    <g clip-path="url(#clip0_3_13)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.2245 18.2926C20.2316 17.9336 22.8499 16.0807 23.179 14.3878C23.6975 11.7208 23.6547 7.87958 23.6547 7.87958C23.6547 2.67325 20.2436 1.14719 20.2436 1.14719C18.5237 0.357269 15.5704 0.0250852 12.5021 0H12.4268C9.35849 0.0250852 6.4071 0.357269 4.68709 1.14719C4.68709 1.14719 1.27589 2.67325 1.27589 7.87958C1.27589 8.19521 1.27426 8.52719 1.27256 8.87279C1.26785 9.83259 1.26262 10.8974 1.29038 12.0089C1.41425 17.1004 2.22383 22.1184 6.9313 23.3644C9.10182 23.9389 10.9654 24.0591 12.4662 23.9766C15.1879 23.8257 16.7158 23.0053 16.7158 23.0053L16.6261 21.0305C16.6261 21.0305 14.6811 21.6438 12.4967 21.5691C10.3325 21.4949 8.04785 21.3357 7.69782 18.6786C7.6655 18.4452 7.64933 18.1957 7.64933 17.9336C7.64933 17.9336 9.77381 18.4528 12.4662 18.5762C14.1125 18.6517 15.6564 18.4797 17.2245 18.2926ZM19.6292 14.5875V8.28348C19.6292 6.99509 19.3011 5.97125 18.6423 5.21378C17.9627 4.45631 17.0728 4.06801 15.9683 4.06801C14.6901 4.06801 13.7223 4.55924 13.0825 5.54183L12.4602 6.58467L11.8381 5.54183C11.1982 4.55924 10.2304 4.06801 8.95232 4.06801C7.84767 4.06801 6.95779 4.45631 6.2783 5.21378C5.61936 5.97125 5.29131 6.99509 5.29131 8.28348V14.5875H7.78884V8.46877C7.78884 7.17896 8.33153 6.52429 9.41704 6.52429C10.6173 6.52429 11.2189 7.30089 11.2189 8.83652V12.1856H13.7017V8.83652C13.7017 7.30089 14.3032 6.52429 15.5034 6.52429C16.5889 6.52429 17.1316 7.17896 17.1316 8.46877V14.5875H19.6292Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_13">
        <rect
          width="22.3868"
          height="24"
          fill="white"
          transform="translate(1.2688)"
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
    <g clip-path="url(#clip0_3_13)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.2245 18.2926C20.2316 17.9336 22.8499 16.0807 23.179 14.3878C23.6975 11.7208 23.6547 7.87958 23.6547 7.87958C23.6547 2.67325 20.2436 1.14719 20.2436 1.14719C18.5237 0.357269 15.5704 0.0250852 12.5021 0H12.4268C9.35849 0.0250852 6.4071 0.357269 4.68709 1.14719C4.68709 1.14719 1.27589 2.67325 1.27589 7.87958C1.27589 8.19521 1.27426 8.52719 1.27256 8.87279C1.26785 9.83259 1.26262 10.8974 1.29038 12.0089C1.41425 17.1004 2.22383 22.1184 6.9313 23.3644C9.10182 23.9389 10.9654 24.0591 12.4662 23.9766C15.1879 23.8257 16.7158 23.0053 16.7158 23.0053L16.6261 21.0305C16.6261 21.0305 14.6811 21.6438 12.4967 21.5691C10.3325 21.4949 8.04785 21.3357 7.69782 18.6786C7.6655 18.4452 7.64933 18.1957 7.64933 17.9336C7.64933 17.9336 9.77381 18.4528 12.4662 18.5762C14.1125 18.6517 15.6564 18.4797 17.2245 18.2926ZM19.6292 14.5875V8.28348C19.6292 6.99509 19.3011 5.97125 18.6423 5.21378C17.9627 4.45631 17.0728 4.06801 15.9683 4.06801C14.6901 4.06801 13.7223 4.55924 13.0825 5.54183L12.4602 6.58467L11.8381 5.54183C11.1982 4.55924 10.2304 4.06801 8.95232 4.06801C7.84767 4.06801 6.95779 4.45631 6.2783 5.21378C5.61936 5.97125 5.29131 6.99509 5.29131 8.28348V14.5875H7.78884V8.46877C7.78884 7.17896 8.33153 6.52429 9.41704 6.52429C10.6173 6.52429 11.2189 7.30089 11.2189 8.83652V12.1856H13.7017V8.83652C13.7017 7.30089 14.3032 6.52429 15.5034 6.52429C16.5889 6.52429 17.1316 7.17896 17.1316 8.46877V14.5875H19.6292Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_13">
        <rect
          width="22.3868"
          height="24"
          fill="white"
          transform="translate(1.2688)"
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
  @prop export let ariaLabel = 'mastodon solid';
  -->
